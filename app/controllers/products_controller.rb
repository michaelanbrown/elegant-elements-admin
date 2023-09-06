class ProductsController < ApplicationController
    before_action :find_product, only: [:show, :destroy]

    def index 
        render json: Product.all, status: :ok
    end

    def show
        render json: @product, status: :ok
    end

    def create
        product = Product.create!(product_params)
        render json: product, status: :created
    end

    def destroy
        @product.destroy
        head :no_content 
    end

    private

    def product_params
        params.permit(:category_id, :name, :status, :quantity, :price)
    end
end