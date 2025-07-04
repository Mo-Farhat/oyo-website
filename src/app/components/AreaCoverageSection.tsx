"use client";

import React from "react";
import { motion } from "framer-motion";


const AreaCoverageSection = () => (
  <section className="py-12 bg-[#111113] text-white px-5">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="max-w-2xl mx-auto text-center"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-2">Area Coverage</h2>
      <h3 className="text-lg md:text-xl font-semibold text-[#00D707] mb-4">
      Fast Food Delivery Across Nawalapitiya
      </h3>
      <div className="mb-6">
        <p className="text-gray-300 mb-2">
          Oyo Eats currently delivers food within a 20-kilometer radius of
          Nawalapitiya, Sri Lanka.
        </p>
        <p className="text-gray-300 mb-2">
          Looking for food delivery in around the area? We&apos;ve
          got you covered—check the app to see which restaurants are nearby.
        </p>
        <p className="text-[#00D707] font-medium mt-2">
          Expanding soon to more towns—stay tuned!
        </p>
      </div>
      <div className="flex justify-center">
        
      </div>
    </motion.div>
  </section>
);

export default AreaCoverageSection;
