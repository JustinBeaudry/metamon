/**
 *
 * construct a custom error constructor and streamline
 *   the stack trace captured in the custom error
 *
 * @param {String|ErrorConstructor} (message)
 * @param {ErrorConstructor} (ErrorClass)
 * @returns {Error}
 *
 */
function ErrorFactory(message, ErrorClass=Error) {
  if (typeof message === 'function') {
    ErrorClass = message;
  }
  return class CustomError extends ErrorClass {
    constructor(...args) {
      if (typeof message === 'string') {
        args.unshift(message);
      }
      super(...args);
      if (typeof ErrorClass.captureStackTrace === 'function') {
        ErrorClass.captureStackTrace(this, CustomError);
      }
    }
  }
}

export default ErrorFactory;