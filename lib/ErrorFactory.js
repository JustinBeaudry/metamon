"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ErrorFactory;
/**
 *
 * construct a custom error constructor and streamline
 *   the stack trace captured in the custom error
 *
 * @param {ErrorConstructor} (ErrorClass) [Error]
 * @returns {Error}
 *
 */
function ErrorFactory(ErrorClass = Error) {
  return class CustomError extends ErrorClass {
    constructor(...args) {
      super(...args);
      Error.captureStackTrace(this, CustomError);
    }
  };
}