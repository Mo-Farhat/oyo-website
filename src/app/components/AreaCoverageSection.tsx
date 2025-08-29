"use client";

import React from "react";
import { motion } from "framer-motion";

const AreaCoverageSection = () => (
  <section id="area-coverage" className="bg-[#111113] px-5 py-20 text-white">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-2xl text-center"
    >
      <h2 className="mb-2 text-2xl font-bold md:text-3xl">Area Coverage</h2>
      <h3 className="mb-4 text-lg font-semibold text-[#00D707] md:text-xl">
        Fast Food Delivery Across Nawalapitiya
      </h3>
      <div className="mb-6">
        <p className="mb-2 text-gray-300">
          Oyo Eats currently delivers food within a 20-kilometer radius of
          Nawalapitiya, Sri Lanka.
        </p>
        <p className="mb-2 text-gray-300">
          Looking for food delivery in around the area? We&apos;ve got you
          covered—check the app to see which restaurants are nearby.
        </p>
        <p className="mt-2 font-medium text-[#00D707]">
          Expanding soon to more towns—stay tuned!
        </p>
      </div>
      <div className="flex justify-center"></div>
    </motion.div>
  </section>
);

export default AreaCoverageSection;
