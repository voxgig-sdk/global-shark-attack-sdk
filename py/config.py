# GlobalSharkAttack SDK configuration


def make_config():
    return {
        "main": {
            "name": "GlobalSharkAttack",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://public.opendatasoft.com/api/records/1.0",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "analyze": {},
                "download": {},
                "search": {},
            },
        },
        "entity": {
      "analyze": {
        "fields": [
          {
            "active": True,
            "name": "x",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "y",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 1,
          },
        ],
        "name": "analyze",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "global-shark-attack",
                      "kind": "query",
                      "name": "dataset",
                      "orig": "dataset",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "COUNT",
                      "kind": "query",
                      "name": "func",
                      "orig": "func",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "refine_country",
                      "orig": "refine_country",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "refine_type",
                      "orig": "refine_type",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "x",
                      "orig": "x",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "y",
                      "orig": "y",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/analyze",
                "parts": [
                  "analyze",
                ],
                "select": {
                  "exist": [
                    "dataset",
                    "func",
                    "refine_country",
                    "refine_type",
                    "x",
                    "y",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "download": {
        "fields": [
          {
            "active": True,
            "name": "datasetid",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "field",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "geometry",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "record_timestamp",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "recordid",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
        ],
        "name": "download",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "global-shark-attack",
                      "kind": "query",
                      "name": "dataset",
                      "orig": "dataset",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "json",
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "refine_country",
                      "orig": "refine_country",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "refine_type",
                      "orig": "refine_type",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/download",
                "parts": [
                  "download",
                ],
                "select": {
                  "exist": [
                    "dataset",
                    "format",
                    "refine_country",
                    "refine_type",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "search": {
        "fields": [
          {
            "active": True,
            "name": "datasetid",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "field",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "geometry",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "record_timestamp",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "recordid",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
        ],
        "name": "search",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "global-shark-attack",
                      "kind": "query",
                      "name": "dataset",
                      "orig": "dataset",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "facet",
                      "orig": "facet",
                      "reqd": False,
                      "type": "`$ARRAY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "q",
                      "orig": "q",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "refine_activity",
                      "orig": "refine_activity",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "refine_country",
                      "orig": "refine_country",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "refine_species",
                      "orig": "refine_species",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "refine_type",
                      "orig": "refine_type",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 10,
                      "kind": "query",
                      "name": "row",
                      "orig": "row",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 0,
                      "kind": "query",
                      "name": "start",
                      "orig": "start",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/search",
                "parts": [
                  "search",
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
                    "start",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
