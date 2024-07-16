"use client";

import { useState } from "react";

export default function Home() {
  const [isRolling, setIsRolling] = useState(false);

  const handleClick = () => {
    setIsRolling(true);
    setTimeout(() => {
      setIsRolling(false);
    }, 3000); // Adjust the duration to match the animation time
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="hill"></div>

      <div className={`stickman ${isRolling ? "pushing" : ""}`}>
        <div className="head"></div>
        <div className="body"></div>
        <div className="arm left"></div>
        <div className="arm right"></div>
        <div className="leg left"></div>
        <div className="leg right"></div>
      </div>

      <button
        className={`rolling-ball-button ${isRolling ? "rolling" : ""}`}
        onClick={handleClick}
        aria-label="Start rolling animation"
      >
        <img src="/logo.png" alt="Logo" className="round-image" />
      </button>
    </main>
  );
}