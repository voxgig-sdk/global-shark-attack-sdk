# GlobalSharkAttack SDK utility: make_context
require_relative '../core/context'
module GlobalSharkAttackUtilities
  MakeContext = ->(ctxmap, basectx) {
    GlobalSharkAttackContext.new(ctxmap, basectx)
  }
end
