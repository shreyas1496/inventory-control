class TransactionsController < ApplicationController
  def index
  	transactions = Transaction.all
    render json: transactions
  end

  def create
    begin
    permited = params[:transaction].permit(:product_id, :price, :quantity, :type)
    transaction = Transaction.create!(permited)
    render json: transaction
    rescue => e
      render json: {error: e}, status: 422
    end
  end

  def show
  	transaction = Transaction.find(params[:id])
  	render json: transaction
  end
end
