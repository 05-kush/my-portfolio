import { architecturePhilosophy, personalInfo } from "@/data/resume";
import { ArrowDownRight, CornerRightDown } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 hairline-b">
      {/* Section Number Header */}
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-10">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-bold text-[var(--color-accent)]">01</span>
          <span className="font-mono text-xs text-[var(--color-ink-muted)] tracking-widest uppercase">
            / PHILOSOPHY & SYSTEMS METHODOLOGY
          </span>
        </div>
        <div className="font-mono text-xs text-[var(--color-ink-faint)]">
          ATELIER NOTES · VOL. 2026
        </div>
      </div>

      {/* Main Layout: Large Editorial Essay + Handcrafted Margin Annotations */}
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">

        {/* Left / Main Essay Column (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--color-ink)] leading-snug">
            A little about how I think about systems, scale, and distributed reliability.
          </h2>

          <div className="space-y-5 text-base sm:text-lg text-[var(--color-ink-muted)] leading-relaxed font-normal">
            <p>
              I am a technology-agnostic full-stack engineer with 3 years of hands-on production experience building, optimizing, and operating end-to-end web applications and high-throughput distributed architectures.
            </p>
            <p>
              At <strong className="text-[var(--color-ink)] font-semibold">Reliance Jio Platforms</strong>, my daily focus revolves around high-throughput ingest systems, cache synchronization, and connection resilience where even minor latency spikes compound across millions of queries.
            </p>
            <p>
              Rather than chasing speculative complexity, I approach engineering problems through deep observability: instrumenting percentiles, profiling event loops, benchmarking socket lifecycles, and designing clear failure boundaries.
            </p>
          </div>

          {/* Handwritten-Style Editorial Margin Callout */}
          <div className="p-4 sm:p-5 bg-[var(--bg-paper-light)] border-l-2 border-[var(--color-accent)] hairline-all text-sm">
            <div className="flex items-start gap-3">
              <CornerRightDown size={18} className="text-[var(--color-accent)] shrink-0 mt-0.5" />
              <div>
                <span className="font-mono text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider block mb-1">
                  CORE OBSERVATION
                </span>
                <p className="text-[var(--color-ink)] italic font-serif text-base sm:text-lg leading-snug">
                  &ldquo;The bottleneck in high-throughput pipelines is rarely the database itself—it is almost always unmanaged socket saturation, unbounded memory queues, and lack of real-time backpressure.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right / Architecture Flow & Constraints (4 cols) */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-6">

          <div className="bg-[var(--bg-paper-light)] hairline-all p-6">
            <div className="flex items-center justify-between pb-3 mb-4 hairline-b">
              <span className="font-mono text-xs font-bold text-[var(--color-ink)]">
                PIPELINE PRINCIPLES
              </span>
              <span className="font-mono text-[10px] text-[var(--color-accent)]">
                SPEC. 01–04
              </span>
            </div>

            <div className="space-y-4">
              {architecturePhilosophy.map((p, idx) => (
                <div key={p.step} className="group">
                  <div className="flex items-baseline justify-between text-xs font-mono mb-1">
                    <span className="font-bold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                      {p.step} · {p.principle}
                    </span>
                    <span className="text-[10px] text-[var(--color-ink-faint)]">
                      {idx < 3 ? "↓" : "■"}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--color-ink-muted)] leading-relaxed">
                    {p.desc}
                  </p>
                  {idx < 3 && (
                    <div className="my-3 hairline-b opacity-40" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Handcrafted Studio Note */}
          <div className="font-mono text-[11px] text-[var(--color-ink-muted)] px-3 py-2 bg-[var(--bg-paper-subtle)] border border-dashed border-[var(--color-rule-strong)]">
            <div className="flex items-center gap-1.5 text-[var(--color-accent)] font-semibold mb-0.5">
              <span>* NOTE</span>
            </div>
            <span>Measure first. Optimize with real telemetry before refactoring.</span>
          </div>

        </div>

      </div>
    </section>
  );
}
