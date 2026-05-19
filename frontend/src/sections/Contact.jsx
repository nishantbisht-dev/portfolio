import { useState } from "react";
import { socialLinks } from "../data/content";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        
        if (loading) return;

        try {
            setLoading(true);
            setError("");
            setSent(false);

            // const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify(form),
            // });

            const API_URL = import.meta.env.VITE_API_URL.replace(/\/$/, "");

const response = await fetch(`${API_URL}/api/contact`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(form),
});

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Something went wrong");
            }

            setSent(true);
            setForm({
                name: "",
                email: "",
                message: "",
            });

            setTimeout(() => {
                setSent(false);
            }, 3000);
        } catch (error) {
            console.error(error);
            setError("Message not sent. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 md:py-24">
            <div className="mb-10">
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
                    Contact
                </p>

                <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Let’s build something great.
                </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-5">
                    <p className="text-gray-600 dark:text-gray-400 leading-7">
                        I'm open to freelance work, full-time opportunities, and
                        collaborations. Feel free to reach out.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {socialLinks.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                target={item.href.startsWith("mailto:") ? "_self" : "_blank"}
                                rel="noreferrer noopener"
                                className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 p-6 shadow-sm"
                >
                    <div className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Your name"
                            required
                            disabled={loading}
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-black dark:focus:ring-white disabled:opacity-60 disabled:cursor-not-allowed"
                        />

                        <input
                            type="email"
                            placeholder="Your email"
                            required
                            disabled={loading}
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-black dark:focus:ring-white disabled:opacity-60 disabled:cursor-not-allowed"
                        />

                        <textarea
                            rows="5"
                            placeholder="Your message"
                            required
                            disabled={loading}
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-black dark:focus:ring-white disabled:opacity-60 disabled:cursor-not-allowed"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className={`mt-2 px-6 py-3 rounded-full text-sm transition flex items-center justify-center gap-2 ${loading
                                    ? "bg-gray-400 text-white cursor-not-allowed"
                                    : "bg-black text-white hover:opacity-90 dark:bg-white dark:text-black"
                                }`}
                        >
                            {loading ? (
                                <>
                                    <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                    Sending...
                                </>
                            ) : (
                                "Send Message"
                            )}
                        </button>

                        {sent && (
                            <div className="relative overflow-hidden rounded-2xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/30 px-4 py-3 shadow-sm animate-[fadeIn_0.4s_ease-in-out]">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/10 translate-x-[-100%] animate-[shine_1.5s_ease-in-out]"></div>

                                <p className="relative flex items-center gap-3 text-sm font-medium text-green-700 dark:text-green-300">
                                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-600 text-white shadow-md">
                                        ✓
                                    </span>
                                    Message sent successfully!
                                </p>
                            </div>
                        )}

                        {error && (
                            <p className="text-sm text-red-600 dark:text-red-400">
                                {error}
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
}