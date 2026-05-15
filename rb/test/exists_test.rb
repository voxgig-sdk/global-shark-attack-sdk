# GlobalSharkAttack SDK exists test

require "minitest/autorun"
require_relative "../GlobalSharkAttack_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = GlobalSharkAttackSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
