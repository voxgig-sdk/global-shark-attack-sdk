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
# @!attribute [rw] x
#   @return [String, nil]
#
# @!attribute [rw] y
#   @return [Float, nil]
AnalyzeListMatch = Struct.new(
  :x,
  :y,
  keyword_init: true
)

# Download entity data model.
#
# @!attribute [rw] datasetid
#   @return [String, nil]
#
# @!attribute [rw] field
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
  :field,
  :geometry,
  :record_timestamp,
  :recordid,
  keyword_init: true
)

# Request payload for Download#list.
#
# @!attribute [rw] datasetid
#   @return [String, nil]
#
# @!attribute [rw] field
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
DownloadListMatch = Struct.new(
  :datasetid,
  :field,
  :geometry,
  :record_timestamp,
  :recordid,
  keyword_init: true
)

# Search entity data model.
#
# @!attribute [rw] datasetid
#   @return [String, nil]
#
# @!attribute [rw] field
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
  :field,
  :geometry,
  :record_timestamp,
  :recordid,
  keyword_init: true
)

# Request payload for Search#list.
#
# @!attribute [rw] datasetid
#   @return [String, nil]
#
# @!attribute [rw] field
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
SearchListMatch = Struct.new(
  :datasetid,
  :field,
  :geometry,
  :record_timestamp,
  :recordid,
  keyword_init: true
)

