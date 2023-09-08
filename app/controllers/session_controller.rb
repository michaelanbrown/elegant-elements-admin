class SessionController < ApplicationController
    skip_before_action :authenticate_user

end