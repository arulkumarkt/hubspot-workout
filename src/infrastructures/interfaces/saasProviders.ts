/* eslint-disable @typescript-eslint/no-explicit-any */
import { JsonObject,JsonProperty } from 'json2typescript';

@JsonObject('ISaasProviders')
/**
 * Interface for salesforce lead.
 */
export class TableObject {
  @JsonProperty('Item', Object, true)
  public Item: object;

  @JsonProperty('pk', String, true)
  public pk: string;

  @JsonProperty('name', String, false)
  public name: string;

  @JsonProperty('api_key', String, false)
  public api_key: string;

  @JsonProperty('auth_type', String, false)
  public auth_type: string;

  @JsonProperty('client_id', String, false)
  public client_id: string;

  @JsonProperty('client_secret', String, false)
  public client_secret: string;

  @JsonProperty('description', String, false)
  public description: string;

  @JsonProperty('is_active', Boolean, false)
  public is_active: boolean;

  @JsonProperty('is_deleted', Boolean, false)
  public is_deleted: boolean;

  @JsonProperty('logo', String, false)
  public logo: string;

  @JsonProperty('redirect_url', String, false)
  public redirect_url: string;

  @JsonProperty('scopes', Array, false)
  public scopes: any;

  /**
   * Default values
   */
  public constructor() {
    this.Item = {};
    this.pk = '';
    this.name = '';
    this.api_key = '';
    this.auth_type = '';
    this.client_id = '';
    this.client_secret = '';
    this.description = '';
    this.is_active = false;
    this.is_deleted = false;
    this.logo = '';
    this.redirect_url = '';
    this.scopes = [];
  }
}
