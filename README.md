# @chilangolabs/api-errors

## Description

Provides error class that should be thrown when you want to surface specific error codes via the api. `CLIENT_ERROR` & `SERVER_ERROR` and it's subclasses all extend the javascript Error object and so include stack traces to where the error was created, which makes debugging failure responses much easier. `CLIENT_ERROR` & `SERVER_ERROR` contains a status and a message, which are both returned to the client by the @chilangolabs/api error handling middleware.

## Errors provided

### Client Errors

`require('@chilangolabs/api-errors/client')`


- `CLIENT_ERROR` - Generic API error, constructed with both a status message, all following errors extend this error
- `CLIENT_BAD_REQUEST` - Status set to 400 and has a default message that can be overridden
- `CLIENT_UNAUTHORIZED` - Status set to 401 and has a default message that can be overridden
- `CLIENT_INVALID_TOKEN` - Status set to 400 and has a default message that can be overridden
- `CLIENT_FORBIDDEN` - Status set to 403 and has a default message that can be overridden
- `NOT_FOUND` - Status set to 404 and has a default message that can be overridden

### Server Errors

`require('@chilangolabs/api-errors')`


- `SERVER_ERROR` - Generic API error, constructed with both a status message, all following errors extend this error
- `DB_ERROR` - Status set to 500 and has a default message that can be overridden
- `S3_ERROR` - Status set to 500 and has a default message that can be overridden

### Bot Errors

`require('@chilangolabs/api-errors/bot')`


- `MESSENGER_ERROR` - Status set to 500 and has a default message that can be overridden
- `TELEGRAM_ERROR` - Status set to 500 and has a default message that can be overridden
- `WHATSAPP_ERROR` - Status set to 500 and has a default message that can be overridden

### Communication Errors

`require('@chilangolabs/api-errors/communication')`

- `FIREBASE_ERROR` - Status set to 500 and has a default message that can be overridden
- `SENDGRID_ERROR` - Status set to 500 and has a default message that can be overridden
- `SES_ERROR` - Status set to 500 and has a default message that can be overridden
- `TWILIO_ERROR` - Status set to 500 and has a default message that can be overridden

### Payments Errors

`require('@chilangolabs/api-errors/payment')`

- `CONEKTA_ERROR` - Status set to 500 and has a default message that can be overridden
- `OPENPAY_ERROR` - Status set to 500 and has a default message that can be overridden
- `PAYPAL_ERROR` - Status set to 500 and has a default message that can be overridden
- `STRIPE_ERROR` - Status set to 500 and has a default message that can be overridden

## Usage Examples:

Return a 500 error when a prisma call fails
```javascript
const { SERVER_ERROR } = require('@chilangolabs/api-errors');

try {
  const allUsers: User[] = await prisma.users();
} catch (e) {
  throw new SERVER_ERROR();
}
````
