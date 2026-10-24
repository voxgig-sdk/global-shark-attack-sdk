import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "analyze",
    "accessor": "Analyze",
    "op": "list",
    "method": "GET",
    "path": "/analyze",
    "args": [],
    "select": {
      "dataset": "v1",
      "func": "COUNT",
      "refine_country": "v1",
      "refine_type": "v1",
      "x": "v1",
      "y": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "dataset",
      "x",
      "y",
      "func",
      "refine.type",
      "refine.country"
    ],
    "queryArgs": [
      {
        "name": "dataset",
        "wire": "dataset"
      },
      {
        "name": "func",
        "wire": "func"
      },
      {
        "name": "refine_country",
        "wire": "refine.country"
      },
      {
        "name": "refine_type",
        "wire": "refine.type"
      },
      {
        "name": "x",
        "wire": "x"
      },
      {
        "name": "y",
        "wire": "y"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "x": "x",
        "y": 1
      }
    ],
    "idField": "id"
  },
  {
    "entity": "download",
    "accessor": "Download",
    "op": "list",
    "method": "GET",
    "path": "/download",
    "args": [],
    "select": {
      "dataset": "v1",
      "format": "json",
      "refine_country": "v1",
      "refine_type": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json",
      "text/csv",
      "application/vnd.ms-excel",
      "application/geo+json"
    ],
    "query": [
      "dataset",
      "format",
      "refine.type",
      "refine.country"
    ],
    "queryArgs": [
      {
        "name": "dataset",
        "wire": "dataset"
      },
      {
        "name": "format",
        "wire": "format"
      },
      {
        "name": "refine_country",
        "wire": "refine.country"
      },
      {
        "name": "refine_type",
        "wire": "refine.type"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "datasetid": "x",
        "recordid": "x",
        "fields": {
          "case_number": "x",
          "date": "2026-01-01",
          "year": 1,
          "type": "Unprovoked",
          "country": "x",
          "area": "x",
          "location": "x",
          "activity": "x",
          "name": "x",
          "sex": "M",
          "age": "x",
          "injury": "x",
          "fatal": "Y",
          "time": "x",
          "species": "x",
          "investigator_or_source": "x",
          "pdf": "x",
          "href_formula": "x",
          "href": "x",
          "case_number_1": "x",
          "case_number_2": "x",
          "original_order": 1,
          "geopoint": [
            1
          ]
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            1
          ]
        },
        "record_timestamp": "2026-01-01T00:00:00Z"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "search",
    "accessor": "Search",
    "op": "list",
    "method": "GET",
    "path": "/search",
    "args": [],
    "select": {
      "dataset": "v1",
      "facet": "v1",
      "q": "v1",
      "refine_activity": "v1",
      "refine_country": "v1",
      "refine_species": "v1",
      "refine_type": "v1",
      "row": 10,
      "sort": "v1",
      "start": 0
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "dataset",
      "q",
      "rows",
      "start",
      "sort",
      "refine.type",
      "refine.country",
      "refine.species",
      "refine.activity",
      "facet"
    ],
    "queryArgs": [
      {
        "name": "dataset",
        "wire": "dataset"
      },
      {
        "name": "facet",
        "wire": "facet"
      },
      {
        "name": "q",
        "wire": "q"
      },
      {
        "name": "refine_activity",
        "wire": "refine.activity"
      },
      {
        "name": "refine_country",
        "wire": "refine.country"
      },
      {
        "name": "refine_species",
        "wire": "refine.species"
      },
      {
        "name": "refine_type",
        "wire": "refine.type"
      },
      {
        "name": "row",
        "wire": "rows"
      },
      {
        "name": "sort",
        "wire": "sort"
      },
      {
        "name": "start",
        "wire": "start"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "nhits": 1,
      "parameters": {},
      "records": [
        {
          "datasetid": "x",
          "recordid": "x",
          "fields": {
            "case_number": "x",
            "date": "2026-01-01",
            "year": 1,
            "type": "Unprovoked",
            "country": "x",
            "area": "x",
            "location": "x",
            "activity": "x",
            "name": "x",
            "sex": "M",
            "age": "x",
            "injury": "x",
            "fatal": "Y",
            "time": "x",
            "species": "x",
            "investigator_or_source": "x",
            "pdf": "x",
            "href_formula": "x",
            "href": "x",
            "case_number_1": "x",
            "case_number_2": "x",
            "original_order": 1,
            "geopoint": [
              1
            ]
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              1
            ]
          },
          "record_timestamp": "2026-01-01T00:00:00Z"
        }
      ],
      "facet_groups": [
        {}
      ]
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
