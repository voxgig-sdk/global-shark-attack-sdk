"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
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
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
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
                    "title": "X",
                    "type": "`$STRING`",
                    "short": "X-axis value"
                },
                {
                    "name": "y",
                    "title": "Y",
                    "type": "`$NUMBER`",
                    "short": "Aggregated Y-axis value"
                }
            ],
            "name": "analyze",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/analyze",
                            "segments": [
                                {
                                    "lit": "analyze"
                                }
                            ],
                            "parts": [
                                "analyze"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "dataset",
                                        "orig": "dataset",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true,
                                        "example": "global-shark-attack"
                                    },
                                    {
                                        "name": "func",
                                        "orig": "func",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "COUNT"
                                    },
                                    {
                                        "name": "refine_country",
                                        "orig": "refine.country",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "refine_type",
                                        "orig": "refine.type",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "x",
                                        "orig": "x",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "y",
                                        "orig": "y",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "dataset",
                                    "func",
                                    "refine_country",
                                    "refine_type",
                                    "x",
                                    "y"
                                ]
                            }
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
                    "title": "Datasetid",
                    "type": "`$STRING`",
                    "short": "Dataset identifier"
                },
                {
                    "name": "fields",
                    "title": "Fields",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "geometry",
                    "title": "Geometry",
                    "type": "`$OBJECT`",
                    "short": "GeoJSON geometry object"
                },
                {
                    "name": "record_timestamp",
                    "title": "Record Timestamp",
                    "type": "`$STRING`",
                    "short": "Timestamp of record creation or update",
                    "format": "date-time"
                },
                {
                    "name": "recordid",
                    "title": "Recordid",
                    "type": "`$STRING`",
                    "short": "Unique record identifier"
                }
            ],
            "name": "download",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/download",
                            "segments": [
                                {
                                    "lit": "download"
                                }
                            ],
                            "parts": [
                                "download"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "dataset",
                                        "orig": "dataset",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true,
                                        "example": "global-shark-attack"
                                    },
                                    {
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "json"
                                    },
                                    {
                                        "name": "refine_country",
                                        "orig": "refine.country",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "refine_type",
                                        "orig": "refine.type",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "dataset",
                                    "format",
                                    "refine_country",
                                    "refine_type"
                                ]
                            }
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
                    "title": "Datasetid",
                    "type": "`$STRING`",
                    "short": "Dataset identifier"
                },
                {
                    "name": "fields",
                    "title": "Fields",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "geometry",
                    "title": "Geometry",
                    "type": "`$OBJECT`",
                    "short": "GeoJSON geometry object"
                },
                {
                    "name": "record_timestamp",
                    "title": "Record Timestamp",
                    "type": "`$STRING`",
                    "short": "Timestamp of record creation or update",
                    "format": "date-time"
                },
                {
                    "name": "recordid",
                    "title": "Recordid",
                    "type": "`$STRING`",
                    "short": "Unique record identifier"
                }
            ],
            "name": "search",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/search",
                            "segments": [
                                {
                                    "lit": "search"
                                }
                            ],
                            "parts": [
                                "search"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "dataset",
                                        "orig": "dataset",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true,
                                        "example": "global-shark-attack"
                                    },
                                    {
                                        "name": "facet",
                                        "orig": "facet",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "q",
                                        "orig": "q",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "refine_activity",
                                        "orig": "refine.activity",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "refine_country",
                                        "orig": "refine.country",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "refine_species",
                                        "orig": "refine.species",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "refine_type",
                                        "orig": "refine.type",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "row",
                                        "orig": "rows",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 10
                                    },
                                    {
                                        "name": "sort",
                                        "orig": "sort",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "start",
                                        "orig": "start",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 0
                                    }
                                ]
                            },
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
                            }
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