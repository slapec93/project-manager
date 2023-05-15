Rails.application.routes.draw do
  root to: 'session#new'
  post '/login' => 'session#create'
  resources :projects, only: [:index, :show, :create, :update] do
    resources :project_comments, only: [:new, :create]
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
