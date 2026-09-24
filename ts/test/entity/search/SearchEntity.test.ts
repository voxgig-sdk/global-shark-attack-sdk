

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"datasetid":{"a":true,"h":"Datasetid","n":"datasetid","r":false,"sh":"Dataset identifier","t":"`$STRING`","key$":"datasetid","index$":0},"fields":{"a":true,"h":"Fields","n":"fields","r":false,"t":"`$OBJECT`","key$":"fields","index$":1},"geometry":{"a":true,"h":"Geometry","n":"geometry","r":false,"sh":"GeoJSON geometry object","t":"`$OBJECT`","key$":"geometry","index$":2},"record_timestamp":{"a":true,"fo":"date-time","h":"Record Timestamp","n":"record_timestamp","r":false,"sh":"Timestamp of record creation or update","t":"`$STRING`","key$":"record_timestamp","index$":3},"recordid":{"a":true,"h":"Recordid","n":"recordid","r":false,"sh":"Unique record identifier","t":"`$STRING`","key$":"recordid","index$":4}},"name":"search","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /search","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"global-shark-attack","k":"query","n":"dataset","or":"dataset","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"facet","or":"facet","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"q","or":"q","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"refine_activity","or":"refine_activity","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"refine_country","or":"refine_country","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"refine_species","or":"refine_species","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"refine_type","or":"refine_type","r":false,"t":"`$STRING`","index$":6},{"a":true,"ex":10,"k":"query","n":"row","or":"row","r":false,"t":"`$INTEGER`","index$":7},{"a":true,"k":"query","n":"sort","or":"sort","r":false,"t":"`$STRING`","index$":8},{"a":true,"ex":0,"k":"query","n":"start","or":"start","r":false,"t":"`$INTEGER`","index$":9}]},"k":"http","m":"GET","o":"/search","q":{"exist":["dataset","facet","q","refine_activity","refine_country","refine_species","refine_type","row","sort","start"]},"r":{},"s":[{"lit":"search"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"search","name__orig":"search","Name":"Search","name_":"search","name-":"search","NAME":"SEARCH","index$":2}, {"active":true,"entity":"search","key$":"BasicSearchFlow","kind":"basic","name":"BasicSearchFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"search_ref01"}}],"index$":0}]}, 'Search', {"GET /search":{"protocol":"http","operationId":"searchRecords","responses":{"200":{"description":"Successful response with shark attack records","content":{"application/json":{"schema":{"type":"object","properties":{"nhits":{"description":"Total number of records matching the query","key$":"nhits","type":"integer"},"parameters":{"description":"Echo of the request parameters","key$":"parameters","type":"object"},"records":{"items":{"properties":{"datasetid":{"description":"Dataset identifier","type":"string","key$":"datasetid"},"fields":{"properties":{"activity":{"description":"Activity victim was engaged in at time of incident","type":"string"},"age":{"description":"Age of the victim","type":"string"},"area":{"description":"Specific area or region within country","type":"string"},"case_number":{"description":"Unique case number for the incident","type":"string"},"case_number_1":{"description":"Alternative case number","type":"string"},"case_number_2":{"description":"Secondary case number","type":"string"},"country":{"description":"Country where incident occurred","type":"string"},"date":{"description":"Date of the incident","format":"date","type":"string"},"fatal":{"description":"Whether the incident was fatal","enum":["Y","N","UNKNOWN"],"type":"string"},"geopoint":{"description":"Geographic coordinates [latitude, longitude]","items":{"type":"number"},"maxItems":2,"minItems":2,"type":"array"},"href":{"description":"Reference link","type":"string"},"href_formula":{"description":"Link to additional information","type":"string"},"injury":{"description":"Description of injuries sustained","type":"string"},"investigator_or_source":{"description":"Source of the incident report","type":"string"},"location":{"description":"Detailed location description","type":"string"},"name":{"description":"Name of the victim","type":"string"},"original_order":{"description":"Original ordering in dataset","type":"integer"},"pdf":{"description":"URL to PDF report if available","type":"string"},"sex":{"description":"Sex of the victim","enum":["M","F"],"type":"string"},"species":{"description":"Species of shark involved","type":"string"},"time":{"description":"Time of day the incident occurred","type":"string"},"type":{"description":"Type of incident","enum":["Unprovoked","Provoked","Boat","War","Questionable"],"type":"string"},"year":{"description":"Year of the incident","type":"integer"}},"type":"object","key$":"fields"},"geometry":{"description":"GeoJSON geometry object","properties":{"coordinates":{"items":{"type":"number"},"maxItems":2,"minItems":2,"type":"array"},"type":{"enum":["Point"],"type":"string"}},"type":"object","key$":"geometry"},"record_timestamp":{"description":"Timestamp of record creation or update","format":"date-time","type":"string","key$":"record_timestamp"},"recordid":{"description":"Unique record identifier","type":"string","key$":"recordid"}},"type":"object","x-ref":"#/components/schemas/SharkAttackRecord","index$":0},"key$":"records","type":"array"},"facet_groups":{"description":"Facet aggregations if requested","items":{"type":"object"},"key$":"facet_groups","type":"array"}}}}}},"400":{"description":"Bad request - invalid parameters","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"},"error_code":{"type":"string","description":"Error code"}},"x-ref":"#/components/schemas/Error"}}}},"404":{"description":"Dataset not found","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"},"error_code":{"type":"string","description":"Error code"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"dataset","in":"query","required":true,"description":"Dataset identifier","schema":{"type":"string","default":"global-shark-attack"},"index$":0},{"name":"q","in":"query","description":"Full-text search query","schema":{"type":"string"},"index$":1},{"name":"rows","in":"query","description":"Number of records to return (max 100)","schema":{"type":"integer","default":10,"minimum":1,"maximum":100},"index$":2},{"name":"start","in":"query","description":"Index of the first record to return (for pagination)","schema":{"type":"integer","default":0,"minimum":0},"index$":3},{"name":"sort","in":"query","description":"Field name to sort by (prefix with - for descending order)","schema":{"type":"string"},"index$":4},{"name":"refine.type","in":"query","description":"Filter by incident type (unprovoked, provoked, boat, war, questionable)","schema":{"type":"string","enum":["Unprovoked","Provoked","Boat","War","Questionable"]},"index$":5},{"name":"refine.country","in":"query","description":"Filter by country where incident occurred","schema":{"type":"string"},"index$":6},{"name":"refine.species","in":"query","description":"Filter by shark species","schema":{"type":"string"},"index$":7},{"name":"refine.activity","in":"query","description":"Filter by victim activity at time of incident","schema":{"type":"string"},"index$":8},{"name":"facet","in":"query","description":"Field names to facet on (can be repeated)","schema":{"type":"array","items":{"type":"string"}},"explode":true,"index$":9}],"securitySource":"unspecified"}})
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
  
