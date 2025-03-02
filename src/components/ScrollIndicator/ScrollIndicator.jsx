import { useEffect, useState } from "react";
import "./ScrollIndicator.scss"; // Ensure to style it

const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 200) {
            currentSection = id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount to highlight the first section
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-indicator">
      <div className="indicator-line">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`dot ${activeSection === id ? "active" : ""}`}
          >
            <span>{label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ScrollIndicator;
