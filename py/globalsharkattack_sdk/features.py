# GlobalSharkAttack SDK feature factory

from globalsharkattack_sdk.feature.base_feature import GlobalSharkAttackBaseFeature
from globalsharkattack_sdk.feature.test_feature import GlobalSharkAttackTestFeature


def _make_feature(name):
    features = {
        "base": lambda: GlobalSharkAttackBaseFeature(),
        "test": lambda: GlobalSharkAttackTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
