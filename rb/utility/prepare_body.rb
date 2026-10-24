# GlobalSharkAttack SDK utility: prepare_body
require_relative 'media'
module GlobalSharkAttackUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return GlobalSharkAttackUtilities.raw_body(ctx.reqdata) if GlobalSharkAttackUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
