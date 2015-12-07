class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.

  def require_user
    # @token = '2290945337.1677ed0.0717954f1bb848d8b71957373c170bd5'

  end
end
