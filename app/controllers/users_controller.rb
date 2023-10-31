class UsersController < ApplicationController
    skip_before_action :authenticate_user, only: [:index, :create]
    before_action :find_user, only: [:update]
    before_action :authorize_user_is_admin, only: [:update]

    def index 
        render json: User.all, status: :ok
    end

    def show
        if current_user.admin
            render json: @user, status: :ok
        render json: current_user, status: :ok
        end
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :ok
    end

    def update
        @user.update!(update_user_params)
        render json: @user, status: :accepted
    end

    private 

    def user_params
        params.permit(:name, :title, :email, :password, :admin)
    end 

    def update_user_params
        params.permit(:title, :admin)
    end 
end