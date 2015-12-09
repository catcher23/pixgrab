class SearchesController < ApplicationController
  def create
    picHash = Hash.new(0);
    userHash = Hash.new(0);
    search = Search.new(search_params)
      client= Instagram.client(:access_token => "2290945337.1677ed0.0717954f1bb848d8b71957373c170bd5")

        from = DateTime.parse(params['search']['from'])
        to = DateTime.parse(params['search']['to'])
        # max_id = client.tag_recent_media(params['search']['hashtag']).pagination.next_max_id
        # arr[0]['user']['id']
        hashtag = params['search']['hashtag']
        max_id = client.tag_recent_media(hashtag, :count => 33, :max_id => max_id).pagination.next_max_id
        while picHash.length < 5
        client.tag_recent_media(params['search']['hashtag'], :count=> 33, :max_id => max_id).each do |i|
          user_id = i['user']['id']
          if userHash[user_id] == 0
            userHash[user_id] += 1
            client.user_recent_media(user_id).each do |j|

              pic_creation = DateTime.strptime(j.created_time, '%s')
              if !pic_creation.between?(from, to) || !j.tags.include?()

              image = j['images']['low_resolution']['url']

              object = {image: image, created_time: pic_creation, link: j.link}
              if pic_creation.between?(from, to) && picHash[object] == 0
                  picHash[object] += 1
                  break if picHash.length > 19
              end
            end
          end
        end
        max_id = client.tag_recent_media(params['search']['hashtag'], :max_id => max_id).pagination.next_max_id
          p max_id
          p picHash.length
        end
        picHash = picHash.keys.take(20)
        picHash = JSON.generate(picHash)
        search.query = picHash;

        render json: search
  end

  def search_params
    params.require(:search).permit(:hashtag, :from, :to, :query)
  end
end
