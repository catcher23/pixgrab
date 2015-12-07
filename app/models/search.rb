class Search < ActiveRecord::Base
  validates :hashtag, presence: true
end
