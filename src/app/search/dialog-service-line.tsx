import { type ReactNode } from "react";

import { FormServiceLine } from "./form-service-line";

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
  serviceLine: string;
  companyId: string;
};

export const DialogServiceLine = ({
  children,
  title,
  serviceLine,
  companyId,
}: Props) => {
  return (
    <Dialog>
      <Button asChild variant="ghost" size="icon-small">
        <DialogTrigger>{children}</DialogTrigger>
      </Button>
      <DialogContent className="max-w-lg">
        <DialogTitle>{title}</DialogTitle>
        <FormServiceLine
          title={title}
          serviceLine={serviceLine}
          companyId={companyId}
        />
      </DialogContent>
    </Dialog>
  );
};
