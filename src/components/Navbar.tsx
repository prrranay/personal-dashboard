import React from "react";
import { Section } from "@/data/sections";

interface NavbarProps {
  current: Section;
  onSelect: (section: Section) => void;
}

const sections: Section[] = ["home", "profile", "academics", "skills", "certifications"];

export default function Navbar({ current, onSelect }: NavbarProps) {
  return (
    <nav className="bg-white shadow sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="text-xl font-bold">Dashboard</span>
        <div className="space-x-4">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => onSelect(sec)}
              className={`capitalize ${
                current === sec
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-600"
              }`}
            >
              {sec === "home" ? "All" : sec}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
