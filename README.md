# GlobalSharkAttack SDK

Query the Global Shark Attack File (GSAF) of historical human-shark interactions via OpenDataSoft

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Global Shark Attack API

The Global Shark Attack API exposes the [Global Shark Attack File](https://www.sharkattackfile.net/) (GSAF) dataset through the public [OpenDataSoft](https://public.opendatasoft.com/) catalogue. GSAF is a long-running, volunteer-maintained record of documented human-shark interactions worldwide, with entries categorised as unprovoked, provoked, boat-related, sea-disaster, or questionable.

What you get from the API:

- Per-incident records describing date, location, country, activity, victim details, injury description, species (where known), and incident type.
- Search and filter via OpenDataSoft's Search API v1 (`/api/records/1.0/search/`), including text queries, faceted refinement, and date filters.
- Dataset metadata and the list of supported export formats for bulk download.

The API is served over HTTPS from `public.opendatasoft.com` and is CORS-enabled, so it can be called directly from browsers. No API key is required for the public catalogue, though OpenDataSoft applies per-IP rate limits — heavy or automated use should be paced accordingly. Records reflect historical reports of varying provenance and should be treated as research data rather than an authoritative incident registry.

## Try it

**TypeScript**
```bash
npm install global-shark-attack
```

**Python**
```bash
pip install global-shark-attack-sdk
```

**PHP**
```bash
composer require voxgig/global-shark-attack-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/global-shark-attack-sdk/go
```

**Ruby**
```bash
gem install global-shark-attack-sdk
```

**Lua**
```bash
luarocks install global-shark-attack-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { GlobalSharkAttackSDK } from 'global-shark-attack'

const client = new GlobalSharkAttackSDK({})

// List all analyzes
const analyzes = await client.Analyze().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o global-shark-attack-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "global-shark-attack": {
      "command": "/abs/path/to/global-shark-attack-mcp"
    }
  }
}
```

## Entities

The API exposes 3 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Analyze** | Retrieve dataset metadata, facets, and aggregate views describing the global-shark-attack dataset. | `/analyze` |
| **Download** | Export the dataset in bulk through OpenDataSoft's download endpoint (e.g. `GET /api/records/1.0/download/`) in formats such as CSV, JSON, or GeoJSON. | `/download` |
| **Search** | Query individual shark-interaction records with full-text search, facet refinement, and date filters via `GET /api/records/1.0/search/`. | `/search` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from globalsharkattack_sdk import GlobalSharkAttackSDK

client = GlobalSharkAttackSDK({})

# List all analyzes
analyzes, err = client.Analyze(None).list(None, None)
```

### PHP

```php
<?php
require_once 'globalsharkattack_sdk.php';

$client = new GlobalSharkAttackSDK([]);

// List all analyzes
[$analyzes, $err] = $client->Analyze(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/global-shark-attack-sdk/go"

client := sdk.NewGlobalSharkAttackSDK(map[string]any{})

// List all analyzes
analyzes, err := client.Analyze(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "GlobalSharkAttack_sdk"

client = GlobalSharkAttackSDK.new({})

# List all analyzes
analyzes, err = client.Analyze(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("global-shark-attack_sdk")

local client = sdk.new({})

-- List all analyzes
local analyzes, err = client:Analyze(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = GlobalSharkAttackSDK.test()
const result = await client.Analyze().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = GlobalSharkAttackSDK.test(None, None)
result, err = client.Analyze(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = GlobalSharkAttackSDK::test(null, null);
[$result, $err] = $client->Analyze(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Analyze(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = GlobalSharkAttackSDK.test(nil, nil)
result, err = client.Analyze(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Analyze(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Global Shark Attack API

- Upstream: [https://public.opendatasoft.com/explore/dataset/global-shark-attack/](https://public.opendatasoft.com/explore/dataset/global-shark-attack/)
- API docs: [https://help.opendatasoft.com/apis/ods-search-v1/](https://help.opendatasoft.com/apis/ods-search-v1/)

- Data is sourced from the Global Shark Attack File (GSAF), a long-running compilation of shark interaction reports.
- Served via the OpenDataSoft public platform; usage is subject to OpenDataSoft's terms of service.
- No explicit reuse licence is published on the catalogue entry — attribute GSAF and the OpenDataSoft host when redistributing.
- Treat the data as research material: entries are historical reports of varying provenance, not authoritative incident records.

---

Generated from the Global Shark Attack API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
