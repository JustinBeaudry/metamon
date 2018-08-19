/**
 *
 * construct a custom error constructor and streamline
 *   the stack trace captured in the custom error
 *
 * @param {ErrorConstructor} (ErrorClass) [Error]
 * @returns {Error}
 *
 */
export default function ErrorFactory(ErrorClass=Error) {
  return class CustomError extends ErrorClass {
    constructor(...args) {
      super(...args);
      Error.captureStackTrace(this, CustomError);
    }
  }
}