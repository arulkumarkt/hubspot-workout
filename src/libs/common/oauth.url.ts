/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableObject } from 'src/infrastructures/interfaces/saasProviders';
import { connectType } from 'src/infrastructures/types/auth';
import { Urls } from './url';
import { HubspotToken } from '@libs/apps/oauth';

export const fetchHubspotUrl = (event: TableObject | any, data: connectType) => {
  const scopes = event?.Item?.scopes.join('%20');
  return `${Urls.baseURI}/authorize?client_id=${event?.Item?.client_id}&redirect_uri=${event?.Item?.redirect_url}&scope=${scopes}&state=${data?.platform}`;
};

export const fetchURI = async (event: TableObject, connectData: connectType) => {
  const hubspot = fetchHubspotUrl(event as TableObject, connectData);
  return hubspot;
};

export const getPlatformToken = async (event: TableObject, connectData: connectType) => {
  const hubspot = await new HubspotToken().getHubToken(event, connectData);
  return hubspot;
};

export const grandTypes = {
  grandType: 'authorization_code',
};
