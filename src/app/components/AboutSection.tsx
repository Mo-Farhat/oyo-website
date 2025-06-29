"use client";

import React from "react";
import { motion } from "framer-motion";
import { Truck, Utensils, Smartphone } from "lucide-react";

const features = [
  {
    icon: <Truck className="w-8 h-8 text-green-500" />,
    title: "Fast and reliable deliveries",
    desc: "Get your food delivered quickly and reliably from local restaurants.",
  },
  {
    icon: <Utensils className="w-8 h-8 text-green-500" />,
    title: "Curated local food choices",
    desc: "Explore a variety of dishes from your favorite spots in Nawalapitiya.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-green-500" />,
    title: "Simple, user-friendly mobile experience",
    desc: "Order with ease using our intuitive mobile app.",
  },
];

const AboutSection = () => (
  <section className="py-12 bg-[#18191B] w-full mx-auto text-white px-5">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="max-w-2xl mx-auto text-center"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-4">What Is OYO Eats?</h2>
      <p className="text-base md:text-lg text-gray-300 mb-8">
        OYO Eats is a local food delivery app built for Nawalapitiya. Whether
        you're craving rice & curry, kottu, or international fast food, OYO Eats
        connects you with nearby restaurants—all from the convenience of your
        phone.
      </p>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-[#1E1E1E] rounded-xl p-6 shadow w-full md:w-1/3"
          >
            {f.icon}
            <h3 className="mt-4 mb-2 text-lg font-semibold">{f.title}</h3>
            <p className="text-gray-400 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default AboutSection;
