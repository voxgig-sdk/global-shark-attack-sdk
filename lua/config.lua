-- GlobalSharkAttack SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "GlobalSharkAttack",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://public.opendatasoft.com/api/records/1.0",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["analyze"] = {},
        ["download"] = {},
        ["search"] = {},
      },
    },
    entity = {
      ["analyze"] = {
        ["fields"] = {
          {
            ["name"] = "x",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "y",
            ["type"] = "`$NUMBER`",
          },
        },
        ["name"] = "analyze",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "global-shark-attack",
                      ["kind"] = "query",
                      ["name"] = "dataset",
                      ["orig"] = "dataset",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "COUNT",
                      ["kind"] = "query",
                      ["name"] = "func",
                      ["orig"] = "func",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "refine_country",
                      ["orig"] = "refine_country",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "refine_type",
                      ["orig"] = "refine_type",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "x",
                      ["orig"] = "x",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "y",
                      ["orig"] = "y",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/analyze",
                ["parts"] = {
                  "analyze",
                },
                ["select"] = {
                  ["exist"] = {
                    "dataset",
                    "func",
                    "refine_country",
                    "refine_type",
                    "x",
                    "y",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["download"] = {
        ["fields"] = {
          {
            ["name"] = "datasetid",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "fields",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "geometry",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "record_timestamp",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "recordid",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "download",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "global-shark-attack",
                      ["kind"] = "query",
                      ["name"] = "dataset",
                      ["orig"] = "dataset",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "json",
                      ["kind"] = "query",
                      ["name"] = "format",
                      ["orig"] = "format",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "refine_country",
                      ["orig"] = "refine_country",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "refine_type",
                      ["orig"] = "refine_type",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/download",
                ["parts"] = {
                  "download",
                },
                ["select"] = {
                  ["exist"] = {
                    "dataset",
                    "format",
                    "refine_country",
                    "refine_type",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["search"] = {
        ["fields"] = {
          {
            ["name"] = "datasetid",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "fields",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "geometry",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "record_timestamp",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "recordid",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "search",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "global-shark-attack",
                      ["kind"] = "query",
                      ["name"] = "dataset",
                      ["orig"] = "dataset",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "facet",
                      ["orig"] = "facet",
                      ["type"] = "`$ARRAY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "q",
                      ["orig"] = "q",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "refine_activity",
                      ["orig"] = "refine_activity",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "refine_country",
                      ["orig"] = "refine_country",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "refine_species",
                      ["orig"] = "refine_species",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "refine_type",
                      ["orig"] = "refine_type",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "row",
                      ["orig"] = "row",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "sort",
                      ["orig"] = "sort",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "start",
                      ["orig"] = "start",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/search",
                ["parts"] = {
                  "search",
                },
                ["select"] = {
                  ["exist"] = {
                    "dataset",
                    "facet",
                    "q",
                    "refine_activity",
                    "refine_country",
                    "refine_species",
                    "refine_type",
                    "row",
                    "sort",
                    "start",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
