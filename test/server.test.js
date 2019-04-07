'use strict';

const assert = require('assert');

const DEFAULT_MESSAGES = require('../constants/defaultMessages');
const HTTP_STATUS_CODES = require('../constants/httpStatusCodes');
const {
  SERVER_ERROR,
  DB_ERROR,
  S3_ERROR
} = require('../server');

const MOCK_CUSTOM_MESSAGE = 'test';

describe('@chilangolabs/api-errors', () => {
  describe('Server Errors', () => {
    describe('Server Error', () => {
      it('Hierarchy', () => {
        const error = new SERVER_ERROR();

        assert.ok(error instanceof Error);
      });

      it('Default message', () => {
        const error = new SERVER_ERROR();

        assert.equal(error.message, DEFAULT_MESSAGES.SERVER_ERROR);
      });

      it('Default status', () => {
        const error = new SERVER_ERROR();

        assert.equal(error.status, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR);
      });

      it('Custom status', () => {
        const error = new SERVER_ERROR(HTTP_STATUS_CODES.I_AM_A_TEAPOT);

        assert.equal(error.status, HTTP_STATUS_CODES.I_AM_A_TEAPOT);
      });

      it('Custom message', () => {
        const error = new SERVER_ERROR(HTTP_STATUS_CODES.I_AM_A_TEAPOT,
          MOCK_CUSTOM_MESSAGE);

        assert.equal(error.message, MOCK_CUSTOM_MESSAGE);
      });
    });

    describe('DB Error', () => {
      it('Hierarchy', () => {
        const error = new DB_ERROR();

        assert.ok(error instanceof SERVER_ERROR);
      });

      it('Default message', () => {
        const error = new DB_ERROR();

        assert.equal(error.message, DEFAULT_MESSAGES.SERVER_ERROR);
      });

      it('Default status', () => {
        const error = new DB_ERROR();

        assert.equal(error.status, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR);
      });

      it('Custom message', () => {
        const error = new DB_ERROR(MOCK_CUSTOM_MESSAGE);

        assert.equal(error.message, MOCK_CUSTOM_MESSAGE);
      });
    });

    describe('S3 Error', () => {
      it('Hierarchy', () => {
        const error = new S3_ERROR();

        assert.ok(error instanceof SERVER_ERROR);
      });

      it('Default message', () => {
        const error = new S3_ERROR();

        assert.equal(error.message, DEFAULT_MESSAGES.SERVER_ERROR);
      });

      it('Default status', () => {
        const error = new S3_ERROR();

        assert.equal(error.status, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR);
      });

      it('Custom message', () => {
        const error = new S3_ERROR(MOCK_CUSTOM_MESSAGE);

        assert.equal(error.message, MOCK_CUSTOM_MESSAGE);
      });
    });
  });
});
