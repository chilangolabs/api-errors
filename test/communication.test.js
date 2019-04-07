'use strict';

const assert = require('assert');

const DEFAULT_MESSAGES = require('../constants/defaultMessages');
const HTTP_STATUS_CODES = require('../constants/httpStatusCodes');
const { SERVER_ERROR } = require('../server');
const {
  FIREBASE_ERROR,
  SENDGRID_ERROR,
  SES_ERROR,
  TWILIO_ERROR
} = require('../communication');

const MOCK_CUSTOM_MESSAGE = 'test';

describe('@chilangolabs/api-errors', () => {
  describe('Communication Errors', () => {
    describe('Firebase Error', () => {
      it('Hierarchy', () => {
        const error = new FIREBASE_ERROR();

        assert.ok(error instanceof SERVER_ERROR);
      });

      it('Default message', () => {
        const error = new FIREBASE_ERROR();

        assert.equal(error.message, DEFAULT_MESSAGES.SERVER_ERROR);
      });

      it('Default status', () => {
        const error = new FIREBASE_ERROR();

        assert.equal(error.status, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR);
      });

      it('Custom message', () => {
        const error = new FIREBASE_ERROR(MOCK_CUSTOM_MESSAGE);

        assert.equal(error.message, MOCK_CUSTOM_MESSAGE);
      });
    });

    describe('Sendgrid Error', () => {
      it('Hierarchy', () => {
        const error = new SENDGRID_ERROR();

        assert.ok(error instanceof SERVER_ERROR);
      });

      it('Default message', () => {
        const error = new SENDGRID_ERROR();

        assert.equal(error.message, DEFAULT_MESSAGES.SERVER_ERROR);
      });

      it('Default status', () => {
        const error = new SENDGRID_ERROR();

        assert.equal(error.status, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR);
      });

      it('Custom message', () => {
        const error = new SENDGRID_ERROR(MOCK_CUSTOM_MESSAGE);

        assert.equal(error.message, MOCK_CUSTOM_MESSAGE);
      });
    });

    describe('SES Error', () => {
      it('Hierarchy', () => {
        const error = new SES_ERROR();

        assert.ok(error instanceof SERVER_ERROR);
      });

      it('Default message', () => {
        const error = new SES_ERROR();

        assert.equal(error.message, DEFAULT_MESSAGES.SERVER_ERROR);
      });

      it('Default status', () => {
        const error = new SES_ERROR();

        assert.equal(error.status, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR);
      });

      it('Custom message', () => {
        const error = new SES_ERROR(MOCK_CUSTOM_MESSAGE);

        assert.equal(error.message, MOCK_CUSTOM_MESSAGE);
      });
    });

    describe('Twilio Error', () => {
      it('Hierarchy', () => {
        const error = new TWILIO_ERROR();

        assert.ok(error instanceof SERVER_ERROR);
      });

      it('Default message', () => {
        const error = new TWILIO_ERROR();

        assert.equal(error.message, DEFAULT_MESSAGES.SERVER_ERROR);
      });

      it('Default status', () => {
        const error = new TWILIO_ERROR();

        assert.equal(error.status, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR);
      });

      it('Custom message', () => {
        const error = new TWILIO_ERROR(MOCK_CUSTOM_MESSAGE);

        assert.equal(error.message, MOCK_CUSTOM_MESSAGE);
      });
    });
  });
});
