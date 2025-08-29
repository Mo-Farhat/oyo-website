"use client";

import React from "react";
import { motion } from "framer-motion";
import Carousel from "../../components/ui/carousel";

const slides = [
  {
    title: "Download the App",
    description: "Available on Android and iOS.",
    src: "/phone-screen.png",
  },
  {
    title: "Browse Local Menus",
    description: "Explore food options from restaurants in your area.",
    src: "/hand-smartphone.jpeg",
  },
  {
    title: "Get It Delivered",
    description: "Enjoy fresh meals delivered straight to your location.",
    src: "/package-delivery.jpeg",
  },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="bg-[#18191B] px-5 py-12 text-white">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-3xl text-center"
    >
      <h2 className="mb-8 text-2xl font-bold md:text-3xl">How It Works</h2>
      <div className="flex items-center justify-center">
        <Carousel slides={slides} />
      </div>
    </motion.div>
  </section>
);

export default HowItWorksSection;
