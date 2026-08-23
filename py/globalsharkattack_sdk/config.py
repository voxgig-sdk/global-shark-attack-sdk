# GlobalSharkAttack SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "GlobalSharkAttack",
            "slug": "global-shark-attack",
            "version": "0.0.1",
            "target": "py",
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
            "name": "x",
            "short": "X-axis value",
            "type": "`$STRING`",
          },
          {
            "name": "y",
            "short": "Aggregated Y-axis value",
            "type": "`$NUMBER`",
          },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "example": "COUNT",
                      "kind": "query",
                      "name": "func",
                      "orig": "func",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "refine_country",
                      "orig": "refine_country",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "refine_type",
                      "orig": "refine_type",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "x",
                      "orig": "x",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "y",
                      "orig": "y",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
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
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "download": {
        "fields": [
          {
            "name": "datasetid",
            "short": "Dataset identifier",
            "type": "`$STRING`",
          },
          {
            "name": "fields",
            "type": "`$OBJECT`",
          },
          {
            "name": "geometry",
            "short": "GeoJSON geometry object",
            "type": "`$OBJECT`",
          },
          {
            "name": "record_timestamp",
            "short": "Timestamp of record creation or update",
            "type": "`$STRING`",
          },
          {
            "name": "recordid",
            "short": "Unique record identifier",
            "type": "`$STRING`",
          },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "example": "json",
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "refine_country",
                      "orig": "refine_country",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "refine_type",
                      "orig": "refine_type",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
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
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "search": {
        "fields": [
          {
            "name": "datasetid",
            "short": "Dataset identifier",
            "type": "`$STRING`",
          },
          {
            "name": "fields",
            "type": "`$OBJECT`",
          },
          {
            "name": "geometry",
            "short": "GeoJSON geometry object",
            "type": "`$OBJECT`",
          },
          {
            "name": "record_timestamp",
            "short": "Timestamp of record creation or update",
            "type": "`$STRING`",
          },
          {
            "name": "recordid",
            "short": "Unique record identifier",
            "type": "`$STRING`",
          },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "facet",
                      "orig": "facet",
                      "type": "`$ARRAY`",
                    },
                    {
                      "kind": "query",
                      "name": "q",
                      "orig": "q",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "refine_activity",
                      "orig": "refine_activity",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "refine_country",
                      "orig": "refine_country",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "refine_species",
                      "orig": "refine_species",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "refine_type",
                      "orig": "refine_type",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 10,
                      "kind": "query",
                      "name": "row",
                      "orig": "row",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "start",
                      "orig": "start",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
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
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
