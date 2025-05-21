import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Academics from "@/components/Academics";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import { Section } from "@/data/sections";

export default function HomePage() {
  const [current, setCurrent] = useState<Section>("home");

  const renderSection = () => {
    if (current === "home") {
      return (
        <>
          <Profile />
          <Academics />
          <Skills />
          <Certifications />
        </>
      );
    }
    switch (current) {
      case "profile":
        return <Profile />;
      case "academics":
        return <Academics />;
      case "skills":
        return <Skills />;
      case "certifications":
        return <Certifications />;
    }
  };

  return (
    <>
      <Navbar current={current} onSelect={setCurrent} />
      <main className="mt-4 max-w-4xl mx-auto">{renderSection()}</main>
    </>
  );
}
