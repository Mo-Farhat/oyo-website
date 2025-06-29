"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeartHandshake, Smartphone, Timer, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <HeartHandshake className="w-8 h-8 text-green-500" />,
    title: "Support Local Restaurants",
    desc: "Discover hidden gems around Nawalapitiya.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-green-500" />,
    title: "Built for Mobile",
    desc: "Designed for fast ordering on the go.",
  },
  {
    icon: <Timer className="w-8 h-8 text-green-500" />,
    title: "Quick Delivery",
    desc: "Get meals delivered reliably from verified partners.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
    title: "Safe & Secure",
    desc: "Trusted by thousands of OYO customers.",
  },
];

const WhyUseSection = () => (
  <section className="py-12 bg-[#111113] text-white px-5">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="max-w-3xl mx-auto text-center"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Why Use OYO Eats?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-[#2E3135] rounded-xl p-6 shadow"
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

export default WhyUseSection;
