package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "GlobalSharkAttack",
			"slug": "global-shark-attack",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"now": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://public.opendatasoft.com/api/records/1.0",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"analyze": map[string]any{},
				"download": map[string]any{},
				"search": map[string]any{},
			},
		},
		"entity": map[string]any{
			"analyze": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "x",
						"title": "X",
						"type": "`$STRING`",
						"short": "X-axis value",
					},
					map[string]any{
						"name": "y",
						"title": "Y",
						"type": "`$NUMBER`",
						"short": "Aggregated Y-axis value",
					},
				},
				"name": "analyze",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/analyze",
								"segments": []any{
									map[string]any{
										"lit": "analyze",
									},
								},
								"parts": []any{
									"analyze",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "dataset",
											"orig": "dataset",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "global-shark-attack",
										},
										map[string]any{
											"name": "func",
											"orig": "func",
											"type": "`$STRING`",
											"kind": "query",
											"example": "COUNT",
										},
										map[string]any{
											"name": "refine_country",
											"orig": "refine.country",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "refine_type",
											"orig": "refine.type",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "x",
											"orig": "x",
											"type": "`$STRING`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "y",
											"orig": "y",
											"type": "`$STRING`",
											"kind": "query",
											"field": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"dataset",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"download": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "datasetid",
						"title": "Datasetid",
						"type": "`$STRING`",
						"short": "Dataset identifier",
					},
					map[string]any{
						"name": "fields",
						"title": "Fields",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "geometry",
						"title": "Geometry",
						"type": "`$OBJECT`",
						"short": "GeoJSON geometry object",
					},
					map[string]any{
						"name": "record_timestamp",
						"title": "Record Timestamp",
						"type": "`$STRING`",
						"short": "Timestamp of record creation or update",
						"format": "date-time",
					},
					map[string]any{
						"name": "recordid",
						"title": "Recordid",
						"type": "`$STRING`",
						"short": "Unique record identifier",
					},
				},
				"name": "download",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/download",
								"segments": []any{
									map[string]any{
										"lit": "download",
									},
								},
								"parts": []any{
									"download",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "dataset",
											"orig": "dataset",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "global-shark-attack",
										},
										map[string]any{
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
											"kind": "query",
											"example": "json",
										},
										map[string]any{
											"name": "refine_country",
											"orig": "refine.country",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "refine_type",
											"orig": "refine.type",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"dataset",
									},
								},
								"response": map[string]any{
									"alternatives": []any{
										map[string]any{
											"kind": "json",
											"media": "application/geo+json",
										},
										map[string]any{
											"binary": true,
											"kind": "raw",
											"media": "application/vnd.ms-excel",
										},
										map[string]any{
											"kind": "raw",
											"media": "text/csv",
										},
									},
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"search": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "datasetid",
						"title": "Datasetid",
						"type": "`$STRING`",
						"short": "Dataset identifier",
					},
					map[string]any{
						"name": "fields",
						"title": "Fields",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "geometry",
						"title": "Geometry",
						"type": "`$OBJECT`",
						"short": "GeoJSON geometry object",
					},
					map[string]any{
						"name": "record_timestamp",
						"title": "Record Timestamp",
						"type": "`$STRING`",
						"short": "Timestamp of record creation or update",
						"format": "date-time",
					},
					map[string]any{
						"name": "recordid",
						"title": "Recordid",
						"type": "`$STRING`",
						"short": "Unique record identifier",
					},
				},
				"name": "search",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/search",
								"segments": []any{
									map[string]any{
										"lit": "search",
									},
								},
								"parts": []any{
									"search",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "dataset",
											"orig": "dataset",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "global-shark-attack",
										},
										map[string]any{
											"name": "facet",
											"orig": "facet",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "refine_activity",
											"orig": "refine.activity",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "refine_country",
											"orig": "refine.country",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "refine_species",
											"orig": "refine.species",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "refine_type",
											"orig": "refine.type",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "row",
											"orig": "rows",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 0,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"dataset",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
