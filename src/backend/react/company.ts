"use server";

import { revalidatePath } from "next/cache";

import {
  addEmail,
  deleteEmail,
  updatePOC,
  updateServiceLine,
} from "../logic/company";

export const actionUpdatePOC = async ({
  id,
  poc,
  revalidate,
}: {
  id: string;
  poc: string;
  revalidate: string;
}) => {
  await updatePOC({ id, poc });
  revalidatePath(revalidate);
};

export const actionUpdateServiceLine = async ({
  id,
  serviceLine,
  revalidate,
}: {
  id: string;
  serviceLine: string;
  revalidate: string;
}) => {
  await updateServiceLine({ id, serviceLine });
  revalidatePath(revalidate);
};

export const actionAddEmail = async ({
  email,
  id,
  revalidate,
}: {
  id: string;
  email: string;
  revalidate: string;
}) => {
  await addEmail({ id, email });
  revalidatePath(revalidate);
};

export const actionDeleteEmail = async ({
  emails,
  id,
  revalidate,
}: {
  id: string;
  emails: string[];
  revalidate: string;
}) => {
  await deleteEmail({ id, emails });
  revalidatePath(revalidate);
};
