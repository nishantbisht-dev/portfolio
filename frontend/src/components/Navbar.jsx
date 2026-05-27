

import { useState } from "react";
import { profile } from "../data/content";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl dark:border-gray-800 dark:bg-black/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gray-950 text-sm font-semibold text-white dark:bg-white dark:text-black">
            NB
          </span>

          <span className="flex flex-col leading-none">
            <span className="font-semibold tracking-tight text-gray-950 dark:text-white">
              {profile.name}
            </span>
            <span className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {profile.role}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-gray-200 bg-white p-1 shadow-sm dark:border-gray-800 dark:bg-zinc-900 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-950 dark:text-gray-300 dark:hover:bg-zinc-800 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 transition hover:-translate-y-0.5 hover:border-gray-950 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:border-white dark:hover:bg-zinc-900"
          >
            Resume
          </a>

          <a
            href="#contact"
            className="rounded-full bg-gray-950 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-md dark:bg-white dark:text-black"
          >
            Hire Me
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-gray-200 bg-white text-xl text-gray-900 shadow-sm dark:border-gray-800 dark:bg-zinc-900 dark:text-white lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 dark:border-gray-800 dark:bg-black lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-zinc-900"
              >
                {link.label}
              </a>
            ))}

            <div className="mt-3 grid grid-cols-2 gap-3 border-t border-gray-200 pt-4 dark:border-gray-800">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="rounded-full border border-gray-300 px-4 py-3 text-center text-sm font-medium text-gray-800 dark:border-gray-700 dark:text-gray-200"
              >
                Resume
              </a>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-gray-950 px-4 py-3 text-center text-sm font-medium text-white dark:bg-white dark:text-black"
              >
                Hire Me
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}