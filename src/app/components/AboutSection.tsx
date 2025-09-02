"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Users } from "lucide-react";

const stats = [
  {
    value: "Nawalapitiya",
    label: "Coverage Area",
  },
  {
    value: "25 mins",
    label: "Avg. Delivery",
  },
  {
    value: "1000+",
    label: "Happy Customers",
  },
];

const AboutSection = () => (
  <section id="about" className="bg-[#18191B] py-20 text-white">
    <div className="container mx-auto max-w-6xl px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
          About Oyo Eats
        </h2>
        <p className="mx-auto mb-16 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
          Oyo Eats is your local food delivery platform, connecting you with the
          best restaurants in Nawalapitiya. We bring fresh, delicious meals
          right to your doorstep with speed, reliability, and exceptional
          service.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="grid grid-cols-1 gap-8 md:grid-cols-3"
      >
        {stats.map((stat, index) => {
          return (
            <div
              key={index}
              className="rounded-2xl border border-gray-800 bg-[#18191B] p-8 text-center transition-all duration-300 hover:border-[#00D707]/30"
            >
              <div className="mb-2 text-3xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          );
        })}
      </motion.div>

      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-20 text-center"
      >
        <div className="mx-auto max-w-4xl rounded-3xl border border-gray-800 bg-gradient-to-r from-[#18191B] to-[#0a0a0a] p-12">
          <h3 className="mb-6 text-2xl font-bold md:text-3xl">Our Mission</h3>
          <p className="text-lg leading-relaxed text-gray-300 md:text-xl">
            To make great food accessible to everyone in Nawalapitiya by
            connecting local restaurants with hungry customers through our fast,
            reliable, and user-friendly delivery platform.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
