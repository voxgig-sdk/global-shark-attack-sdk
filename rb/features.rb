# GlobalSharkAttack SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module GlobalSharkAttackFeatures
  def self.make_feature(name)
    case name
    when "base"
      GlobalSharkAttackBaseFeature.new
    when "ratelimit"
      GlobalSharkAttackRatelimitFeature.new
    when "retry"
      GlobalSharkAttackRetryFeature.new
    when "test"
      GlobalSharkAttackTestFeature.new
    when "timeout"
      GlobalSharkAttackTimeoutFeature.new
    else
      GlobalSharkAttackBaseFeature.new
    end
  end
end
