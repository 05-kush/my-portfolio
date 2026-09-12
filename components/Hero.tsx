"use client";

import { personalInfo } from "@/data/resume";
import TactileSculpture from "./hero/TactileSculpture";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-6 sm:pt-10 pb-16 lg:pb-24 hairline-b">
      {/* Top Engineering Ledger strip */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 lg:mb-12 hairline-b font-mono text-xs text-[var(--color-ink-muted)]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[var(--color-accent)] inline-block" />
          <span className="text-[var(--color-ink)] font-bold">KUSHAGRA GUPTA</span>
          <span>/</span>
          <span>SDE-I</span>
        </div>
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <span>FULL-STACK SOFTWARE ENGINEER</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline text-[var(--color-accent)] font-semibold">DISTRIBUTED SYSTEMS</span>
        </div>
      </div>

      {/* Main Asymmetric Grid */}
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column (7 cols): Editorial Typography & Intent */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          {/* Engineering Classification tag */}
          <div className="mb-4">
            <span className="editorial-tag editorial-tag-accent">
              FULL-STACK SYSTEMS · DISTRIBUTED SYSTEMS · OBSERVABILITY
            </span>
          </div>

          {/* Master Headline (Swiss Grotesk) */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-[var(--color-ink)] leading-[1.08] mb-6">
            I build full-stack applications and resilient systems.
          </h1>

          {/* Editorial Context & Subtitle */}
          <p className="text-base sm:text-lg text-[var(--color-ink-muted)] leading-relaxed max-w-2xl mb-8 font-normal">
            Software Development Engineer at{" "}
            <span className="text-[var(--color-ink)] font-semibold underline decoration-[var(--color-accent)] decoration-2 underline-offset-4">
              Reliance Jio Platforms
            </span>
            . Technology-agnostic engineer focused on building end-to-end solutions—pairing intuitive, high-performance user interfaces with scalable, resilient backend architectures, driven by first principles rather than specific tech stacks.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a href="#work" className="atelier-btn-primary">
              <span>EXPLORE SELECTED WORK</span>
              <ArrowDown size={14} />
            </a>
            <a
              href={personalInfo.contacts.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="atelier-btn-secondary"
            >
              <span>CURRICULUM VITAE</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Social Channels & Dispatch Links */}
          <div className="pt-6 hairline-t flex flex-wrap items-center gap-6 font-mono text-xs">
            <span className="text-[var(--color-ink-faint)]">DISPATCH:</span>
            <a
              href={`mailto:${personalInfo.contacts.email}`}
              className="flex items-center gap-1.5 text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors font-medium"
            >
              <Mail size={13} />
              <span>EMAIL</span>
            </a>
            <a
              href={personalInfo.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors font-medium"
            >
              <Github size={13} />
              <span>GITHUB</span>
            </a>
            <a
              href={personalInfo.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors font-medium"
            >
              <Linkedin size={13} />
              <span>LINKEDIN</span>
            </a>
          </div>
        </div>

        {/* Right Column (5 cols): Tactile 3D Sculpture Prototype */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <TactileSculpture />
        </div>

      </div>
    </section>
  );
}
