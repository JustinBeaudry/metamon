import ErrorFactory from './ErrorFactory';
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
export const UnsupportedError = ErrorFactory(null, UnsupportedErrorConstructor);
/**
 * @class MissingIndexError
 * @type {Error}
 */
export const MissingIndexError = ErrorFactory(null, MissingIndexErrorConstructor);
