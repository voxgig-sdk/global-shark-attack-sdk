"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'GlobalSharkAttack',
        slug: "global-shark-attack",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
        },
    };
    options = {
        base: "https://public.opendatasoft.com/api/records/1.0",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            analyze: {},
            download: {},
            search: {},
        }
    };
    entity = {
        "analyze": {
            "fields": [
                {
                    "name": "x",
                    "short": "X-axis value",
                    "type": "`$STRING`"
                },
                {
                    "name": "y",
                    "short": "Aggregated Y-axis value",
                    "type": "`$NUMBER`"
                }
            ],
            "name": "analyze",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "global-shark-attack",
                                        "kind": "query",
                                        "name": "dataset",
                                        "orig": "dataset",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "COUNT",
                                        "kind": "query",
                                        "name": "func",
                                        "orig": "func",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "refine_country",
                                        "orig": "refine_country",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "refine_type",
                                        "orig": "refine_type",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "x",
                                        "orig": "x",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "y",
                                        "orig": "y",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/analyze",
                            "segments": [
                                {
                                    "lit": "analyze"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "dataset",
                                    "func",
                                    "refine_country",
                                    "refine_type",
                                    "x",
                                    "y"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "analyze"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "download": {
            "fields": [
                {
                    "name": "datasetid",
                    "short": "Dataset identifier",
                    "type": "`$STRING`"
                },
                {
                    "name": "fields",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "geometry",
                    "short": "GeoJSON geometry object",
                    "type": "`$OBJECT`"
                },
                {
                    "format": "date-time",
                    "name": "record_timestamp",
                    "short": "Timestamp of record creation or update",
                    "type": "`$STRING`"
                },
                {
                    "name": "recordid",
                    "short": "Unique record identifier",
                    "type": "`$STRING`"
                }
            ],
            "name": "download",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "global-shark-attack",
                                        "kind": "query",
                                        "name": "dataset",
                                        "orig": "dataset",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "json",
                                        "kind": "query",
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "refine_country",
                                        "orig": "refine_country",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "refine_type",
                                        "orig": "refine_type",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/download",
                            "segments": [
                                {
                                    "lit": "download"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "dataset",
                                    "format",
                                    "refine_country",
                                    "refine_type"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "download"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "search": {
            "fields": [
                {
                    "name": "datasetid",
                    "short": "Dataset identifier",
                    "type": "`$STRING`"
                },
                {
                    "name": "fields",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "geometry",
                    "short": "GeoJSON geometry object",
                    "type": "`$OBJECT`"
                },
                {
                    "format": "date-time",
                    "name": "record_timestamp",
                    "short": "Timestamp of record creation or update",
                    "type": "`$STRING`"
                },
                {
                    "name": "recordid",
                    "short": "Unique record identifier",
                    "type": "`$STRING`"
                }
            ],
            "name": "search",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "global-shark-attack",
                                        "kind": "query",
                                        "name": "dataset",
                                        "orig": "dataset",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "facet",
                                        "orig": "facet",
                                        "type": "`$ARRAY`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "q",
                                        "orig": "q",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "refine_activity",
                                        "orig": "refine_activity",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "refine_country",
                                        "orig": "refine_country",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "refine_species",
                                        "orig": "refine_species",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "refine_type",
                                        "orig": "refine_type",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 10,
                                        "kind": "query",
                                        "name": "row",
                                        "orig": "row",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "sort",
                                        "orig": "sort",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 0,
                                        "kind": "query",
                                        "name": "start",
                                        "orig": "start",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/search",
                            "segments": [
                                {
                                    "lit": "search"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "dataset",
                                    "facet",
                                    "q",
                                    "refine_activity",
                                    "refine_country",
                                    "refine_species",
                                    "refine_type",
                                    "row",
                                    "sort",
                                    "start"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "search"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map