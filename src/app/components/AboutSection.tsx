"use client";

import React from "react";
import { motion } from "framer-motion";
import { Truck, Utensils, Smartphone } from "lucide-react";

const features = [
  {
    icon: <Truck className="h-8 w-8 text-green-500" />,
    title: "Fast and reliable deliveries",
    desc: "Get your food delivered quickly and reliably from local restaurants.",
  },
  {
    icon: <Utensils className="h-8 w-8 text-green-500" />,
    title: "Curated local food choices",
    desc: "Explore a variety of dishes from your favorite spots in Nawalapitiya.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-green-500" />,
    title: "Simple, user-friendly mobile experience",
    desc: "Order with ease using our intuitive mobile app.",
  },
];

const AboutSection = () => (
  <section
    id="about"
    className="mx-auto w-full bg-[#18191B] px-5 py-20 text-white"
  >
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-2xl text-center"
    >
      <h2 className="mb-4 text-2xl font-bold md:text-3xl">What Is Oyo Eats?</h2>
      <p className="mb-8 text-base text-gray-300 md:text-lg">
        OYO Eats is a local food delivery app built for Nawalapitiya. Whether
        you&apos;re craving rice & curry, kottu, or international fast food, OYO
        Eats connects you with nearby restaurants—all from the convenience of
        your phone.
      </p>
      <div className="flex flex-col justify-center gap-6 md:flex-row">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex w-full flex-col items-center rounded-xl bg-[#1E1E1E] p-6 shadow md:w-1/3"
          >
            {f.icon}
            <h3 className="mt-4 mb-2 text-lg font-semibold">{f.title}</h3>
            <p className="text-sm text-gray-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default AboutSection;
