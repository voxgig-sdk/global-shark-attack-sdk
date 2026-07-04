// Typed models for the GlobalSharkAttack SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Analyze is the typed data model for the analyze entity.
type Analyze struct {
	X *string `json:"x,omitempty"`
	Y *float64 `json:"y,omitempty"`
}

// AnalyzeListMatch mirrors the analyze fields as an all-optional match
// filter (Go analog of Partial<Analyze>).
type AnalyzeListMatch struct {
	X *string `json:"x,omitempty"`
	Y *float64 `json:"y,omitempty"`
}

// Download is the typed data model for the download entity.
type Download struct {
	Datasetid *string `json:"datasetid,omitempty"`
	Field *map[string]any `json:"field,omitempty"`
	Geometry *map[string]any `json:"geometry,omitempty"`
	RecordTimestamp *string `json:"record_timestamp,omitempty"`
	Recordid *string `json:"recordid,omitempty"`
}

// DownloadListMatch mirrors the download fields as an all-optional match
// filter (Go analog of Partial<Download>).
type DownloadListMatch struct {
	Datasetid *string `json:"datasetid,omitempty"`
	Field *map[string]any `json:"field,omitempty"`
	Geometry *map[string]any `json:"geometry,omitempty"`
	RecordTimestamp *string `json:"record_timestamp,omitempty"`
	Recordid *string `json:"recordid,omitempty"`
}

// Search is the typed data model for the search entity.
type Search struct {
	Datasetid *string `json:"datasetid,omitempty"`
	Field *map[string]any `json:"field,omitempty"`
	Geometry *map[string]any `json:"geometry,omitempty"`
	RecordTimestamp *string `json:"record_timestamp,omitempty"`
	Recordid *string `json:"recordid,omitempty"`
}

// SearchListMatch mirrors the search fields as an all-optional match
// filter (Go analog of Partial<Search>).
type SearchListMatch struct {
	Datasetid *string `json:"datasetid,omitempty"`
	Field *map[string]any `json:"field,omitempty"`
	Geometry *map[string]any `json:"geometry,omitempty"`
	RecordTimestamp *string `json:"record_timestamp,omitempty"`
	Recordid *string `json:"recordid,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
