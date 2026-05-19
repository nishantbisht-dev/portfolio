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
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
          Projects
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Selected work with a clean, professional finish.
        </h2>
      </div>

      <div className="mb-6 flex flex-wrap gap-3">
        {filterOptions.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setActiveFilter(option)}
            aria-pressed={activeFilter === option}
            className={`rounded-full px-4 py-2 text-sm transition ${
              activeFilter === option
                ? "bg-gray-900 text-white dark:bg-white dark:text-black"
                : "border border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:text-gray-900 dark:border-gray-800 dark:bg-zinc-900 dark:text-gray-300 dark:hover:text-white"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {visibleProjects.map((project) => (
          <article
            key={project.title}
            className={`relative rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
              project.featured
                ? "border-gray-300 bg-white shadow-sm dark:border-gray-700 dark:bg-zinc-900"
                : "border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-zinc-900/80"
            }`}
          >
            {project.featured && (
              <span className="absolute right-5 top-5 rounded-full bg-gray-900 px-3 py-1 text-xs font-medium text-white dark:bg-white dark:text-black">
                Featured
              </span>
            )}

            <p className="text-xs uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
              {project.category}
            </p>

            <h3 className="mt-3 text-xl font-medium text-gray-900 dark:text-white">
              {project.title}
            </h3>

            <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-600 dark:border-gray-800 dark:bg-zinc-950 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-4 text-sm">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer noopener"
                className="font-medium text-gray-900 underline-offset-4 hover:underline dark:text-white"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                className="font-medium text-gray-500 underline-offset-4 hover:underline dark:text-gray-400 dark:hover:text-white"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}