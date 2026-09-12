import { GlobalSharkAttackEntityBase } from '../GlobalSharkAttackEntityBase';
import type { GlobalSharkAttackSDK } from '../GlobalSharkAttackSDK';
import type { Control } from '../types';
import type { Search, SearchListMatch } from '../GlobalSharkAttackTypes';
declare class SearchEntity extends GlobalSharkAttackEntityBase<Search> {
    constructor(client: GlobalSharkAttackSDK, entopts: any);
    make(this: SearchEntity): SearchEntity;
    list(this: any, reqmatch?: SearchListMatch, ctrl?: Control): Promise<SearchEntity[]>;
}
export { SearchEntity };
