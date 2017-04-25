Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  # Данний файл відповідає за всі роути

  # Так ми визначаємо роут домашньої сторінки, вона буде привязяна до app/controllers/users_controller.rb і екшена index в ньому.
  # Відповідна в'юха буде app/views/users/index.html.erb'
  root "users#index"
end
