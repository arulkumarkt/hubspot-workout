export const nameValidator = {
  type: "object",
  properties: {
    name: { type: "string" },
  },
  required: ["name"],
} as const;
