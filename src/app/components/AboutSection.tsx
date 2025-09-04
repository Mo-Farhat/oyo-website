"use client";

import React from "react";
import { motion } from "framer-motion";

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
    value: "3000+",
    label: "Happy Customers",
  },
];

const businessCategories = [
  {
    title: "Restaurants",
    description:
      "Fresh meals from local restaurants, cafes, and food stalls delivered hot and fast.",
  },
  {
    title: "Bakeries",
    description:
      "Fresh bread, pastries, cakes, and baked goods from neighborhood bakeries.",
  },
  {
    title: "Pharmacies",
    description:
      "Essential medicines, health products, and wellness items when you need them most.",
  },
  {
    title: "Pet Supplies",
    description:
      "Pet food, toys, accessories, and care products for your beloved companions.",
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
          Who We Are
        </h2>
        <p className="mx-auto mb-16 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
          Oyo Eats is your local delivery service platform, connecting you with
          the best local businesses in Nawalapitiya. We specialize in delivering
          from restaurants, bakeries, pharmacies, and pet supplies, bringing
          everything you need right to your doorstep with speed, reliability,
          and exceptional service.
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
              className="rounded-2xl border border-[#648402] bg-[#18191B] p-8 text-center transition-all duration-300 hover:border-[#648402]/30"
            >
              <div className="mb-2 text-3xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          );
        })}
      </motion.div>

      {/* Business Categories */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-20"
      >
        <div className="mb-12 text-center">
          <h3 className="mb-4 text-3xl font-bold md:text-4xl">
            What We Deliver
          </h3>
          <p className="mx-auto max-w-2xl text-lg text-gray-300 md:text-xl">
            From meals to medicines, we connect you with all the essential
            services you need in one convenient platform.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {businessCategories.map((category, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group rounded-2xl border border-[#648402] bg-[#18191B] p-6 text-center transition-all duration-300 hover:border-[#648402]/50 hover:bg-[#1a1a1a]"
              >
                <h4 className="mb-3 text-xl font-bold text-white">
                  {category.title}
                </h4>
                <p className="text-sm leading-relaxed text-gray-400">
                  {category.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-20 text-center"
      >
        <div className="mx-auto max-w-4xl rounded-3xl border border-[#648402] bg-gradient-to-r from-[#18191B] to-[#0a0a0a] p-12">
          <h3 className="mb-6 text-2xl font-bold md:text-3xl">Our Mission</h3>
          <p className="text-lg leading-relaxed text-gray-300 md:text-xl">
            To make essential goods and services accessible to everyone in
            Nawalapitiya by connecting local businesses with customers through
            our fast, reliable, and user-friendly delivery platform. We focus on
            restaurants, bakeries, pharmacies, and pet supplies to serve your
            daily needs.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
