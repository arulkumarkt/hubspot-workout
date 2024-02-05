/* eslint-disable no-console */
import { logger } from '@aw/logger';
import { AppError } from '@libs/api-error';
import Hubspot from '@libs/apps/hubspot';
import { DisPatcherApp } from 'src/infrastructures/data/constants/apps';
import { errorMessageConstant } from 'src/infrastructures/data/constants/error';
import { commonType, connectType } from 'src/infrastructures/types/auth';
type appType = Hubspot;

export class ConnectHubspotWithUser {
  public static async connectApp(connectData: connectType): Promise<object | string> {
    logger.info('ConnectHubspotWithUser: connectApp');
    try {
      if (!connectData?.platform?.length) throw new AppError(errorMessageConstant?.hubspotAppNotFound, 404);

      const platform: string = connectData?.platform[0];
      const crm: string = connectData?.platform[1];
      4;

      const apps: DisPatcherApp = new DisPatcherApp(platform, crm);
      const appObject: appType = apps[crm];

      if (connectData?.grantType === commonType?.code) return appObject.generatorURI(connectData);
      if (connectData?.grantType === commonType?.token) return appObject.getToken(connectData);
    } catch (e) {
      throw new AppError(errorMessageConstant?.hubspotAppNotFound, 400);
    }
  }
}
