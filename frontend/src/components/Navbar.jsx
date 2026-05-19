import { useState } from "react";
import { profile } from "../data/content";

const links = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "services",
  "contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="font-semibold text-lg">
          {profile.name}
        </a>

        <nav className="hidden md:flex gap-6 text-sm text-gray-600 dark:text-gray-300">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="hover:text-black dark:hover:text-white capitalize"
            >
              {link}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden text-xl"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-gray-600 dark:text-gray-300">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setOpen(false)}
              className="capitalize"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}