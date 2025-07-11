import { z } from "zod";

export const VALIDATION_MESSAGES = {
  required: "Field is required",
  invalidUrl: "Invalid URL",
};

export const urlSchema = z
  .string({ message: VALIDATION_MESSAGES.required })
  .regex(
    // allow https
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
    VALIDATION_MESSAGES.invalidUrl,
  )
  .or(
    z.string().regex(
      // allow without https
      /^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
      VALIDATION_MESSAGES.invalidUrl,
    ),
  );
