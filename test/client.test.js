'use strict';

const assert = require('assert');

const DEFAULT_MESSAGES = require('../constants/defaultMessages');
const HTTP_STATUS_CODES = require('../constants/httpStatusCodes');
const {
  CLIENT_ERROR,
  CLIENT_BAD_REQUEST,
  CLIENT_UNAUTHORIZED,
  CLIENT_INVALID_TOKEN,
  CLIENT_FORBIDDEN,
  NOT_FOUND
} = require('../client');

const MOCK_CUSTOM_MESSAGE = 'test';

describe('@chilangolabs/api-errors', () => {
  describe('Client Errors', () => {
    describe('Client Error', () => {
      it('Hierarchy', () => {
        const error = new CLIENT_ERROR();

        assert.ok(error instanceof Error);
      });

      it('Default message', () => {
        const error = new CLIENT_ERROR();

        assert.equal(error.message, DEFAULT_MESSAGES.CLIENT_ERROR);
      });

      it('Default status', () => {
        const error = new CLIENT_ERROR();

        assert.equal(error.status, HTTP_STATUS_CODES.BAD_REQUEST);
      });

      it('Custom status', () => {
        const error = new CLIENT_ERROR(HTTP_STATUS_CODES.I_AM_A_TEAPOT);

        assert.equal(error.status, HTTP_STATUS_CODES.I_AM_A_TEAPOT);
      });

      it('Custom message', () => {
        const error = new CLIENT_ERROR(HTTP_STATUS_CODES.I_AM_A_TEAPOT,
          MOCK_CUSTOM_MESSAGE);

        assert.equal(error.message, MOCK_CUSTOM_MESSAGE);
      });
    });

    describe('Client Bad Request', () => {
      it('Hierarchy', () => {
        const error = new CLIENT_BAD_REQUEST();

        assert.ok(error instanceof CLIENT_ERROR);
      });

      it('Default message', () => {
        const error = new CLIENT_BAD_REQUEST();

        assert.equal(error.message, DEFAULT_MESSAGES.CLIENT_BAD_REQUEST);
      });

      it('Default status', () => {
        const error = new CLIENT_BAD_REQUEST();

        assert.equal(error.status, HTTP_STATUS_CODES.BAD_REQUEST);
      });

      it('Custom message', () => {
        const error = new CLIENT_BAD_REQUEST(MOCK_CUSTOM_MESSAGE);

        assert.equal(error.message, MOCK_CUSTOM_MESSAGE);
      });
    });

    describe('Client Unathorized', () => {
      it('Hierarchy', () => {
        const error = new CLIENT_UNAUTHORIZED();

        assert.ok(error instanceof CLIENT_ERROR);
      });

      it('Default message', () => {
        const error = new CLIENT_UNAUTHORIZED();

        assert.equal(error.message, DEFAULT_MESSAGES.CLIENT_UNATHORIZED);
      });

      it('Default status', () => {
        const error = new CLIENT_UNAUTHORIZED();

        assert.equal(error.status, HTTP_STATUS_CODES.UNAUTHORIZED);
      });

      it('Custom message', () => {
        const error = new CLIENT_UNAUTHORIZED(MOCK_CUSTOM_MESSAGE);

        assert.equal(error.message, MOCK_CUSTOM_MESSAGE);
      });
    });

    describe('Client Invalid Token', () => {
      it('Hierarchy', () => {
        const error = new CLIENT_INVALID_TOKEN();

        assert.ok(error instanceof CLIENT_ERROR);
      });

      it('Default message', () => {
        const error = new CLIENT_INVALID_TOKEN();

        assert.equal(error.message, DEFAULT_MESSAGES.CLIENT_INVALID_TOKEN);
      });

      it('Default status', () => {
        const error = new CLIENT_INVALID_TOKEN();

        assert.equal(error.status, HTTP_STATUS_CODES.UNAUTHORIZED);
      });

      it('Custom message', () => {
        const error = new CLIENT_INVALID_TOKEN(MOCK_CUSTOM_MESSAGE);

        assert.equal(error.message, MOCK_CUSTOM_MESSAGE);
      });
    });

    describe('Client Forbidden', () => {
      it('Hierarchy', () => {
        const error = new CLIENT_FORBIDDEN();

        assert.ok(error instanceof CLIENT_ERROR);
      });

      it('Default message', () => {
        const error = new CLIENT_FORBIDDEN();

        assert.equal(error.message, DEFAULT_MESSAGES.CLIENT_FORBIDEN);
      });

      it('Default status', () => {
        const error = new CLIENT_FORBIDDEN();

        assert.equal(error.status, HTTP_STATUS_CODES.FORBIDDEN);
      });

      it('Custom message', () => {
        const error = new CLIENT_FORBIDDEN(MOCK_CUSTOM_MESSAGE);

        assert.equal(error.message, MOCK_CUSTOM_MESSAGE);
      });
    });

    describe('Not Found', () => {
      it('Hierarchy', () => {
        const error = new NOT_FOUND();

        assert.ok(error instanceof CLIENT_ERROR);
      });

      it('Default message', () => {
        const error = new NOT_FOUND();

        assert.equal(error.message, DEFAULT_MESSAGES.NOT_FOUND);
      });

      it('Default status', () => {
        const error = new NOT_FOUND();

        assert.equal(error.status, HTTP_STATUS_CODES.NOT_FOUND);
      });

      it('Custom message', () => {
        const error = new NOT_FOUND(MOCK_CUSTOM_MESSAGE);

        assert.equal(error.message, MOCK_CUSTOM_MESSAGE);
      });
    });
  });
});
