import { skills } from "../data/content";

const skillDescriptions = {
  Frontend:
    "Building clean, responsive, and user-friendly interfaces with reusable components.",
  Backend:
    "Creating APIs, handling server logic, authentication, and database communication.",
  Database:
    "Designing schemas, storing application data, and working with structured queries.",
  Tools:
    "Using developer tools for coding, testing, deployment, and project collaboration.",
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-24">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
          Skills
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-950 dark:text-white md:text-4xl">
          Technologies I use to build modern web applications.
        </h2>

        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
          My technical stack is focused on the MERN ecosystem, clean frontend
          development, backend APIs, database integration, and tools required to
          build and deploy real-world applications.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {Object.entries(skills).map(([group, items], index) => (
          <article
            key={group}
            className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-zinc-900"
          >
            <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-gray-100 transition group-hover:bg-gray-200 dark:bg-zinc-800 dark:group-hover:bg-zinc-700" />

            <div className="relative">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-950 text-sm font-semibold text-white dark:bg-white dark:text-black">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="text-xl font-semibold text-gray-950 dark:text-white">
                {group}
              </h3>

              <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-600 dark:text-gray-400">
                {skillDescriptions[group]}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm text-gray-700 transition hover:border-gray-300 hover:bg-white dark:border-gray-800 dark:bg-zinc-950 dark:text-gray-300 dark:hover:border-gray-700 dark:hover:bg-zinc-900"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-zinc-900">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
          Development Approach
        </p>

        <p className="mt-3 max-w-4xl leading-7 text-gray-600 dark:text-gray-400">
          I focus on writing clean, readable, and maintainable code. While
          building projects, I try to keep components reusable, APIs organized,
          folder structure simple and UI responsive across different screen
          sizes.
        </p>
      </div>
    </section>
  );
}