import { projects } from "./data";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="text-3xl font-semibold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="
              rounded-xl border border-gray-800 p-6
              transition hover:border-gray-700 hover:-translate-y-1
            "
          >
            <h3 className="text-lg font-semibold text-white">
              {project.title}
            </h3>

            {/* Impact line */}
            <p className="mt-1 text-sm text-gray-300">
              {project.impact}
            </p>

            {/* Supporting description */}
            <p className="mt-2 text-sm text-gray-500">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 border border-gray-700 rounded-full text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-5 flex gap-4 items-center">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  className="px-4 py-2 text-sm bg-white text-black rounded-md"
                >
                  View Code
                </a>
              )}

              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Live Demo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
