'use strict';

const DEFAULT_MESSAGES = require('./constants/defaultMessages');
const HTTP_STATUS_CODES = require('./constants/httpStatusCodes');

class SERVER_ERROR extends Error {
  constructor(status, message = DEFAULT_MESSAGES.SERVER_ERROR, ...args) {
    super(message, ...args);

    this.status = status || HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR;
  }
}

class DB_ERROR extends SERVER_ERROR {
  constructor(message = DEFAULT_MESSAGES.SERVER_ERROR, ...args) {
    super(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, message, ...args);
    Error.captureStackTrace(this, DB_ERROR);
  }
}

class S3_ERROR extends SERVER_ERROR {
  constructor(message = DEFAULT_MESSAGES.SERVER_ERROR, ...args) {
    super(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, message, ...args);
    Error.captureStackTrace(this, S3_ERROR);
  }
}

module.exports = {
  DB_ERROR,
  S3_ERROR,
  SERVER_ERROR
};
