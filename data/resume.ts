export interface Project {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  tagline: string;
  impact: string;
  description: string;
  architectureNotes: string[];
  tech: string[];
  category: "Algorithms & Systems" | "Full-Stack & State Machine" | "Distributed / Web3" | "Real-time & Media" | "Mobile Systems";
  links: {
    github?: string;
    live?: string;
  };
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: "Full-Time" | "Internship";
  summary: string;
  achievements: string[];
  keyMetrics: { label: string; value: string }[];
  technologies: string[];
}

export const personalInfo = {
  name: "Kushagra Gupta",
  monogram: "KG",
  title: "Software Development Engineer",
  focus: "Full-Stack Software Engineering & Distributed Systems",
  location: "Mumbai, India",
  timezone: "Asia/Kolkata",
  status: "ENGINEERING @ RELIANCE JIO PLATFORMS",
  statement: "I build full-stack applications and resilient systems, approaching engineering with a technology-agnostic mindset focused on first principles and architecture.",
  editorialBio: [
    "I am a technology-agnostic software engineer focused on building end-to-end applications—pairing intuitive user interfaces with robust, scalable backend systems.",
    "At Reliance Jio Platforms, I build and optimize production systems handling 2B+ daily records. My work centers on delivering performant user interfaces, designing real-time synchronization between Redis and Elasticsearch, and fine-tuning connection pools under peak loads.",
    "I believe great architecture is born from intentional constraints: prioritizing predictable failure modes, zero-overhead abstractions, and deep telemetry over superficial complexity regardless of the underlying stack."
  ],
  contacts: {
    email: "kushagra.gupta05@outlook.com",
    github: "https://github.com/05-kush",
    linkedin: "https://linkedin.com/in/kushagra-gupta05",
    resumePdf: "/Kushagra_Resume.pdf"
  }
};

export const studioMetrics = [
  {
    num: "02B+",
    unit: "RECORDS / DAY",
    label: "Daily Production Volume",
    detail: "Aggregated & processed in mission-critical reporting pipelines at Jio Platforms."
  },
  {
    num: "40%",
    unit: "THROUGHPUT BOOST",
    label: "Core Pipeline Optimization",
    detail: "Achieved via memory bounding, connection pooling & asynchronous stream ingestion."
  },
  {
    num: "30%",
    unit: "LATENCY REDUCTION",
    label: "Redis-to-Elasticsearch Sync",
    detail: "Designed low-overhead real-time CDC sync mechanism across distributed datastores."
  },
  {
    num: "78%",
    unit: "RESOURCE GAIN",
    label: "Redis Pool Optimization",
    detail: "Re-architected client reuse & connection lifecycles to eliminate redundant sessions."
  }
];

