class TransactionController < ApplicationController
  def index
  	transactions = Transaction.all
    render json: transactions
  end

  def create
  	transaction = Transaction.create!(params[:transction])
  	render json: transaction
  end

  def show
  	transaction = Transaction.find(params[:id])
  	render json: transaction
  end
end
