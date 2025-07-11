"use client";

import { CheckCircleIcon, TrashIcon } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { toast } from "sonner";

import { STRINGS } from "./strings";

import { actionDeleteEmail } from "~/backend/react/company";
import { Button } from "~/components/ui/button";
import { generateFullUrl } from "~/lib/helpers";

type Props = {
  companyId: string;
  emails: string[];
};

export const DeleteEmail = ({ emails, companyId }: Props) => {
  const pathname = usePathname();
  const query = useSearchParams().get("query")!;

  const handleDelete = async () => {
    await actionDeleteEmail({
      id: companyId,
      emails,
      revalidate: generateFullUrl(pathname, { query }),
    });
    toast(STRINGS.fieldUpdated, {
      icon: <CheckCircleIcon className="size-6" />,
    });
  };

  return (
    <Button
      className="opacity-0 group-hover:opacity-100"
      variant="destructive"
      size="icon-small"
      onClick={handleDelete}
    >
      <TrashIcon />
    </Button>
  );
};
