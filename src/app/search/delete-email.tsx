"use client";

import { TrashIcon } from "lucide-react";

import { actionDeleteEmail } from "~/backend/react/company";
import { Button } from "~/components/ui/button";

type Props = {
  companyId: string;
  emails: string[];
};

export const DeleteEmail = ({ emails, companyId }: Props) => {
  return (
    <Button
      className="opacity-0 group-hover:opacity-100"
      variant="destructive"
      size="icon-small"
      onClick={() => actionDeleteEmail(companyId, emails)}
    >
      <TrashIcon />
    </Button>
  );
};
