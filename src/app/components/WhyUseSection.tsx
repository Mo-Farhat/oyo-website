"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "~/lib/utils";

function WhyUseSection() {
  const features = [
    {
      title: "🛍️ Made for Everyone",
      description:
        "Whether you need groceries, medicine, pet supplies, or meals, Oyo Eats is designed for anyone who wants essential goods delivered without hassle.",
    },
    {
      title: "🚀 Ease of use",
      description:
        "No confusing menus. No long sign-ups. Just open the app, browse nearby options, and order.",
    },
    {
      title: "💸 Fair Pricing",
      description:
        "No hidden fees. No surprise charges. Just honest pricing from your favorite local spots.",
    },
    {
      title: "📶 Reliable, Every Time",
      description:
        "We dont go down. Our app is built to work whenever you need something—even during rush hours.",
    },
    {
      title: "👨‍👩‍👧 Share with Friends",
      description:
        "Share your favorite stores, delivery addresses, and business links easily. Shopping is better when shared.",
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
      description:
        "We're just getting started. More businesses, better deals, and smarter features are always coming.",
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
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">
          Why Use Oyo Eats?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-400">
          Discover how Oyo Eats transforms the way you find and get essential
          goods and services—faster, simpler, and smarter.
        </p>
      </motion.div>
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
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
        <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-tr-full rounded-br-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-[#648402] dark:bg-neutral-700" />
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
