# GlobalSharkAttack SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

GlobalSharkAttackUtility.registrar = ->(u) {
  u.clean = GlobalSharkAttackUtilities::Clean
  u.done = GlobalSharkAttackUtilities::Done
  u.make_error = GlobalSharkAttackUtilities::MakeError
  u.feature_add = GlobalSharkAttackUtilities::FeatureAdd
  u.feature_hook = GlobalSharkAttackUtilities::FeatureHook
  u.feature_init = GlobalSharkAttackUtilities::FeatureInit
  u.fetcher = GlobalSharkAttackUtilities::Fetcher
  u.make_fetch_def = GlobalSharkAttackUtilities::MakeFetchDef
  u.make_context = GlobalSharkAttackUtilities::MakeContext
  u.make_options = GlobalSharkAttackUtilities::MakeOptions
  u.make_request = GlobalSharkAttackUtilities::MakeRequest
  u.make_response = GlobalSharkAttackUtilities::MakeResponse
  u.make_result = GlobalSharkAttackUtilities::MakeResult
  u.make_point = GlobalSharkAttackUtilities::MakePoint
  u.make_spec = GlobalSharkAttackUtilities::MakeSpec
  u.make_url = GlobalSharkAttackUtilities::MakeUrl
  u.param = GlobalSharkAttackUtilities::Param
  u.prepare_auth = GlobalSharkAttackUtilities::PrepareAuth
  u.prepare_body = GlobalSharkAttackUtilities::PrepareBody
  u.prepare_headers = GlobalSharkAttackUtilities::PrepareHeaders
  u.prepare_method = GlobalSharkAttackUtilities::PrepareMethod
  u.prepare_params = GlobalSharkAttackUtilities::PrepareParams
  u.prepare_path = GlobalSharkAttackUtilities::PreparePath
  u.prepare_query = GlobalSharkAttackUtilities::PrepareQuery
  u.result_basic = GlobalSharkAttackUtilities::ResultBasic
  u.result_body = GlobalSharkAttackUtilities::ResultBody
  u.result_headers = GlobalSharkAttackUtilities::ResultHeaders
  u.transform_request = GlobalSharkAttackUtilities::TransformRequest
  u.transform_response = GlobalSharkAttackUtilities::TransformResponse
}
