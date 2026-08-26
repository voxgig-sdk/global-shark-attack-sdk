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
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
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
						"short": "X-axis value",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "y",
						"short": "Aggregated Y-axis value",
						"type": "`$NUMBER`",
					},
				},
				"name": "analyze",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "global-shark-attack",
											"kind": "query",
											"name": "dataset",
											"orig": "dataset",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "COUNT",
											"kind": "query",
											"name": "func",
											"orig": "func",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "refine_country",
											"orig": "refine_country",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "refine_type",
											"orig": "refine_type",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "x",
											"orig": "x",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "y",
											"orig": "y",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/analyze",
								"parts": []any{
									"analyze",
								},
								"select": map[string]any{
									"exist": []any{
										"dataset",
										"func",
										"refine_country",
										"refine_type",
										"x",
										"y",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
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
						"short": "Dataset identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fields",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "geometry",
						"short": "GeoJSON geometry object",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "record_timestamp",
						"short": "Timestamp of record creation or update",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "recordid",
						"short": "Unique record identifier",
						"type": "`$STRING`",
					},
				},
				"name": "download",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "global-shark-attack",
											"kind": "query",
											"name": "dataset",
											"orig": "dataset",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "json",
											"kind": "query",
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "refine_country",
											"orig": "refine_country",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "refine_type",
											"orig": "refine_type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/download",
								"parts": []any{
									"download",
								},
								"select": map[string]any{
									"exist": []any{
										"dataset",
										"format",
										"refine_country",
										"refine_type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
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
						"short": "Dataset identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fields",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "geometry",
						"short": "GeoJSON geometry object",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "record_timestamp",
						"short": "Timestamp of record creation or update",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "recordid",
						"short": "Unique record identifier",
						"type": "`$STRING`",
					},
				},
				"name": "search",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "global-shark-attack",
											"kind": "query",
											"name": "dataset",
											"orig": "dataset",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "facet",
											"orig": "facet",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "refine_activity",
											"orig": "refine_activity",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "refine_country",
											"orig": "refine_country",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "refine_species",
											"orig": "refine_species",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "refine_type",
											"orig": "refine_type",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "row",
											"orig": "row",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/search",
								"parts": []any{
									"search",
								},
								"select": map[string]any{
									"exist": []any{
										"dataset",
										"facet",
										"q",
										"refine_activity",
										"refine_country",
										"refine_species",
										"refine_type",
										"row",
										"sort",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
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
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
