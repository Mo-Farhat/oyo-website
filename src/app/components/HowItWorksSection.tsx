"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Menu, Truck } from "lucide-react";

const steps = [
  {
    icon: <Download className="w-8 h-8 text-green-500" />,
    title: "Download the App",
    desc: "Available on Android and iOS.",
  },
  {
    icon: <Menu className="w-8 h-8 text-green-500" />,
    title: "Browse Local Menus",
    desc: "Explore food options from restaurants in your area.",
  },
  {
    icon: <Truck className="w-8 h-8 text-green-500" />,
    title: "Get It Delivered",
    desc: "Enjoy fresh meals delivered straight to your location.",
  },
];

const HowItWorksSection = () => (
  <section className="py-12 bg-[#18191B] text-white px-5">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="max-w-3xl mx-auto text-center"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-8">How It Works</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-[#111113] rounded-xl p-6 shadow w-full md:w-1/3"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-900 mb-4 text-lg font-bold">
              {i + 1}
            </div>
            {step.icon}
            <h3 className="mt-4 mb-2 text-lg font-semibold">{step.title}</h3>
            <p className="text-gray-400 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default HowItWorksSection;
