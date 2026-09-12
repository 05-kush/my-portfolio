"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, RefreshCw, ShieldCheck } from "lucide-react";

export default function DefiProtocolVisual() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [gasGwei, setGasGwei] = useState<number>(24);

  const states = [
    {
      step: 1,
      title: "Mempool / RPC Ingest",
      desc: "Client initiates non-custodial token transfer via EIP-1559 payload.",
      hash: "0x7f9a...3b21",
      gas: "21,000 gas",
    },
    {
      step: 2,
      title: "Smart Contract Execution",
      desc: "EVM executes state transition; verifies sender allowances & balances.",
      hash: "0x4e12...9d8a",
      gas: "48,230 gas",
    },
    {
      step: 3,
      title: "Block Finality & Sync",
      desc: "Receipt emitted; optimistic UI settles on distributed testnet chain.",
      hash: "0x91bc...fa04",
      gas: "Confirmed in block #18,921,402",
    },
  ];

  return (
    <div className="bg-[var(--bg-paper-dark)] p-5 sm:p-6 border border-[var(--color-rule-strong)] font-mono text-xs">
      {/* Top Ledger Bar */}
      <div className="flex items-center justify-between pb-3 mb-4 hairline-b text-[var(--color-ink-muted)]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
          <span className="font-bold text-[var(--color-ink)]">ETH_MAINNET / SEPOLIA PROTOCOL SIMULATOR</span>
        </div>
        <div className="text-[10px] text-[var(--color-ink-faint)]">
          GAS: {gasGwei} GWEI
        </div>
      </div>

      {/* Interactive Step Switcher */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {states.map((s) => (
          <button
            key={s.step}
            onClick={() => setActiveStep(s.step)}
            className={`p-2 text-left border transition-all ${
              activeStep === s.step
                ? "bg-[var(--bg-paper-light)] border-[var(--color-accent)] text-[var(--color-ink)] shadow-xs"
                : "bg-transparent border-[var(--color-rule)] text-[var(--color-ink-muted)] hover:border-[var(--color-ink-muted)]"
            }`}
          >
            <div className="text-[10px] font-bold text-[var(--color-accent)]">
              PHASE 0{s.step}
            </div>
            <div className="text-[11px] font-semibold truncate mt-0.5">
              {s.title}
            </div>
          </button>
        ))}
      </div>

      {/* Active Phase Spec Window */}
      <div className="bg-[var(--bg-paper-light)] p-4 border border-[var(--color-rule)] space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-[var(--color-accent)] tracking-wider">
            STATE MACHINE / STEP 0{activeStep}
          </span>
          <span className="text-[10px] text-[var(--color-ink-faint)]">
            STATUS: ACTIVE CONCURRENCY
          </span>
        </div>

        <p className="text-xs text-[var(--color-ink)] font-sans leading-relaxed">
          {states[activeStep - 1].desc}
        </p>

        <div className="pt-2 hairline-t grid grid-cols-2 gap-2 text-[11px]">
          <div>
            <span className="text-[10px] text-[var(--color-ink-faint)] block">TX HASH SPEC:</span>
            <span className="text-[var(--color-ink)] font-semibold">{states[activeStep - 1].hash}</span>
          </div>
          <div>
            <span className="text-[10px] text-[var(--color-ink-faint)] block">GAS TELEMETRY:</span>
            <span className="text-[var(--color-accent)] font-semibold">{states[activeStep - 1].gas}</span>
          </div>
        </div>
      </div>

      {/* Footer Simulation Controls */}
      <div className="mt-3 flex items-center justify-between text-[10px] text-[var(--color-ink-muted)]">
        <div className="flex items-center gap-1.5">
          <ShieldCheck size={13} className="text-[var(--color-accent)]" />
          <span>ZERO-CUSTODY AUDITED CONTRACT INTERACTION</span>
        </div>
        <button
          onClick={() => {
            setActiveStep((prev) => (prev % 3) + 1);
            setGasGwei(Math.floor(20 + Math.random() * 15));
          }}
          className="flex items-center gap-1 px-2 py-1 bg-[var(--color-ink)] text-[var(--bg-paper-light)] hover:bg-[var(--color-accent)] transition-colors"
        >
          <RefreshCw size={10} />
          <span>NEXT STATE</span>
        </button>
      </div>
    </div>
  );
}
