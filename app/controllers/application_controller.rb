class ApplicationController < ActionController::API
    before_action :authenticate_user

    include ActionController::Cookies

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def current_user
        @current_user ||= User.find_by(id: session[:user_id])
    end

    private

    def find_product
        @product = Product.find(params[:id])
    end

    def find_category
        @category = Category.find(params[:id])
    end

    def find_user
        @user = User.find(params[:id])
    end

    def authenticate_user
        render json: { errors: "Not authorized" }, status: :unauthorized unless current_user
    end

    def authorize_user_is_admin
        permitted = @current_user.admin == true
        render json: { errors: "Not authorized" }, status: :unauthorized unless permitted
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
    
    def render_not_found_response
        render json: { error: "Record not found" }, status: :not_found
    end
    
end