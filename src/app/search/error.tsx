"use client";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { Button } from "~/components/ui/button";
import { ROUTES } from "~/lib/routes";

const STRINGS = {
  code: "404",
  title: "Url not found",
  description:
    "Sorry, we couldn't find the url you're looking for. Double check for typos: ",
  goBack: "Go back home",
  help: "Contact support",
};

const ErrorSearch = () => {
  const searchParams = useSearchParams();

  const query = searchParams.get("query");

  return (
    <main className="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-primary text-base font-semibold">{STRINGS.code}</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-slate-900 sm:text-7xl">
          {STRINGS.title}
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-slate-500 sm:text-xl/8">
          {STRINGS.description} <br />
          <span className="text-primary">{query}</span>
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild>
            <Link href={ROUTES.home}>{STRINGS.goBack}</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href={ROUTES.support}>
              {STRINGS.help} <ArrowRightIcon />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default ErrorSearch;
