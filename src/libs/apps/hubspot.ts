import { connectType } from 'src/infrastructures/types/auth';
import Auth from '../common/oauth';

/* eslint-disable @typescript-eslint/no-explicit-any */
export default class Hubspot {
  protected _crm: string | undefined;
  protected _app: string | undefined;
  constructor(app: string, crm: string) {
    this._app = app;
    this._crm = crm;
  }
  public async generatorURI(connectData: connectType): Promise<any> {
    return await new Auth().getOAuthURI(connectData);
  }
  public async getToken(connectData: connectType): Promise<any> {
    return await new Auth().generateToken(this._app,connectData);
  }
}
