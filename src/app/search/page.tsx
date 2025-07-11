import { AvatarImage } from "@radix-ui/react-avatar";
import { ChevronLeftIcon, PencilIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

import { DialogPOC } from "./dialog-poc";
import { DialogEmail } from "./dialog-email";

import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { getUppercaseInitials } from "~/lib/helpers";
import { ROUTES } from "~/lib/routes";
import { getCompanyByUrl } from "~/backend/logic/company";

const STRINGS = {
  goHome: "Home",
  tierOneKeywords: "Tier 1 Keywords",
  tierTwoKeywords: "Tier 2 Keywords",
  poc: "POC",
  pocDialogTitle: {
    create: "Create a new POC",
    edit: "Edit your POC",
  },
  emails: "Emails",
  emailsDialogTitle: {
    create: "Add a new email",
    edit: "Edit ",
  },
};

// export const metadata: Metadata = {
//   title: "",
//   description: "",
// };

type PageProps = {
  searchParams: Promise<{
    query?: string;
  }>;
};

const PageCompany = async ({ searchParams }: PageProps) => {
  const { query } = await searchParams;

  if (!query) redirect(ROUTES.home);

  const company = await getCompanyByUrl(query);

  const initials = getUppercaseInitials(company.company_name);
  const hasPOC = company.poc.length > 0;

  return (
    <main className="px-6 py-16 md:px-10 md:py-40">
      <div className="mx-auto max-w-lg">
        <Avatar className="mx-auto mb-10 size-32">
          <AvatarImage src={company.logo ?? ""} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>

        <Card>
          <CardHeader>
            <CardTitle>
              <h1 className="text-xl">{company.company_name}</h1>
            </CardTitle>
            <CardDescription>{company.company_description}</CardDescription>

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
            <h3 className="leading-none font-semibold">
              {STRINGS.tierOneKeywords}
            </h3>

            <div className="mt-3 mb-6 flex flex-wrap gap-3">
              {company.tier1_keywords.map((keyword) => (
                <Badge key={keyword} variant="secondary">
                  {keyword}
                </Badge>
              ))}
            </div>

            <h3 className="leading-none font-semibold">
              {STRINGS.tierTwoKeywords}
            </h3>

            <div className="mt-3 mb-6 flex flex-wrap gap-3">
              {company.tier2_keywords.map((keyword) => (
                <Badge key={keyword} variant="outline">
                  {keyword}
                </Badge>
              ))}
            </div>

            <div className="flex items-center gap-x-3">
              <h3 className="leading-none font-semibold">{STRINGS.poc}</h3>
              <DialogPOC
                companyId={company.id}
                poc={company.poc}
                title={
                  hasPOC
                    ? STRINGS.pocDialogTitle.edit
                    : STRINGS.pocDialogTitle.create
                }
              >
                {hasPOC ? <PencilIcon /> : <PlusIcon />}
              </DialogPOC>
            </div>

            <p className="mt-3 mb-6 text-sm text-slate-500">{company.poc}</p>

            <div className="flex items-center gap-x-3">
              <h3 className="leading-none font-semibold">{STRINGS.emails}</h3>
              <DialogEmail
                companyId={company.id}
                title={STRINGS.emailsDialogTitle.create}
              >
                <PlusIcon />
              </DialogEmail>
            </div>
            <div className="mt-3 mb-6">
              {company.emails.map((email) => (
                <div key={email} className="group flex items-center gap-x-3">
                  <Button variant="link" asChild size="sm" className="pl-0">
                    <Link href={`mailto:${email}`}>{email}</Link>
                  </Button>

                  <DialogEmail
                    companyId={company.id}
                    title={`${STRINGS.emailsDialogTitle.edit} ${email}`}
                    email={email}
                  >
                    <PencilIcon className="opacity-0 group-hover:opacity-100" />
                  </DialogEmail>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default PageCompany;
