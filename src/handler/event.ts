// import { AWSFunction } from "@libs/lambda";
import { handlerPath } from "@libs/handler-resolver";

// const corsConfig = {
//   origins: ["http:localhost:3000"],
//   header: ["*"],
// };

export const getAllContacts = {
  handler: `${handlerPath(__dirname)}/handler.getAllContactsHandler`,
  events: [
    {
      http: {
        method: "post",
        path: "hello",
        request: {},
      },
    },
  ],
};

export const meetingWithProperty = {
  handler: `${handlerPath(__dirname)}/handler.getMeetingWithPropertyHandler`,
  events: [
    {
      http: {
        method: "post",
        path: "all-meetings",
        request: {},
      },
    },
  ],
};
