/* eslint-disable no-undef */
import middy from '@middy/core';
import { apiGatewayResponseMiddleware } from '../infrastructures/middleware/apiGatewayResponse.middleware';
import { Logger, injectLambdaContext } from '@aws-lambda-powertools/logger';

import type { AWS } from '@serverless/typescript';
import { customJsonBodyParserMiddleware } from '../infrastructures/middleware/customJsonBodyParser.middleware';

const logger = new Logger();

export const middyfy = (handler) =>
  middy(handler)
    .use(customJsonBodyParserMiddleware())
    .use(injectLambdaContext(logger))
    .use(apiGatewayResponseMiddleware({ enableErrorLogger: process.env.IS_OFFLINE === 'true' }));

// AWSFunction type
export type AWSFunction = AWS['functions'][0];
