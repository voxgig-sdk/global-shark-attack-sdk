// Typed models for the GlobalSharkAttack SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Analyze {
  x?: string
  y?: number
}

export interface AnalyzeListMatch {
  x?: string
  y?: number
}

export interface Download {
  datasetid?: string
  field?: Record<string, any>
  geometry?: Record<string, any>
  record_timestamp?: string
  recordid?: string
}

export interface DownloadListMatch {
  datasetid?: string
  field?: Record<string, any>
  geometry?: Record<string, any>
  record_timestamp?: string
  recordid?: string
}

export interface Search {
  datasetid?: string
  field?: Record<string, any>
  geometry?: Record<string, any>
  record_timestamp?: string
  recordid?: string
}

export interface SearchListMatch {
  datasetid?: string
  field?: Record<string, any>
  geometry?: Record<string, any>
  record_timestamp?: string
  recordid?: string
}

