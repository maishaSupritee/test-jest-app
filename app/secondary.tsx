"use client";

import { useState, useEffect } from "react";

export default function Secondary() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 3000); // toggle visibility every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="secondary"
      className="flex items-center justify-center min-h-screen"
    >
      {isVisible && (
        <button
          className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors duration-200"
          onClick={() => alert("Button clicked!")}
        >
          Click Me!
        </button>
      )}
    </div>
  );
}
