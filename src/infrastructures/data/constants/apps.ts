/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Hubspot from '../../../libs/apps/hubspot';

/* The DisPatcherPlatform class is a TypeScript class that initializes a apps instance and
provides access to it through a app methods. */
export class DisPatcherApp {
  protected _hubspot: Hubspot | undefined;
  protected _app: string | undefined;
  protected _crm: string | undefined;

  /**
   * The constructor initializes the app and crm properties and calls the init function.
   * @param {string} app - A string representing the name or identifier of the application.
   * @param {string} crm - The "crm" parameter is a string that represents the CRM (Customer Relationship
   * Management) system. It is used to store and manage customer data, track interactions, and facilitate
   * sales and marketing activities.
   */
  constructor(app: string,crm: string) {
    this.init();
    this._app = app;
    this._crm = crm;
  }

  public init() {
    this._hubspot = undefined;
  }
  // hubspot class
  get hubspot() {
    if (!this._hubspot) {
      this._hubspot = new Hubspot(this._app,this._crm);
    }
    return this._hubspot;
  }
}
