class CustomError extends Error {
  constructor(httpStatusCode, code, message = 'Internal Error') {
    super();
    this.httpStatusCode = httpStatusCode;
    this.status = code;
    this.message = message;
  }
}

exports.CustomError = CustomError;
