import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-24">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
          Experience / Education
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
          A simple timeline of growth and work.
        </h2>
      </div>

      <div className="relative border-l border-gray-200 pl-5 dark:border-gray-800">
        <div className="space-y-5">
          {experience.map((item) => (
            <article
              key={`${item.title}-${item.period}`}
              className="relative rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-zinc-900"
            >
              <span className="absolute -left-[31px] top-8 h-3 w-3 rounded-full bg-gray-900 ring-8 ring-white dark:bg-white dark:ring-zinc-950" />

              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {item.period}
                </span>
              </div>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {item.org}
              </p>

              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                {item.details}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}