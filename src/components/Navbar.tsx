import React, { useState } from "react";
import { Section } from "@/data/sections";


interface NavbarProps {
  current: Section;
  onSelect: (section: Section) => void;
}

const sections: Section[] = ["home", "profile", "academics", "skills", "certifications"];

export default function Navbar({ current, onSelect }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const handleSelect = (sec: Section) => {
    onSelect(sec);
    setOpen(false);
  };

  return (
    <nav className="bg-white shadow sticky top-0 z-20">
      <div className="max-w-4xl  mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <span className="text-xl font-bold">Dashboard</span>


        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {/* simple hamburger/close icon */}
          {open ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16"/>
            </svg>
          )}
        </button>

        {/* Links */}
        <div
          className={`
            absolute top-full left-0 w-full bg-white shadow-md md:shadow-none
            md:static md:flex md:items-center md:w-3/5 
            ${open ? "block" : "hidden"}  
          `}
        >
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => handleSelect(sec)}
              className={`
                block w-full text-left px-4 py-2 md:px-0 md:py-0 capitalize
                ${current === sec
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-600"}
              `}
            >
              {sec === "home" ? "All" : sec}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
