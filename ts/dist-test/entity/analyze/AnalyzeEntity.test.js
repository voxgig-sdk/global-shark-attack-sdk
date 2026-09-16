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
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('AnalyzeEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GLOBAL_SHARK_ATTACK_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GLOBAL_SHARK_ATTACK_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GlobalSharkAttackSDK.test();
        const ent = testsdk.Analyze();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GLOBAL_SHARK_ATTACK_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'analyze.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "x", "req": false, "short": "X-axis value", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "y", "req": false, "short": "Aggregated Y-axis value", "type": "`$NUMBER`", "index$": 1 }], "name": "analyze", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": "global-shark-attack", "kind": "query", "name": "dataset", "orig": "dataset", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "COUNT", "kind": "query", "name": "func", "orig": "func", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "query", "name": "refine_country", "orig": "refine_country", "reqd": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "kind": "query", "name": "refine_type", "orig": "refine_type", "reqd": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "kind": "query", "name": "x", "orig": "x", "reqd": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "kind": "query", "name": "y", "orig": "y", "reqd": false, "type": "`$STRING`", "index$": 5 }] }, "contract": { "id": "GET /analyze", "json": "{\"operationId\":\"analyzeData\",\"parameters\":[{\"description\":\"Dataset identifier\",\"in\":\"query\",\"name\":\"dataset\",\"required\":true,\"schema\":{\"default\":\"global-shark-attack\",\"type\":\"string\"}},{\"description\":\"Field name for X-axis aggregation\",\"in\":\"query\",\"name\":\"x\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Field name for Y-axis aggregation\",\"in\":\"query\",\"name\":\"y\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Aggregation function to apply\",\"in\":\"query\",\"name\":\"func\",\"schema\":{\"default\":\"COUNT\",\"enum\":[\"COUNT\",\"AVG\",\"SUM\",\"MIN\",\"MAX\"],\"type\":\"string\"}},{\"description\":\"Filter by incident type\",\"in\":\"query\",\"name\":\"refine.type\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by country\",\"in\":\"query\",\"name\":\"refine.country\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"x\":{\"description\":\"X-axis value\",\"type\":\"string\"},\"y\":{\"description\":\"Aggregated Y-axis value\",\"type\":\"number\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful analysis\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"error_code\":{\"description\":\"Error code\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/analyze", "segments": [{ "lit": "analyze" }], "select": { "exist": ["dataset", "func", "refine_country", "refine_type", "x", "y"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "analyze", "name__orig": "analyze", "Name": "Analyze", "name_": "analyze", "name-": "analyze", "NAME": "ANALYZE", "index$": 0 }, { "active": true, "entity": "analyze", "key$": "BasicAnalyzeFlow", "kind": "basic", "name": "BasicAnalyzeFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "analyze_ref01" } }], "index$": 0 }] }, 'Analyze');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let analyze_ref01_data = Object.values(setup.data.existing.analyze)[0];
        // LIST
        const analyze_ref01_ent = client.Analyze();
        const analyze_ref01_match = {};
        const analyze_ref01_list = (await analyze_ref01_ent.list(analyze_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/analyze/AnalyzeTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GlobalSharkAttackSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['analyze01', 'analyze02', 'analyze03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GLOBAL_SHARK_ATTACK_TEST_ANALYZE_ENTID': idmap,
        'GLOBAL_SHARK_ATTACK_TEST_LIVE': 'FALSE',
        'GLOBAL_SHARK_ATTACK_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['GLOBAL_SHARK_ATTACK_TEST_ANALYZE_ENTID'];
    const live = 'TRUE' === env.GLOBAL_SHARK_ATTACK_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GLOBAL_SHARK_ATTACK_TEST_ANALYZE_ENTID'];
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
//# sourceMappingURL=AnalyzeEntity.test.js.map