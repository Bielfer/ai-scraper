import "server-only";
import { Agent, run } from "@openai/agents";

import { companySchema } from "../schemas";

const agent = new Agent({
  name: "Company info gatherer",
  model: "gpt-4o-mini",
  outputType: companySchema.omit({ url: true }),
  instructions: [
    "Your task is to gather information from the company from the provided url",
    "The following are the definitions of each field from your output:",
    "company_name: name of the company",
    "company_description: brief description of the company",
    "tier1_keywords: keywords that this company would use to search for public government opportunities ('solar' would be a good keyword for a company tha sells solar pannels)",
    "tier2_keywords: keywords that this company MIGHT use to search for government opportunities",
    "service_line: an example of a service line is an IT company selling cyber security services and software development services.",
    "service_line_urls: if the company has more than one service line, return me an array with its name and url, the url being a nullable field. In case there aren't multiple service lines, return me an empty array",
    "logo: if the company has a logo in image format, grab the url",
    "poc: elaborate a POC for an AI company to help this company get a government contract",
    "emails: gather available emails from the website, no need to dig deep, only easily accessible ones",
  ].join("\n"),
});

export const runCompanyAgentByUrl = async (url: string) => {
  const result = await run(agent, url);

  return result.finalOutput;
};
