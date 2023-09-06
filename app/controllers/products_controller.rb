class ProductsController < ApplicationController
    before_action :find_product, only: [:show]

    def index 
        render json: Product.all, status: :ok
    end

    def show
        render json: @product, status: :ok
    end

    private

    def product_params
        params.permit(:category_id, :name, :status, :quantity, :price)
    end
end