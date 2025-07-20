class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'BadRequestError';
    this.status = 400;
    Error.captureStackTrace(this, this.constructor);
  }
}

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
    this.status = 404;
    Error.captureStackTrace(this, this.constructor);
  }
}

class UnAuthorized extends Error {
  constructor(message = 'Unauthorized') {
    super(message);
    this.name = 'UnAuthorized';
    this.status = 401;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = { BadRequestError, NotFoundError, UnAuthorized };
