class SearchesController < ApplicationController
  def create
    search = Search.new(search_params)
    if search.save
      client= Instagram.client(:access_token => search.access_token)
      from = DateTime.parse(params['search']['from'])
      to = DateTime.parse(params['search']['to'])
      hashtag = params['search']['hashtag']
      resultsHash = search.generate_results(search, client, from, to, hashtag)
      search.query = JSON.generate(resultsHash.keys)
      search.save
      search.check(User.find(search.user_id).searches)
      all_searches = User.find(search.user_id).searches

      render json: {search: search, all_searches: all_searches}
    else
      flash[:errors] ||= []
      flash[:errors] << "Please enter all fields"
      redirect_to root_url
    end
end

  def destroy
      user = User.find(Search.find(params['search_id']).user_id)
      Search.delete(Search.find(params['search_id']))
      all_searches = user.searches
      render json: {search: nil, all_searches: all_searches}
  end

  def search_params
    params.require(:search).permit(:hashtag, :from, :to, :query, :user_id)
  end
end