export const projects: Project[] = [
  {
    id: "bus-scheduler",
    index: "01",
    title: "Electric Bus Charging & Fleet Scheduler",
    subtitle: "Constrained Route Scheduling & Weighted Rule Engine",
    tagline: "Production-quality multi-constraint fleet optimizer for 20 electric buses over 540km corridors.",
    impact: "Zero hardcoded constants; live data-driven optimization with 5 stress-test scenarios.",
    description: "Designed and engineered an automated fleet charging scheduler for 20 electric buses operating along a 540km corridor. Built on a weighted constraint rule engine balancing individual vehicle fairness, operator charging costs, battery state-of-charge (SoC), and grid load efficiency.",
    architectureNotes: [
      "Pure data-driven rule engine parameterization via schema-validated JSON configs",
      "Dynamic soft-constraint weighting preventing queue starvation at peak charging windows",
      "Interactive multi-scenario stress test dashboard deployed live on Streamlit Cloud"
    ],
    tech: ["Python", "Streamlit", "Algorithm Design", "Rule Engine", "Data Modeling"],
    category: "Algorithms & Systems",
    links: {
      github: "https://github.com/05-kush/bus-charging-scheduler",
      live: "https://share.streamlit.io/"
    }
  },
  {
    id: "ticket-tracker",
    index: "02",
    title: "Unified Task & Support Ticket Tracker",
    subtitle: "State-Machine Enforced Workflow & Real-Time Sync",
    tagline: "Full-stack enterprise issue engine with strict RBAC, Prisma ORM, and authenticated Socket.IO rooms.",
    impact: "18+ REST endpoints with automated Vitest/Supertest test coverage and zero invalid state transitions.",
    description: "Engineered a robust task management platform featuring a deterministic state-machine workflow (Admin, Manager, Member privileges), authenticated WebSocket updates with JWT room isolation, offline reconnection resilience, and a comprehensive backend test suite.",
    architectureNotes: [
      "Strict finite state machine enforcing valid status progressions (Open → In Progress → Escalated/Resolved → Closed)",
      "Room-isolated WebSocket telemetry broadcasting state diffs only to authorized participants",
      "Automated test harness with Vitest and Supertest covering edge cases, auth boundaries, and concurrency"
    ],
    tech: ["Node.js", "Express.js", "React", "TypeScript", "Socket.IO", "Prisma ORM", "JWT", "Vitest"],
    category: "Full-Stack & State Machine",
    links: {
      github: "https://github.com/05-kush/task-support-tracker"
    }
  },
  {
    id: "defi-app",
    index: "03",
    title: "DeFi Application & Smart Contract Gateway",
    subtitle: "Decentralized Liquidity & Transfer Protocol",
    tagline: "Trustless Ethereum & testnet asset transfers powered by audited smart contracts.",
    impact: "Non-custodial token transfers with real-time gas estimation and state verification.",
    description: "Architected a decentralized finance interface providing zero-friction Ethereum testnet asset transfers, wallet state synchronization, and verifiable transaction logs. Designed with robust failure boundaries to handle RPC node drops and pending mempool states gracefully.",
    architectureNotes: [
      "Optimistic UI updates with fallback confirmation polling against Web3 RPC providers",
      "Gas estimation heuristics to prevent out-of-gas transaction failures",
      "Strict separation between immutable contract calls and local state cache"
    ],
    tech: ["React", "TypeScript", "Web3.js", "Ethereum", "Solidity", "Tailwind CSS"],
    category: "Distributed / Web3",
    links: {
      github: "https://github.com/05-kush/De-Fi-App",
      live: "https://ethex.netlify.app/"
    }
  },
  {
    id: "nft-marketplace",
    index: "04",
    title: "NFT Marketplace Engine (Mobile)",
    subtitle: "Mobile Asset Discovery & Metadata Pipeline",
    tagline: "High-performance React Native showcase for decentralized digital artifacts.",
    impact: "Sub-100ms metadata rendering and cached blockchain asset indexing.",
    description: "Engineered a cross-platform mobile marketplace application focused on swift asset discovery, token metadata hydration, and responsive wallet interactions. Implemented tiered image caching and lazy-loaded IPFS gateways for continuous 60fps scrolling.",
    architectureNotes: [
      "Multi-gateway IPFS resolver with automatic failover for decentralized media",
      "Virtualized list rendering with memory-bounded image buffer recycling",
      "Offline-first metadata caching layer for instant cold starts"
    ],
    tech: ["React Native", "Expo", "JavaScript", "Blockchain API", "IPFS", "AsyncStorage"],
    category: "Mobile Systems",
    links: {
      github: "https://github.com/05-kush/nft_marketplaceUI"
    }
  },
  {
    id: "conference-app",
    index: "05",
    title: "Real-Time Conference Platform",
    subtitle: "Low-Latency Video Mesh & Interactive Telemetry",
    tagline: "Scalable WebRTC meeting infrastructure with synchronized interactive voting.",
    impact: "Sub-second media relay with role-based access control and live poll consensus.",
    description: "Developed a distributed full-stack conferencing system supporting live audio/video streaming, instant WebSocket poll tabulation, and granular participant privilege controls. Built with Agora SDK and WebRTC peer negotiation.",
    architectureNotes: [
      "Selective forwarding media pipeline to optimize client uplink consumption",
      "Conflict-free live poll state distribution across concurrent room participants",
      "Dynamic reconnection state machine for unstable mobile network handoffs"
    ],
    tech: ["React", "WebRTC", "Agora SDK", "Node.js", "WebSockets", "Tailwind CSS"],
    category: "Real-time & Media",
    links: {
      github: "https://github.com/05-kush/agora-app-builder"
    }
  }
];

export const experienceData: ExperienceItem[] = [
  {
    role: "Software Development Engineer – I",
    company: "Reliance Jio Platforms Ltd",
    location: "Navi Mumbai, India",
    period: "Dec 2023 — Present",
    type: "Full-Time",
    summary: "Leading backend pipeline performance, stream data ingest, and observability engineering across distributed reporting systems processing 2B+ record workloads daily.",
    achievements: [
      "Engineered core reporting infrastructure handling 2 billion+ daily records by refactoring ingestion pipelines, optimizing memory bounds, and automating lifecycle archival (+40% throughput).",
      "Owned the end-to-end analytics module, engineering data retrieval and aggregation across Apache Druid (OLAP), MongoDB, and Elasticsearch to surface business intelligence on SMPP traffic patterns and billing accuracy.",
      "Designed ETL/ELT pipelines using Confluent Kafka sink/source connectors for MongoDB and Elasticsearch, enabling low-code auditable data flow.",
      "Optimized Redis connection pooling (78% efficiency gain) and built an Elasticsearch-Redis bidirectional sync mechanism, slashing retrieval latency by 30% with automated Prometheus/Grafana alerting.",
      "Contributed to the zero-downtime migration of 2 infrastructure clusters (8–10 VMs each, 10 instances per VM handling SMS traffic) from Azure Cloud to Jio Business Cloud.",
      "Engineered internal monitoring dashboards in ReactJS enabling dynamic consumer control and reducing Mean Time to Recovery (MTTR) by 35%."
    ],
    keyMetrics: [
      { label: "Daily Traffic", value: "2B+ Records" },
      { label: "Throughput", value: "+40% Boost" },
      { label: "Sync Latency", value: "-30% Drop" },
      { label: "Pool Gain", value: "78% Saved" }
    ],
    technologies: [
      "Node.js",
      "Python",
      "Redis",
      "Apache Kafka",
      "Apache Druid",
      "Elasticsearch",
      "MongoDB",
      "Docker",
      "Grafana",
      "Prometheus"
    ]
  },
  {
    role: "DevOps Engineering Intern",
    company: "Celebal Technologies",
    location: "Jaipur, India",
    period: "May 2022 — Jul 2022",
    type: "Internship",
    summary: "Built automated container build matrices, cloud release workflows, and infrastructure delivery pipelines for enterprise client web properties on Microsoft Azure.",
    achievements: [
      "Automated deployment pipelines for static websites on Azure utilizing CI/CD and Docker containerization.",
      "Eliminated repetitive manual release steps, reducing manual deployment effort by ~70%.",
      "Standardized multi-stage Dockerfiles for optimized container caching and reduced attack surface."
    ],
    keyMetrics: [
      { label: "Manual Effort", value: "-70% Drop" },
      { label: "Delivery", value: "Azure CI/CD" }
    ],
    technologies: [
      "Docker",
      "Microsoft Azure",
      "CI/CD Pipelines",
      "Linux / Bash",
      "Git",
      "NGINX"
    ]
  }
];

