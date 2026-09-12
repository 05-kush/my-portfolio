"use client";

import { useState } from "react";
import { personalInfo } from "@/data/resume";
import { ArrowUpRight, Github, Linkedin, Mail, Send } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus("TRANSMITTING DISPATCH...");
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
        setStatus("Dispatch received. I will respond within 24–48 hours.");
        setStatusType("success");
        form.reset();
      } else {
        setStatus("Transmission interrupted. Please email directly.");
        setStatusType("error");
      }
    } catch {
      setStatus("Network error encountered. Please reach out via email.");
      setStatusType("error");
    }

    setIsSubmitting(false);

    setTimeout(() => {
      setStatus("");
      setStatusType("");
    }, 6000);
  };

  return (
    <section id="contact" className="pt-16 sm:pt-24 pb-12">
      {/* Section Header */}
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-12 sm:mb-16">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-bold text-[var(--color-accent)]">06</span>
          <span className="font-mono text-xs text-[var(--color-ink-muted)] tracking-widest uppercase">
            / INQUIRY & CORRESPONDENCE
          </span>
        </div>
        <div className="font-mono text-xs text-[var(--color-ink-faint)]">
          DIRECT LINE · OPEN FOR HIGH-SCALE OPPORTUNITIES
        </div>
      </div>

      {/* Main Editorial Grid: Left Poster Statement & Channels, Right Inquiry Form */}
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start pb-16 hairline-b">
        
        {/* Left Column: Big Poster Typography & Direct Channels (6 cols) */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--color-ink)] leading-[1.1] mb-4">
              Let&apos;s build something resilient.
            </h2>
            <p className="text-base sm:text-lg text-[var(--color-ink-muted)] leading-relaxed font-sans max-w-lg">
              Whether you are architecting high-throughput event pipelines, scaling backend infrastructure, or exploring technical leadership, I am always interested in discussing complex systems.
            </p>
          </div>

          {/* Direct Channels Directory */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-[10px] font-bold text-[var(--color-ink-faint)] uppercase tracking-wider mb-2">
              DIRECT CHANNELS:
            </div>

            <a
              href={`mailto:${personalInfo.contacts.email}`}
              className="flex items-center justify-between p-3.5 bg-[var(--bg-paper-light)] border border-[var(--color-rule)] hover:border-[var(--color-ink)] transition-colors group"
            >
              <div className="flex items-center gap-2.5 text-[var(--color-ink)]">
                <Mail size={15} className="text-[var(--color-accent)]" />
                <span className="font-semibold">{personalInfo.contacts.email}</span>
              </div>
              <ArrowUpRight size={14} className="text-[var(--color-ink-muted)] group-hover:text-[var(--color-ink)]" />
            </a>

            <a
              href={personalInfo.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 bg-[var(--bg-paper-light)] border border-[var(--color-rule)] hover:border-[var(--color-ink)] transition-colors group"
            >
              <div className="flex items-center gap-2.5 text-[var(--color-ink)]">
                <Linkedin size={15} className="text-[var(--color-accent)]" />
                <span className="font-semibold">linkedin.com/in/kushagra-gupta05</span>
              </div>
              <ArrowUpRight size={14} className="text-[var(--color-ink-muted)] group-hover:text-[var(--color-ink)]" />
            </a>

            <a
              href={personalInfo.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 bg-[var(--bg-paper-light)] border border-[var(--color-rule)] hover:border-[var(--color-ink)] transition-colors group"
            >
              <div className="flex items-center gap-2.5 text-[var(--color-ink)]">
                <Github size={15} className="text-[var(--color-accent)]" />
                <span className="font-semibold">github.com/05-kush</span>
              </div>
              <ArrowUpRight size={14} className="text-[var(--color-ink-muted)] group-hover:text-[var(--color-ink)]" />
            </a>
          </div>
        </div>

        {/* Right Column: Clean Tactile Inquiry Form (6 cols) */}
        <div className="lg:col-span-6 bg-[var(--bg-paper-light)] hairline-all p-6 sm:p-8">
          <div className="flex items-center justify-between pb-3 mb-6 hairline-b font-mono text-xs">
            <span className="font-bold text-[var(--color-ink)]">TRANSMISSION FORM</span>
            <span className="text-[10px] text-[var(--color-accent)]">FORMSPREE SECURE</span>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input type="text" name="_gotcha" className="hidden" />

            <div>
              <label className="block font-mono text-[11px] font-bold text-[var(--color-ink)] uppercase mb-1">
                Your Name / Organization
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="e.g. Alex Mercer"
                className="w-full p-3 bg-[var(--bg-paper)] border border-[var(--color-rule)] text-[var(--color-ink)] placeholder-[var(--color-ink-faint)] text-sm focus:outline-none focus:border-[var(--color-ink)]"
              />
            </div>

            <div>
              <label className="block font-mono text-[11px] font-bold text-[var(--color-ink)] uppercase mb-1">
                Electronic Mail
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="alex@company.com"
                className="w-full p-3 bg-[var(--bg-paper)] border border-[var(--color-rule)] text-[var(--color-ink)] placeholder-[var(--color-ink-faint)] text-sm focus:outline-none focus:border-[var(--color-ink)]"
              />
            </div>

            <div>
              <label className="block font-mono text-[11px] font-bold text-[var(--color-ink)] uppercase mb-1">
                Context / Inquiry Nature
              </label>
              <select
                name="reason"
                className="w-full p-3 bg-[var(--bg-paper)] border border-[var(--color-rule)] text-[var(--color-ink)] text-sm focus:outline-none focus:border-[var(--color-ink)]"
              >
                <option>Engineering & Hiring Opportunity</option>
                <option>Technical Advisory / Consultation</option>
                <option>Architecture & Collaboration</option>
                <option>General Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block font-mono text-[11px] font-bold text-[var(--color-ink)] uppercase mb-1">
                Message Dispatch
              </label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Details regarding your system requirements or proposal..."
                className="w-full p-3 bg-[var(--bg-paper)] border border-[var(--color-rule)] text-[var(--color-ink)] placeholder-[var(--color-ink-faint)] text-sm focus:outline-none focus:border-[var(--color-ink)]"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="atelier-btn-primary w-full py-3.5 mt-2"
            >
              <Send size={13} />
              <span>{isSubmitting ? "TRANSMITTING DISPATCH..." : "SEND TRANSMISSION"}</span>
            </button>

            {status && (
              <div
                className={`p-3 text-xs font-mono border ${
                  statusType === "success"
                    ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                    : "bg-red-50 text-red-800 border-red-300"
                }`}
              >
                {status}
              </div>
            )}
          </form>
        </div>

      </div>

      {/* Atelier Colophon & Footer */}
      <footer className="pt-10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[var(--color-ink-muted)]">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <span className="font-bold text-[var(--color-ink)]">
            © {new Date().getFullYear()} KUSHAGRA GUPTA
          </span>
          <span className="hidden sm:inline">·</span>
          <span>HANDCRAFTED IN MUMBAI, INDIA</span>
        </div>

        <div>
          <a
            href="#"
            className="hover:text-[var(--color-accent)] transition-colors underline underline-offset-2"
          >
            BACK TO TOP ↑
          </a>
        </div>
      </footer>
    </section>
  );
}
