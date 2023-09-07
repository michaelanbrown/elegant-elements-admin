class CategoriesController < ApplicationController
    before_action :find_category, only: [:show]

    def index 
        render json: Category.all, status: :ok
    end

    def show
        render json: @category, status: :ok
    end

    def create
        category = Category.create!(category_params)
        render json: category, status: :created
    end

    def update
        @category.update!(update_category_params)
        render json: @category, status: :accepted
    end

    private

    def category_params
        params.permit(:name, :description)
    end

end