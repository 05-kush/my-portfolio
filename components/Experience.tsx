"use client";

import { useState } from "react";
import { experienceData } from "@/data/resume";
import { Building2, Calendar, CheckCircle2, ChevronRight, MapPin } from "lucide-react";

export default function Experience() {
  const [selectedRoleIndex, setSelectedRoleIndex] = useState<number>(0);
  const activeExp = experienceData[selectedRoleIndex];

  return (
    <section id="experience" className="py-16 sm:py-24 hairline-b">
      {/* Section Header */}
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-12 sm:mb-16">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-bold text-[var(--color-accent)]">05</span>
          <span className="font-mono text-xs text-[var(--color-ink-muted)] tracking-widest uppercase">
            / PRODUCTION TRAJECTORY & EXPERIENCE
          </span>
        </div>
        <div className="font-mono text-xs text-[var(--color-ink-faint)]">
          CHRONOLOGY OF WORK · 2022 — PRESENT
        </div>
      </div>

      {/* Main Experience Layout: Left Role Index + Right Dossier */}
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Role Selector Tabs (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="font-mono text-xs font-bold text-[var(--color-ink-muted)] uppercase tracking-wider mb-2">
            SELECT APPOINTMENT:
          </div>

          <div className="space-y-3">
            {experienceData.map((exp, idx) => {
              const isSelected = selectedRoleIndex === idx;

              return (
                <button
                  key={exp.company}
                  onClick={() => setSelectedRoleIndex(idx)}
                  className={`w-full text-left p-5 border transition-all ${
                    isSelected
                      ? "bg-[var(--bg-paper-light)] border-[var(--color-ink)] shadow-xs"
                      : "bg-[var(--bg-paper-subtle)] border-[var(--color-rule)] hover:border-[var(--color-rule-strong)]"
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-[11px] mb-1.5">
                    <span className="font-bold text-[var(--color-accent)]">
                      EXP [0{idx + 1}]
                    </span>
                    <span className="text-[var(--color-ink-muted)]">
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm sm:text-base text-[var(--color-ink)]">
                    {exp.role}
                  </h3>

                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-[var(--color-ink-muted)]">
                      {exp.company}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 border ${
                        isSelected
                          ? "bg-[var(--color-ink)] text-[var(--bg-paper-light)] border-[var(--color-ink)]"
                          : "bg-[var(--bg-paper-dark)] text-[var(--color-ink-muted)] border-[var(--color-rule)]"
                      }`}
                    >
                      {exp.type.toUpperCase()}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Quick Resume Link Card */}
          <div className="p-4 bg-[var(--bg-paper-subtle)] border border-[var(--color-rule)] font-mono text-xs text-[var(--color-ink-muted)] mt-6">
            <span className="text-[var(--color-ink)] font-bold block mb-1">
              FULL RECORD & CREDENTIALS:
            </span>
            <p className="text-[11px] mb-3">
              Official curriculum vitae available in print-ready PDF format.
            </p>
            <a
              href="/Kushagra_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="atelier-btn-secondary w-full text-xs py-2"
            >
              DOWNLOAD OFFICIAL RESUME
            </a>
          </div>
        </div>

        {/* Right Column: Detailed Experience Dossier (7 cols) */}
        <div className="lg:col-span-7 bg-[var(--bg-paper-light)] hairline-all p-6 sm:p-8 lg:p-10">
          
          {/* Dossier Header */}
          <div className="pb-6 mb-6 hairline-b">
            <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-[var(--color-ink-muted)] mb-2">
              <div className="flex items-center gap-1.5 text-[var(--color-accent)] font-bold">
                <Building2 size={14} />
                <span>{activeExp.company.toUpperCase()}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[var(--color-ink-faint)]">
                <MapPin size={13} />
                <span>{activeExp.location}</span>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-ink)] mb-2">
              {activeExp.role}
            </h2>

            <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed font-sans">
              {activeExp.summary}
            </p>
          </div>

          {/* Key Metrics Strip for this role */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
            {activeExp.keyMetrics.map((km) => (
              <div
                key={km.label}
                className="p-3 bg-[var(--bg-paper-subtle)] border border-[var(--color-rule)] flex flex-col justify-between"
              >
                <span className="text-[10px] font-mono text-[var(--color-ink-faint)] block truncate uppercase tracking-wider mb-1">
                  {km.label}
                </span>
                <span className="text-sm sm:text-base font-bold text-[var(--color-ink)] font-mono truncate">
                  {km.value}
                </span>
              </div>
            ))}
          </div>

          {/* Key Achievements List */}
          <div className="space-y-3 mb-8">
            <div className="font-mono text-xs font-bold text-[var(--color-ink)] uppercase tracking-wider">
              KEY PRODUCTION CONTRIBUTIONS:
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--color-ink-muted)] font-sans">
              {activeExp.achievements.map((ach, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-[var(--color-accent)] font-mono font-bold text-xs mt-0.5">
                    →
                  </span>
                  <span className="leading-relaxed">{ach}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="pt-4 hairline-t">
            <div className="font-mono text-[10px] font-bold text-[var(--color-ink-faint)] uppercase tracking-wider mb-2.5">
              STACK & TOOLS LEVERAGED:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {activeExp.technologies.map((t) => (
                <span key={t} className="editorial-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
