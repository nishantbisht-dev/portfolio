const workValues = [
  {
    title: "Clean Code",
    text: "I try to write simple, readable, and organized code so the project is easier to understand, maintain, and improve.",
  },
  {
    title: "Responsive Design",
    text: "I build layouts that work smoothly on mobile, tablet, and desktop screens with a clean user experience.",
  },
  {
    title: "Practical Features",
    text: "I focus on building useful features like authentication, APIs, dashboards, forms, database handling, and deployment-ready structure.",
  },
  {
    title: "Continuous Learning",
    text: "I improve every project step by step by learning better patterns, debugging issues, and applying real-world development practices.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-24">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
          Work Values
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-950 dark:text-white md:text-4xl">
          How I approach every project I build.
        </h2>

        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
          I believe a good project is not only about design. It should also have
          clean code, proper structure, useful features, and a smooth experience
          for users.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {workValues.map((item, index) => (
          <article
            key={item.title}
            className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-zinc-900"
          >
            <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-gray-100 transition group-hover:bg-gray-200 dark:bg-zinc-800 dark:group-hover:bg-zinc-700" />

            <div className="relative z-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-950 text-sm font-semibold text-white dark:bg-white dark:text-black">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="text-xl font-semibold text-gray-950 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                {item.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}