import { type ReactNode } from "react";

import { FormPOC } from "./form-poc";

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
  poc: string;
  companyId: string;
};

export const DialogPOC = ({ children, title, poc, companyId }: Props) => {
  return (
    <Dialog>
      <Button asChild variant="ghost" size="icon-small">
        <DialogTrigger>{children}</DialogTrigger>
      </Button>
      <DialogContent className="max-w-lg">
        <DialogTitle>{title}</DialogTitle>
        <FormPOC title={title} poc={poc} companyId={companyId} />
      </DialogContent>
    </Dialog>
  );
};
