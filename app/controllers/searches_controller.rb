class SearchesController < ApplicationController
  def create
    search = Search.new(search_params)
    query = 'https://api.instagram.com/v1/tags/'+params['search']['hashtag']+'/media/recent?access_token=2290945337.1677ed0.0717954f1bb848d8b71957373c170bd5'
    response = HTTParty.get(query)
      json = JSON.parse(response.body)
      users = json['data']
      arr = []
      users.each do |user|
        arr << user['images']['low_resolution']['url']
      end
      
      arr = JSON.generate(arr)
      search.query = arr;
    if search.save
      render json: search
    end
  end

  def search_params
    params.require(:search).permit(:hashtag, :from, :to, :query)
  end
end
