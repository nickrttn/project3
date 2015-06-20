require 'test_helper'

class UsersControllerTest < ActionController::TestCase
  test "should get signup" do
    get signup_path
    assert_response :success
  end

end
