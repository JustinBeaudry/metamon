/**
 *
 * construct a custom error constructor and streamline
 *   the stack trace captured in the custom error
 *
 * @param {String} (message)
 * @param {ErrorConstructor} (ErrorClass) [Error]
 * @returns {Error}
 *
 */
export default function ErrorFactory(message, ErrorClass=Error) {
  return class CustomError extends ErrorClass {
    constructor(...args) {
      if (message) {
        args.unshift(message);
      }
      super(...args);
      if (ErrorClass.captureStackTrace) {
        ErrorClass.captureStackTrace(this, CustomError);
      }
    }
  }
}