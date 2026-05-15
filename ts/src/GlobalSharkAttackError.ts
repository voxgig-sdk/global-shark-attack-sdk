
import { Context } from './Context'


class GlobalSharkAttackError extends Error {

  isGlobalSharkAttackError = true

  sdk = 'GlobalSharkAttack'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  GlobalSharkAttackError
}

