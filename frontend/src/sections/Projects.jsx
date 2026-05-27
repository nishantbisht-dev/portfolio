import { useMemo, useState } from "react";
import { projects } from "../data/content";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterOptions = useMemo(() => {
    return ["All", ...new Set(projects.map((project) => project.category))];
  }, []);

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-20 md:py-24">
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
            Projects
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-950 dark:text-white md:text-4xl">
            Selected projects built with a practical full-stack approach.
          </h2>

          <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
            A collection of web applications focused on clean UI, reusable
            components, backend APIs, database integration, and deployment-ready
            structure.
          </p>
        </div>

        <a
          href="https://github.com/nishantbisht-dev"
          target="_blank"
          rel="noreferrer noopener"
          className="w-fit rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-800 transition hover:-translate-y-0.5 hover:border-gray-950 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:border-white dark:hover:bg-zinc-900"
        >
          View GitHub
        </a>
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        {filterOptions.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setActiveFilter(option)}
            aria-pressed={activeFilter === option}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeFilter === option
                ? "bg-gray-950 text-white shadow-sm dark:bg-white dark:text-black"
                : "border border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:text-gray-950 dark:border-gray-800 dark:bg-zinc-900 dark:text-gray-300 dark:hover:border-gray-700 dark:hover:text-white"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <article
            key={project.title}
            className={`group relative flex min-h-[360px] flex-col overflow-hidden rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
              project.featured
                ? "border-gray-300 bg-white shadow-sm dark:border-gray-700 dark:bg-zinc-900"
                : "border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-zinc-900/80"
            }`}
          >
            <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-gray-100 transition group-hover:bg-gray-200 dark:bg-zinc-800 dark:group-hover:bg-zinc-700" />

            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
                    {project.category}
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-gray-950 dark:text-white">
                    {project.title}
                  </h3>
                </div>

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gray-950 text-sm font-semibold text-white dark:bg-white dark:text-black">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-5 leading-8 text-gray-600 dark:text-gray-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700 dark:border-gray-800 dark:bg-zinc-950 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-auto flex flex-wrap items-center gap-3 pt-8">
              {project.live && project.live !== "#" ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full bg-gray-950 px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-md dark:bg-white dark:text-black"
                >
                  Live Preview
                </a>
              ) : (
                <span className="rounded-full bg-gray-200 px-5 py-2.5 text-sm font-medium text-gray-500 dark:bg-zinc-800 dark:text-gray-400">
                  Live Coming Soon
                </span>
              )}

              {project.github && project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-800 transition hover:-translate-y-0.5 hover:border-gray-950 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:border-white dark:hover:bg-zinc-900"
                >
                  Source Code
                </a>
              )}

              {project.featured && (
                <span className="ml-auto rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-600 dark:border-gray-800 dark:bg-zinc-950 dark:text-gray-300">
                  Featured Project
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}