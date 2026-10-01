

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


describe('AnalyzeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GLOBAL_SHARK_ATTACK_TEST_LIVE=TRUE.
  afterEach(liveDelay('GLOBAL_SHARK_ATTACK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GlobalSharkAttackSDK.test()
    const ent = testsdk.Analyze()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GLOBAL_SHARK_ATTACK_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'analyze.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"x":{"a":true,"h":"X","n":"x","r":false,"sh":"X-axis value","t":"`$STRING`","key$":"x","index$":0},"y":{"a":true,"h":"Y","n":"y","r":false,"sh":"Aggregated Y-axis value","t":"`$NUMBER`","key$":"y","index$":1}},"name":"analyze","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /analyze","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"global-shark-attack","k":"query","n":"dataset","or":"dataset","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"COUNT","k":"query","n":"func","or":"func","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"refine_country","or":"refine.country","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"refine_type","or":"refine.type","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"x","or":"x","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"y","or":"y","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/analyze","q":{"exist":["dataset","func","refine_country","refine_type","x","y"]},"r":{},"s":[{"lit":"analyze"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"analyze","name__orig":"analyze","Name":"Analyze","name_":"analyze","name-":"analyze","NAME":"ANALYZE","index$":0}, {"active":true,"entity":"analyze","key$":"BasicAnalyzeFlow","kind":"basic","name":"BasicAnalyzeFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"analyze_ref01"}}],"index$":0}]}, 'Analyze', {"GET /analyze":{"protocol":"http","parameters":[{"name":"dataset","in":"query","required":true,"description":"Dataset identifier","schema":{"type":"string","default":"global-shark-attack"},"index$":0},{"name":"x","in":"query","description":"Field name for X-axis aggregation","schema":{"type":"string"},"index$":1},{"name":"y","in":"query","description":"Field name for Y-axis aggregation","schema":{"type":"string"},"index$":2},{"name":"func","in":"query","description":"Aggregation function to apply","schema":{"type":"string","enum":["COUNT","AVG","SUM","MIN","MAX"],"default":"COUNT"},"index$":3},{"name":"refine.type","in":"query","description":"Filter by incident type","schema":{"type":"string"},"index$":4},{"name":"refine.country","in":"query","description":"Filter by country","schema":{"type":"string"},"index$":5}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let analyze_ref01_data = Object.values(setup.data.existing.analyze)[0] as any

    // LIST
    const analyze_ref01_ent = client.Analyze()
    const analyze_ref01_match: any = {}

    const analyze_ref01_list = (await analyze_ref01_ent.list(analyze_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/analyze/AnalyzeTestData.json')

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
    ['analyze01','analyze02','analyze03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GLOBAL_SHARK_ATTACK_TEST_ANALYZE_ENTID': idmap,
    'GLOBAL_SHARK_ATTACK_TEST_LIVE': 'FALSE',
    'GLOBAL_SHARK_ATTACK_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['GLOBAL_SHARK_ATTACK_TEST_ANALYZE_ENTID']

  const live = 'TRUE' === env.GLOBAL_SHARK_ATTACK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GLOBAL_SHARK_ATTACK_TEST_ANALYZE_ENTID']
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
  
