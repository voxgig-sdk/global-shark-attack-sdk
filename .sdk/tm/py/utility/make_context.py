# GlobalSharkAttack SDK utility: make_context

from core.context import GlobalSharkAttackContext


def make_context_util(ctxmap, basectx):
    return GlobalSharkAttackContext(ctxmap, basectx)
