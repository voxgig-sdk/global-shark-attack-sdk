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

/** Request payload for Analyze#list. */
class AnalyzeListMatch
{
    public string $dataset;
    public ?string $func = null;
    public ?string $refine_country = null;
    public ?string $refine_type = null;
    public ?string $x = null;
    public ?string $y = null;
}

/** Download entity data model. */
class Download
{
    public ?string $datasetid = null;
    public ?array $fields = null;
    public ?array $geometry = null;
    public ?string $record_timestamp = null;
    public ?string $recordid = null;
}

/** Request payload for Download#list. */
class DownloadListMatch
{
    public string $dataset;
    public ?string $format = null;
    public ?string $refine_country = null;
    public ?string $refine_type = null;
}

/** Search entity data model. */
class Search
{
    public ?string $datasetid = null;
    public ?array $fields = null;
    public ?array $geometry = null;
    public ?string $record_timestamp = null;
    public ?string $recordid = null;
}

/** Request payload for Search#list. */
class SearchListMatch
{
    public string $dataset;
    public ?array $facet = null;
    public ?string $q = null;
    public ?string $refine_activity = null;
    public ?string $refine_country = null;
    public ?string $refine_species = null;
    public ?string $refine_type = null;
    public ?int $row = null;
    public ?string $sort = null;
    public ?int $start = null;
}

