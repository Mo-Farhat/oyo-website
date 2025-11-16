"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Navigation } from "lucide-react";

const coverageAreas = [
  {
    area: "Nawalapitiya Town",
    distance: "0-10 km",
    deliveryTime: "15-20 mins",
  },
  {
    area: "Surrounding Villages",
    distance: "10-20 km",
    deliveryTime: "20-30 mins",
  },
  {
    area: "Extended Coverage",
    distance: "20-30 km",
    deliveryTime: "30-45 mins",
  },
];

const AreaCoverageSection = () => (
  <section id="area-coverage" className="bg-[#111113] py-20 text-white">
    <div className="container mx-auto max-w-6xl px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
          Area Coverage
        </h2>
        <p className="mx-auto mb-16 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
          We deliver essential goods and services across Nawalapitiya and
          surrounding areas within a 30km radius. From restaurants and bakeries to pharmacies and pet
          supplies, we bring everything you need right to your doorstep in 20-30 minutes.
        </p>
      </motion.div>

      {/* Coverage Areas Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3"
      >
        {coverageAreas.map((area, index) => (
          <div
            key={index}
            className="rounded-2xl border border-[#648402] bg-[#18191B] p-8 text-center transition-all duration-300 hover:border-[#648402]/30"
          >
            <div className="mb-4 flex justify-center"></div>
            <h3 className="mb-2 text-xl font-bold text-white">{area.area}</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center justify-center gap-2">
                <Navigation className="h-4 w-4" />
                <span>{area.distance}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{area.deliveryTime}</span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Coverage Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-center"
      >
        <div className="mx-auto max-w-4xl rounded-3xl border border-[#648402] bg-gradient-to-r from-[#18191B] to-[#0a0a0a] p-12">
          <h3 className="mb-6 text-2xl font-bold md:text-3xl">
            Delivery Coverage
          </h3>
          <p className="mb-6 text-lg leading-relaxed text-gray-300 md:text-xl">
            Oyo Eats currently delivers within a 30-kilometer radius of
            Nawalapitiya, Sri Lanka. We're constantly expanding our coverage
            area to serve more communities with essential goods and services
            from local businesses. Operating hours: 10AM to 11PM daily.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AreaCoverageSection;
