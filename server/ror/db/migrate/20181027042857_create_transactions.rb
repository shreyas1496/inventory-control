class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.references :product, foreign_key: true
      t.integer :quantity
      t.float :price
      t.integer :type
      t.string :order

      t.timestamps
    end
  end
end
