"use server";

import { addEmail, deleteEmail, updatePOC } from "../logic/company";

export const actionUpdatePOC = async (id: string, poc: string) => {
  await updatePOC({ id, poc });
};

export const actionAddEmail = async (id: string, email: string) => {
  await addEmail({ id, email });
};

export const actionDeleteEmail = async (id: string, emails: string[]) => {
  await deleteEmail({ id, emails });
};
