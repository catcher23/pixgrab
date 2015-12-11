class SessionsController < ApplicationController

  def create
      @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Incorrect Credentials"]
      render :new
    end
  end

  def destroy
    logout
    obj = User.new
    flash[:notices] ||= []
    flash[:notices] << "Logged Out"
    render json: obj
  end

end
