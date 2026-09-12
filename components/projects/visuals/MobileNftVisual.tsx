"use client";

import { useState } from "react";
import { Layers, Smartphone, Wifi, Zap } from "lucide-react";

export default function MobileNftVisual() {
  const [activeAsset, setActiveAsset] = useState<number>(0);

  const assets = [
    {
      id: "#8912",
      name: "ARCHETYPE // MONOLITH 01",
      creator: "0x3A4...F29",
      floor: "2.45 ETH",
      latency: "42ms (Cached)",
      ipfsGateway: "cloudflare-ipfs.com",
    },
    {
      id: "#8913",
      name: "ARCHETYPE // TENSION 02",
      creator: "0x88C...11D",
      floor: "3.80 ETH",
      latency: "58ms (Edge)",
      ipfsGateway: "pinata.cloud/ipfs",
    },
    {
      id: "#8914",
      name: "ARCHETYPE // CONDUIT 03",
      creator: "0x12F...99A",
      floor: "1.95 ETH",
      latency: "36ms (Buffer)",
      ipfsGateway: "dweb.link/ipfs",
    },
  ];

  const current = assets[activeAsset];

  return (
    <div className="bg-[var(--bg-paper-dark)] p-5 sm:p-6 border border-[var(--color-rule-strong)] font-mono text-xs">
      {/* Device & Pipeline Header */}
      <div className="flex items-center justify-between pb-3 mb-4 hairline-b text-[var(--color-ink-muted)]">
        <div className="flex items-center gap-2">
          <Smartphone size={14} className="text-[var(--color-accent)]" />
          <span className="font-bold text-[var(--color-ink)]">REACT NATIVE / EXPO RUNTIME METRICS</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-[var(--color-accent)] font-semibold">
          <Zap size={12} />
          <span>60 FPS SMOOTH SCROLL</span>
        </div>
      </div>

      {/* Interactive Mobile Viewport Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
        
        {/* Left: Mobile Artifact Card Mockup */}
        <div className="sm:col-span-6 bg-[var(--bg-paper-light)] p-3 border border-[var(--color-rule)] relative shadow-xs">
          {/* Simulated Mobile Card Display */}
          <div className="h-28 bg-[var(--bg-paper-subtle)] border border-[var(--color-rule)] flex flex-col justify-between p-3 relative overflow-hidden">
            <div className="flex justify-between items-start">
              <span className="text-[9px] bg-[var(--color-ink)] text-[var(--bg-paper-light)] px-1.5 py-0.5 font-bold">
                {current.id}
              </span>
              <span className="text-[9px] text-[var(--color-accent)] font-bold">
                {current.floor}
              </span>
            </div>

            {/* Geometric Art Motif */}
            <div className="flex items-center justify-center my-auto">
              <div className="w-12 h-12 border-2 border-[var(--color-ink)] rotate-12 flex items-center justify-center bg-[var(--bg-paper-light)]">
                <div className="w-6 h-6 bg-[var(--color-accent)] -rotate-6" />
              </div>
            </div>

            <div className="text-[10px] font-bold text-[var(--color-ink)] truncate">
              {current.name}
            </div>
          </div>

          {/* Asset Selection Buttons */}
          <div className="mt-2.5 flex gap-1.5">
            {assets.map((a, idx) => (
              <button
                key={a.id}
                onClick={() => setActiveAsset(idx)}
                className={`flex-1 py-1 text-[9px] border transition-colors ${
                  activeAsset === idx
                    ? "bg-[var(--color-ink)] text-[var(--bg-paper-light)] border-[var(--color-ink)]"
                    : "bg-transparent text-[var(--color-ink-muted)] border-[var(--color-rule)] hover:border-[var(--color-ink)]"
                }`}
              >
                ITEM 0{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Architecture & Caching Spec */}
        <div className="sm:col-span-6 space-y-2.5">
          <div className="text-[10px] font-bold text-[var(--color-accent)] uppercase tracking-wider flex items-center gap-1.5">
            <Layers size={13} />
            <span>IPFS GATEWAY RESOLVER</span>
          </div>

          <div className="space-y-1.5 text-[11px]">
            <div className="bg-[var(--bg-paper-light)] p-2 border border-[var(--color-rule)]">
              <span className="text-[10px] text-[var(--color-ink-faint)] block">ACTIVE IPFS ENDPOINT:</span>
              <span className="text-[var(--color-ink)] font-semibold">{current.ipfsGateway}</span>
            </div>
            <div className="bg-[var(--bg-paper-light)] p-2 border border-[var(--color-rule)]">
              <span className="text-[10px] text-[var(--color-ink-faint)] block">RENDER LATENCY:</span>
              <span className="text-[var(--color-accent)] font-semibold">{current.latency}</span>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Spec */}
      <div className="mt-3 pt-2 hairline-t flex justify-between items-center text-[10px] text-[var(--color-ink-muted)]">
        <span>MEM-BOUNDED BUFFER RECYCLING</span>
        <span>OFFLINE-FIRST ASYNCSTORAGE HYDRATION</span>
      </div>
    </div>
  );
}
