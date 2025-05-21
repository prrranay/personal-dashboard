import { profile } from "@/data/profile";

export default function Skills() {
  return (
    <section id="skills" className="py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-blue-100 rounded-full text-blue-800 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
