import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-5 z-50 h-12 w-12 rounded-full border border-gray-200 bg-white text-gray-900 shadow-lg transition hover:-translate-y-1 dark:border-gray-800 dark:bg-zinc-900 dark:text-white"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}