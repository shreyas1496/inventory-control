class TransactionsController < ApplicationController
  def index
  	transactions = Transaction.all
    render json: transactions
  end

  def create
    p params
    permited = params[:transaction].permit(:product_id, :price, :quantity, :type)
    p permited
  	transaction = Transaction.create!(permited)
  	render json: transaction
  end

  def show
  	transaction = Transaction.find(params[:id])
  	render json: transaction
  end
end
