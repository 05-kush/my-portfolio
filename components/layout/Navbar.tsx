"use client";

import { useEffect, useState } from "react";
import { personalInfo } from "@/data/resume";
import { ArrowUpRight, FileText, Menu, X } from "lucide-react";

export default function Navbar() {
  const [time, setTime] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(now);
        setTime(formatted);
      } catch {
        setTime("12:00:00");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: "ABOUT", href: "#about" },
    { label: "METRICS", href: "#metrics" },
    { label: "WORK", href: "#work" },
    { label: "BLUEPRINT", href: "#blueprint" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-paper)]/90 backdrop-blur-md hairline-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left: Studio Monogram & Identity */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <span className="w-8 h-8 rounded-none border border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--bg-paper)] flex items-center justify-center font-mono font-bold text-xs group-hover:bg-[var(--color-accent)] group-hover:border-[var(--color-accent)] transition-colors">
              {personalInfo.monogram}
            </span>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-[var(--color-ink)]">
                {personalInfo.name.toUpperCase()}
              </span>
              <span className="font-mono text-[10px] text-[var(--color-ink-muted)] tracking-wider">
                ATELIER / SDE-I
              </span>
            </div>
          </a>

          {/* Time & Coordinates */}
          <div className="hidden lg:flex items-center gap-2 pl-4 ml-4 hairline-l py-1 font-mono text-[11px] text-[var(--color-ink-muted)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <span>MUMBAI, IN [IST]</span>
            <span className="text-[var(--color-ink)] font-semibold tabular-nums">
              {time || "12:00:00"}
            </span>
          </div>
        </div>

        {/* Center: Desktop Navigation Items */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-mono text-xs text-[var(--color-ink-muted)] hover:text-[var(--color-accent)] tracking-wider transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.contacts.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 border border-[var(--color-ink)] font-mono text-xs font-semibold text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--bg-paper-light)] transition-colors"
          >
            <FileText size={13} />
            <span>RESUME</span>
            <ArrowUpRight size={12} className="opacity-70" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[var(--color-ink)] hover:bg-[var(--bg-paper-dark)] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--bg-paper-light)] hairline-b px-6 py-6 space-y-4 font-mono text-sm">
          <div className="flex items-center justify-between pb-3 hairline-b text-xs text-[var(--color-ink-muted)]">
            <span>MUMBAI [IST]</span>
            <span className="text-[var(--color-ink)] font-bold tabular-nums">{time}</span>
          </div>
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[var(--color-ink)] hover:text-[var(--color-accent)] font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-4 hairline-t">
            <a
              href={personalInfo.contacts.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-[var(--color-ink)] text-[var(--bg-paper-light)] font-mono text-xs font-semibold"
            >
              <FileText size={14} />
              <span>DOWNLOAD RESUME (PDF)</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
