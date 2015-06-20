require 'test_helper'

class ApplicationHelperTest < ActionView::TestCase
	test "full title helper" do
		assert_equal full_title,					"Homeplan Bouwreizen"
		assert_equal full_title("Help"),	"Help :: Homeplan Bouwreizen"
	end
end
