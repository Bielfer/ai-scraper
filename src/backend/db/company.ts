import "server-only";

import { type SimpleCompany, type Company } from "../schemas";

import { db } from "~/services/firebase/admin";

export const dbGetCompany = async (id: string) => {
  const snapshot = await db.collection("company").doc(id).get();
  const company = snapshot.data() as SimpleCompany;

  return {
    id: snapshot.id,
    ...company,
  };
};

export const dbGetCompanyByUrl = async (
  url: string,
): Promise<Company | null> => {
  const snapshot = await db
    .collection("company")
    .where("url", "==", url)
    .limit(1)
    .get();

  const companies: Company[] = [];

  snapshot.forEach((doc) =>
    companies.push({
      ...(doc.data() as SimpleCompany),
      id: doc.id,
    }),
  );

  return companies?.[0] ?? null;
};

export const dbCreateCompany = (company: SimpleCompany) =>
  db.collection("company").add(company);

export const dbUpdateCompany = (id: string, company: Partial<Company>) =>
  db.collection("company").doc(id).update(company);
