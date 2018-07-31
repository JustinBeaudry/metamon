import {UnsupportedError} from './errors';
import Serializable from './Serializable';
import {getType} from './utils';
/**
 *
 * @extends Serializable
 */
class Enum extends Serializable {
  /**
   *  An Enum constructor can take many different types to construct an Enum from:
   *
   * * String
   * * Comma-Delimited String
   * * Object
   * * Array
   * * Array of Objects
   * * Array of Strings
   * * Array of Arrays of Object
   * * etc.
   *
   * Once created an Enum is immutable.
   *
   * Enums inherit from the Serializable class so it also has:
   *
   * * `toObject()`
   * * `toJSON()`
   *
   * @example
   * const states = new Enum([
   *   'OPEN',
   *   'IN_PROGRESS',
   *   'CLOSED'
   * ]);
   *
   * console.info(states.OPEN) // 'OPEN'
   *
   * states.DONE = 'DONE'
   * console.info(states.DONE) // undefined
   *
   * const other_states = new Enum({
   *   'START': 'START',
   *   'IN_PROGRESS': 'IN_PROGRESS',
   *   'DONE': 'DONE'
   * })
   *
   * console.info(other_states.START) // 'START'
   *
   * other_states.DONE = 'DONE';
   * console.info(other_states.DONE) // undefined
   *
   * @summary
   * An Enum helper class that allows the user of many various setting methods
   *
   * @param {Object|Array<Object|String>|String} values
   * @throws {UnsupportedError}
   */
  constructor(values) {
    super();
    set.call(this, values);
    Object.freeze(this);
  }
}
/**
 *
 * @private
 * @param values
 */
function set(values) {
  switch (getType(values)) {
    case 'function':
      throw new UnsupportedError(values.name);
    case 'promise':
      throw new UnsupportedError(typeof values);
    case 'array':
      setFromArray.call(this, values);
      break;
    case 'object':
      setFromObject.call(this, values);
      break;
    case 'string':
      if (values.indexOf(',') > -1) {
        setFromArray.call(this, values.split(','));
      } else {
        setFromString.call(this, values);
      }
      break;
    default:
      throw new UnsupportedError(typeof values);
  }
}
/**
 *
 * @private
 * @param {Array} values
 */
function setFromArray(values) {
  for (let value of values) {
    set.call(this, value);
  }
}
/**
 *
 * @private
 * @param {Object} values
 */
function setFromObject(values) {
  for (let key of Object.keys(values)) {
    Object.assign(this, {
      [key]: values[key]
    });
  }
}
/**
 *
 * @private
 * @param {String} value
 */
function setFromString(value) {
  value = value.trim();
  Object.assign(this, {
    [value]: value
  });
}
export default Enum;
