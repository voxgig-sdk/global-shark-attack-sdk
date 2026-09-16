

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { GlobalSharkAttackSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('SearchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GLOBAL_SHARK_ATTACK_TEST_LIVE=TRUE.
  afterEach(liveDelay('GLOBAL_SHARK_ATTACK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GlobalSharkAttackSDK.test()
    const ent = testsdk.Search()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GLOBAL_SHARK_ATTACK_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'search.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"datasetid","req":false,"short":"Dataset identifier","type":"`$STRING`","index$":0},{"active":true,"name":"fields","req":false,"type":"`$OBJECT`","index$":1},{"active":true,"name":"geometry","req":false,"short":"GeoJSON geometry object","type":"`$OBJECT`","index$":2},{"active":true,"format":"date-time","name":"record_timestamp","req":false,"short":"Timestamp of record creation or update","type":"`$STRING`","index$":3},{"active":true,"name":"recordid","req":false,"short":"Unique record identifier","type":"`$STRING`","index$":4}],"name":"search","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":"global-shark-attack","kind":"query","name":"dataset","orig":"dataset","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"facet","orig":"facet","reqd":false,"type":"`$ARRAY`","index$":1},{"active":true,"kind":"query","name":"q","orig":"q","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"kind":"query","name":"refine_activity","orig":"refine_activity","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"kind":"query","name":"refine_country","orig":"refine_country","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"kind":"query","name":"refine_species","orig":"refine_species","reqd":false,"type":"`$STRING`","index$":5},{"active":true,"kind":"query","name":"refine_type","orig":"refine_type","reqd":false,"type":"`$STRING`","index$":6},{"active":true,"example":10,"kind":"query","name":"row","orig":"row","reqd":false,"type":"`$INTEGER`","index$":7},{"active":true,"kind":"query","name":"sort","orig":"sort","reqd":false,"type":"`$STRING`","index$":8},{"active":true,"example":0,"kind":"query","name":"start","orig":"start","reqd":false,"type":"`$INTEGER`","index$":9}]},"contract":{"id":"GET /search","json":"{\"operationId\":\"searchRecords\",\"parameters\":[{\"description\":\"Dataset identifier\",\"in\":\"query\",\"name\":\"dataset\",\"required\":true,\"schema\":{\"default\":\"global-shark-attack\",\"type\":\"string\"}},{\"description\":\"Full-text search query\",\"in\":\"query\",\"name\":\"q\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Number of records to return (max 100)\",\"in\":\"query\",\"name\":\"rows\",\"schema\":{\"default\":10,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Index of the first record to return (for pagination)\",\"in\":\"query\",\"name\":\"start\",\"schema\":{\"default\":0,\"minimum\":0,\"type\":\"integer\"}},{\"description\":\"Field name to sort by (prefix with - for descending order)\",\"in\":\"query\",\"name\":\"sort\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by incident type (unprovoked, provoked, boat, war, questionable)\",\"in\":\"query\",\"name\":\"refine.type\",\"schema\":{\"enum\":[\"Unprovoked\",\"Provoked\",\"Boat\",\"War\",\"Questionable\"],\"type\":\"string\"}},{\"description\":\"Filter by country where incident occurred\",\"in\":\"query\",\"name\":\"refine.country\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by shark species\",\"in\":\"query\",\"name\":\"refine.species\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by victim activity at time of incident\",\"in\":\"query\",\"name\":\"refine.activity\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Field names to facet on (can be repeated)\",\"explode\":true,\"in\":\"query\",\"name\":\"facet\",\"schema\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"facet_groups\":{\"description\":\"Facet aggregations if requested\",\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"nhits\":{\"description\":\"Total number of records matching the query\",\"type\":\"integer\"},\"parameters\":{\"description\":\"Echo of the request parameters\",\"type\":\"object\"},\"records\":{\"items\":{\"properties\":{\"datasetid\":{\"description\":\"Dataset identifier\",\"type\":\"string\"},\"fields\":{\"properties\":{\"activity\":{\"description\":\"Activity victim was engaged in at time of incident\",\"type\":\"string\"},\"age\":{\"description\":\"Age of the victim\",\"type\":\"string\"},\"area\":{\"description\":\"Specific area or region within country\",\"type\":\"string\"},\"case_number\":{\"description\":\"Unique case number for the incident\",\"type\":\"string\"},\"case_number_1\":{\"description\":\"Alternative case number\",\"type\":\"string\"},\"case_number_2\":{\"description\":\"Secondary case number\",\"type\":\"string\"},\"country\":{\"description\":\"Country where incident occurred\",\"type\":\"string\"},\"date\":{\"description\":\"Date of the incident\",\"format\":\"date\",\"type\":\"string\"},\"fatal\":{\"description\":\"Whether the incident was fatal\",\"enum\":[\"Y\",\"N\",\"UNKNOWN\"],\"type\":\"string\"},\"geopoint\":{\"description\":\"Geographic coordinates [latitude, longitude]\",\"items\":{\"type\":\"number\"},\"maxItems\":2,\"minItems\":2,\"type\":\"array\"},\"href\":{\"description\":\"Reference link\",\"type\":\"string\"},\"href_formula\":{\"description\":\"Link to additional information\",\"type\":\"string\"},\"injury\":{\"description\":\"Description of injuries sustained\",\"type\":\"string\"},\"investigator_or_source\":{\"description\":\"Source of the incident report\",\"type\":\"string\"},\"location\":{\"description\":\"Detailed location description\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the victim\",\"type\":\"string\"},\"original_order\":{\"description\":\"Original ordering in dataset\",\"type\":\"integer\"},\"pdf\":{\"description\":\"URL to PDF report if available\",\"type\":\"string\"},\"sex\":{\"description\":\"Sex of the victim\",\"enum\":[\"M\",\"F\"],\"type\":\"string\"},\"species\":{\"description\":\"Species of shark involved\",\"type\":\"string\"},\"time\":{\"description\":\"Time of day the incident occurred\",\"type\":\"string\"},\"type\":{\"description\":\"Type of incident\",\"enum\":[\"Unprovoked\",\"Provoked\",\"Boat\",\"War\",\"Questionable\"],\"type\":\"string\"},\"year\":{\"description\":\"Year of the incident\",\"type\":\"integer\"}},\"type\":\"object\"},\"geometry\":{\"description\":\"GeoJSON geometry object\",\"properties\":{\"coordinates\":{\"items\":{\"type\":\"number\"},\"maxItems\":2,\"minItems\":2,\"type\":\"array\"},\"type\":{\"enum\":[\"Point\"],\"type\":\"string\"}},\"type\":\"object\"},\"record_timestamp\":{\"description\":\"Timestamp of record creation or update\",\"format\":\"date-time\",\"type\":\"string\"},\"recordid\":{\"description\":\"Unique record identifier\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with shark attack records\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"error_code\":{\"description\":\"Error code\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid parameters\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"error_code\":{\"description\":\"Error code\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Dataset not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/search","segments":[{"lit":"search"}],"select":{"exist":["dataset","facet","q","refine_activity","refine_country","refine_species","refine_type","row","sort","start"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"search","name__orig":"search","Name":"Search","name_":"search","name-":"search","NAME":"SEARCH","index$":2}, {"active":true,"entity":"search","key$":"BasicSearchFlow","kind":"basic","name":"BasicSearchFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"search_ref01"}}],"index$":0}]}, 'Search')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let search_ref01_data = Object.values(setup.data.existing.search)[0] as any

    // LIST
    const search_ref01_ent = client.Search()
    const search_ref01_match: any = {}

    const search_ref01_list = (await search_ref01_ent.list(search_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/search/SearchTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = GlobalSharkAttackSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['search01','search02','search03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GLOBAL_SHARK_ATTACK_TEST_SEARCH_ENTID': idmap,
    'GLOBAL_SHARK_ATTACK_TEST_LIVE': 'FALSE',
    'GLOBAL_SHARK_ATTACK_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['GLOBAL_SHARK_ATTACK_TEST_SEARCH_ENTID']

  const live = 'TRUE' === env.GLOBAL_SHARK_ATTACK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GLOBAL_SHARK_ATTACK_TEST_SEARCH_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new GlobalSharkAttackSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.GLOBAL_SHARK_ATTACK_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
