"use server";

import { updatePOC } from "../logic/company";

export const actionUpdatePOC = async (id: string, poc: string) => {
  await updatePOC({ id, poc });
};
