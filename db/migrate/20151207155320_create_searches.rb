class CreateSearches < ActiveRecord::Migration
  def change
    create_table :searches do |t|
      t.string :hashtag,     null: false
      t.datetime :from
      t.datetime :to
      t.string :query

      t.timestamps null: false
    end
  end
end
