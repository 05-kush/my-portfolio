"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Lock, Radio, Shield, Users } from "lucide-react";

export default function TicketStateMachineVisual() {
  const [currentStatus, setCurrentStatus] = useState<"OPEN" | "IN_PROGRESS" | "ESCALATED" | "RESOLVED" | "CLOSED">("IN_PROGRESS");
  const [activeRole, setActiveRole] = useState<"ADMIN" | "MANAGER" | "MEMBER">("MANAGER");
  const [broadcastLog, setBroadcastLog] = useState<string>("Socket.IO room [org_402] synchronized.");

  const transitionRules: Record<string, string[]> = {
    OPEN: ["IN_PROGRESS"],
    IN_PROGRESS: ["ESCALATED", "RESOLVED"],
    ESCALATED: ["RESOLVED", "IN_PROGRESS"],
    RESOLVED: ["CLOSED", "IN_PROGRESS"],
    CLOSED: [],
  };

  const allowedTransitions = transitionRules[currentStatus] || [];

  const handleTransition = (nextStatus: any) => {
    setCurrentStatus(nextStatus);
    setBroadcastLog(`State changed to ${nextStatus} by ${activeRole}. WS broadcast emitted.`);
  };

  return (
    <div className="bg-[var(--bg-paper-dark)] p-5 sm:p-6 border border-[var(--color-rule-strong)] font-mono text-xs">
      {/* Top Bar */}
      <div className="flex items-center justify-between pb-3 mb-4 hairline-b text-[var(--color-ink-muted)]">
        <div className="flex items-center gap-2">
          <Shield size={14} className="text-[var(--color-accent)]" />
          <span className="font-bold text-[var(--color-ink)]">FINITE STATE MACHINE & RBAC ENGINE</span>
        </div>
        <div className="text-[10px] text-[var(--color-accent)] font-semibold">
          18+ REST ENDPOINTS · PRISMA ORM
        </div>
      </div>

      {/* Grid: RBAC Context + State Transition Controller */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
        
        {/* Left: RBAC Role & Socket Context */}
        <div className="sm:col-span-5 bg-[var(--bg-paper-light)] p-3.5 border border-[var(--color-rule)] space-y-3">
          <div className="flex items-center justify-between text-[10px] font-bold text-[var(--color-ink)] pb-1 hairline-b">
            <span>ACTIVE RBAC ROLE</span>
            <span className="text-[var(--color-ink-faint)]">JWT AUTH</span>
          </div>

          <div className="grid grid-cols-3 gap-1">
            {(["ADMIN", "MANAGER", "MEMBER"] as const).map((role) => (
              <button
                key={role}
                onClick={() => setActiveRole(role)}
                className={`py-1 text-[9px] font-bold border transition-colors ${
                  activeRole === role
                    ? "bg-[var(--color-ink)] text-[var(--bg-paper-light)] border-[var(--color-ink)]"
                    : "bg-transparent text-[var(--color-ink-muted)] border-[var(--color-rule)] hover:border-[var(--color-ink-muted)]"
                }`}
              >
                {role}
              </button>
            ))}
          </div>

          <div className="p-2 bg-[var(--bg-paper-subtle)] border border-[var(--color-rule)] text-[10px]">
            <div className="text-[var(--color-ink-faint)] mb-0.5">CURRENT STATUS:</div>
            <div className="font-bold text-sm text-[var(--color-accent)]">{currentStatus}</div>
          </div>
        </div>

        {/* Right: Valid Transition Trigger Matrix */}
        <div className="sm:col-span-7 bg-[var(--bg-paper-light)] p-3.5 border border-[var(--color-rule)] space-y-2.5">
          <div className="flex items-center justify-between text-[10px] font-bold text-[var(--color-accent)]">
            <span>PERMISSIBLE STATE TRANSITIONS</span>
            <span>DETERMINISTIC</span>
          </div>

          {allowedTransitions.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {allowedTransitions.map((next) => (
                <button
                  key={next}
                  onClick={() => handleTransition(next)}
                  className="flex items-center gap-1 px-3 py-1.5 bg-[var(--color-ink)] text-[var(--bg-paper-light)] hover:bg-[var(--color-accent)] transition-colors font-mono text-[10px] font-bold"
                >
                  <span>MOVE TO {next}</span>
                  <ArrowRight size={11} />
                </button>
              ))}
            </div>
          ) : (
            <div className="p-2 bg-[var(--bg-paper-subtle)] border border-[var(--color-rule)] flex items-center justify-between text-[10px] text-[var(--color-ink-muted)]">
              <span>Ticket state terminal (CLOSED).</span>
              <button
                onClick={() => handleTransition("OPEN")}
                className="text-[var(--color-accent)] font-bold hover:underline"
              >
                Reset to OPEN
              </button>
            </div>
          )}

          {/* Broadcast Telemetry Log */}
          <div className="pt-2 hairline-t text-[9px] text-[var(--color-ink-muted)] flex items-center gap-1.5">
            <Radio size={11} className="text-[var(--color-accent)] shrink-0 animate-pulse" />
            <span className="truncate">{broadcastLog}</span>
          </div>
        </div>

      </div>

      {/* Footer Spec */}
      <div className="mt-3 pt-2 hairline-t flex justify-between items-center text-[10px] text-[var(--color-ink-muted)]">
        <span>AUTHENTICATED JWT ROOM ISOLATION</span>
        <span>SUPERTEST & VITEST AUTOMATION</span>
      </div>
    </div>
  );
}
