import { GlobalSharkAttackEntityBase } from '../GlobalSharkAttackEntityBase';
import type { GlobalSharkAttackSDK } from '../GlobalSharkAttackSDK';
import type { Control } from '../types';
import type { Analyze, AnalyzeListMatch } from '../GlobalSharkAttackTypes';
declare class AnalyzeEntity extends GlobalSharkAttackEntityBase<Analyze> {
    constructor(client: GlobalSharkAttackSDK, entopts: any);
    make(this: AnalyzeEntity): AnalyzeEntity;
    list(this: any, reqmatch?: AnalyzeListMatch, ctrl?: Control): Promise<AnalyzeEntity[]>;
}
export { AnalyzeEntity };
