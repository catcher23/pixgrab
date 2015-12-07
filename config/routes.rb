Rails.application.routes.draw do
  root 'static_pages#root'
  get 'users/auth/instagram/callback', to: 'searches#create'
  resource :searches, only: [:new, :create]
  get '/auth/:provider/callback', to: 'searches#create'
end
