"use client";
import React from "react";
import { motion } from "framer-motion";
import {} from "lucide-react";
import Image from "next/image";

const HeroSection = () => (
  <section className="flex flex-col items-center gap-8 bg-[#111113] px-5 py-12 text-center">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-screen-xl"
    >
      <h1 className="font-weight-400 mb-4 text-3xl text-white md:text-5xl">
        Discover the Best Local Food Near You – Only on the OYO Eats App
      </h1>
      <p className="mb-8 text-lg text-gray-300 md:text-xl">
        Get fresh meals from your favorite restaurants in Nawalapitiya,
        delivered fast. Now serving within a 20km radius.
      </p>
      <motion.div
        className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
          },
        }}
      >
        <motion.a
          href="#"
          whileHover={{
            scale: 1.04,
            boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex h-[48px] w-[320px] items-center gap-3 rounded-[8px] border border-[#E5E7EB] bg-white px-6 shadow-sm"
        >
          <Image
            src="/play-store.png"
            width={24}
            height={24}
            alt="Google Play"
            className="object-contain"
          />
          <span className="mx-auto text-base font-medium text-[#111113]">
            Google Play
          </span>
        </motion.a>
        <motion.a
          href="#"
          whileHover={{
            scale: 1.04,
            boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex h-[48px] w-[320px] items-center gap-3 rounded-[8px] border border-[#E5E7EB] bg-white px-6 shadow-sm"
        >
          <Image
            src="/app-store.png"
            width={24}
            height={24}
            alt="App Store"
            className="object-contain"
          />
          <span className="mx-auto text-base font-medium text-[#111113]">
            App Store
          </span>
        </motion.a>
      </motion.div>
      <div className="flex justify-center">
        <img
          src="https://placehold.co/280x280?text=App+Screenshot"
          alt="OYO Eats App Screenshot"
          className="mx-auto h-72 w-72 rounded-xl object-cover shadow-lg"
        />
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
