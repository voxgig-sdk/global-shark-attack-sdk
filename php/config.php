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
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
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
              'short' => 'X-axis value',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'y',
              'short' => 'Aggregated Y-axis value',
              'type' => '`$NUMBER`',
            ],
          ],
          'name' => 'analyze',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'global-shark-attack',
                        'kind' => 'query',
                        'name' => 'dataset',
                        'orig' => 'dataset',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'COUNT',
                        'kind' => 'query',
                        'name' => 'func',
                        'orig' => 'func',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'refine_country',
                        'orig' => 'refine_country',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'refine_type',
                        'orig' => 'refine_type',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'x',
                        'orig' => 'x',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'y',
                        'orig' => 'y',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/analyze',
                  'parts' => [
                    'analyze',
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
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
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
              'short' => 'Dataset identifier',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'fields',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'geometry',
              'short' => 'GeoJSON geometry object',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'record_timestamp',
              'short' => 'Timestamp of record creation or update',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'recordid',
              'short' => 'Unique record identifier',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'download',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'global-shark-attack',
                        'kind' => 'query',
                        'name' => 'dataset',
                        'orig' => 'dataset',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'json',
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'refine_country',
                        'orig' => 'refine_country',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'refine_type',
                        'orig' => 'refine_type',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/download',
                  'parts' => [
                    'download',
                  ],
                  'select' => [
                    'exist' => [
                      'dataset',
                      'format',
                      'refine_country',
                      'refine_type',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
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
              'short' => 'Dataset identifier',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'fields',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'geometry',
              'short' => 'GeoJSON geometry object',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'record_timestamp',
              'short' => 'Timestamp of record creation or update',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'recordid',
              'short' => 'Unique record identifier',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'search',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'global-shark-attack',
                        'kind' => 'query',
                        'name' => 'dataset',
                        'orig' => 'dataset',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'facet',
                        'orig' => 'facet',
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'q',
                        'orig' => 'q',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'refine_activity',
                        'orig' => 'refine_activity',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'refine_country',
                        'orig' => 'refine_country',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'refine_species',
                        'orig' => 'refine_species',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'refine_type',
                        'orig' => 'refine_type',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 10,
                        'kind' => 'query',
                        'name' => 'row',
                        'orig' => 'row',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'start',
                        'orig' => 'start',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/search',
                  'parts' => [
                    'search',
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
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
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
