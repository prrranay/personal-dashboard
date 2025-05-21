import { profile } from "@/data/profile";

export default function Academics() {
  return (
    <section id="academics" className="py-8 bg-white rounded shadow">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Academics</h2>
        <ul className="space-y-3">
          {profile.academics.map((item, i) => (
            <li key={i} className="border-l-4 border-blue-500 pl-4">
              <strong>{item.year}</strong>: {item.title} @ {item.institution}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
