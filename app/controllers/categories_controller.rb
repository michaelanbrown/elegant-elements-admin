class CategoriesController < ApplicationController
    before_action :find_category

    def index 
        render json: Category.all, status: :ok
    end

end