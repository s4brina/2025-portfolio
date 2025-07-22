// MobileExtraSection.jsx
import React from "react";

const MobileExtraSection = () => {
  return (
    <section className="block sm:hidden mt-12 px-4 py-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-md text-white">
      <h2 className="text-lg font-semibold mb-3 tracking-tight">EXTRA</h2>

      <p className="mb-3 text-sm leading-snug text-white/90">
        These are the links to my GitHub repositories, where I’ve uploaded the files for the main TabLED web server—both Node.js and Arduino code.
      </p>

      <div className="flex flex-col gap-2 mb-5">
        <a
          href="https://github.com/your-node-repo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 underline text-sm"
        >
          Node.js Web Server Code →
        </a>
        <a
          href="https://github.com/your-arduino-repo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 underline text-sm"
        >
          Arduino IDE Code (C++) →
        </a>
      </div>

      <p className="mb-2 text-sm leading-snug text-white/90">
        The <strong className="text-white">Node.js server</strong> handles both front- and back-end tasks—linking the Arduino with the interface and sending commands to LEDs.
      </p>

      <p className="text-sm leading-snug text-white/90">
        The <strong className="text-white">Arduino code</strong> defines animations and makes the LEDs respond live to user input.
      </p>
    </section>
  );
};

export default MobileExtraSection;
