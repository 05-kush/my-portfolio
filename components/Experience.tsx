import { experience } from "./data";

export default function Experience() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-8">Experience</h2>

      <div className="space-y-8">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="border border-gray-800 rounded-xl p-6"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3
                  className={`text-xl font-medium ${
                    exp.type === "internship"
                      ? "text-gray-300"
                      : "text-white"
                  }`}
                >
                  {exp.role}
                </h3>
                <p className="text-gray-500 mt-1">
                  {exp.company}
                </p>
              </div>

              <span className="text-sm text-gray-400 whitespace-nowrap">
                {exp.period}
              </span>
            </div>

            {/* Achievements */}
            <ul className="mt-6 space-y-3 text-gray-400">
              {exp.achievements.map((item, i) => (
                <li key={i} className="leading-relaxed">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
