<?php
declare(strict_types=1);

// Typed models for the GlobalSharkAttack SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Analyze entity data model. */
class Analyze
{
    public ?string $x = null;
    public ?float $y = null;
}

/** Match filter for Analyze#list (any subset of Analyze fields). */
class AnalyzeListMatch
{
    public ?string $x = null;
    public ?float $y = null;
}

/** Download entity data model. */
class Download
{
    public ?string $datasetid = null;
    public ?array $field = null;
    public ?array $geometry = null;
    public ?string $record_timestamp = null;
    public ?string $recordid = null;
}

/** Match filter for Download#list (any subset of Download fields). */
class DownloadListMatch
{
    public ?string $datasetid = null;
    public ?array $field = null;
    public ?array $geometry = null;
    public ?string $record_timestamp = null;
    public ?string $recordid = null;
}

/** Search entity data model. */
class Search
{
    public ?string $datasetid = null;
    public ?array $field = null;
    public ?array $geometry = null;
    public ?string $record_timestamp = null;
    public ?string $recordid = null;
}

/** Match filter for Search#list (any subset of Search fields). */
class SearchListMatch
{
    public ?string $datasetid = null;
    public ?array $field = null;
    public ?array $geometry = null;
    public ?string $record_timestamp = null;
    public ?string $recordid = null;
}

