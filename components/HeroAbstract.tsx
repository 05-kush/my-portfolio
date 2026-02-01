import React from 'react';

export default function HeroAbstract({ className }: { className?: string }) {
  return (
    <svg
      width="800"
      height="600"
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background Grid (Subtle) */}
      <g opacity="0.05">
        <path d="M0 300 H800" stroke="white" strokeWidth="0.5" />
        <path d="M400 0 V600" stroke="white" strokeWidth="0.5" />
        <circle cx="400" cy="300" r="200" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
      </g>

      {/* Full Stack Layers */}
      
      {/* Bottom Layer: Database / Infrastructure */}
      <g opacity="0.2" className="stack-layer layer-db">
        {/* Isometric Plane */}
        <path d="M250 450 L400 525 L550 450 L400 375 Z" stroke="white" strokeWidth="1" fill="white" fillOpacity="0.05" />
        {/* Data Nodes */}
        <circle cx="400" cy="450" r="4" fill="white" />
        <circle cx="350" cy="475" r="3" fill="white" />
        <circle cx="450" cy="425" r="3" fill="white" />
        <circle cx="450" cy="475" r="3" fill="white" />
        <circle cx="350" cy="425" r="3" fill="white" />
      </g>

      {/* Middle Layer: Backend / API / Logic */}
      <g opacity="0.3" className="stack-layer layer-be">
        {/* Isometric Plane */}
        <path d="M250 300 L400 375 L550 300 L400 225 Z" stroke="white" strokeWidth="1" fill="white" fillOpacity="0.05" />
        {/* Logic Nodes (Hexagons or Squares) */}
        <rect x="390" y="290" width="20" height="20" transform="rotate(45 400 300)" stroke="white" strokeWidth="1" />
        <line x1="400" y1="300" x2="250" y2="300" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" />
        <line x1="400" y1="300" x2="550" y2="300" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" />
        <line x1="400" y1="300" x2="400" y2="225" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" />
        <line x1="400" y1="300" x2="400" y2="375" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" />
      </g>

      {/* Top Layer: Frontend / Client */}
      <g opacity="0.4" className="stack-layer layer-fe">
        {/* Isometric Plane */}
        <path d="M250 150 L400 225 L550 150 L400 75 Z" stroke="white" strokeWidth="1" fill="white" fillOpacity="0.05" />
        {/* UI Nodes */}
        <rect x="360" y="130" width="80" height="40" rx="2" stroke="white" strokeWidth="1" />
        <line x1="360" y1="140" x2="440" y2="140" stroke="white" strokeWidth="0.5" />
        <rect x="370" y="150" width="20" height="10" stroke="white" strokeWidth="0.5" />
        <rect x="410" y="150" width="20" height="10" stroke="white" strokeWidth="0.5" />
      </g>

      {/* Vertical Connections (Integration) */}
      <g opacity="0.15">
        <line x1="400" y1="525" x2="400" y2="375" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="400" y1="375" x2="400" y2="225" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="250" y1="450" x2="250" y2="300" stroke="white" strokeWidth="0.5" />
        <line x1="250" y1="300" x2="250" y2="150" stroke="white" strokeWidth="0.5" />
        <line x1="550" y1="450" x2="550" y2="300" stroke="white" strokeWidth="0.5" />
        <line x1="550" y1="300" x2="550" y2="150" stroke="white" strokeWidth="0.5" />
      </g>
      
      {/* Floating Code Particles */}
      <g opacity="0.2">
        <circle cx="600" cy="100" r="2" fill="white" />
        <circle cx="620" cy="120" r="1" fill="white" />
        <circle cx="150" cy="500" r="2" fill="white" />
        <circle cx="180" cy="480" r="1" fill="white" />
      </g>
    </svg>
  );
}