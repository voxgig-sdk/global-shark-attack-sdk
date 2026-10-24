
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'GlobalSharkAttack',
        slug: "global-shark-attack",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
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
 retry:     {
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
 test:     {
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
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "now": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://public.opendatasoft.com/api/records/1.0",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        analyze: {
        },
  
        download: {
        },
  
        search: {
        },
  
    }
  }


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
                    "kind": "query",
                    "field": true
                  },
                  {
                    "name": "y",
                    "orig": "y",
                    "type": "`$STRING`",
                    "kind": "query",
                    "field": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "dataset"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
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
                  "dataset"
                ]
              },
              "response": {
                "alternatives": [
                  {
                    "kind": "json",
                    "media": "application/geo+json"
                  },
                  {
                    "binary": true,
                    "kind": "raw",
                    "media": "application/vnd.ms-excel"
                  },
                  {
                    "kind": "raw",
                    "media": "text/csv"
                  }
                ],
                "kind": "json",
                "media": "application/json"
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
                  "dataset"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

