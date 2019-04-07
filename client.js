'use strict';

const DEFAULT_MESSAGES = require('./constants/defaultMessages');
const HTTP_STATUS_CODES = require('./constants/httpStatusCodes');

class CLIENT_ERROR extends Error {
  constructor(status, message = DEFAULT_MESSAGES.CLIENT_ERROR, ...args) {
    super(message, ...args);

    this.status = status || HTTP_STATUS_CODES.BAD_REQUEST;
  }
}

class CLIENT_BAD_REQUEST extends CLIENT_ERROR {
  constructor(message = DEFAULT_MESSAGES.CLIENT_BAD_REQUEST, ...args) {
    super(HTTP_STATUS_CODES.BAD_REQUEST, message, ...args);
    Error.captureStackTrace(this, CLIENT_BAD_REQUEST);
  }
}

class CLIENT_UNAUTHORIZED extends CLIENT_ERROR {
  constructor(message = DEFAULT_MESSAGES.CLIENT_UNATHORIZED, ...args) {
    super(HTTP_STATUS_CODES.UNAUTHORIZED, message, ...args);
    Error.captureStackTrace(this, CLIENT_UNAUTHORIZED);
  }
}

class CLIENT_INVALID_TOKEN extends CLIENT_ERROR {
  constructor(message = DEFAULT_MESSAGES.CLIENT_INVALID_TOKEN, ...args) {
    super(HTTP_STATUS_CODES.UNAUTHORIZED, message, ...args);
    Error.captureStackTrace(this, CLIENT_INVALID_TOKEN);
  }
}

class CLIENT_FORBIDDEN extends CLIENT_ERROR {
  constructor(message = DEFAULT_MESSAGES.CLIENT_FORBIDEN, ...args) {
    super(HTTP_STATUS_CODES.FORBIDDEN, message, ...args);
    Error.captureStackTrace(this, CLIENT_FORBIDDEN);
  }
}

class NOT_FOUND extends CLIENT_ERROR {
  constructor(message = DEFAULT_MESSAGES.NOT_FOUND, ...args) {
    super(HTTP_STATUS_CODES.NOT_FOUND, message, ...args);
    Error.captureStackTrace(this, NOT_FOUND);
  }
}

module.exports = {
  CLIENT_BAD_REQUEST,
  CLIENT_ERROR,
  CLIENT_FORBIDDEN,
  CLIENT_INVALID_TOKEN,
  CLIENT_UNAUTHORIZED,
  NOT_FOUND
};
