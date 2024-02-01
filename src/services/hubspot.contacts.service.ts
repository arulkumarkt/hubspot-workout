import { generateAccessTokenUsingRefreshToken } from "@libs/authentication/hubspot.oauth";

/* eslint-disable no-useless-escape */
export const getAllContacts = async () => {
  const hubspotClient = await generateAccessTokenUsingRefreshToken();
  const limit = 10;
  const after = undefined;
  const properties = undefined;
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
  const hubspotClient = await generateAccessTokenUsingRefreshToken();

  const limit = 10;
  const after = undefined;
  const properties = ["hs_internal_meeting_notes"];
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
