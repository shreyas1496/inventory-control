class ProductsController < ApplicationController
  before_action :get_product, only: [:update, :delete, :show]

  def index
    products = Product.all
    render json: products
  end

  def create
    # { product: { name: '' }}
    product = Product.create!(params[:product])
    render json: product
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
