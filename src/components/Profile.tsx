import Image from "next/image";
import { profile } from "@/data/profile";

export default function Profile() {
  return (
    <section id="profile" className="py-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        <div className="w-32 h-32 relative rounded-full overflow-hidden mb-4 md:mb-0">
          <Image src={profile.photo} alt="Profile" fill style={{ objectFit: "cover" }} />
        </div>
        <div className="md:ml-6 text-center md:text-left">
          <h1 className="text-3xl font-bold">{profile.name}</h1>
          <p className="mt-2">{profile.bio}</p>
          <p className="mt-2">
            <a href={`mailto:${profile.contact.email}`} className="underline">
              {profile.contact.email}
            </a>{" "}
            ·{" "}
            <a href={profile.contact.linkedin} target="_blank" className="underline">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
