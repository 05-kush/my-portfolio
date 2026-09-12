"use client";

import { useState } from "react";
import { BatteryCharging, Cpu, Gauge, Sliders, Zap } from "lucide-react";

export default function BusSchedulerVisual() {
  const [fairnessWeight, setFairnessWeight] = useState<number>(65);
  const [operatorCostWeight, setOperatorCostWeight] = useState<number>(45);

  const buses = [
    { id: "EB-101", soc: 34, slot: "Slot 1 (08:15)", status: "Charging", priority: "High" },
    { id: "EB-104", soc: 48, slot: "Slot 2 (08:30)", status: "Dispatched", priority: "Normal" },
    { id: "EB-109", soc: 22, slot: "Slot 1 (08:45)", status: "Queued", priority: "Urgent" },
    { id: "EB-115", soc: 68, slot: "Slot 3 (09:10)", status: "Standby", priority: "Low" },
  ];

  const avgEfficiency = Math.min(99, Math.round(75 + (fairnessWeight * 0.15) + (operatorCostWeight * 0.12)));

  return (
    <div className="bg-[var(--bg-paper-dark)] p-5 sm:p-6 border border-[var(--color-rule-strong)] font-mono text-xs">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 mb-4 hairline-b text-[var(--color-ink-muted)]">
        <div className="flex items-center gap-2">
          <BatteryCharging size={14} className="text-[var(--color-accent)] animate-pulse" />
          <span className="font-bold text-[var(--color-ink)]">540KM CORRIDOR FLEET SCHEDULER</span>
        </div>
        <div className="text-[10px] text-[var(--color-ink-faint)]">
          20 E-BUSES · ZERO HARDCODED CONSTANTS
        </div>
      </div>

      {/* Grid: Tunable Rule Engine Weights + Real-Time Dispatch Schedule */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
        
        {/* Left: Tunable Soft Constraints */}
        <div className="sm:col-span-6 bg-[var(--bg-paper-light)] p-3.5 border border-[var(--color-rule)] space-y-3">
          <div className="flex items-center justify-between text-[10px] font-bold text-[var(--color-accent)]">
            <div className="flex items-center gap-1.5">
              <Sliders size={12} />
              <span>WEIGHTED RULE ENGINE</span>
            </div>
            <span>PYTHON RULESPEC</span>
          </div>

          <div className="space-y-2.5">
            <div>
              <div className="flex justify-between text-[10px] mb-1">
                <span className="text-[var(--color-ink)] font-semibold">Individual Fairness Weight:</span>
                <span className="text-[var(--color-accent)] font-bold">{fairnessWeight}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={fairnessWeight}
                onChange={(e) => setFairnessWeight(Number(e.target.value))}
                className="w-full h-1 bg-[var(--color-rule-strong)] accent-[var(--color-accent)] cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-[10px] mb-1">
                <span className="text-[var(--color-ink)] font-semibold">Operator Cost Minimization:</span>
                <span className="text-[var(--color-ink-muted)] font-bold">{operatorCostWeight}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={operatorCostWeight}
                onChange={(e) => setOperatorCostWeight(Number(e.target.value))}
                className="w-full h-1 bg-[var(--color-rule-strong)] accent-[var(--color-ink)] cursor-pointer"
              />
            </div>
          </div>

          <div className="p-2 bg-[var(--bg-paper-subtle)] border border-[var(--color-rule)] flex items-center justify-between text-[10px]">
            <span className="text-[var(--color-ink-muted)]">Calculated Optimization Score:</span>
            <span className="font-bold text-[var(--color-accent)]">{avgEfficiency} / 100</span>
          </div>
        </div>

        {/* Right: Live Queue Roster */}
        <div className="sm:col-span-6 bg-[var(--bg-paper-light)] p-3.5 border border-[var(--color-rule)] space-y-2">
          <div className="flex items-center justify-between text-[10px] font-bold text-[var(--color-ink)] pb-1.5 hairline-b">
            <span>DISPATCH ROSTER</span>
            <span className="text-[var(--color-accent)]">5 STRESS SCENARIOS</span>
          </div>

          <div className="space-y-1.5 text-[10px]">
            {buses.map((b) => (
              <div
                key={b.id}
                className="p-1.5 bg-[var(--bg-paper-subtle)] border border-[var(--color-rule)] flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[var(--color-ink)]">{b.id}</span>
                  <span className="text-[9px] text-[var(--color-ink-faint)]">SoC: {b.soc}%</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] text-[var(--color-ink-muted)]">{b.slot}</span>
                  <span
                    className={`px-1 py-0.5 text-[8px] font-bold ${
                      b.status === "Charging"
                        ? "bg-[var(--color-accent)] text-white"
                        : b.status === "Queued"
                        ? "bg-amber-100 text-amber-900 border border-amber-300"
                        : "bg-[var(--bg-paper)] text-[var(--color-ink)]"
                    }`}
                  >
                    {b.status.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Footer Spec */}
      <div className="mt-3 pt-2 hairline-t flex justify-between items-center text-[10px] text-[var(--color-ink-muted)]">
        <span>DATA-DRIVEN JSON PARAMETERS</span>
        <span>DEPLOYED LIVE ON STREAMLIT CLOUD</span>
      </div>
    </div>
  );
}
