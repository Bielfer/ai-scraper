import { z } from "zod";

export type FirebaseMetadata<T> = T & {
  id: string;
};

export const companySchema = z.object({
  company_name: z.string(),
  service_line: z.string(),
  company_description: z.string(),
  tier1_keywords: z.string().array(),
  tier2_keywords: z.string().array(),
  service_line_urls: z
    .object({
      url: z.string().nullable(),
      name: z.string(),
    })
    .array(),
  logo: z.string().nullable(),
  poc: z.string(),
  emails: z.string().array(),
  url: z.string(),
});

export type SimpleCompany = z.infer<typeof companySchema>;
export type Company = FirebaseMetadata<SimpleCompany>;
