class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.string :company
      t.text :description
      t.integer :on_hand
      t.integer :max_quantity
      t.integer :reorder_level
      t.float :buy_price
      t.float :sell_price
      t.string :location
      t.text :usage
      t.string :gst
      t.datetime :expiry

      t.timestamps
    end
  end
end
