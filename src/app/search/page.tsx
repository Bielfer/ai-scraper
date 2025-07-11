import { redirect } from "next/navigation";
import { type Metadata } from "next";
import { Suspense } from "react";

import { CompanySkeleton } from "./company-skeleton";
import { CompanyData } from "./company-data";

import { ROUTES } from "~/lib/routes";

export const metadata: Metadata = {
  title: "Company insights",
  description:
    "In this page you can discover company insights, contacts and a proof of concept for validating leads.",
};

type PageProps = {
  searchParams: Promise<{
    query?: string;
  }>;
};

const PageCompany = async ({ searchParams }: PageProps) => {
  const { query } = await searchParams;

  if (!query) redirect(ROUTES.home);

  return (
    <Suspense fallback={<CompanySkeleton />}>
      <CompanyData query={query} />
    </Suspense>
  );
};

export default PageCompany;
