class Transaction < ApplicationRecord
  validates :price, :quantity, presence: true
  validates :quantity, :price, numericality: true
  belongs_to :product
  after_create :update_product

  def update_product
    if product.on_hand >= quantity
      product.update_attributes(on_hand: product.on_hand - quantity)
    else
      errors.add(:product, "Selling quantity should be less than or equal to available quantity");
      raise ActiveRecord::RecordInvalid.new(self)
    end
  end
end