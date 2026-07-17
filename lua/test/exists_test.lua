-- GlobalSharkAttack SDK exists test

local sdk = require("global-shark-attack_sdk")

describe("GlobalSharkAttackSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
