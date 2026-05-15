-- GlobalSharkAttack SDK error

local GlobalSharkAttackError = {}
GlobalSharkAttackError.__index = GlobalSharkAttackError


function GlobalSharkAttackError.new(code, msg, ctx)
  local self = setmetatable({}, GlobalSharkAttackError)
  self.is_sdk_error = true
  self.sdk = "GlobalSharkAttack"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function GlobalSharkAttackError:error()
  return self.msg
end


function GlobalSharkAttackError:__tostring()
  return self.msg
end


return GlobalSharkAttackError
