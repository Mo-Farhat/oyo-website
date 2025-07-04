"use client";

import React from "react";
import { motion } from "framer-motion";
import  Carousel  from "../../components/ui/carousel";

const slides = [
  {
    title: "📲 Download the App",
description: "Available on Android and iOS.",
    src: "/phone-screen.png",
  },
  {
    title: "🍛 Browse Local Menus",
   description: "Explore food options from restaurants in your area.",
    src: "/hand-smartphone.jpeg",
  },
  {
    title: "🚚 Get It Delivered",
    description: "Enjoy fresh meals delivered straight to your location.",
    src: "/package-delivery.jpeg",
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
      <div className="flex justify-center items-center">
        <Carousel slides={slides} />
      </div>
    </motion.div>
  </section>
);

export default HowItWorksSection;
