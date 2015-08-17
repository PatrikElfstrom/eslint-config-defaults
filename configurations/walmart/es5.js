"use strict";

var _ = require("lodash");

// ESLint Core
var bestPractices = require("../../rules/eslint/best-practices/walmart.js");
var errors = require("../../rules/eslint/errors/walmart.js");
var es6 = require("../../rules/eslint/es6/off.js");
var legacy = require("../../rules/eslint/legacy/walmart.js");
var node = require("../../rules/eslint/node/off.js");
var strict = require("../../rules/eslint/strict/walmart.js");
var style = require("../../rules/eslint/style/walmart.js");
var variables = require("../../rules/eslint/variables/walmart.js");

// Plugins
var filenames = require("../../rules/react/walmart.js");

var defaults = {
  "ecmaFeatures": {},
  "env": {},
  "globals": {
    "require": false,
    "module": false,
    "process": false
  },
  "plugins": [],
  "rules": {}
};

module.exports = _.merge(
  defaults,
  bestPractices,
  errors,
  es6,
  legacy,
  node,
  strict,
  style,
  variables,
  filenames
);
