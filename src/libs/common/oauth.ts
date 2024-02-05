/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { logger } from '@aw/logger';
import { connectType } from 'src/infrastructures/types/auth';
import DynamoDB from '@aw/dynamodb/index';
import { saasProviderEntity } from 'src/infrastructures/entities/saasProvider';
import { TableObject } from 'src/infrastructures/interfaces/saasProviders';
import { AppError } from '@libs/api-error';
import { errorMessageConstant } from 'src/infrastructures/data/constants/error';
import { fetchURI, getPlatformToken } from './oauth.url';

export default class Auth {
  public async getOAuthURI(connectData: connectType): Promise<string> {
    logger.info('codeGeneratorUri');

    // get app details from hubspot app
    const params = {
      pk: 'APP#HUBSPOT',
    };
    const user: TableObject | any = await new DynamoDB().get(saasProviderEntity, params);
    if (!user?.Item?.name) throw new AppError(errorMessageConstant?.hubspotAppNotFound);
    const fetchURI: string = await this.fetchOAuthURI(user, {
      ...connectData,
    });
    return fetchURI;
  }

  /** fetch oauth url */
  public async fetchOAuthURI(appDetails: TableObject, connectData: connectType): Promise<any> {
    return await fetchURI(appDetails, connectData);
  }

  public async generateToken(_app: string, connectData: connectType): Promise<any> {
    logger.info('generateToken');

    const params = {
      pk: 'APP#HUBSPOT',
    };
    const user: TableObject | any = new DynamoDB().get(saasProviderEntity, params);
    if (!user?.name) throw new AppError(errorMessageConstant?.hubspotAppNotFound);

    const response = await getPlatformToken(user, connectData);
    await this.fetchOAuthURI(user, connectData);
    return response;
  }
}
