import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-24">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
          Testimonials
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Trusted feedback from clients and collaborators.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {testimonials.map((item) => (
          <blockquote
            key={`${item.name}-${item.role}`}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-zinc-900"
          >
            <p className="leading-7 text-gray-600 dark:text-gray-400">
              “{item.quote}”
            </p>

            <footer className="mt-6">
              <strong className="block text-gray-900 dark:text-white">
                {item.name}
              </strong>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {item.role}
              </span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}