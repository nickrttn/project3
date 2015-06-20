Rails.application.routes.draw do
	resources :users

  root 					'static_pages#home'
  get 'help' => 'static_pages#help'

  get 'signup' => 'users#new'

end
