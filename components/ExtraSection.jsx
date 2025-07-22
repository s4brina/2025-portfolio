// components/ExtraSection.jsx
import React from "react";
import { motion } from "framer-motion";

const ExtraSection = ({
  title = "EXTRA",
  descriptionTop,
  links = [],
  descriptionMiddle,
  descriptionBottom,
}) => {
  return (
    <motion.section
      className="mt-20 p-8 md:p-12 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl max-w-4xl mx-auto text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 tracking-tight">
        {title}
      </h2>

      {descriptionTop && (
        <p className="mb-4 text-base md:text-lg">{descriptionTop}</p>
      )}

      {links.length > 0 && (
        <div className="flex flex-col gap-3 mb-6">
          {links.map(({ href, label }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:underline"
            >
              {label}
            </a>
          ))}
        </div>
      )}

      {descriptionMiddle && (
        <p className="mb-3 text-base md:text-lg">{descriptionMiddle}</p>
      )}

      {descriptionBottom && (
        <p className="text-base md:text-lg">{descriptionBottom}</p>
      )}
    </motion.section>
  );
};

export default ExtraSection;
