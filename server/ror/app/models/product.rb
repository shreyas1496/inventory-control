class Product < ApplicationRecord
	validates :name, :buy_price, :sell_price, :location, presence: true
	validates :on_hand, :max_quantity, :reorder_level, numericality: { only_integer: true}
	validates :buy_price, :sell_price, numericality: true
	validates :on_hand, numericality: { greater_than_or_equal_to: 0}
end
