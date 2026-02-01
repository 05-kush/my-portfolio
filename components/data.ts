export const projects = [
  {
    title: "DeFi Application",
    impact:
      "Decentralized finance app enabling Ethereum & testnet transfers using smart contracts.",
    description:
      "Built a DeFi platform with wallet integration and secure transaction flow, focusing on usability and blockchain accessibility.",
    tech: ["React", "Web3", "Blockchain", "Smart Contracts"],
    links: {
      github: "https://github.com/05-kush/De-Fi-App",
      live: "https://ethex.netlify.app/", 
    },
  },
  {
    title: "NFT Marketplace (Mobile)",
    impact:
      "Mobile-first NFT marketplace with real-time metadata rendering and wallet support.",
    description:
      "Designed and developed a React Native application for browsing and showcasing NFTs with smooth UI and optimized state handling.",
    tech: ["React Native", "Expo", "Blockchain"],
    links: {
      github: "https://github.com/05-kush/nft_marketplaceUI",
      live: "", // add live link if available
    },
  },
  {
    title: "Conference Meeting App",
    impact:
      "Real-time video conferencing app with live polls, access control, and WebRTC-based communication.",
    description:
      "Developed a full-stack conferencing platform supporting real-time video, interactive polls, and role-based access using WebRTC and Agora SDK.",
    tech: ["React", "WebRTC", "Agora", "Real-time Systems"],
    links: {
      github: "https://github.com/05-kush/agora-app-builder",
      live: "", // add live link if available
    },
  },
];

export const skills = {
  "Backend & Systems": [
    "Node.js",
    "Express.js",
    "REST APIs",
    "Microservices",
    "Redis",
    "Kafka",
    "Git",
    "Elasticsearch",
    "Distributed Systems",
  ],
  Frontend: ["React.js", "AngularJS", "Vite", "React Native"],
  Databases: ["MongoDB", "MySQL", "Redis", "Apache Druid", "CouchDB"],
  "DevOps & Monitoring": ["Docker", "Azure", "Grafana", "Prometheus", "Linux"],
};

export const experience = [
  {
    role: "Software Development Engineer – I",
    company: "Reliance Jio Platforms Ltd",
    period: "Dec 2023 – Present",
    achievements: [
      "Improved throughput by 40% in a reporting system processing 2B+ daily records",
      "Reduced MTTR by 35% by building internal monitoring dashboards",
      "Designed real-time sync between Redis and Elasticsearch, reducing latency by 30%",
      "Optimized Redis connection handling, improving efficiency by ~78%",
      "Migrated multi-VM production systems across cloud environments",
    ],
    type: "fulltime",
  },
  {
    role: "DevOps Intern",
    company: "Celebal Technologies",
    period: "May 2022 – Jul 2022",
    achievements: [
      "Automated CI/CD pipelines for static website deployments using Docker and Azure",
      "Reduced manual deployment effort by ~70%",
    ],
    type: "internship",
  },
];
