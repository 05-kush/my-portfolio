import { studioMetrics } from "@/data/resume";

export default function MetricsStrip() {
  return (
    <section id="metrics" className="py-14 sm:py-20 hairline-b">
      {/* Section Header */}
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-8 sm:mb-12">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-bold text-[var(--color-accent)]">02</span>
          <span className="font-mono text-xs text-[var(--color-ink-muted)] tracking-widest uppercase">
            / VERIFIED PRODUCTION BENCHMARKS
          </span>
        </div>
        <div className="font-mono text-xs text-[var(--color-ink-faint)]">
          RELIANCE JIO PLATFORMS & PRODUCTION METRICS
        </div>
      </div>

      {/* Editorial Metric Grid with Hairlines */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 hairline-all bg-[var(--bg-paper-light)] divide-y sm:divide-y-0 sm:divide-x divide-[var(--color-rule)]">
        {studioMetrics.map((item, idx) => (
          <div
            key={item.num}
            className="p-6 sm:p-8 flex flex-col justify-between group hover:bg-[var(--bg-paper-subtle)] transition-colors"
          >
            {/* Top Numbering / Index */}
            <div className="flex justify-between items-center mb-6">
              <span className="font-mono text-[11px] text-[var(--color-ink-faint)]">
                METRIC [{String(idx + 1).padStart(2, "0")}]
              </span>
              <span className="w-1.5 h-1.5 bg-[var(--color-rule-strong)] group-hover:bg-[var(--color-accent)] transition-colors" />
            </div>

            {/* Massive Editorial Metric Numeral */}
            <div className="mb-4">
              <div className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tighter text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors tabular-nums">
                {item.num}
              </div>
              <div className="font-mono text-xs font-semibold tracking-wider text-[var(--color-accent)] mt-1">
                {item.unit}
              </div>
            </div>

            {/* Metric Label & Detail */}
            <div className="pt-4 hairline-t">
              <h3 className="font-bold text-sm text-[var(--color-ink)] mb-1">
                {item.label}
              </h3>
              <p className="text-xs text-[var(--color-ink-muted)] leading-relaxed">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Editorial Footnote */}
      <div className="mt-4 flex items-center justify-between font-mono text-[11px] text-[var(--color-ink-faint)]">
        <span>* DATA DERIVED FROM TELEMETRY TRACING & INTERNAL SYSTEM AUDITS</span>
        <span className="hidden sm:inline">ZERO CONJECTURE · REAL PRODUCTION WORKLOADS</span>
      </div>
    </section>
  );
}
