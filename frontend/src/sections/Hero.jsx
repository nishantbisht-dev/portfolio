import { profile } from "../data/content";

export default function Hero() {
  return (
    <section
      id="home"
      className="py-24 grid gap-14 items-center md:grid-cols-2"
    >
      {/* LEFT CONTENT */}
      <div className="flex flex-col gap-6">
        <p className="text-xs uppercase tracking-widest text-gray-500">
          {profile.role}
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-xl">
          {profile.name}
        </h1>

        <p className="text-gray-600 dark:text-gray-400 max-w-xl leading-7">
          {profile.intro}
        </p>

        <div className="flex gap-4 mt-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 bg-black text-white rounded-full text-sm hover:opacity-90 transition dark:bg-white dark:text-black"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full text-sm transition"
          >
            Contact Me
          </a>

          <a
            href={profile.resumeUrl}
            download
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full text-sm transition"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center md:justify-end">
        <div className="relative group">
          {/* subtle background glow */}
          <div className="absolute inset-0 rounded-3xl bg-gray-200 blur-2xl opacity-30 dark:bg-gray-700" />

          {/* image card */}
          <div className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 p-3 shadow-xl">
            <img
              src="/profile-pic.png"
              alt="Nishant Bisht"
              className="w-[320px] h-[380px] object-cover rounded-2xl transition duration-500 group-hover:scale-[1.02]"
            />

            {/* small badge */}
            <div className="absolute bottom-6 left-6 rounded-full bg-black/80 px-4 py-2 text-xs text-white backdrop-blur dark:bg-white/90 dark:text-black">
              Available for work
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}