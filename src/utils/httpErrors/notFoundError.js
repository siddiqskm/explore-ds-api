
const {CustomError} = require('./customError');
const {HttpStatusCode} = require('./httpStatusCodes');

const DEFAULT_CODE = 404;
const DEFAULT_MESSAGE = 'Not Found Error';

/**
 * extends CustomError
 */
class NotFoundError extends CustomError {
  /**
   * @param code
   * @param message
   * @param options
   */
  constructor(message = DEFAULT_MESSAGE, code = DEFAULT_CODE, options = {}) {
    super(HttpStatusCode.NotFound, code, message, options);
  }
}

exports.NotFoundError = NotFoundError;
