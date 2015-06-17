'use strict';

module.exports = {
  // enforces error handling in callbacks (node environment)
  'handle-callback-err': 0,
  // disallow mixing regular variable and require declarations
  'no-mixed-requires': 0,
  // disallow use of new operator with the require function
  'no-new-require': 0,
  // disallow string concatenation with __dirname and __filename
  'no-path-concat': 0,
  // disallow process.exit()
  'no-process-exit': 0,
  // restrict usage of specified node modules
  'no-restricted-modules': 0,
  // disallow use of synchronous methods (off by default)
  'no-sync': 0
};
