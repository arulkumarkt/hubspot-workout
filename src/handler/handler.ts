/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { type ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { connectHubspotValidator } from './validators/connectHubspot';
import { connectType } from 'src/infrastructures/types/auth';
import { ConnectHubspotWithUser } from 'src/services/connectApp';

const connectHubspotHandler: ValidatedEventAPIGatewayProxyEvent<typeof connectHubspotValidator> = async (event) => {
  const connectAddonPayload: connectType | any = {
    platform: event?.queryStringParameters?.platform?.split('For'),
    grantType: event?.queryStringParameters?.grantType,
    mode: event?.queryStringParameters?.mode,
    code: event?.body?.code,
    email: event?.queryStringParameters?.email,
  };
  const response = await ConnectHubspotWithUser.connectApp(connectAddonPayload);
  
  return { data: response };
};

export const connectHubspot = middyfy(connectHubspotHandler);
