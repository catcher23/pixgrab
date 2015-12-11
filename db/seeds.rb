ActiveRecord::Base.transaction do


User.create!(
 {
  username: 'Guest',
  password: 'password',
}
)
end
