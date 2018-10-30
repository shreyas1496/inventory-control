Rails.application.routes.draw do
  
  resources :products
  resources :transactions, only: [:index, :create, :show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
