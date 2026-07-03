package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "GlobalSharkAttack",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://public.opendatasoft.com/api/records/1.0",
			"auth": map[string]any{
				"prefix": "Bearer",
			},
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
						"active": true,
						"name": "x",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "y",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 1,
					},
				},
				"name": "analyze",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"example": "global-shark-attack",
											"kind": "query",
											"name": "dataset",
											"orig": "dataset",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "COUNT",
											"kind": "query",
											"name": "func",
											"orig": "func",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "refine_country",
											"orig": "refine_country",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "refine_type",
											"orig": "refine_type",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "x",
											"orig": "x",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "y",
											"orig": "y",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"download": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "datasetid",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "field",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "geometry",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "record_timestamp",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "recordid",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
				},
				"name": "download",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"example": "global-shark-attack",
											"kind": "query",
											"name": "dataset",
											"orig": "dataset",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "json",
											"kind": "query",
											"name": "format",
											"orig": "format",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "refine_country",
											"orig": "refine_country",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "refine_type",
											"orig": "refine_type",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"search": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "datasetid",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "field",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "geometry",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "record_timestamp",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "recordid",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
				},
				"name": "search",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"example": "global-shark-attack",
											"kind": "query",
											"name": "dataset",
											"orig": "dataset",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "facet",
											"orig": "facet",
											"reqd": false,
											"type": "`$ARRAY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "q",
											"orig": "q",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "refine_activity",
											"orig": "refine_activity",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "refine_country",
											"orig": "refine_country",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "refine_species",
											"orig": "refine_species",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "refine_type",
											"orig": "refine_type",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": 10,
											"kind": "query",
											"name": "row",
											"orig": "row",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
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
