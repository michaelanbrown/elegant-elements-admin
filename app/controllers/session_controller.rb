class SessionController < ApplicationController
    skip_before_action :authenticate_user

    def create
        user = User.find_by_email(params[:email])
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user, status: :ok
        else 
          render json: { errors: "Invalid Credentials" }, status: :unauthorized
        end
    
      end
end