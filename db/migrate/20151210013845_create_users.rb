class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string   "username"
      t.string   "password_digest"
      t.string   "session_token"
    end
  end
end
