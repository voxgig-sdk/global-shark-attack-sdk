import { AnalyzeEntity } from './entity/AnalyzeEntity';
import { DownloadEntity } from './entity/DownloadEntity';
import { SearchEntity } from './entity/SearchEntity';
export type * from './GlobalSharkAttackTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { GlobalSharkAttackEntityBase } from './GlobalSharkAttackEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class GlobalSharkAttackSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Analyze(entopts?: Record<string, any>): AnalyzeEntity;
    Download(entopts?: Record<string, any>): DownloadEntity;
    Search(entopts?: Record<string, any>): SearchEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): GlobalSharkAttackSDK;
    tester(testopts?: any, sdkopts?: any): GlobalSharkAttackSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof GlobalSharkAttackSDK;
export { stdutil, config, BaseFeature, GlobalSharkAttackEntityBase, GlobalSharkAttackSDK, SDK, };
