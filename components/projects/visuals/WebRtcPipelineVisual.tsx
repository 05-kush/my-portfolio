"use client";

import { useState } from "react";
import { Radio, Users, Vote, Volume2, Video } from "lucide-react";

export default function WebRtcPipelineVisual() {
  const [votes, setVotes] = useState({ optionA: 42, optionB: 18 });
  const [selectedVote, setSelectedVote] = useState<"A" | "B" | null>(null);

  const handleVote = (option: "A" | "B") => {
    if (selectedVote === option) return;
    if (selectedVote === "A") {
      setVotes({ optionA: votes.optionA - 1, optionB: votes.optionB + 1 });
    } else if (selectedVote === "B") {
      setVotes({ optionA: votes.optionA + 1, optionB: votes.optionB - 1 });
    } else {
      if (option === "A") setVotes({ ...votes, optionA: votes.optionA + 1 });
      if (option === "B") setVotes({ ...votes, optionB: votes.optionB + 1 });
    }
    setSelectedVote(option);
  };

  const total = votes.optionA + votes.optionB;
  const pctA = Math.round((votes.optionA / total) * 100);
  const pctB = Math.round((votes.optionB / total) * 100);

  return (
    <div className="bg-[var(--bg-paper-dark)] p-5 sm:p-6 border border-[var(--color-rule-strong)] font-mono text-xs">
      {/* Top Media Mesh Header */}
      <div className="flex items-center justify-between pb-3 mb-4 hairline-b text-[var(--color-ink-muted)]">
        <div className="flex items-center gap-2">
          <Radio size={14} className="text-[var(--color-accent)] animate-pulse" />
          <span className="font-bold text-[var(--color-ink)]">WEBRTC SFU / MEDIA RELAY TOPOLOGY</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-[var(--color-ink-faint)]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
          <span>PEERS: 128 ACTIVE</span>
        </div>
      </div>

      {/* Grid: Media Channel Nodes + Interactive Poll Sync */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
        
        {/* Left: Media Channel Matrix */}
        <div className="sm:col-span-6 bg-[var(--bg-paper-light)] p-3 border border-[var(--color-rule)] space-y-2.5">
          <div className="flex items-center justify-between text-[10px] font-bold text-[var(--color-accent)]">
            <span>MEDIA TRACK INGESTION</span>
            <span>AGORA SDK</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div className="p-2 bg-[var(--bg-paper-subtle)] border border-[var(--color-rule)] flex items-center gap-2">
              <Video size={13} className="text-[var(--color-ink)]" />
              <div>
                <span className="font-bold block text-[var(--color-ink)]">VIDEO STREAM</span>
                <span className="text-[var(--color-ink-faint)]">720p @ 30fps H.264</span>
              </div>
            </div>
            <div className="p-2 bg-[var(--bg-paper-subtle)] border border-[var(--color-rule)] flex items-center gap-2">
              <Volume2 size={13} className="text-[var(--color-ink)]" />
              <div>
                <span className="font-bold block text-[var(--color-ink)]">OPUS AUDIO</span>
                <span className="text-[var(--color-ink-faint)]">48kHz / 32kbps</span>
              </div>
            </div>
          </div>

          <div className="p-2 bg-[var(--bg-paper-subtle)] border border-[var(--color-rule)] text-[10px] text-[var(--color-ink-muted)]">
            <span className="text-[var(--color-ink)] font-semibold block">MEDIA FORWARDING PIPELINE:</span>
            <span>Uplink adaptive bitrate scaling prevents buffer bloat on weak client connections.</span>
          </div>
        </div>

        {/* Right: Live WebSocket Poll Consensus */}
        <div className="sm:col-span-6 bg-[var(--bg-paper-light)] p-3 border border-[var(--color-rule)] space-y-2.5">
          <div className="flex items-center justify-between text-[10px] font-bold text-[var(--color-accent)]">
            <div className="flex items-center gap-1.5">
              <Vote size={12} />
              <span>LIVE POLL CONSENSUS</span>
            </div>
            <span className="text-[var(--color-ink-faint)]">WS BROADCAST</span>
          </div>

          <div className="text-[11px] font-sans font-semibold text-[var(--color-ink)]">
            &ldquo;Preferred Architecture Pattern?&rdquo;
          </div>

          {/* Interactive Vote Option A */}
          <button
            onClick={() => handleVote("A")}
            className={`w-full text-left p-2 border transition-all ${
              selectedVote === "A"
                ? "bg-[var(--bg-paper-dark)] border-[var(--color-accent)]"
                : "bg-transparent border-[var(--color-rule)] hover:border-[var(--color-ink-muted)]"
            }`}
          >
            <div className="flex justify-between items-center text-[10px] font-mono mb-1">
              <span className="font-bold text-[var(--color-ink)]">A. Event-Driven Kafka Stream</span>
              <span className="font-semibold text-[var(--color-accent)]">{pctA}%</span>
            </div>
            <div className="w-full bg-[var(--color-rule)] h-1.5 rounded-none overflow-hidden">
              <div
                className="bg-[var(--color-accent)] h-full transition-all duration-300"
                style={{ width: `${pctA}%` }}
              />
            </div>
          </button>

          {/* Interactive Vote Option B */}
          <button
            onClick={() => handleVote("B")}
            className={`w-full text-left p-2 border transition-all ${
              selectedVote === "B"
                ? "bg-[var(--bg-paper-dark)] border-[var(--color-accent)]"
                : "bg-transparent border-[var(--color-rule)] hover:border-[var(--color-ink-muted)]"
            }`}
          >
            <div className="flex justify-between items-center text-[10px] font-mono mb-1">
              <span className="font-bold text-[var(--color-ink)]">B. Sync RPC Gateway</span>
              <span className="font-semibold text-[var(--color-ink-muted)]">{pctB}%</span>
            </div>
            <div className="w-full bg-[var(--color-rule)] h-1.5 rounded-none overflow-hidden">
              <div
                className="bg-[var(--color-ink)] h-full transition-all duration-300"
                style={{ width: `${pctB}%` }}
              />
            </div>
          </button>
        </div>

      </div>

      {/* Footer Spec */}
      <div className="mt-3 pt-2 hairline-t flex justify-between items-center text-[10px] text-[var(--color-ink-muted)]">
        <span>CONFLICT-FREE LIVE REPLICATION</span>
        <span>ROLE PRIVILEGE ACCESS ENFORCED</span>
      </div>
    </div>
  );
}
