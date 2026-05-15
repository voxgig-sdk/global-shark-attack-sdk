
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { GlobalSharkAttackSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await GlobalSharkAttackSDK.test()
    equal(null !== testsdk, true)
  })

})
