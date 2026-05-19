import { services } from "../data/content";

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-24">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
          Services
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
          What I can do for you.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <article
            key={`${service.title}-${index}`}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-zinc-900 h-full flex flex-col"
          >
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              {service.title}
            </h3>

            <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
              {service.text}
            </p>

            <div className="mt-6 h-px w-full bg-gray-200 dark:bg-gray-800" />

            <p className="mt-auto pt-4 text-sm text-gray-500 dark:text-gray-400">
              Clean architecture • Scalable code • Modern UI
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}