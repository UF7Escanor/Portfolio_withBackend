import { useEffect, useRef, useState } from "react";
import "../CssComponent/BoxCard.css";

const BoxCard = () => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // triggers when 30% of box is visible
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div className="container">
      <div
        ref={cardRef}
        className={`box-card ${isVisible ? "rotate-active" : ""}`}
      >
        {/* Front - JavaScript */}
        <div className="face front">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            className="h-20 w-20"
          />
        </div>

        {/* Back - React */}
        <div className="face back">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
            className="h-20 w-20"
          />
        </div>

        {/* Right - TypeScript */}
        <div className="face right">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt="TypeScript"
            className="h-20 w-20"
          />
        </div>

        {/* Left - Node.js */}
        <div className="face left">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
            className="h-20 w-20"
          />
        </div>

        {/* Top - Next.js */}
        <div className="face top">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
            alt="Next.js"
            className="h-20 w-20 invert"
          />
        </div>

        {/* Bottom - MongoDB */}
        <div className="face bottom">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            alt="MongoDB"
            className="h-20 w-20"
          />
        </div>
      </div>
    </div>
  );
};

export default BoxCard;
