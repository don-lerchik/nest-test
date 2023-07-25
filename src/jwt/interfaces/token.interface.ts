export interface ITokenBase {
  iat: number;
  exp: number;
  iss: string;
  aud: string;
  sub: string;
}

export interface IAccessPayload {
  id: number;
}

export interface IEmailPayload extends IAccessPayload {
  version: number;
}

export interface IRefreshPayload extends IEmailPayload {
  tokenId: string;
}

export interface IAccessToken extends IAccessPayload, ITokenBase {}
export interface IEmailToken extends IEmailPayload, ITokenBase {}
export interface IRefreshToken extends IRefreshPayload, ITokenBase {}
