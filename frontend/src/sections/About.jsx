import { profile } from "../data/content";

const highlights = [
  "MERN stack development",
  "Clean and responsive UI",
  "REST API development",
  "Database integration",
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24">
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        {/* LEFT SIDE */}
        <div className="md:sticky md:top-28">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
            About Me
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-950 dark:text-white md:text-4xl">
            Developer focused on building clean, practical and scalable web
            applications.
          </h2>

          <p className="mt-5 max-w-md leading-7 text-gray-600 dark:text-gray-400">
            I like creating websites that not only look good but also work
            smoothly, load fast and solve real problems.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-5">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-zinc-900 md:p-8">
            <p className="leading-8 text-gray-600 dark:text-gray-400">
              {profile.intro}
            </p>

            <p className="mt-5 leading-8 text-gray-600 dark:text-gray-400">
              {profile.summary}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-zinc-900"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-950 text-sm font-semibold text-white dark:bg-white dark:text-black">
                  ✓
                </div>

                <h3 className="font-medium text-gray-950 dark:text-white">
                  {item}
                </h3>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-zinc-900">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
              Current Focus
            </p>

            <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
              Improving my full-stack development skills by building real-world
              projects with React, Node.js, Express, MongoDB, authentication,
              dashboards, APIs, deployment and clean project structure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}