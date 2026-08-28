# Typed models for the GlobalSharkAttack SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Analyze(TypedDict, total=False):
    x: str
    y: float


class AnalyzeListMatchRequired(TypedDict):
    dataset: str


class AnalyzeListMatch(AnalyzeListMatchRequired, total=False):
    func: str
    refine_country: str
    refine_type: str
    x: str
    y: str


class Download(TypedDict, total=False):
    datasetid: str
    fields: dict
    geometry: dict
    record_timestamp: str
    recordid: str


class DownloadListMatchRequired(TypedDict):
    dataset: str


class DownloadListMatch(DownloadListMatchRequired, total=False):
    format: str
    refine_country: str
    refine_type: str


class Search(TypedDict, total=False):
    datasetid: str
    fields: dict
    geometry: dict
    record_timestamp: str
    recordid: str


class SearchListMatchRequired(TypedDict):
    dataset: str


class SearchListMatch(SearchListMatchRequired, total=False):
    facet: list
    q: str
    refine_activity: str
    refine_country: str
    refine_species: str
    refine_type: str
    row: int
    sort: str
    start: int
