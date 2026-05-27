import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-24">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
          Experience
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-950 dark:text-white md:text-4xl">
          My learning journey, training, and practical development experience.
        </h2>

        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
          A timeline of my development growth, including industrial training,
          certifications, and hands-on project building with the MERN stack.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gray-200 dark:bg-gray-800 md:block" />

        <div className="space-y-6">
          {experience.map((item, index) => (
            <article
              key={`${item.title}-${item.period}`}
              className="group relative grid gap-5 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-zinc-900 md:grid-cols-[80px_1fr]"
            >
              <div className="relative hidden md:block">
                <span className="absolute left-[-31px] top-2 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-xs font-semibold text-gray-700 shadow-sm dark:border-gray-800 dark:bg-zinc-950 dark:text-gray-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {item.org}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-gray-950 dark:text-white">
                      {item.title}
                    </h3>
                  </div>

                  <span className="w-fit rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600 dark:border-gray-800 dark:bg-zinc-950 dark:text-gray-300">
                    {item.period}
                  </span>
                </div>

                {item.certificate && (
                  <a
                    href={item.certificate}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-5 inline-flex rounded-full bg-gray-950 px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-md dark:bg-white dark:text-black"
                  >
                    View Certificate
                  </a>
                )}

                <div className="mt-6 flex flex-wrap gap-2">
                  {getTags(item.title).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm text-gray-600 dark:border-gray-800 dark:bg-zinc-950 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function getTags(title) {
  const lowerTitle = title.toLowerCase();

  if (lowerTitle.includes("intern")) {
    return ["MERN Stack", "APIs", "React", "MongoDB"];
  }

  if (lowerTitle.includes("certificate")) {
    return ["Full Stack", "Databases", "Git", "Cloud Basics"];
  }

  return ["Self Learning", "Projects", "Deployment", "Debugging"];
}