import { Context } from './Context';
declare class GlobalSharkAttackError extends Error {
    isGlobalSharkAttackError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { GlobalSharkAttackError };
