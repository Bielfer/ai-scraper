import { ChevronLeftIcon, Link } from "lucide-react";

import { STRINGS } from "./strings";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";
import { ROUTES } from "~/lib/routes";

export const CompanySkeleton = () => {
  return (
    <main className="px-6 py-16 md:px-10 md:py-40">
      <div className="mx-auto max-w-lg">
        <Skeleton className="mx-auto mb-10 size-32 rounded-full" />

        <Card>
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-6 w-32" />
            </CardTitle>
            <CardDescription>
              <Skeleton className="h-10 w-40" />
            </CardDescription>

            <CardAction>
              <Button asChild variant="ghost">
                <Link href={ROUTES.home}>
                  <ChevronLeftIcon />
                  {STRINGS.goHome}
                </Link>
              </Button>
            </CardAction>
          </CardHeader>

          <CardContent>
            <div className="flex items-center gap-x-3">
              <h3 className="leading-none font-semibold">
                {STRINGS.serviceLine}
              </h3>
            </div>

            <p className="mt-3 mb-6 text-sm text-slate-500">
              <Skeleton className="h-14 w-44" />
            </p>

            <h3 className="leading-none font-semibold">
              {STRINGS.tierOneKeywords}
            </h3>

            <div className="mt-3 mb-6 flex flex-wrap gap-3">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-14" />
              <Skeleton className="h-4 w-16" />
            </div>

            <h3 className="leading-none font-semibold">
              {STRINGS.tierTwoKeywords}
            </h3>

            <div className="mt-3 mb-6 flex flex-wrap gap-3">
              <Skeleton className="h-4 w-14" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-11" />
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-4 w-16" />
            </div>

            <div className="flex items-center gap-x-3">
              <h3 className="leading-none font-semibold">{STRINGS.poc}</h3>
            </div>

            <p className="mt-3 mb-6 text-sm text-slate-500">
              <Skeleton className="h-4 w-20" />
            </p>

            <div className="flex items-center gap-x-3">
              <h3 className="leading-none font-semibold">{STRINGS.emails}</h3>
            </div>
            <div className="mt-3 mb-6 flex flex-col gap-y-2">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-28" />
              <Skeleton className="h-5 w-20" />
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-5 w-20" />
            </div>

            <h3 className="leading-none font-semibold">
              {STRINGS.serviceLines}
            </h3>

            <div className="mt-3 mb-6 flex flex-col gap-y-2">
              <Skeleton className="h-5 w-28" />
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-20" />
              <Skeleton className="h-5 w-28" />
              <Skeleton className="h-5 w-20" />
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};