export const skillsTopology = {
  layers: [
    {
      id: "ingest",
      name: "01 / CLIENT & INGESTION LAYER",
      description: "Interface primitives, mobile runtimes, and REST/WebSocket edge gateways",
      items: [
        { name: "React.js / Next.js", spec: "App router · Server & client components", tag: "Primary" },
        { name: "TypeScript / JavaScript", spec: "Strict static schemas & types", tag: "Standard" },
        { name: "React Native / Expo", spec: "Mobile runtime & native bridges", tag: "Mobile" },
        { name: "Python / Streamlit", spec: "Data simulation & algorithms", tag: "Tooling" }
      ]
    },
    {
      id: "compute",
      name: "02 / RUNTIME & SERVICE COMPUTATION",
      description: "Asynchronous microservices, API composition, and concurrency controls",
      items: [
        { name: "Node.js / Express.js", spec: "Event-loop concurrency & async I/O", tag: "Core" },
        { name: "FastAPI / Python", spec: "High-speed backend microservices", tag: "Backend" },
        { name: "REST APIs & WebSockets", spec: "18+ endpoint architectures · Socket.IO", tag: "Protocol" },
        { name: "WebRTC / Agora SDK", spec: "Low-latency media transport", tag: "Real-Time" }
      ]
    },
    {
      id: "caching-stream",
      name: "03 / STREAMING & STATE STORAGE",
      description: "In-memory caching tiers, partitioned event buses, and data synchronizers",
      items: [
        { name: "Redis", spec: "In-memory cache & CDC sync (78% pool gain)", tag: "High-Speed" },
        { name: "Apache Kafka", spec: "Confluent source/sink connectors & partitions", tag: "Stream" },
        { name: "Apache Druid (OLAP)", spec: "Real-time analytical OLAP aggregation", tag: "Analytics" },
        { name: "Elasticsearch", spec: "Real-time inverted indices & audit search", tag: "Search" },
        { name: "MongoDB & MySQL", spec: "Document & relational persistence (Prisma)", tag: "Databases" }
      ]
    },
    {
      id: "infrastructure",
      name: "04 / INFRASTRUCTURE & OBSERVABILITY",
      description: "Containerization, cloud infrastructure, and low-MTTR telemetry",
      items: [
        { name: "Docker & Linux", spec: "Containerization & multi-VM management", tag: "Containers" },
        { name: "Azure & Jio Cloud", spec: "Multi-cluster migrations & cloud releases", tag: "Cloud" },
        { name: "Prometheus & Grafana", spec: "Metrics aggregation & MTTR reduction (35%)", tag: "Telemetry" },
        { name: "Git & CI/CD", spec: "Automated test suites & deployment pipelines", tag: "DevOps" }
      ]
    }
  ]
};

export const architecturePhilosophy = [
  {
    step: "01",
    principle: "Intentional Constraints",
    note: "Simplicity beats speculative flexibility.",
    desc: "We define precise SLA boundaries and bounded resource caps before writing a single line of business logic. Unbounded concurrency is the root of production cascades."
  },
  {
    step: "02",
    principle: "Asynchronous Data Paths",
    note: "Decouple writes from heavy aggregation.",
    desc: "Hot ingest paths must never block on disk or multi-hop consensus. Event logs (Kafka) and in-memory buffers (Redis) absorb bursts while analytical stores ingest in batches."
  },
  {
    step: "03",
    principle: "Predictable Failure Modes",
    note: "Design for partial degradation.",
    desc: "Systems will experience network partitions and backpressure. Graceful fallback states, circuit breakers, and bounded queues prevent systemic collapse."
  },
  {
    step: "04",
    principle: "Deep Telemetry & Observability",
    note: "Measure first, optimize second.",
    desc: "You cannot optimize what you do not trace. Microsecond latency percentiles (p99/p99.9) and connection pool saturation metrics guide every architectural decision."
  }
];
