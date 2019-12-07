/**
 * this module is sampled from https://www.npmjs.com/package/sha.js,
 * but reduced to the minimal implementation necessary for this package
 */

var exports = module.exports = function SHA (algorithm) {
  algorithm = algorithm.toLowerCase()

  var Algorithm = exports[algorithm]
  if (!Algorithm) throw new Error(algorithm + ' is not supported (we accept pull requests)')

  return new Algorithm()
}

exports.sha1 = require('./sha1')
