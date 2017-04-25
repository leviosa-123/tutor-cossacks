# Цей файл називається міграція, вона створюється за допомогою команди rails g migration НазваМіграції
# В міграціях ми якимось чином змінюємо нашу базу данних. В даному випадку я створив юзерів з ім'ям

class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name
    end
  end
end
