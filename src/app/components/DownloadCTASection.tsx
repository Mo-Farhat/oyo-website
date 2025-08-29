"use client";

import React from "react";
import { motion } from "framer-motion";
import { Store } from "lucide-react";

const DownloadCTASection = () => (
  <section id="download" className="bg-[#18191B] px-5 py-20 text-white">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-2xl text-center"
    >
      <h2 className="mb-2 text-2xl font-bold md:text-3xl">
        Ready to Experience Better Food Delivery?
      </h2>
      <p className="mb-8 text-lg text-gray-300">
        Join thousands of satisfied customers in Nawalapitiya who trust Oyo Eats
        for their daily meals. Download the app today and discover why
        we&apos;re the fastest-growing food delivery service in the region.
      </p>
      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <a
          href="#"
          className="flex items-center gap-2 rounded-lg bg-black px-5 py-3 text-white shadow transition hover:bg-gray-900"
        >
          <Store className="h-5 w-5" />
          <span>Google Play</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-2 rounded-lg bg-black px-5 py-3 text-white shadow transition hover:bg-gray-900"
        >
          <Store className="h-5 w-5" />
          <span>App Store</span>
        </a>
      </div>
    </motion.div>
  </section>
);

export default DownloadCTASection;
