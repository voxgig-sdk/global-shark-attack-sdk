import { GlobalSharkAttackEntityBase } from '../GlobalSharkAttackEntityBase';
import type { GlobalSharkAttackSDK } from '../GlobalSharkAttackSDK';
import type { Control } from '../types';
import type { Download, DownloadListMatch } from '../GlobalSharkAttackTypes';
declare class DownloadEntity extends GlobalSharkAttackEntityBase<Download> {
    constructor(client: GlobalSharkAttackSDK, entopts: any);
    make(this: DownloadEntity): DownloadEntity;
    list(this: any, reqmatch?: DownloadListMatch, ctrl?: Control): Promise<DownloadEntity[]>;
}
export { DownloadEntity };
