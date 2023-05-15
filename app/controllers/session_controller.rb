class SessionController < ApplicationController
  before_action :set_user, only: :create

  def new
    return redirect_to projects_path if session[:current_user_id]
  end

  def create
    session[:current_user_id] = @user.id

    redirect_to projects_path
  end

  private

  def set_user
    @user ||= User.find_by!(username: params[:username])
  end
end
