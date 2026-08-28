-- Typed models for the GlobalSharkAttack SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Analyze
---@field x? string
---@field y? number

---@class AnalyzeListMatch
---@field dataset string
---@field func? string
---@field refine_country? string
---@field refine_type? string
---@field x? string
---@field y? string

---@class Download
---@field datasetid? string
---@field fields? table
---@field geometry? table
---@field record_timestamp? string
---@field recordid? string

---@class DownloadListMatch
---@field dataset string
---@field format? string
---@field refine_country? string
---@field refine_type? string

---@class Search
---@field datasetid? string
---@field fields? table
---@field geometry? table
---@field record_timestamp? string
---@field recordid? string

---@class SearchListMatch
---@field dataset string
---@field facet? table
---@field q? string
---@field refine_activity? string
---@field refine_country? string
---@field refine_species? string
---@field refine_type? string
---@field row? number
---@field sort? string
---@field start? number

local M = {}

return M
