
export default function About() {
  return (
    <section id="about">
      <h2 className="text-3xl font-semibold mb-6">About Me</h2>

      <div className="text-gray-400 max-w-3xl space-y-4 leading-relaxed">
        <p>
          I’m a backend-focused full-stack engineer with 2+ years of experience
          building and optimizing large-scale distributed systems in production
          environments.
        </p>

        <p>
          My work primarily involves designing APIs, improving system
          performance, building real-time data pipelines, and developing
          internal platforms where reliability, scalability, and observability
          are critical.
        </p>

        <p>
          I enjoy working on engineering problems that involve understanding
          system behavior, diagnosing performance issues, and making
          data-driven improvements.
        </p>

        <p className="text-gray-500">
          Outside of work, I enjoy experimenting with side projects and learning new things.
        </p>
      </div>
    </section>
  );
}
