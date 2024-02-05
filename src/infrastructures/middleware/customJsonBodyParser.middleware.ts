/* eslint-disable @typescript-eslint/no-explicit-any */
import middy from '@middy/core';
import MiddlewareFunction = middy.MiddlewareFn;
import { APIGatewayProxyEvent, SQSHandler } from 'aws-lambda';
import { logger } from '@aw/logger';

export const customJsonBodyParserMiddleware = () => {
  const before: MiddlewareFunction<APIGatewayProxyEvent, SQSHandler, any> = async (handler: any) => {
    logger.info(`Headers: ${JSON.stringify(handler?.event?.headers)}`);
    if (handler?.event) {
      if (handler.event.headers) {
        const contentType = handler?.event?.headers['Content-Type'] || handler?.event?.headers['content-type'];

        // Handle only JSON content types
        if (contentType && contentType?.startsWith('application/json')) {
          // Parse the JSON body manually
          handler.event.body = JSON.parse(handler?.event?.body || '{}');
        }
      } else if (handler.event['Records'] && handler.event['Records'][0]) {
        // Parse the SQS JSON body manually
        handler.event['Records'][0].body = JSON.parse(handler.event['Records'][0].body || '{}');
      }
    }
  };

  return {
    before,
  };
};
