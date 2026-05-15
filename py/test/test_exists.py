# ProjectName SDK exists test

import pytest
from globalsharkattack_sdk import GlobalSharkAttackSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = GlobalSharkAttackSDK.test(None, None)
        assert testsdk is not None
