"use server";

import {
  addEmail,
  deleteEmail,
  updatePOC,
  updateServiceLine,
} from "../logic/company";

export const actionUpdatePOC = async ({
  id,
  poc,
}: {
  id: string;
  poc: string;
}) => {
  await updatePOC({ id, poc });
};

export const actionUpdateServiceLine = async ({
  id,
  serviceLine,
}: {
  id: string;
  serviceLine: string;
}) => {
  await updateServiceLine({ id, serviceLine });
};

export const actionAddEmail = async ({
  email,
  id,
}: {
  id: string;
  email: string;
}) => {
  await addEmail({ id, email });
};

export const actionDeleteEmail = async ({
  emails,
  id,
}: {
  id: string;
  emails: string[];
}) => {
  await deleteEmail({ id, emails });
};
