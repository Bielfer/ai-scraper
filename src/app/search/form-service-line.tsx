"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { actionUpdateServiceLine } from "~/backend/react/company";
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
import { cn } from "~/lib/utils";
import { VALIDATION_MESSAGES } from "~/lib/validation";

const STRINGS = {
  save: "Save",
};

type FormSchema = z.infer<typeof formSchema>;

const formSchema = z.object({
  serviceLine: z.string({ message: VALIDATION_MESSAGES.required }),
});

type Props = {
  className?: string;
  serviceLine: string;
  title: string;
  companyId: string;
};

export const FormServiceLine = ({
  className,
  serviceLine,
  title,
  companyId,
}: Props) => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serviceLine: serviceLine ?? "",
    },
  });
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (values: FormSchema) => {
    await actionUpdateServiceLine({
      id: companyId,
      serviceLine: values.serviceLine,
    });
  };

  return (
    <Form {...form}>
      <form className={cn(className, "pt-6")} onSubmit={handleSubmit(onSubmit)}>
        <FormField
          name="serviceLine"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="hidden">{title}</FormLabel>
              <FormControl>
                <Textarea {...field} rows={10} />
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
