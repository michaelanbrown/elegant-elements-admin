Rails.application.routes.draw do
  resources :products
  resources :categories
  resources :users, only: [:index, :show, :create]

  post "/login", to: "session#create"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
