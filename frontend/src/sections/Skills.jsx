const skills = {
  Frontend: ["React", "JavaScript", "HTML", "Tailwind CSS", "Framer Motion"],
  Backend: ["Node.js", "Express.js", "REST APIs", "JWT"],
  Database: ["MongoDB", "Mongoose"],
  Tools: ["Git", "GitHub", "Postman", "VS Code"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-24">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
          Skills
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
          Technical stack grouped for clarity.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {Object.entries(skills).map(([group, items]) => (
          <article
            key={group}
            className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h3 className="text-lg font-medium">{group}</h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-950 px-3 py-1 text-sm text-gray-600 dark:text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}