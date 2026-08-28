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
  dataset: string
  func?: string
  refine_country?: string
  refine_type?: string
  x?: string
  y?: string
}

export interface Download {
  datasetid?: string
  fields?: Record<string, any>
  geometry?: Record<string, any>
  record_timestamp?: string
  recordid?: string
}

export interface DownloadListMatch {
  dataset: string
  format?: string
  refine_country?: string
  refine_type?: string
}

export interface Search {
  datasetid?: string
  fields?: Record<string, any>
  geometry?: Record<string, any>
  record_timestamp?: string
  recordid?: string
}

export interface SearchListMatch {
  dataset: string
  facet?: any[]
  q?: string
  refine_activity?: string
  refine_country?: string
  refine_species?: string
  refine_type?: string
  row?: number
  sort?: string
  start?: number
}

