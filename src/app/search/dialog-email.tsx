import { type ReactNode } from "react";

import { FormEmail } from "./form-email";

import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

type Props = {
  children: ReactNode;
  title: string;
  companyId: string;
};

export const DialogEmail = ({ children, title, companyId }: Props) => {
  return (
    <Dialog>
      <Button asChild variant="ghost" size="icon-small">
        <DialogTrigger>{children}</DialogTrigger>
      </Button>
      <DialogContent className="max-w-lg">
        <DialogTitle>{title}</DialogTitle>
        <FormEmail title={title} companyId={companyId} />
      </DialogContent>
    </Dialog>
  );
};
