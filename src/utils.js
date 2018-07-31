import _ from 'lodash';
/**
 *
 * returns the current time as a unix timestamp
 *
 * @returns {Number}
 */
export function unix() {
  return Math.floor(Date.now() / 1000);
}
/**
 *
 * JSON stringifies data
 *
 * @param {Object} data
 * @returns {String}
 */
export function toJSON(data) {
  return JSON.stringify(data, null, 2);
}
/**
 *
 * Returns the type of any value. Creates promise and array types for simplicity
 *
 * @param {*} values
 * @returns {String}
 */
export function getType(values) {
  if (_.isFunction(values && values.then)) {
    return 'promise';
  } else if (_.isArray(values)) {
    return 'array';
  } else if (_.isNull(values)) {
    return 'null';
  } else if (_.isUndefined(values)) {
    return 'undefined';
  } else {
    return typeof values;
  }
}