/* eslint-disable no-undef */
import { handlerPath } from '@libs/handler-resolver';
import { AWSFunction } from '@libs/lambda';
import { connectHubspotValidator } from './validators/connectHubspot';

export const connectHubspot = {
  handler: `${handlerPath(__dirname)}/handler.connectHubspot`,
  events: [
    {
      http: {
        method: 'post',
        path: 'app/install',
        request: {
          schemas: {
            'application/json': connectHubspotValidator,
          },
          parameters: {
            querystrings: {
              grantType: true,
              platform: true,
              email: true,
              mode: true,
            },
          },
        },
      },
    },
  ],
} as AWSFunction;