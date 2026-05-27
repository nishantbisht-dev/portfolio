import { services } from "../data/content";

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-24">
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
            Services
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-950 dark:text-white md:text-4xl">
            What I can help you build.
          </h2>

          <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
            I work on practical web development tasks from frontend interfaces
            to backend APIs, full-stack applications, deployment, and portfolio
            websites.
          </p>
        </div>

        <a
          href="#contact"
          className="w-fit rounded-full bg-gray-950 px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-md dark:bg-white dark:text-black"
        >
          Start a Project
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <article
            key={`${service.title}-${index}`}
            className="group relative flex min-h-[280px] flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-zinc-900"
          >
            <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-gray-100 transition group-hover:bg-gray-200 dark:bg-zinc-800 dark:group-hover:bg-zinc-700" />

            <div className="relative z-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-950 text-sm font-semibold text-white dark:bg-white dark:text-black">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="text-xl font-semibold tracking-tight text-gray-950 dark:text-white">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                {service.text}
              </p>
            </div>

            <div className="relative z-10 mt-auto pt-8">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Clean code • Responsive UI • Practical features
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}