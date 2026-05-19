import { profile } from "../data/content";

export default function Footer() {
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-gray-200 bg-white py-8 dark:border-gray-800 dark:bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-gray-900 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}