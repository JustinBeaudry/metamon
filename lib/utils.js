'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unix = unix;
exports.toJSON = toJSON;
exports.getType = getType;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * returns the current time as a unix timestamp
 *
 * @returns {Number}
 */
function unix() {
  return Math.floor(Date.now() / 1000);
}

/**
 *
 * JSON stringifies data
 *
 * @param {Object} data
 * @returns {String}
 */
function toJSON(data) {
  return JSON.stringify(data, null, 2);
}

/**
 *
 * Returns the type of any value. Creates promise and array types for simplicity
 *
 * @param {*} values
 * @returns {String}
 */
function getType(values) {
  if (_lodash2.default.isFunction(values && values.then)) {
    return 'promise';
  } else if (_lodash2.default.isArray(values)) {
    return 'array';
  } else if (_lodash2.default.isNull(values)) {
    return 'null';
  } else if (_lodash2.default.isUndefined(values)) {
    return 'undefined';
  } else {
    return typeof values;
  }
}