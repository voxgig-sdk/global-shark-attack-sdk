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
---@field x? string
---@field y? number

---@class Download
---@field datasetid? string
---@field field? table
---@field geometry? table
---@field record_timestamp? string
---@field recordid? string

---@class DownloadListMatch
---@field datasetid? string
---@field field? table
---@field geometry? table
---@field record_timestamp? string
---@field recordid? string

---@class Search
---@field datasetid? string
---@field field? table
---@field geometry? table
---@field record_timestamp? string
---@field recordid? string

---@class SearchListMatch
---@field datasetid? string
---@field field? table
---@field geometry? table
---@field record_timestamp? string
---@field recordid? string

local M = {}

return M
