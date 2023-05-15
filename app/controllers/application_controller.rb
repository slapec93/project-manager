class ApplicationController < ActionController::Base
  def auth_user
    redirect_to :root unless session[:current_user_id]
  end

  def current_user
    User.find session[:current_user_id]
  end
end
