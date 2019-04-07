'use strict';

const DEFAULT_MESSAGES = require('./constants/defaultMessages');
const HTTP_STATUS_CODES = require('./constants/httpStatusCodes');
const { SERVER_ERROR } = require('./server');

class CONEKTA_ERROR extends SERVER_ERROR {
  constructor(message = DEFAULT_MESSAGES.SERVER_ERROR, ...args) {
    super(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, message, ...args);
    Error.captureStackTrace(this, CONEKTA_ERROR);
  }
}

class OPENPAY_ERROR extends SERVER_ERROR {
  constructor(message = DEFAULT_MESSAGES.SERVER_ERROR, ...args) {
    super(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, message, ...args);
    Error.captureStackTrace(this, OPENPAY_ERROR);
  }
}

class PAYPAL_ERROR extends SERVER_ERROR {
  constructor(message = DEFAULT_MESSAGES.SERVER_ERROR, ...args) {
    super(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, message, ...args);
    Error.captureStackTrace(this, PAYPAL_ERROR);
  }
}

class STRIPE_ERROR extends SERVER_ERROR {
  constructor(message = DEFAULT_MESSAGES.SERVER_ERROR, ...args) {
    super(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, message, ...args);
    Error.captureStackTrace(this, STRIPE_ERROR);
  }
}

module.exports = {
  CONEKTA_ERROR,
  OPENPAY_ERROR,
  PAYPAL_ERROR,
  STRIPE_ERROR
};
