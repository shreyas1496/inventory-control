class ProductsController < ApplicationController
  before_action :get_product, only: [:update, :delete, :show]

  def index
    products = Product.where("name like ? or company like ? or description like ? or usage like ?", "%#{params[:name]}%", "%#{params[:company]}%", "%#{params[:description]}%", "%#{params[:usage]}%")
    render json: products
  end

  def get_reorder_level_products
    products = Product.where("on_hand < reorder_level")
    render json: products
  end

  def create
    # { product: { name: '' }}
    product = Product.create!(params[:product])
    render json: product
  end

  def reorder_items
    products = Product.where("on_hand <= reorder_level")
    render json: products
  end

  def update
    @product.update_attributes(params[:product])
    render json: @product
  end

  def delete
    @product.delete
    render json: { status: 204 }
  end

  def show
    render json: @product
  end

  private

  def get_product
    @product = Product.find(params[:product][:id])
  end
end
