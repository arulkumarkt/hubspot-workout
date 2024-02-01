import { logger } from "src/infrastructures/utils/logger.util";
import {
  getAllContacts,
  getAllMeetings,
} from "src/services/hubspot.contacts.service";

export const getAllContactsHandler = async () => {
  logger.info("get all contacts");
  const contacts = await getAllContacts();
  return contacts;
};

export const getMeetingWithPropertyHandler = async () => {
  const meetings = await getAllMeetings();
  return meetings;
};
