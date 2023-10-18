class CategoriesController < ApplicationController
    before_action :find_category, only: [:show, :update]

    def index 
        render json: Category.all, status: :ok,
        each_serializer: CategoriesSerializer
    end

    def show
        render json: @category, status: :ok,
        serializer: CategoriesSerializer
    end

    def create
        category = Category.create!(category_params)
        render json: category, status: :created
    end

    def update
        @category.update!(update_category_params)
        render json: @category, status: :accepted
    end

    def destroy
        @category.destroy
        head :no_content 
    end

    private

    def category_params
        params.permit(:name, :description)
    end

    def update_category_params
        params.permit(:description)
    end

end