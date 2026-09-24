<?php
declare(strict_types=1);

// GlobalSharkAttack SDK configuration

class GlobalSharkAttackConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "GlobalSharkAttack",
                "slug" => "global-shark-attack",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://public.opendatasoft.com/api/records/1.0",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "analyze" => [],
                    "download" => [],
                    "search" => [],
                ],
            ],
            "entity" => [
        'analyze' => [
          'fields' => [
            [
              'name' => 'x',
              'title' => 'X',
              'type' => '`$STRING`',
              'short' => 'X-axis value',
            ],
            [
              'name' => 'y',
              'title' => 'Y',
              'type' => '`$NUMBER`',
              'short' => 'Aggregated Y-axis value',
            ],
          ],
          'name' => 'analyze',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/analyze',
                  'segments' => [
                    [
                      'lit' => 'analyze',
                    ],
                  ],
                  'parts' => [
                    'analyze',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'dataset',
                        'orig' => 'dataset',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                        'example' => 'global-shark-attack',
                      ],
                      [
                        'name' => 'func',
                        'orig' => 'func',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'COUNT',
                      ],
                      [
                        'name' => 'refine_country',
                        'orig' => 'refine_country',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'refine_type',
                        'orig' => 'refine_type',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'x',
                        'orig' => 'x',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'y',
                        'orig' => 'y',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'dataset',
                      'func',
                      'refine_country',
                      'refine_type',
                      'x',
                      'y',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'download' => [
          'fields' => [
            [
              'name' => 'datasetid',
              'title' => 'Datasetid',
              'type' => '`$STRING`',
              'short' => 'Dataset identifier',
            ],
            [
              'name' => 'fields',
              'title' => 'Fields',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'geometry',
              'title' => 'Geometry',
              'type' => '`$OBJECT`',
              'short' => 'GeoJSON geometry object',
            ],
            [
              'name' => 'record_timestamp',
              'title' => 'Record Timestamp',
              'type' => '`$STRING`',
              'short' => 'Timestamp of record creation or update',
              'format' => 'date-time',
            ],
            [
              'name' => 'recordid',
              'title' => 'Recordid',
              'type' => '`$STRING`',
              'short' => 'Unique record identifier',
            ],
          ],
          'name' => 'download',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/download',
                  'segments' => [
                    [
                      'lit' => 'download',
                    ],
                  ],
                  'parts' => [
                    'download',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'dataset',
                        'orig' => 'dataset',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                        'example' => 'global-shark-attack',
                      ],
                      [
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'json',
                      ],
                      [
                        'name' => 'refine_country',
                        'orig' => 'refine_country',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'refine_type',
                        'orig' => 'refine_type',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'dataset',
                      'format',
                      'refine_country',
                      'refine_type',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'search' => [
          'fields' => [
            [
              'name' => 'datasetid',
              'title' => 'Datasetid',
              'type' => '`$STRING`',
              'short' => 'Dataset identifier',
            ],
            [
              'name' => 'fields',
              'title' => 'Fields',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'geometry',
              'title' => 'Geometry',
              'type' => '`$OBJECT`',
              'short' => 'GeoJSON geometry object',
            ],
            [
              'name' => 'record_timestamp',
              'title' => 'Record Timestamp',
              'type' => '`$STRING`',
              'short' => 'Timestamp of record creation or update',
              'format' => 'date-time',
            ],
            [
              'name' => 'recordid',
              'title' => 'Recordid',
              'type' => '`$STRING`',
              'short' => 'Unique record identifier',
            ],
          ],
          'name' => 'search',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/search',
                  'segments' => [
                    [
                      'lit' => 'search',
                    ],
                  ],
                  'parts' => [
                    'search',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'dataset',
                        'orig' => 'dataset',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                        'example' => 'global-shark-attack',
                      ],
                      [
                        'name' => 'facet',
                        'orig' => 'facet',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'q',
                        'orig' => 'q',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'refine_activity',
                        'orig' => 'refine_activity',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'refine_country',
                        'orig' => 'refine_country',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'refine_species',
                        'orig' => 'refine_species',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'refine_type',
                        'orig' => 'refine_type',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'row',
                        'orig' => 'row',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 10,
                      ],
                      [
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'start',
                        'orig' => 'start',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 0,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'dataset',
                      'facet',
                      'q',
                      'refine_activity',
                      'refine_country',
                      'refine_species',
                      'refine_type',
                      'row',
                      'sort',
                      'start',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return GlobalSharkAttackFeatures::make_feature($name);
    }
}
