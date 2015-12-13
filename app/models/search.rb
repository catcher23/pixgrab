class Search < ActiveRecord::Base
  validates :hashtag, :from, :to, presence: true
  belongs_to :user

  def access_token
    "2290945337.1677ed0.0717954f1bb848d8b71957373c170bd5"
  end

  def valid_image(j, picHash, pic_creation)
    pic_creation.between?(from, to) &&
    j.tags.include?(hashtag) &&
    picHash[j.id] == 0
  end

  def check(searches)
    searches.each do |search|
      if search.query == nil
        Search.delete(Search.find(search.id))
      end
    end
  end

  def generate_results(search, client, from, to, hashtag)
    picHash, userHash, objectHash = Hash.new(0), Hash.new(0), Hash.new(0);
    max_id = client.tag_recent_media(hashtag, :count => 33).pagination.next_max_id
    while picHash.length < 20
    catch :limit do
      client.tag_recent_media(hashtag, :count=> 33, :max_id => max_id).each do |i|
        user_id = i['user']['id']
        if userHash[user_id] == 0
          userHash[user_id] += 1
          client.user_recent_media(user_id, :max_timestamp => to, :min_timestamp => from).each do |j|
            pic_creation = DateTime.strptime(j.created_time, '%s')
            if self.valid_image(j, picHash, pic_creation)
              image = j['images']['low_resolution']['url']
              object = {image: image, created_time: pic_creation, link: j.link}
              picHash[j.id] += 1
              objectHash[object] += 1
              throw :limit unless picHash.length < 20
            end
          end
        end
        max_id = client.tag_recent_media(hashtag, :count => 33, :max_id => max_id).pagination.next_max_id
        p picHash.length
      end
      end
    end
    objectHash
  end
end
