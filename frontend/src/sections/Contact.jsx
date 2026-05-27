import { useState } from "react";
import { profile, socialLinks } from "../data/content";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    try {
      setLoading(true);
      setError("");
      setSent(false);

      const apiUrl = import.meta.env.VITE_API_URL;

      if (!apiUrl) {
        throw new Error("API URL is missing");
      }

      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Message could not be sent");
      }

      setSent(true);
      setForm(initialForm);

      setTimeout(() => {
        setSent(false);
      }, 3000);
    } catch (error) {
      console.error(error);
      setError("Message not sent. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
          Contact
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-950 dark:text-white md:text-4xl">
          Let’s discuss your next project or opportunity.
        </h2>

        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
          I’m open to internships, freelance work, full-time opportunities, and
          collaboration on MERN stack projects.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* LEFT CONTACT CARD */}
        <div className="space-y-5">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-zinc-900 md:p-8">
            <h3 className="text-xl font-semibold text-gray-950 dark:text-white">
              Contact Details
            </h3>

            <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
              Have a project idea, job opportunity, or collaboration in mind?
              Send me a message and I’ll get back to you as soon as possible.
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-gray-50 p-4 dark:bg-zinc-950">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Email
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-1 block font-medium text-gray-950 transition hover:underline dark:text-white"
                >
                  {profile.email}
                </a>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4 dark:bg-zinc-950">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Location
                </p>
                <p className="mt-1 font-medium text-gray-950 dark:text-white">
                  {profile.location || "India"}
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4 dark:bg-zinc-950">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Availability
                </p>
                <p className="mt-1 font-medium text-gray-950 dark:text-white">
                  {profile.availability || "Available for work"}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-zinc-900">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
              Connect With Me
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? "_self" : "_blank"}
                  rel="noreferrer noopener"
                  className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:-translate-y-0.5 hover:border-gray-950 dark:border-gray-800 dark:bg-zinc-950 dark:text-gray-300 dark:hover:border-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-zinc-900 md:p-8"
        >
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-950 dark:text-white">
              Send a Message
            </h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Fill out the form and I’ll reply through email.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
                disabled={loading}
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-gray-950 focus:ring-2 focus:ring-gray-200 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-800 dark:bg-zinc-950 dark:text-white dark:focus:border-white dark:focus:ring-zinc-800"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                disabled={loading}
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-gray-950 focus:ring-2 focus:ring-gray-200 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-800 dark:bg-zinc-950 dark:text-white dark:focus:border-white dark:focus:ring-zinc-800"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about your project or opportunity..."
                required
                disabled={loading}
                value={form.message}
                onChange={handleChange}
                className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-gray-950 focus:ring-2 focus:ring-gray-200 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-800 dark:bg-zinc-950 dark:text-white dark:focus:border-white dark:focus:ring-zinc-800"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`mt-2 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition ${
                loading
                  ? "cursor-not-allowed bg-gray-400 text-white"
                  : "bg-gray-950 text-white hover:-translate-y-0.5 hover:shadow-md dark:bg-white dark:text-black"
              }`}
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  Sending Message...
                </>
              ) : (
                "Send Message"
              )}
            </button>

            {sent && (
              <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 dark:border-green-800 dark:bg-green-950/30">
                <p className="flex items-center gap-3 text-sm font-medium text-green-700 dark:text-green-300">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-600 text-white">
                    ✓
                  </span>
                  Message sent successfully. I’ll reply soon.
                </p>
              </div>
            )}

            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 dark:border-red-900 dark:bg-red-950/30">
                <p className="text-sm font-medium text-red-700 dark:text-red-300">
                  {error}
                </p>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}