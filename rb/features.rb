# GlobalSharkAttack SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module GlobalSharkAttackFeatures
  def self.make_feature(name)
    case name
    when "base"
      GlobalSharkAttackBaseFeature.new
    when "test"
      GlobalSharkAttackTestFeature.new
    else
      GlobalSharkAttackBaseFeature.new
    end
  end
end
