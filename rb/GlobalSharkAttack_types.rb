# frozen_string_literal: true

# Typed models for the GlobalSharkAttack SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Analyze entity data model.
#
# @!attribute [rw] x
#   @return [String, nil]
#
# @!attribute [rw] y
#   @return [Float, nil]
Analyze = Struct.new(
  :x,
  :y,
  keyword_init: true
)

# Request payload for Analyze#list.
#
# @!attribute [rw] dataset
#   @return [String]
#
# @!attribute [rw] func
#   @return [String, nil]
#
# @!attribute [rw] refine_country
#   @return [String, nil]
#
# @!attribute [rw] refine_type
#   @return [String, nil]
#
# @!attribute [rw] x
#   @return [String, nil]
#
# @!attribute [rw] y
#   @return [String, nil]
AnalyzeListMatch = Struct.new(
  :dataset,
  :func,
  :refine_country,
  :refine_type,
  :x,
  :y,
  keyword_init: true
)

# Download entity data model.
#
# @!attribute [rw] datasetid
#   @return [String, nil]
#
# @!attribute [rw] fields
#   @return [Hash, nil]
#
# @!attribute [rw] geometry
#   @return [Hash, nil]
#
# @!attribute [rw] record_timestamp
#   @return [String, nil]
#
# @!attribute [rw] recordid
#   @return [String, nil]
Download = Struct.new(
  :datasetid,
  :fields,
  :geometry,
  :record_timestamp,
  :recordid,
  keyword_init: true
)

# Request payload for Download#list.
#
# @!attribute [rw] dataset
#   @return [String]
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] refine_country
#   @return [String, nil]
#
# @!attribute [rw] refine_type
#   @return [String, nil]
DownloadListMatch = Struct.new(
  :dataset,
  :format,
  :refine_country,
  :refine_type,
  keyword_init: true
)

# Search entity data model.
#
# @!attribute [rw] datasetid
#   @return [String, nil]
#
# @!attribute [rw] fields
#   @return [Hash, nil]
#
# @!attribute [rw] geometry
#   @return [Hash, nil]
#
# @!attribute [rw] record_timestamp
#   @return [String, nil]
#
# @!attribute [rw] recordid
#   @return [String, nil]
Search = Struct.new(
  :datasetid,
  :fields,
  :geometry,
  :record_timestamp,
  :recordid,
  keyword_init: true
)

# Request payload for Search#list.
#
# @!attribute [rw] dataset
#   @return [String]
#
# @!attribute [rw] facet
#   @return [Array, nil]
#
# @!attribute [rw] q
#   @return [String, nil]
#
# @!attribute [rw] refine_activity
#   @return [String, nil]
#
# @!attribute [rw] refine_country
#   @return [String, nil]
#
# @!attribute [rw] refine_species
#   @return [String, nil]
#
# @!attribute [rw] refine_type
#   @return [String, nil]
#
# @!attribute [rw] row
#   @return [Integer, nil]
#
# @!attribute [rw] sort
#   @return [String, nil]
#
# @!attribute [rw] start
#   @return [Integer, nil]
SearchListMatch = Struct.new(
  :dataset,
  :facet,
  :q,
  :refine_activity,
  :refine_country,
  :refine_species,
  :refine_type,
  :row,
  :sort,
  :start,
  keyword_init: true
)

