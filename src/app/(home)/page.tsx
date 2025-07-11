import { FormSearch } from "./form-search";

const STRINGS = {
  title: "AI Scraper",
  description:
    "This application is responsible for gathering information about a desired company, you just have to insert its URL and wait for its profile to be built.",
};

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full max-w-lg">
        <h1 className="text-center text-xl font-semibold">{STRINGS.title}</h1>
        <p className="mt-3 mb-10 text-center text-sm text-slate-500">
          {STRINGS.description}
        </p>

        <FormSearch />
      </div>
    </main>
  );
};

export default Home;
