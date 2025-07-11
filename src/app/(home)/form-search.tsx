"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { ROUTES } from "~/lib/routes";
import { cn } from "~/lib/utils";
import { urlSchema } from "~/lib/validation";

const STRINGS = {
  search: "Search",
};

type FormSchema = z.infer<typeof formSchema>;

const formSchema = z.object({
  url: urlSchema,
});

type Props = {
  className?: string;
};

export const FormSearch = ({ className }: Props) => {
  const router = useRouter();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });
  const { control, handleSubmit } = form;

  const onSubmit = (values: FormSchema) => {
    const searchParams = new URLSearchParams({
      query: values.url,
    });

    const redirectUrl = `${ROUTES.search}?${searchParams.toString()}`;

    router.push(redirectUrl);
  };

  return (
    <Form {...form}>
      <form
        className={cn(className, "flex gap-x-4")}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormField
          name="url"
          control={control}
          render={({ field }) => (
            <FormItem className="grow">
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">{STRINGS.search}</Button>
      </form>
    </Form>
  );
};
