# GlobalSharkAttack SDK utility: feature_add
module GlobalSharkAttackUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
