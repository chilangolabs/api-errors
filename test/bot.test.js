'use strict';

const assert = require('assert');

const DEFAULT_MESSAGES = require('../constants/defaultMessages');
const HTTP_STATUS_CODES = require('../constants/httpStatusCodes');
const { SERVER_ERROR } = require('../server');
const { MESSENGER_ERROR, TELEGRAM_ERROR, WHATSAPP_ERROR } = require('../bot');

const MOCK_CUSTOM_MESSAGE = 'test';

describe('@chilangolabs/api-errors', () => {
  describe('Bot Errors', () => {
    describe('Messenger Error', () => {
      it('Hierarchy', () => {
        const error = new MESSENGER_ERROR();

        assert.ok(error instanceof SERVER_ERROR);
      });

      it('Default message', () => {
        const error = new MESSENGER_ERROR();

        assert.equal(error.message, DEFAULT_MESSAGES.SERVER_ERROR);
      });

      it('Default status', () => {
        const error = new MESSENGER_ERROR();

        assert.equal(error.status, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR);
      });

      it('Custom message', () => {
        const error = new MESSENGER_ERROR(MOCK_CUSTOM_MESSAGE);

        assert.equal(error.message, MOCK_CUSTOM_MESSAGE);
      });
    });

    describe('Telegram Error', () => {
      it('Hierarchy', () => {
        const error = new TELEGRAM_ERROR();

        assert.ok(error instanceof SERVER_ERROR);
      });

      it('Default message', () => {
        const error = new TELEGRAM_ERROR();

        assert.equal(error.message, DEFAULT_MESSAGES.SERVER_ERROR);
      });

      it('Default status', () => {
        const error = new TELEGRAM_ERROR();

        assert.equal(error.status, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR);
      });

      it('Custom message', () => {
        const error = new TELEGRAM_ERROR(MOCK_CUSTOM_MESSAGE);

        assert.equal(error.message, MOCK_CUSTOM_MESSAGE);
      });
    });

    describe('Whatsapp Error', () => {
      it('Hierarchy', () => {
        const error = new WHATSAPP_ERROR();

        assert.ok(error instanceof SERVER_ERROR);
      });

      it('Default message', () => {
        const error = new WHATSAPP_ERROR();

        assert.equal(error.message, DEFAULT_MESSAGES.SERVER_ERROR);
      });

      it('Default status', () => {
        const error = new WHATSAPP_ERROR();

        assert.equal(error.status, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR);
      });

      it('Custom message', () => {
        const error = new WHATSAPP_ERROR(MOCK_CUSTOM_MESSAGE);

        assert.equal(error.message, MOCK_CUSTOM_MESSAGE);
      });
    });
  });
});
