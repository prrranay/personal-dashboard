import { profile } from "../data/profile";

export default function Certifications() {
  if (!profile.certifications.length) return null;
  return (
    <section id="certifications" className="py-8 bg-white rounded shadow">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <ul className="list-disc list-inside space-y-2">
          {profile.certifications.map((cert, i) => (
            <li key={i}>{cert}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

