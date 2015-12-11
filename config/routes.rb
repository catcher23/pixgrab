Rails.application.routes.draw do
  root 'static_pages#root'
  get '/auth/:provider/callback', to: 'searches#create'
  resource :searches, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create, :show]
end
