
import { profile, socialLinks } from "../data/content";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-black">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          {/* BRAND */}
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-950 text-sm font-semibold text-white dark:bg-white dark:text-black">
                NB
              </span>

              <span>
                <span className="block font-semibold tracking-tight text-gray-950 dark:text-white">
                  {profile.name}
                </span>
                <span className="mt-1 block text-sm text-gray-500 dark:text-gray-400">
                  {profile.role}
                </span>
              </span>
            </a>

            <p className="mt-5 max-w-md leading-7 text-gray-600 dark:text-gray-400">
              Building clean, responsive, and practical full-stack web
              applications with the MERN stack.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
              Navigation
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-gray-600 transition hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
              Connect
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? "_self" : "_blank"}
                  rel="noreferrer noopener"
                  className="w-fit text-sm text-gray-600 transition hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-gray-200 pt-6 dark:border-gray-800 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Designed & built with React, Tailwind CSS, and MERN stack.
          </p>
        </div>
      </div>
    </footer>
  );
}