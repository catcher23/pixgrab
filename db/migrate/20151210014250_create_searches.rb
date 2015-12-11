class CreateSearches < ActiveRecord::Migration
  def change
  create_table :searches do |t|
   t.string   "hashtag",    null: false
   t.datetime "from",       null: false
   t.datetime "to",         null: false
   t.string   "query"
   t.integer "user_id"
   t.datetime "created_at", null: false
   t.datetime "updated_at", null: false
    end
  end
end
