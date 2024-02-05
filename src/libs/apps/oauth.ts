/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { TableObject } from 'src/infrastructures/interfaces/saasProviders';
import { authTokenType, connectType } from 'src/infrastructures/types/auth';
import { logger } from 'packages/aw-logger';
import { authURIBuild } from 'src/infrastructures/data/build/auth_url';
import {Auth} from '@aw/auth';

export class HubspotToken {
  public async getHubToken(
    event: TableObject,
    connectData: connectType
  ): Promise<any> {
    logger.info('getToken');
    const data: authTokenType = authURIBuild(connectData.code,event,connectData.mode);
    //** Get token from hubspot */
    // const token = await httpClient.post(Urls.baseUriAPI + '/v1/token', data, {
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    // });
    const token = new Auth(data).accessToken
    console.log(token)
    logger.info(`Updating tokens:${JSON.stringify(token?.getAccessToken)} to ${connectData.email}`);
  }
}
