"use client";

import React from "react";
import { motion } from "framer-motion";
import { Store } from "lucide-react";

const DownloadCTASection = () => (
  <section className="py-12 bg-[#111113] text-white px-5">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="max-w-2xl mx-auto text-center"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
      Ready to Experience Better Food Delivery?
      </h2>
      <p className="text-lg text-gray-300 mb-8">
      Join thousands of satisfied customers in Nawalapitiya who trust Oyo Eats for their daily meals. Download the app today and discover why we&apos;re the fastest-growing food delivery service in the region.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#"
          className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-lg shadow hover:bg-gray-900 transition"
        >
          <Store className="w-5 h-5" />
          <span>Google Play</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-lg shadow hover:bg-gray-900 transition"
        >
          <Store className="w-5 h-5" />
          <span>App Store</span>
        </a>
      </div>
    </motion.div>
  </section>
);

export default DownloadCTASection;
