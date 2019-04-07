'use strict';

const DEFAULT_MESSAGES = require('./constants/defaultMessages');
const HTTP_STATUS_CODES = require('./constants/httpStatusCodes');
const { SERVER_ERROR } = require('./server');

class MESSENGER_ERROR extends SERVER_ERROR {
  constructor(message = DEFAULT_MESSAGES.SERVER_ERROR, ...args) {
    super(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, message, ...args);
    Error.captureStackTrace(this, MESSENGER_ERROR);
  }
}

class TELEGRAM_ERROR extends SERVER_ERROR {
  constructor(message = DEFAULT_MESSAGES.SERVER_ERROR, ...args) {
    super(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, message, ...args);
    Error.captureStackTrace(this, TELEGRAM_ERROR);
  }
}

class WHATSAPP_ERROR extends SERVER_ERROR {
  constructor(message = DEFAULT_MESSAGES.SERVER_ERROR, ...args) {
    super(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, message, ...args);
    Error.captureStackTrace(this, WHATSAPP_ERROR);
  }
}

module.exports = {
  MESSENGER_ERROR,
  TELEGRAM_ERROR,
  WHATSAPP_ERROR
};
