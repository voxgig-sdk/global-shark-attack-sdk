"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('DownloadEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GLOBAL_SHARK_ATTACK_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GLOBAL_SHARK_ATTACK_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GlobalSharkAttackSDK.test();
        const ent = testsdk.Download();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GLOBAL_SHARK_ATTACK_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'download.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "datasetid": { "a": true, "h": "Datasetid", "n": "datasetid", "r": false, "sh": "Dataset identifier", "t": "`$STRING`", "key$": "datasetid", "index$": 0 }, "fields": { "a": true, "h": "Fields", "n": "fields", "r": false, "t": "`$OBJECT`", "key$": "fields", "index$": 1 }, "geometry": { "a": true, "h": "Geometry", "n": "geometry", "r": false, "sh": "GeoJSON geometry object", "t": "`$OBJECT`", "key$": "geometry", "index$": 2 }, "record_timestamp": { "a": true, "fo": "date-time", "h": "Record Timestamp", "n": "record_timestamp", "r": false, "sh": "Timestamp of record creation or update", "t": "`$STRING`", "key$": "record_timestamp", "index$": 3 }, "recordid": { "a": true, "h": "Recordid", "n": "recordid", "r": false, "sh": "Unique record identifier", "t": "`$STRING`", "key$": "recordid", "index$": 4 } }, "name": "download", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /download", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "global-shark-attack", "k": "query", "n": "dataset", "or": "dataset", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "json", "k": "query", "n": "format", "or": "format", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "refine_country", "or": "refine_country", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "refine_type", "or": "refine_type", "r": false, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/download", "q": { "exist": ["dataset", "format", "refine_country", "refine_type"] }, "r": {}, "s": [{ "lit": "download" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "download", "name__orig": "download", "Name": "Download", "name_": "download", "name-": "download", "NAME": "DOWNLOAD", "index$": 1 }, { "active": true, "entity": "download", "key$": "BasicDownloadFlow", "kind": "basic", "name": "BasicDownloadFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "download_ref01" } }], "index$": 0 }] }, 'Download', { "GET /download": { "protocol": "http", "operationId": "downloadDataset", "responses": { "200": { "description": "Successful download", "content": { "application/json": { "schema": { "type": "array", "items": { "type": "object", "properties": { "datasetid": { "description": "Dataset identifier", "type": "string", "key$": "datasetid" }, "recordid": { "description": "Unique record identifier", "type": "string", "key$": "recordid" }, "fields": { "properties": { "activity": { "description": "Activity victim was engaged in at time of incident", "type": "string" }, "age": { "description": "Age of the victim", "type": "string" }, "area": { "description": "Specific area or region within country", "type": "string" }, "case_number": { "description": "Unique case number for the incident", "type": "string" }, "case_number_1": { "description": "Alternative case number", "type": "string" }, "case_number_2": { "description": "Secondary case number", "type": "string" }, "country": { "description": "Country where incident occurred", "type": "string" }, "date": { "description": "Date of the incident", "format": "date", "type": "string" }, "fatal": { "description": "Whether the incident was fatal", "enum": ["Y", "N", "UNKNOWN"], "type": "string" }, "geopoint": { "description": "Geographic coordinates [latitude, longitude]", "items": { "type": "number" }, "maxItems": 2, "minItems": 2, "type": "array" }, "href": { "description": "Reference link", "type": "string" }, "href_formula": { "description": "Link to additional information", "type": "string" }, "injury": { "description": "Description of injuries sustained", "type": "string" }, "investigator_or_source": { "description": "Source of the incident report", "type": "string" }, "location": { "description": "Detailed location description", "type": "string" }, "name": { "description": "Name of the victim", "type": "string" }, "original_order": { "description": "Original ordering in dataset", "type": "integer" }, "pdf": { "description": "URL to PDF report if available", "type": "string" }, "sex": { "description": "Sex of the victim", "enum": ["M", "F"], "type": "string" }, "species": { "description": "Species of shark involved", "type": "string" }, "time": { "description": "Time of day the incident occurred", "type": "string" }, "type": { "description": "Type of incident", "enum": ["Unprovoked", "Provoked", "Boat", "War", "Questionable"], "type": "string" }, "year": { "description": "Year of the incident", "type": "integer" } }, "type": "object", "key$": "fields" }, "geometry": { "description": "GeoJSON geometry object", "properties": { "coordinates": { "items": { "type": "number" }, "maxItems": 2, "minItems": 2, "type": "array" }, "type": { "enum": ["Point"], "type": "string" } }, "type": "object", "key$": "geometry" }, "record_timestamp": { "description": "Timestamp of record creation or update", "format": "date-time", "type": "string", "key$": "record_timestamp" } }, "x-ref": "#/components/schemas/SharkAttackRecord", "index$": 0 } } }, "text/csv": { "schema": { "type": "string" } }, "application/vnd.ms-excel": { "schema": { "type": "string", "format": "binary" } }, "application/geo+json": { "schema": { "type": "object" } } } }, "400": { "description": "Bad request", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message" }, "error_code": { "type": "string", "description": "Error code" } }, "x-ref": "#/components/schemas/Error" } } } } }, "parameters": [{ "name": "dataset", "in": "query", "required": true, "description": "Dataset identifier", "schema": { "type": "string", "default": "global-shark-attack" }, "index$": 0 }, { "name": "format", "in": "query", "description": "Download format", "schema": { "type": "string", "enum": ["json", "csv", "xls", "geojson"], "default": "json" }, "index$": 1 }, { "name": "refine.type", "in": "query", "description": "Filter by incident type", "schema": { "type": "string" }, "index$": 2 }, { "name": "refine.country", "in": "query", "description": "Filter by country", "schema": { "type": "string" }, "index$": 3 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let download_ref01_data = Object.values(setup.data.existing.download)[0];
        // LIST
        const download_ref01_ent = client.Download();
        const download_ref01_match = {};
        const download_ref01_list = (await download_ref01_ent.list(download_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/download/DownloadTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GlobalSharkAttackSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['download01', 'download02', 'download03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GLOBAL_SHARK_ATTACK_TEST_DOWNLOAD_ENTID': idmap,
        'GLOBAL_SHARK_ATTACK_TEST_LIVE': 'FALSE',
        'GLOBAL_SHARK_ATTACK_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['GLOBAL_SHARK_ATTACK_TEST_DOWNLOAD_ENTID'];
    const live = 'TRUE' === env.GLOBAL_SHARK_ATTACK_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GLOBAL_SHARK_ATTACK_TEST_DOWNLOAD_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.GlobalSharkAttackSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.GLOBAL_SHARK_ATTACK_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=DownloadEntity.test.js.map