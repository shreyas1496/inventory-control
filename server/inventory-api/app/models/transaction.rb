class Transaction < ApplicationRecord
  belongs_to :product
  after_create :update_product

  def update_product
    product.update_attributes(on_hand: product.on_hand - quantity)
  end
end