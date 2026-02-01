"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();

  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus("Sending...");
    setStatusType("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mykzvzva", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Thanks! I’ll get back to you within 24–48 hours.");
        setStatusType("success");
        form.reset();

        // 🔑 Clear any query params from the URL
        router.replace("/");
      } else {
        setStatus("Oops! Something went wrong. Please try again.");
        setStatusType("error");
      }
    } catch {
      setStatus("Network error. Please try again later.");
      setStatusType("error");
    }

    setIsSubmitting(false);

    // Auto-hide status message after 5s
    setTimeout(() => {
      setStatus("");
      setStatusType("");
    }, 5000);
  };

  return (
    <section className="max-w-2xl mx-auto mb-16 text-center">
      <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>
      <p className="text-gray-400 mb-10">
        Have an opportunity or a question? Drop a message below.
      </p>

      <form className="space-y-6 text-left" onSubmit={handleSubmit}>
        {/* Honeypot field for spam protection */}
        <input type="text" name="_gotcha" className="hidden" />

        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500"
        />

        <select
          name="reason"
          className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500"
        >
          <option>Hiring Opportunity</option>
          <option>Freelance / Contract</option>
          <option>General Question</option>
        </select>

        <textarea
          name="message"
          rows={5}
          placeholder="Your message"
          required
          className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-white text-black rounded-lg font-medium transition hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p
            className={`text-sm text-center ${
              statusType === "success"
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </section>
  );
}
