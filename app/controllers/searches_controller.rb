class SearchesController < ApplicationController
  def create
    search = Search.new(search_params)
    client= Instagram.client(:access_token => search.access_token)
    from = DateTime.parse(params['search']['from'])
    to = DateTime.parse(params['search']['to'])
    hashtag = params['search']['hashtag']
    resultsHash = search.generate_results(search, client, from, to, hashtag)
    search.query = JSON.generate(resultsHash.keys)
    render json: search
end

  def search_params
    params.require(:search).permit(:hashtag, :from, :to, :query)
  end
end
