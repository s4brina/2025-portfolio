import React from "react";
import { motion } from "framer-motion";

const WebsiteBadges = () => {
  const websites = [
    {
      name: "Pokevault",
      url: "https://s4brina.github.io/pokevault/",
      image:
      "https://i.imgur.com/X9AEJNr.png",
    },
    {
      name: "Party Calculator",
      url: "https://s4brina.github.io/party-calculator/",
      image:
        "https://i.imgur.com/yg3ffrp.png",
    },
    {
      name: "Sabrina Blog",
      url: "https://s4brina.github.io/",
      image:
      "https://i.imgur.com/8vyyTxu.png",
    },
    {
      name: "eek",
      url: "https://eek.cool",
      image:
      "https://i.imgur.com/FwXJjqB.png",
    },
    {
      name: "Emojied",
      url: "https://s4brina.github.io/emojied/",
      image:
      "https://i.imgur.com/cJFRN4H.png",
    },
 
  ];

  return (
    <section className="w-full py-30 px-4" id="website-badges">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl mb-10 text-white">
          Explore my other websites !
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 place-items-center">
          {websites.map((site, idx) => (
            <motion.a
              key={idx}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-h-[100px] aspect-[3/2] overflow-hidden rounded-md shadow-md transition transform hover:scale-[1.01]"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={site.image}
                alt={site.name}
                className="w-full h-full object-cover"
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WebsiteBadges;
