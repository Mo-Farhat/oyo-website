"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";

const ForRestaurantsSection = () => (
  <section className="py-12 bg-[#18191B] text-white px-5">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="max-w-2xl mx-auto text-center"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-2">For Restaurants</h2>
      <div className="bg-[#2E3135] rounded-xl p-6 shadow mt-6">
        <h3 className="text-xl font-semibold text-green-400 mb-2">
          Partner With OYO Eats
        </h3>
        <p className="text-gray-300 mb-4">
          Own a restaurant near Nawalapitiya? Join OYO Eats and get discovered
          by hundreds of hungry customers daily.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:partner@oyoeats.com"
            className="inline-flex items-center gap-2 rounded-lg bg-[#00D707] text-black px-5 py-3 font-semibold shadow hover:bg-green-600 transition"
          >
            <Mail className="w-5 h-5" />
            Email us at partner@oyoeats.com
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg bg-white text-green-700 px-5 py-3 font-semibold shadow hover:bg-gray-100 transition"
          >
            <FileText className="w-5 h-5" />
            Fill out our Partner Form
          </a>
        </div>
      </div>
    </motion.div>
  </section>
);

export default ForRestaurantsSection;
