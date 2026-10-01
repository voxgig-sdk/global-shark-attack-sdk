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
      "func": "v1",
      "refine_country": "v1",
      "refine_type": "v1",
      "x": "v1",
      "y": "v1"
    },
    "headers": [],
    "query": [
      "dataset",
      "x",
      "y",
      "func",
      "refine.type",
      "refine.country"
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
      "format": "v1",
      "refine_country": "v1",
      "refine_type": "v1"
    },
    "headers": [],
    "query": [
      "dataset",
      "format",
      "refine.type",
      "refine.country"
    ],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "datasetid": "x",
        "recordid": "x",
        "fields": {
          "activity": "x",
          "age": "x",
          "area": "x",
          "case_number": "x",
          "case_number_1": "x",
          "case_number_2": "x",
          "country": "x",
          "date": "2026-01-01",
          "fatal": "Y",
          "geopoint": [
            1
          ],
          "href": "x",
          "href_formula": "x",
          "injury": "x",
          "investigator_or_source": "x",
          "location": "x",
          "name": "x",
          "original_order": 1,
          "pdf": "x",
          "sex": "M",
          "species": "x",
          "time": "x",
          "type": "Unprovoked",
          "year": 1
        },
        "geometry": {
          "coordinates": [
            1
          ],
          "type": "Point"
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
      "row": "v1",
      "sort": "v1",
      "start": "v1"
    },
    "headers": [],
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
    "auth": null,
    "status": 200,
    "sample": {
      "nhits": 1,
      "parameters": {},
      "records": [
        {
          "datasetid": "x",
          "fields": {
            "activity": "x",
            "age": "x",
            "area": "x",
            "case_number": "x",
            "case_number_1": "x",
            "case_number_2": "x",
            "country": "x",
            "date": "2026-01-01",
            "fatal": "Y",
            "geopoint": [
              1
            ],
            "href": "x",
            "href_formula": "x",
            "injury": "x",
            "investigator_or_source": "x",
            "location": "x",
            "name": "x",
            "original_order": 1,
            "pdf": "x",
            "sex": "M",
            "species": "x",
            "time": "x",
            "type": "Unprovoked",
            "year": 1
          },
          "geometry": {
            "coordinates": [
              1
            ],
            "type": "Point"
          },
          "record_timestamp": "2026-01-01T00:00:00Z",
          "recordid": "x"
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
