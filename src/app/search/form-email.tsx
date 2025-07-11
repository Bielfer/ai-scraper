"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
  email: z.string({ message: VALIDATION_MESSAGES.required }),
});

type Props = {
  className?: string;
  email?: string;
  title: string;
};

export const FormEmail = ({ className, email, title }: Props) => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: email ?? "",
    },
  });
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (values: FormSchema) => {
    console.log(values);
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
          <Button type="submit">{STRINGS.save}</Button>
        </div>
      </form>
    </Form>
  );
};
