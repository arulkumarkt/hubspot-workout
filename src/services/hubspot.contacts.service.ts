/* eslint-disable no-useless-escape */
import {
  contactProperties,
  meetingProperties,
} from "@infrastructures/interfaces";
import { generateHubspotClient } from "@libs/authentication/hubspot.oauth";
export const getAllContacts = async () => {
  const hubspotClient = await generateHubspotClient();
  const limit = 10;
  const after = undefined;
  const properties: typeof contactProperties = undefined;
  const propertiesWithHistory = undefined;
  const associations = undefined;
  const archived = false;
  try {
    const apiResponse = await hubspotClient.crm.contacts.basicApi.getPage(
      limit,
      after,
      properties,
      propertiesWithHistory,
      associations,
      archived
    );
    const jsonString = JSON.stringify(apiResponse);
    console.log(jsonString);

    return jsonString;
  } catch (e) {
    e.message === "HTTP request failed"
      ? console.error(JSON.stringify(e.response, null, 2))
      : console.error(e);
  }
};

export const getAllMeetings = async () => {
  const hubspotClient = await generateHubspotClient();
  const limit = 10;
  const after = undefined;
  const properties: typeof meetingProperties = undefined;
  const propertiesWithHistory = undefined;
  const associations = undefined;
  const archived = false;

  try {
    const apiResponse =
      await hubspotClient.crm.objects.meetings.basicApi.getPage(
        limit,
        after,
        properties,
        propertiesWithHistory,
        associations,
        archived
      );
    console.log(JSON.stringify(apiResponse, null, 2));
  } catch (e) {
    e.message === "HTTP request failed"
      ? console.error(JSON.stringify(e.response, null, 2))
      : console.error(e);
  }
};
