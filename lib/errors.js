"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
class UnsupportedError extends Error {
  /**
   *
   * @desc An Error that is thrown when values that are not supported in an Enum are used
   * @param value
   */
  constructor(value) {
    super(`Unsupported value for enum value:  ${value}`);

    // maintain stack trace from where the error was thrown; v8 only
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, UnsupportedError);
    }
  }
}

exports.UnsupportedError = UnsupportedError;
class MissingIndexError extends Error {
  /**
   *
   * @desc An Error that is thrown when a Model to be added to a Collection is missing the index field
   * @param {Model} model
   * @param {String} indexBy
   */
  constructor(model, indexBy) {
    super(`Model ${model.toJSON()} is missing index ${indexBy}`);

    // maintain stack trace from where the error was thrown; v8 only
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, MissingIndexError);
    }
  }
}
exports.MissingIndexError = MissingIndexError;