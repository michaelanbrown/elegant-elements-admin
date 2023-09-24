class ProductsController < ApplicationController
    before_action :find_product, only: [:show, :update, :destroy]
    before_action :authorize_user_is_admin, only: [:destroy]

    def index 
        render json: Product.all, status: :ok
    end

    def show
        render json: @product, status: :ok
        serializer: ProductsSerializer
    end

    def create
        product = Product.create!(product_params)
        render json: product, status: :created
    end

    def update
        @product.update!(update_product_params)
        render json: @product, status: :accepted
    end

    def destroy
        @product.destroy
        head :no_content 
    end

    private

    def product_params
        params.permit(:category_id, :name, :status, :quantity, :price)
    end

    def update_product_params
        params.permit(:status, :quantity, :price)
    end
end