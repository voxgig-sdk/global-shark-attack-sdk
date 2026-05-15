<?php
declare(strict_types=1);

// GlobalSharkAttack SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

GlobalSharkAttackUtility::setRegistrar(function (GlobalSharkAttackUtility $u): void {
    $u->clean = [GlobalSharkAttackClean::class, 'call'];
    $u->done = [GlobalSharkAttackDone::class, 'call'];
    $u->make_error = [GlobalSharkAttackMakeError::class, 'call'];
    $u->feature_add = [GlobalSharkAttackFeatureAdd::class, 'call'];
    $u->feature_hook = [GlobalSharkAttackFeatureHook::class, 'call'];
    $u->feature_init = [GlobalSharkAttackFeatureInit::class, 'call'];
    $u->fetcher = [GlobalSharkAttackFetcher::class, 'call'];
    $u->make_fetch_def = [GlobalSharkAttackMakeFetchDef::class, 'call'];
    $u->make_context = [GlobalSharkAttackMakeContext::class, 'call'];
    $u->make_options = [GlobalSharkAttackMakeOptions::class, 'call'];
    $u->make_request = [GlobalSharkAttackMakeRequest::class, 'call'];
    $u->make_response = [GlobalSharkAttackMakeResponse::class, 'call'];
    $u->make_result = [GlobalSharkAttackMakeResult::class, 'call'];
    $u->make_point = [GlobalSharkAttackMakePoint::class, 'call'];
    $u->make_spec = [GlobalSharkAttackMakeSpec::class, 'call'];
    $u->make_url = [GlobalSharkAttackMakeUrl::class, 'call'];
    $u->param = [GlobalSharkAttackParam::class, 'call'];
    $u->prepare_auth = [GlobalSharkAttackPrepareAuth::class, 'call'];
    $u->prepare_body = [GlobalSharkAttackPrepareBody::class, 'call'];
    $u->prepare_headers = [GlobalSharkAttackPrepareHeaders::class, 'call'];
    $u->prepare_method = [GlobalSharkAttackPrepareMethod::class, 'call'];
    $u->prepare_params = [GlobalSharkAttackPrepareParams::class, 'call'];
    $u->prepare_path = [GlobalSharkAttackPreparePath::class, 'call'];
    $u->prepare_query = [GlobalSharkAttackPrepareQuery::class, 'call'];
    $u->result_basic = [GlobalSharkAttackResultBasic::class, 'call'];
    $u->result_body = [GlobalSharkAttackResultBody::class, 'call'];
    $u->result_headers = [GlobalSharkAttackResultHeaders::class, 'call'];
    $u->transform_request = [GlobalSharkAttackTransformRequest::class, 'call'];
    $u->transform_response = [GlobalSharkAttackTransformResponse::class, 'call'];
});
