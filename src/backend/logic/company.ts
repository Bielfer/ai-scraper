import "server-only";

import {
  dbCreateCompany,
  dbGetCompanyByUrl,
  dbUpdateCompany,
} from "../db/company";
import { type SimpleCompany } from "../schemas";

import { runCompanyAgentByUrl } from "./agents";

export const getCompanyByUrl = async (url: string) => {
  const company = await dbGetCompanyByUrl(url);

  if (!!company) return company;

  const companyFromAgent = await runCompanyAgentByUrl(url);

  if (!companyFromAgent)
    throw new Error("Failed to generate company from agent data");

  const snapshot = await dbCreateCompany({ ...companyFromAgent, url });

  const companyFromDb = (await snapshot.get()).data() as SimpleCompany;

  return {
    id: snapshot.id,
    ...companyFromDb,
  };
};

export const updatePOC = async ({ id, poc }: { poc: string; id: string }) => {
  await dbUpdateCompany(id, { poc });
};
