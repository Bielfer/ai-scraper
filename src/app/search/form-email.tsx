"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CheckCircleIcon } from "lucide-react";
import { toast } from "sonner";

import { STRINGS as STRINGS_GENERAL } from "./strings";

import { actionAddEmail } from "~/backend/react/company";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Textarea } from "~/components/ui/textarea";
import { generateFullUrl } from "~/lib/helpers";
import { cn } from "~/lib/utils";
import { VALIDATION_MESSAGES } from "~/lib/validation";

const STRINGS = {
  save: "Save",
};

type FormSchema = z.infer<typeof formSchema>;

const formSchema = z.object({
  email: z.string({ message: VALIDATION_MESSAGES.required }),
});

type Props = {
  className?: string;
  title: string;
  companyId: string;
};

export const FormEmail = ({ className, title, companyId }: Props) => {
  const pathname = usePathname();
  const query = useSearchParams().get("query")!;

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (values: FormSchema) => {
    await actionAddEmail({
      id: companyId,
      email: values.email,
      revalidate: generateFullUrl(pathname, { query }),
    });
    toast(STRINGS_GENERAL.fieldUpdated, {
      icon: <CheckCircleIcon className="size-6" />,
    });
  };

  return (
    <Form {...form}>
      <form className={cn(className, "pt-6")} onSubmit={handleSubmit(onSubmit)}>
        <FormField
          name="email"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="hidden">{title}</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end pt-6">
          <Button type="submit" disabled={isSubmitting}>
            {STRINGS.save}
          </Button>
        </div>
      </form>
    </Form>
  );
};
