'use strict';

const assert = require('assert');

const DEFAULT_MESSAGES = require('../constants/defaultMessages');
const HTTP_STATUS_CODES = require('../constants/httpStatusCodes');
const { SERVER_ERROR } = require('../server');
const {
  CONEKTA_ERROR,
  OPENPAY_ERROR,
  PAYPAL_ERROR,
  STRIPE_ERROR
} = require('../payment');

const MOCK_CUSTOM_MESSAGE = 'test';

describe('@chilangolabs/api-errors', () => {
  describe('Payment Errors', () => {
    describe('Conekta Error', () => {
      it('Hierarchy', () => {
        const error = new CONEKTA_ERROR();

        assert.ok(error instanceof SERVER_ERROR);
      });

      it('Default message', () => {
        const error = new CONEKTA_ERROR();

        assert.equal(error.message, DEFAULT_MESSAGES.SERVER_ERROR);
      });

      it('Default status', () => {
        const error = new CONEKTA_ERROR();

        assert.equal(error.status, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR);
      });

      it('Custom message', () => {
        const error = new CONEKTA_ERROR(MOCK_CUSTOM_MESSAGE);

        assert.equal(error.message, MOCK_CUSTOM_MESSAGE);
      });
    });

    describe('OpenPay Error', () => {
      it('Hierarchy', () => {
        const error = new OPENPAY_ERROR();

        assert.ok(error instanceof SERVER_ERROR);
      });

      it('Default message', () => {
        const error = new OPENPAY_ERROR();

        assert.equal(error.message, DEFAULT_MESSAGES.SERVER_ERROR);
      });

      it('Default status', () => {
        const error = new OPENPAY_ERROR();

        assert.equal(error.status, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR);
      });

      it('Custom message', () => {
        const error = new OPENPAY_ERROR(MOCK_CUSTOM_MESSAGE);

        assert.equal(error.message, MOCK_CUSTOM_MESSAGE);
      });
    });

    describe('PayPal Error', () => {
      it('Hierarchy', () => {
        const error = new PAYPAL_ERROR();

        assert.ok(error instanceof SERVER_ERROR);
      });

      it('Default message', () => {
        const error = new PAYPAL_ERROR();

        assert.equal(error.message, DEFAULT_MESSAGES.SERVER_ERROR);
      });

      it('Default status', () => {
        const error = new PAYPAL_ERROR();

        assert.equal(error.status, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR);
      });

      it('Custom message', () => {
        const error = new PAYPAL_ERROR(MOCK_CUSTOM_MESSAGE);

        assert.equal(error.message, MOCK_CUSTOM_MESSAGE);
      });
    });

    describe('Stripe Error', () => {
      it('Hierarchy', () => {
        const error = new STRIPE_ERROR();

        assert.ok(error instanceof SERVER_ERROR);
      });

      it('Default message', () => {
        const error = new STRIPE_ERROR();

        assert.equal(error.message, DEFAULT_MESSAGES.SERVER_ERROR);
      });

      it('Default status', () => {
        const error = new STRIPE_ERROR();

        assert.equal(error.status, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR);
      });

      it('Custom message', () => {
        const error = new STRIPE_ERROR(MOCK_CUSTOM_MESSAGE);

        assert.equal(error.message, MOCK_CUSTOM_MESSAGE);
      });
    });
  });
});
