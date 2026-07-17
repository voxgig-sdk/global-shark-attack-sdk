-- GlobalSharkAttack SDK configuration

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
            ["active"] = true,
            ["name"] = "x",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "y",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 1,
          },
        },
        ["name"] = "analyze",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["example"] = "global-shark-attack",
                      ["kind"] = "query",
                      ["name"] = "dataset",
                      ["orig"] = "dataset",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = "COUNT",
                      ["kind"] = "query",
                      ["name"] = "func",
                      ["orig"] = "func",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "refine_country",
                      ["orig"] = "refine_country",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "refine_type",
                      ["orig"] = "refine_type",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "x",
                      ["orig"] = "x",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "y",
                      ["orig"] = "y",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
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
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["download"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "datasetid",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "field",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "geometry",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "record_timestamp",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "recordid",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 4,
          },
        },
        ["name"] = "download",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["example"] = "global-shark-attack",
                      ["kind"] = "query",
                      ["name"] = "dataset",
                      ["orig"] = "dataset",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = "json",
                      ["kind"] = "query",
                      ["name"] = "format",
                      ["orig"] = "format",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "refine_country",
                      ["orig"] = "refine_country",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "refine_type",
                      ["orig"] = "refine_type",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
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
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["search"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "datasetid",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "field",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "geometry",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "record_timestamp",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "recordid",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 4,
          },
        },
        ["name"] = "search",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["example"] = "global-shark-attack",
                      ["kind"] = "query",
                      ["name"] = "dataset",
                      ["orig"] = "dataset",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "facet",
                      ["orig"] = "facet",
                      ["reqd"] = false,
                      ["type"] = "`$ARRAY`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "q",
                      ["orig"] = "q",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "refine_activity",
                      ["orig"] = "refine_activity",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "refine_country",
                      ["orig"] = "refine_country",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "refine_species",
                      ["orig"] = "refine_species",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "refine_type",
                      ["orig"] = "refine_type",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "row",
                      ["orig"] = "row",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "sort",
                      ["orig"] = "sort",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "start",
                      ["orig"] = "start",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
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
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
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
