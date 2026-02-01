import { skills } from "./data";

export default function Skills() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-10">Skills</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="border border-gray-800 rounded-xl p-6"
          >
            <h3 className="text-xl font-medium mb-4">{category}</h3>
            <ul className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <li
                  key={skill}
                  className="px-3 py-1 text-sm bg-gray-900 border border-gray-700 rounded-full"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
