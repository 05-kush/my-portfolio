"use client";

import { useState } from "react";
import { skillsTopology } from "@/data/resume";
import { ArrowDown, Cpu, Database, Network, Server } from "lucide-react";

export default function TopologyBlueprint() {
  const [activeTab, setActiveTab] = useState<"blueprint" | "taxonomy">("blueprint");
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const pipelineNodes = [
    {
      id: "client",
      title: "CLIENT & EDGE INGEST",
      tech: "React 19 / Vite / React Native / Expo",
      protocol: "HTTPS / REST / WebSocket",
      desc: "Optimistic updates, token storage, and client media feeds.",
      color: "var(--color-ink)",
    },
    {
      id: "gateway",
      title: "API GATEWAY & ROUTING",
      tech: "Node.js / Express / Reverse Proxy",
      protocol: "JSON Schema / JWT Auth / Rate Limiting",
      desc: "Async event loop concurrency, request validation, and downstream fanout.",
      color: "var(--color-ink)",
    },
    {
      id: "cache",
      title: "IN-MEMORY STATE & SYNC",
      tech: "Redis Cluster (78% Pool Optimization)",
      protocol: "RESP / Pub-Sub / Memory Buffers",
      desc: "Sub-millisecond read caches and CDC sync bridge to Elasticsearch.",
      color: "var(--color-accent)",
    },
    {
      id: "bus",
      title: "DISTRIBUTED EVENT STREAM",
      tech: "Apache Kafka (Partitioned Event Logs)",
      protocol: "Binary TCP / High-Throughput Buffers",
      desc: "Buffers multi-million event spikes; decouples ingest from analytics.",
      color: "var(--color-ink)",
    },
    {
      id: "storage",
      title: "ANALYTICAL & STORAGE TIERS",
      tech: "Apache Druid (OLAP) · Elasticsearch · MongoDB",
      protocol: "Columnar Segments / Inverted Indices / BSON",
      desc: "2B+ daily records aggregation with real-time query capability.",
      color: "var(--color-ink)",
    },
  ];

  return (
    <section id="blueprint" className="py-16 sm:py-24 hairline-b">
      {/* Section Header */}
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-10">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-bold text-[var(--color-accent)]">04</span>
          <span className="font-mono text-xs text-[var(--color-ink-muted)] tracking-widest uppercase">
            / ARCHITECTURE TOPOLOGY & BLUEPRINT
          </span>
        </div>
        
        {/* Mode Switcher */}
        <div className="flex items-center border border-[var(--color-ink)] p-0.5 font-mono text-xs">
          <button
            onClick={() => setActiveTab("blueprint")}
            className={`px-3 py-1 transition-colors ${
              activeTab === "blueprint"
                ? "bg-[var(--color-ink)] text-[var(--bg-paper-light)]"
                : "text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
            }`}
          >
            DATAFLOW BLUEPRINT
          </button>
          <button
            onClick={() => setActiveTab("taxonomy")}
            className={`px-3 py-1 transition-colors ${
              activeTab === "taxonomy"
                ? "bg-[var(--color-ink)] text-[var(--bg-paper-light)]"
                : "text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
            }`}
          >
            SYSTEM TAXONOMY
          </button>
        </div>
      </div>

      {activeTab === "blueprint" ? (
        /* Architecture Drawing / Blueprint Mode */
        <div className="bg-[var(--bg-paper-light)] hairline-all p-6 sm:p-8 lg:p-10 relative">
          
          {/* Blueprint Title & Stamp */}
          <div className="flex flex-wrap items-center justify-between pb-6 mb-8 hairline-b font-mono text-xs">
            <div>
              <span className="font-bold text-sm text-[var(--color-ink)]">
                PRODUCTION HIGH-THROUGHPUT PIPELINE BLUEPRINT
              </span>
              <p className="text-[11px] text-[var(--color-ink-muted)] mt-0.5">
                END-TO-END DATA PATH & INGESTION TOPOLOGY
              </p>
            </div>
            <div className="text-[10px] text-[var(--color-ink-faint)] border border-[var(--color-rule-strong)] px-2.5 py-1">
              STATUS: PRODUCTION VERIFIED (2B+ REC/DAY)
            </div>
          </div>

          {/* Sequential Blueprint Nodes with Flow Arrows */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {pipelineNodes.map((node, idx) => (
              <div key={node.id} className="relative">
                {/* Node Box */}
                <div
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`p-4 sm:p-5 border transition-all ${
                    hoveredNode === node.id || node.id === "cache"
                      ? "bg-[var(--bg-paper-dark)] border-[var(--color-accent)] shadow-xs"
                      : "bg-[var(--bg-paper-subtle)] border-[var(--color-rule-strong)]"
                  }`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2 font-mono">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold px-1.5 py-0.5 bg-[var(--color-ink)] text-[var(--bg-paper-light)]">
                        LAYER 0{idx + 1}
                      </span>
                      <span className="font-bold text-xs sm:text-sm text-[var(--color-ink)]">
                        {node.title}
                      </span>
                    </div>
                    <span className="text-[11px] text-[var(--color-accent)] font-semibold">
                      {node.protocol}
                    </span>
                  </div>

                  <div className="text-xs sm:text-sm font-semibold text-[var(--color-ink)] mb-1 font-mono">
                    {node.tech}
                  </div>

                  <p className="text-xs text-[var(--color-ink-muted)] leading-relaxed font-sans">
                    {node.desc}
                  </p>
                </div>

                {/* Vertical Directional Line & Arrow */}
                {idx < pipelineNodes.length - 1 && (
                  <div className="flex flex-col items-center py-2 text-[var(--color-ink-muted)]">
                    <div className="w-px h-4 bg-[var(--color-rule-strong)]" />
                    <ArrowDown size={14} className="text-[var(--color-accent)]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Blueprint Engineering Notes Footer */}
          <div className="mt-8 pt-4 hairline-t grid sm:grid-cols-3 gap-4 font-mono text-[10px] text-[var(--color-ink-muted)]">
            <div>
              <span className="font-bold text-[var(--color-ink)] block">SYNC MECHANISM:</span>
              <span>CDC engine synchronizes cache changes with Elasticsearch within 30ms latency.</span>
            </div>
            <div>
              <span className="font-bold text-[var(--color-ink)] block">ISOLATION BOUNDARY:</span>
              <span>Kafka partition consumers operate decoupled from user request threads.</span>
            </div>
            <div>
              <span className="font-bold text-[var(--color-ink)] block">MONITORING HOOKS:</span>
              <span>Prometheus counters instrument connection pools, query latencies, and drops.</span>
            </div>
          </div>
        </div>
      ) : (
        /* Taxonomy Matrix Mode */
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {skillsTopology.layers.map((layer) => (
            <div
              key={layer.id}
              className="bg-[var(--bg-paper-light)] hairline-all p-6 space-y-4"
            >
              <div className="pb-3 hairline-b">
                <span className="font-mono text-xs font-bold text-[var(--color-accent)] block mb-1">
                  {layer.name}
                </span>
                <p className="text-xs text-[var(--color-ink-muted)] font-sans">
                  {layer.description}
                </p>
              </div>

              <div className="space-y-3">
                {layer.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-3 bg-[var(--bg-paper-subtle)] border border-[var(--color-rule)] flex items-start justify-between gap-3"
                  >
                    <div>
                      <span className="font-bold text-xs text-[var(--color-ink)] font-mono block">
                        {item.name}
                      </span>
                      <span className="text-[11px] text-[var(--color-ink-muted)] font-sans">
                        {item.spec}
                      </span>
                    </div>
                    <span className="editorial-tag text-[9px] py-0.5">
                      {item.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
