
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { GlobalSharkAttackSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = GlobalSharkAttackSDK.test()
    equal(testsdk instanceof GlobalSharkAttackSDK, true,
      'GlobalSharkAttackSDK.test() must return a client synchronously')
  })

})
