import { profile, stats } from "../data/content";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative grid min-h-[calc(100vh-80px)] items-center gap-14 py-20 md:grid-cols-2 md:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-gray-200 blur-3xl opacity-40 dark:bg-zinc-800" />
      <div className="pointer-events-none absolute bottom-10 left-0 h-52 w-52 rounded-full bg-gray-100 blur-3xl opacity-70 dark:bg-zinc-900" />

      {/* LEFT CONTENT */}
      <div className="relative z-10 flex flex-col gap-6">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 shadow-sm dark:border-gray-800 dark:bg-zinc-900 dark:text-gray-300">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          {profile.availability}
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
            {profile.role}
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-gray-950 dark:text-white sm:text-5xl md:text-6xl">
            Hi, I’m {profile.name}.{" "}
            <span className="text-gray-500 dark:text-gray-400">
              I build full-stack web applications.
            </span>
          </h1>
        </div>

        <p className="max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400 md:text-lg">
          {profile.headline || profile.intro}
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-gray-950 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:bg-white dark:text-black"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-800 transition hover:-translate-y-0.5 hover:border-gray-950 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:border-white dark:hover:bg-zinc-900"
          >
            Let’s Talk
          </a>

          <a
            href={profile.resumeUrl}
            download
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-800 transition hover:-translate-y-0.5 hover:border-gray-950 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:border-white dark:hover:bg-zinc-900"
          >
            Download Resume
          </a>
        </div>

        <div className="grid max-w-xl grid-cols-3 gap-3 pt-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-zinc-900"
            >
              <p className="text-xl font-semibold text-gray-950 dark:text-white">
                {item.value}
              </p>
              <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT IMAGE / PROFILE CARD */}
      <div className="relative z-10 flex justify-center md:justify-end">
        <div className="relative w-full max-w-sm">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gray-200 to-transparent blur-2xl dark:from-zinc-800" />

          <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-4 shadow-2xl dark:border-gray-800 dark:bg-zinc-900">
            <div className="overflow-hidden rounded-[1.5rem] bg-gray-100 dark:bg-zinc-950">
              <img
                src="/profile-pic.png"
                alt={profile.name}
                className="h-[420px] w-full object-cover object-top transition duration-500 hover:scale-[1.03]"
              />
            </div>

            <div className="mt-5 space-y-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-950 dark:text-white">
                  {profile.name}
                </h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {profile.role}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-gray-50 p-3 dark:bg-zinc-950">
                  <p className="text-gray-500 dark:text-gray-400">Location</p>
                  <p className="mt-1 font-medium text-gray-900 dark:text-white">
                    Dehradun, India
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-50 p-3 dark:bg-zinc-950">
                  <p className="text-gray-500 dark:text-gray-400">Focus</p>
                  <p className="mt-1 font-medium text-gray-900 dark:text-white">
                    MERN Stack
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute right-6 top-6 rounded-full bg-black/80 px-4 py-2 text-xs font-medium text-white backdrop-blur dark:bg-white/90 dark:text-black">
              Open to work
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}