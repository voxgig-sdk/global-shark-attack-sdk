# GlobalSharkAttack SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


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
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
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
            "title": "X",
            "type": "`$STRING`",
            "short": "X-axis value",
          },
          {
            "name": "y",
            "title": "Y",
            "type": "`$NUMBER`",
            "short": "Aggregated Y-axis value",
          },
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
                    "lit": "analyze",
                  },
                ],
                "parts": [
                  "analyze",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "dataset",
                      "orig": "dataset",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                      "example": "global-shark-attack",
                    },
                    {
                      "name": "func",
                      "orig": "func",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "COUNT",
                    },
                    {
                      "name": "refine_country",
                      "orig": "refine.country",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "refine_type",
                      "orig": "refine.type",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "x",
                      "orig": "x",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "y",
                      "orig": "y",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
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
            "title": "Datasetid",
            "type": "`$STRING`",
            "short": "Dataset identifier",
          },
          {
            "name": "fields",
            "title": "Fields",
            "type": "`$OBJECT`",
          },
          {
            "name": "geometry",
            "title": "Geometry",
            "type": "`$OBJECT`",
            "short": "GeoJSON geometry object",
          },
          {
            "name": "record_timestamp",
            "title": "Record Timestamp",
            "type": "`$STRING`",
            "short": "Timestamp of record creation or update",
            "format": "date-time",
          },
          {
            "name": "recordid",
            "title": "Recordid",
            "type": "`$STRING`",
            "short": "Unique record identifier",
          },
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
                    "lit": "download",
                  },
                ],
                "parts": [
                  "download",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "dataset",
                      "orig": "dataset",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                      "example": "global-shark-attack",
                    },
                    {
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "json",
                    },
                    {
                      "name": "refine_country",
                      "orig": "refine.country",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "refine_type",
                      "orig": "refine.type",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "dataset",
                    "format",
                    "refine_country",
                    "refine_type",
                  ],
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
            "title": "Datasetid",
            "type": "`$STRING`",
            "short": "Dataset identifier",
          },
          {
            "name": "fields",
            "title": "Fields",
            "type": "`$OBJECT`",
          },
          {
            "name": "geometry",
            "title": "Geometry",
            "type": "`$OBJECT`",
            "short": "GeoJSON geometry object",
          },
          {
            "name": "record_timestamp",
            "title": "Record Timestamp",
            "type": "`$STRING`",
            "short": "Timestamp of record creation or update",
            "format": "date-time",
          },
          {
            "name": "recordid",
            "title": "Recordid",
            "type": "`$STRING`",
            "short": "Unique record identifier",
          },
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
                    "lit": "search",
                  },
                ],
                "parts": [
                  "search",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "dataset",
                      "orig": "dataset",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                      "example": "global-shark-attack",
                    },
                    {
                      "name": "facet",
                      "orig": "facet",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "q",
                      "orig": "q",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "refine_activity",
                      "orig": "refine.activity",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "refine_country",
                      "orig": "refine.country",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "refine_species",
                      "orig": "refine.species",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "refine_type",
                      "orig": "refine.type",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "row",
                      "orig": "rows",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 10,
                    },
                    {
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "start",
                      "orig": "start",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 0,
                    },
                  ],
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
                    "start",
                  ],
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
