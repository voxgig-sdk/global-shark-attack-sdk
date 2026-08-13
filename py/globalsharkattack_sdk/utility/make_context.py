# GlobalSharkAttack SDK utility: make_context

from globalsharkattack_sdk.core.context import GlobalSharkAttackContext


def make_context_util(ctxmap, basectx):
    return GlobalSharkAttackContext(ctxmap, basectx)
