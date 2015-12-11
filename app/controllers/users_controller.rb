class UsersController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      redirect_to root_url
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to new_session_url
    end
  end


  def show
    user = User.find(params['id'])
    user.check(user.searches)
    all_searches = user.searches
    render json: {search: nil, all_searches: all_searches}
    end
  def user_params
    params.require(:user).permit(:username, :password, :session_token)
  end
end
