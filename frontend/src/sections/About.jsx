export default function About() {
  return (
    <section id="about" className="py-20 md:py-24">
      <div className="grid gap-8 md:grid-cols-2 md:items-start">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            About
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            A clean approach to modern web development.
          </h2>
        </div>

        <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900 p-6 md:p-8">
          <p className="text-gray-600 dark:text-gray-400 leading-7">
            I am a MERN stack developer focused on building polished, scalable,
            and easy-to-maintain web applications. I care about structure,
            performance, and user experience, and I like keeping interfaces
            minimal and professional.
          </p>

          <p className="mt-4 text-gray-600 dark:text-gray-400 leading-7">
            My process is simple: keep the design clean, keep the code
            organized, and make sure every section can be updated later without
            rewriting the whole project.
          </p>
        </div>
      </div>
    </section>
  );
}