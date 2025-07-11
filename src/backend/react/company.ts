"use server";

import { addEmail, updatePOC } from "../logic/company";

export const actionUpdatePOC = async (id: string, poc: string) => {
  await updatePOC({ id, poc });
};

export const actionAddEmail = async (id: string, email: string) => {
  await addEmail({ id, email });
};
