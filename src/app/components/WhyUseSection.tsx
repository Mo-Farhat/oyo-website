"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "~/lib/utils";


function WhyUseSection() {
  const features = [
    {
      title: "🍱 Made for Food Lovers",
      description:
        "Whether you're a foodie, a late-night snacker, or a busy professional, Oyo Eats is designed for anyone who wants great food delivered without hassle.",
      
    },
    {
      title: "🚀 Ease of use",
      description:
        "No confusing menus. No long sign-ups. Just open the app, browse nearby options, and eat.",
     
    },
    {
      title: "💸 Fair Pricing",
      description:
        "No hidden fees. No surprise charges. Just honest pricing from your favorite local spots.",
     
    },
    {
      title: "📶 Reliable, Every Time",
      description: "We dont go down. Our app is built to work whenever you're hungry—even during rush hours.",
      
    },
    {
      title: "👨‍👩‍👧 Share with Friends",
      description: "Share your favorite dishes, delivery addresses, and restaurant links easily. Food is better when shared.",
      
    },
    {
      title: "📞 Always-On Support",
      description:
        "Have a question? Our in-app support (powered by AI + humans) is here for you 24/7.",
     
    },
    {
      title: "💰 No-Risk Guarantee",
      description:
        "Don’t love your experience? We’re here to make it right. Your satisfaction is our priority.",
     
    },
    {
      title: "🍔 And More to Come",
      description: "We’re just getting started. More restaurants, better deals, and smarter features are always on the menu.",
     
    },
  ];
  return (
    <section className="bg-[#111113] px-5 py-12 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">Why Use OYO Eats?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-400">
         Discover how Oyo Eats transforms the way you find and enjoy local food—faster, simpler, and smarter.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "group/feature relative flex flex-col py-10 lg:border-r dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800",
      )}
    >
      {index < 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 dark:from-neutral-800" />
      )}
      {index >= 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 dark:from-neutral-800" />
      )}
     
      <div className="relative z-10 mb-2 px-10 text-lg font-bold">
        <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-tr-full rounded-br-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-blue-500 dark:bg-neutral-700" />
        <span className="inline-block text-white transition duration-200 group-hover/feature:translate-x-2">
          {title}
        </span>
      </div>
      <p className="relative z-10 max-w-xs px-10 text-sm text-neutral-300">
        {description}
      </p>
    </div>
  );
};

export default WhyUseSection;
