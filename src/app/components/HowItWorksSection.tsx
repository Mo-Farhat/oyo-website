"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Search,
  ShoppingCart,
  Truck,
  CheckCircle,
  ArrowRight,
  Smartphone,
  MapPin,
  Clock,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Download & Sign Up",
    description:
      "Get the Oyo app from Google Play or App Store. Create your account in seconds.",
    icon: Download,
    image: "/download.jpg",
    color: "from-[#00D707] to-[#00B300]",
    bgColor: "bg-gray-800/20",
    borderColor: "border-gray-700/30",
    details: [
      "Available on Android & iOS",
      "Quick registration process",
      "Secure account setup",
    ],
  },
  {
    id: 2,
    title: "Browse & Order",
    description:
      "Explore local restaurants, view menus, and place your order with just a few taps.",
    icon: Search,
    image: "/hand-smartphone.jpeg",
    color: "from-[#00D707] to-[#00B300]",
    bgColor: "bg-gray-800/20",
    borderColor: "border-gray-700/30",
    details: [
      "Real-time menu updates",
      "Easy customization options",
      "Secure payment processing",
    ],
  },
  {
    id: 3,
    title: "Track & Enjoy",
    description:
      "Follow your order in real-time and enjoy fresh, hot meals delivered to your door.",
    icon: Truck,
    image: "/package-delivery.jpeg",
    color: "from-[#00D707] to-[#00B300]",
    bgColor: "bg-gray-800/20",
    borderColor: "border-gray-700/30",
    details: [
      "Live delivery tracking",
      "Estimated arrival time",
      "Contact-free delivery",
    ],
  },
];

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry?.isIntersecting ?? false);
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="overflow-hidden bg-[#18191B] py-20 text-white"
    >
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            How It Works
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300 md:text-xl">
            Get your favorite meals delivered in just 3 simple steps
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isActive = activeStep === index;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className={`group relative transition-all duration-500 ${
                  isActive ? "scale-105" : "hover:scale-102"
                }`}
              >
                {/* Step Card */}
                <div
                  className={`relative rounded-3xl border-2 p-8 transition-all duration-500 ${step.bgColor} ${step.borderColor} ${isActive ? "border-opacity-60 shadow-2xl" : "border-opacity-20 hover:border-opacity-40"} backdrop-blur-sm`}
                >
                  {/* Step Number */}
                  <div
                    className={`absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${step.color} text-lg font-bold text-white shadow-lg`}
                  >
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${step.color} text-white shadow-lg`}
                    >
                      <IconComponent className="h-8 w-8" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="mb-4 text-xl font-bold md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mb-6 leading-relaxed text-gray-300">
                      {step.description}
                    </p>

                    {/* Details List */}
                    <div className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="flex items-center gap-2 text-sm text-gray-400"
                        >
                          <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#00D707]" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${step.color} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Active Step Showcase */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="rounded-3xl border border-gray-800 bg-gradient-to-r from-[#18191B] to-[#0a0a0a] p-8">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
              {/* Image */}
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src={steps[activeStep]?.image || ""}
                    alt={steps[activeStep]?.title || ""}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="mb-4 text-3xl font-bold md:text-4xl">
                    {steps[activeStep]?.title || ""}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-300">
                    {steps[activeStep]?.description || ""}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {steps[activeStep]?.details?.map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#00D707]">
                        <CheckCircle className="h-4 w-4 text-black" />
                      </div>
                      <span className="text-gray-300">{detail}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[#00D707] px-8 py-4 font-semibold text-black ${steps[activeStep]?.color || "from-[#00D707] to-[#00B300]"} shadow-lg transition-all duration-300 hover:shadow-xl`}
                >
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
