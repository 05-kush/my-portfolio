import { projects } from "@/data/resume";
import BusSchedulerVisual from "./projects/visuals/BusSchedulerVisual";
import TicketStateMachineVisual from "./projects/visuals/TicketStateMachineVisual";
import DefiProtocolVisual from "./projects/visuals/DefiProtocolVisual";
import MobileNftVisual from "./projects/visuals/MobileNftVisual";
import WebRtcPipelineVisual from "./projects/visuals/WebRtcPipelineVisual";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const getProjectVisual = (id: string) => {
    switch (id) {
      case "bus-scheduler":
        return <BusSchedulerVisual />;
      case "ticket-tracker":
        return <TicketStateMachineVisual />;
      case "defi-app":
        return <DefiProtocolVisual />;
      case "nft-marketplace":
        return <MobileNftVisual />;
      case "conference-app":
        return <WebRtcPipelineVisual />;
      default:
        return null;
    }
  };

  return (
    <section id="work" className="py-16 sm:py-24 hairline-b">
      {/* Section Header */}
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-12 sm:mb-16">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-bold text-[var(--color-accent)]">03</span>
          <span className="font-mono text-xs text-[var(--color-ink-muted)] tracking-widest uppercase">
            / SELECTED WORKS & SYSTEM ARTIFACTS
          </span>
        </div>
        <div className="font-mono text-xs text-[var(--color-ink-faint)]">
          EXHIBITION · PRODUCTION & EXPERIMENTAL SYSTEMS
        </div>
      </div>

      {/* Projects Exhibition List */}
      <div className="space-y-16 sm:space-y-24">
        {projects.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <article
              key={project.id}
              className="hairline-all bg-[var(--bg-paper-light)] p-6 sm:p-8 lg:p-10"
            >
              {/* Project Metadata Ribbon */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 hairline-b font-mono text-xs text-[var(--color-ink-muted)]">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[var(--color-accent)] text-sm">
                    [{project.index}]
                  </span>
                  <span className="font-bold text-[var(--color-ink)]">
                    {project.category.toUpperCase()}
                  </span>
                </div>
                <div className="text-[11px] text-[var(--color-ink-faint)]">
                  SPECIFICATION ID: {project.id.toUpperCase()}
                </div>
              </div>

              {/* Dynamic Alternating Layout */}
              <div
                className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-start ${
                  isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Visual / Simulation Artifact (7 cols) */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? "lg:col-start-6" : ""
                  }`}
                >
                  <div className="relative">
                    {getProjectVisual(project.id)}
                  </div>
                </div>

                {/* Editorial Content / Engineering Deep Dive (5 cols) */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-between space-y-5 ${
                    isEven ? "lg:col-start-1" : ""
                  }`}
                >
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--color-ink)] mb-2">
                      {project.title}
                    </h3>

                    <p className="font-mono text-xs text-[var(--color-accent)] font-semibold mb-4">
                      {project.tagline}
                    </p>

                    <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Architectural Highlights */}
                    <div className="bg-[var(--bg-paper-subtle)] p-4 border border-[var(--color-rule)] space-y-2 mb-5">
                      <div className="font-mono text-[10px] font-bold text-[var(--color-ink)] uppercase tracking-wider">
                        KEY ARCHITECTURAL HIGHLIGHTS:
                      </div>
                      <ul className="space-y-1.5 text-xs text-[var(--color-ink-muted)]">
                        {project.architectureNotes.map((note, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[var(--color-accent)] font-mono text-[10px] mt-0.5">▪</span>
                            <span className="leading-snug">{note}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Spec Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t) => (
                        <span key={t} className="editorial-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links / Action Triggers */}
                  <div className="pt-4 hairline-t flex flex-wrap items-center gap-3">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="atelier-btn-secondary py-2 px-3.5 text-xs"
                      >
                        <Github size={13} />
                        <span>SOURCE CODE</span>
                        <ArrowUpRight size={12} className="opacity-70" />
                      </a>
                    )}

                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="atelier-btn-primary py-2 px-3.5 text-xs"
                      >
                        <ExternalLink size={13} />
                        <span>LIVE DEPLOYMENT</span>
                        <ArrowUpRight size={12} />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
