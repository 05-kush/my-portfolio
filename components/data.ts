import { projects as resumeProjects, experienceData, skillsTopology } from "@/data/resume";

export const projects = resumeProjects;
export const experience = experienceData;
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
  Frontend: ["React.js", "TypeScript", "Vite", "React Native", "Tailwind CSS"],
  Databases: ["MongoDB", "MySQL", "Redis", "Apache Druid", "CouchDB"],
  "DevOps & Monitoring": ["Docker", "Azure", "Grafana", "Prometheus", "Linux"],
};
