import { AWSFunction } from "@libs/lambda";
import { handlerPath } from "@libs/handler-resolver";

export const getAllContacts = {
  handler: `${handlerPath(__dirname)}/handler.getAllContactsHandler`,
  events: [
    {
      http: {
        method: "get",
        path: "dev/get-contacts",
        request: {},
      },
    },
  ],
} as AWSFunction;

export const meetingWithProperty = {
  handler: `${handlerPath(__dirname)}/handler.getMeetingWithPropertyHandler`,
  events: [
    {
      http: {
        method: "get",
        path: "dev/get-meetings",
        request: {},
      },
    },
  ],
} as AWSFunction;
