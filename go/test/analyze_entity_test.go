package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/global-shark-attack-sdk"
	"github.com/voxgig-sdk/global-shark-attack-sdk/core"

	vs "github.com/voxgig/struct"
)

func TestAnalyzeEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Analyze(nil)
		if ent == nil {
			t.Fatal("expected non-nil AnalyzeEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := analyzeBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "analyze." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set GLOBALSHARKATTACK_TEST_ANALYZE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		analyzeRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.analyze", setup.data)))
		var analyzeRef01Data map[string]any
		if len(analyzeRef01DataRaw) > 0 {
			analyzeRef01Data = core.ToMapAny(analyzeRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = analyzeRef01Data

		// LIST
		analyzeRef01Ent := client.Analyze(nil)
		analyzeRef01Match := map[string]any{}

		analyzeRef01ListResult, err := analyzeRef01Ent.List(analyzeRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, analyzeRef01ListOk := analyzeRef01ListResult.([]any)
		if !analyzeRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", analyzeRef01ListResult)
		}

	})
}

func analyzeBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "analyze", "AnalyzeTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read analyze test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse analyze test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"analyze01", "analyze02", "analyze03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("GLOBALSHARKATTACK_TEST_ANALYZE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GLOBALSHARKATTACK_TEST_ANALYZE_ENTID": idmap,
		"GLOBALSHARKATTACK_TEST_LIVE":      "FALSE",
		"GLOBALSHARKATTACK_TEST_EXPLAIN":   "FALSE",
		"GLOBALSHARKATTACK_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["GLOBALSHARKATTACK_TEST_ANALYZE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["GLOBALSHARKATTACK_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["GLOBALSHARKATTACK_APIKEY"],
			},
			extra,
		})
		client = sdk.NewGlobalSharkAttackSDK(core.ToMapAny(mergedOpts))
	}

	live := env["GLOBALSHARKATTACK_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["GLOBALSHARKATTACK_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
