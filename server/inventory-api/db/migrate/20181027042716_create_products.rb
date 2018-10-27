class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.string :company
      t.text :description
      t.integer :on_hand
      t.integer :max_quantity
      t.integer :reorder_level
      t.float :price
      t.string :location
      t.text :usage
      t.datetime :expiry

      t.timestamps
    end
  end
end
