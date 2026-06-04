<?php
declare(strict_types=1);

// Analyze entity test

require_once __DIR__ . '/../globalsharkattack_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class AnalyzeEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = GlobalSharkAttackSDK::test(null, null);
        $ent = $testsdk->Analyze(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = analyze_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["list"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "analyze." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set GLOBALSHARKATTACK_TEST_ANALYZE_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $analyze_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.analyze")));
        $analyze_ref01_data = null;
        if (count($analyze_ref01_data_raw) > 0) {
            $analyze_ref01_data = Helpers::to_map($analyze_ref01_data_raw[0][1]);
        }

        // LIST
        $analyze_ref01_ent = $client->Analyze(null);
        $analyze_ref01_match = [];

        [$analyze_ref01_list_result, $err] = $analyze_ref01_ent->list($analyze_ref01_match, null);
        $this->assertNull($err);
        $this->assertIsArray($analyze_ref01_list_result);

    }
}

function analyze_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/analyze/AnalyzeTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = GlobalSharkAttackSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["analyze01", "analyze02", "analyze03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("GLOBALSHARKATTACK_TEST_ANALYZE_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "GLOBALSHARKATTACK_TEST_ANALYZE_ENTID" => $idmap,
        "GLOBALSHARKATTACK_TEST_LIVE" => "FALSE",
        "GLOBALSHARKATTACK_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["GLOBALSHARKATTACK_TEST_ANALYZE_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["GLOBALSHARKATTACK_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
            ],
            $extra ?? [],
        ]);
        $client = new GlobalSharkAttackSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["GLOBALSHARKATTACK_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["GLOBALSHARKATTACK_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
