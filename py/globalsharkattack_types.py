# Typed models for the GlobalSharkAttack SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Analyze:
    x: Optional[str] = None
    y: Optional[float] = None


@dataclass
class AnalyzeListMatch:
    x: Optional[str] = None
    y: Optional[float] = None


@dataclass
class Download:
    datasetid: Optional[str] = None
    field: Optional[dict] = None
    geometry: Optional[dict] = None
    record_timestamp: Optional[str] = None
    recordid: Optional[str] = None


@dataclass
class DownloadListMatch:
    datasetid: Optional[str] = None
    field: Optional[dict] = None
    geometry: Optional[dict] = None
    record_timestamp: Optional[str] = None
    recordid: Optional[str] = None


@dataclass
class Search:
    datasetid: Optional[str] = None
    field: Optional[dict] = None
    geometry: Optional[dict] = None
    record_timestamp: Optional[str] = None
    recordid: Optional[str] = None


@dataclass
class SearchListMatch:
    datasetid: Optional[str] = None
    field: Optional[dict] = None
    geometry: Optional[dict] = None
    record_timestamp: Optional[str] = None
    recordid: Optional[str] = None

