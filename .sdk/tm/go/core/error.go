package core

type GlobalSharkAttackError struct {
	IsGlobalSharkAttackError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewGlobalSharkAttackError(code string, msg string, ctx *Context) *GlobalSharkAttackError {
	return &GlobalSharkAttackError{
		IsGlobalSharkAttackError: true,
		Sdk:              "GlobalSharkAttack",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *GlobalSharkAttackError) Error() string {
	return e.Msg
}
