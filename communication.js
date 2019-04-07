'use strict';

const DEFAULT_MESSAGES = require('./constants/defaultMessages');
const HTTP_STATUS_CODES = require('./constants/httpStatusCodes');
const { SERVER_ERROR } = require('./server');

class FIREBASE_ERROR extends SERVER_ERROR {
  constructor(message = DEFAULT_MESSAGES.SERVER_ERROR, ...args) {
    super(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, message, ...args);
    Error.captureStackTrace(this, FIREBASE_ERROR);
  }
}

class SENDGRID_ERROR extends SERVER_ERROR {
  constructor(message = DEFAULT_MESSAGES.SERVER_ERROR, ...args) {
    super(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, message, ...args);
    Error.captureStackTrace(this, SENDGRID_ERROR);
  }
}

class SES_ERROR extends SERVER_ERROR {
  constructor(message = DEFAULT_MESSAGES.SERVER_ERROR, ...args) {
    super(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, message, ...args);
    Error.captureStackTrace(this, SES_ERROR);
  }
}

class TWILIO_ERROR extends SERVER_ERROR {
  constructor(message = DEFAULT_MESSAGES.SERVER_ERROR, ...args) {
    super(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, message, ...args);
    Error.captureStackTrace(this, TWILIO_ERROR);
  }
}

module.exports = {
  FIREBASE_ERROR,
  SENDGRID_ERROR,
  SES_ERROR,
  TWILIO_ERROR
};
