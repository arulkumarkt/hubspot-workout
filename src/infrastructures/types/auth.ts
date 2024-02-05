export type codeType = {
    app?: string;
    clientId?: string;
    code?: string;
    mode?: string;
  };
  

  export const commonType = Object.freeze({
    code: 'code',
    token: 'token',
  });

  export type connectType = {
    code: string;
    mode: string;
    platform: string[]
    grantType: string;
    email: string;
  }

  export type authTokenType = {
    grant_type: string;
    code: string;
    redirect_uri: string;
    client_id: string;
    client_secret: string;
    access_token?: string;
    refresh_token?: string;
    expires?: string;
  };