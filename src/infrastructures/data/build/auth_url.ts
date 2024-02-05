/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { grandTypes } from '@libs/common/oauth.url';
import { Urls } from '@libs/common/url';
import { TableObject } from 'src/infrastructures/interfaces/saasProviders';

export const authURIBuild = (code: string, event: TableObject, mode: string) => ({
  grant_type: grandTypes.grandType,
  code,
  redirect_uri: Urls.redirectUrl[mode],
  client_id: event.client_id,
  client_secret: event.client_secret,
});
