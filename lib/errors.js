'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MissingIndexError = exports.UnsupportedError = undefined;

var _ErrorFactory = require('./ErrorFactory');

var _ErrorFactory2 = _interopRequireDefault(_ErrorFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @class
 * @ignore
 *
 */
class UnsupportedErrorConstructor extends Error {
  /**
   *
   * @desc An Error that is thrown when values that are not supported in an Enum are used
   * @param value
   */
  constructor(value) {
    super(`Unsupported value for enum value:  ${value}`);
  }
}
/**
 *
 * @class
 * @ignore
 *
 */
class MissingIndexErrorConstructor extends Error {
  /**
   *
   * @desc An Error that is thrown when a Model to be added to a Collection is missing the index field
   * @param {Model} model
   * @param {String} indexBy
   */
  constructor(model, indexBy) {
    super(`Model ${model.toJSON()} is missing index ${indexBy}`);
  }
}

/**
 *
 * @class UnsupportedError
 * @type {Error}
 */
const UnsupportedError = exports.UnsupportedError = (0, _ErrorFactory2.default)(null, UnsupportedErrorConstructor);
/**
 * @class MissingIndexError
 * @type {Error}
 */
const MissingIndexError = exports.MissingIndexError = (0, _ErrorFactory2.default)(null, MissingIndexErrorConstructor);