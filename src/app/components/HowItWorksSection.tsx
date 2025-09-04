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
    color: "from-[#648402] to-[#4A6202]",
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
      "Explore local businesses, view products, and place your order with just a few taps.",
    icon: Search,
    image: "/hand-smartphone.jpeg",
    color: "from-[#648402] to-[#4A6202]",
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
      "Follow your order in real-time and enjoy fresh products delivered to your door.",
    icon: Truck,
    image: "/package-delivery.jpeg",
    color: "from-[#648402] to-[#4A6202]",
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
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry?.isIntersecting ?? false);
      },
      { threshold: 0.2 },
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
    if (!isInView || isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isInView, isPaused]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setIsPaused(true);
    // Resume auto-slide after 8 seconds of manual interaction
    setTimeout(() => setIsPaused(false), 8000);
  };

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
            Get your essential goods delivered in just 3 simple steps
          </p>
        </motion.div>

        {/* Progress Indicators */}
        <div className="mb-8 flex justify-center">
          <div className="flex gap-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => handleStepClick(index)}
                className={`h-2 w-8 rounded-full transition-all duration-300 ${
                  activeStep === index
                    ? "bg-[#648402]"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Steps Grid */}
        <div className="mb-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isActive = activeStep === index;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`group relative cursor-pointer transition-all duration-500 ${
                  isActive ? "scale-105" : "hover:scale-102"
                }`}
                onClick={() => handleStepClick(index)}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* Step Card */}
                <div
                  className={`relative rounded-2xl border-2 p-6 transition-all duration-500 sm:rounded-3xl sm:p-8 ${step.bgColor} ${step.borderColor} ${isActive ? "border-opacity-60 shadow-2xl" : "border-opacity-20 hover:border-opacity-40"} backdrop-blur-sm`}
                >
                  {/* Icon */}
                  <div className="mb-4 flex justify-center sm:mb-6">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${step.color} text-white shadow-lg sm:h-16 sm:w-16 sm:rounded-2xl`}
                    >
                      <IconComponent className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="mb-3 text-lg font-bold sm:mb-4 sm:text-xl md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-gray-300 sm:mb-6 sm:text-base">
                      {step.description}
                    </p>

                    {/* Details List */}
                    <div className="space-y-1.5 sm:space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="flex items-center gap-2 text-xs text-gray-400 sm:text-sm"
                        >
                          <CheckCircle className="h-3 w-3 flex-shrink-0 text-[#648402] sm:h-4 sm:w-4" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${step.color} opacity-0 transition-opacity duration-500 group-hover:opacity-5 sm:rounded-3xl`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Active Step Showcase */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <div className="rounded-2xl border border-gray-800 bg-gradient-to-r from-[#18191B] to-[#0a0a0a] p-6 sm:rounded-3xl sm:p-8">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-8">
              {/* Image */}
              <div className="relative order-2 lg:order-1">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl">
                  <img
                    src={steps[activeStep]?.image || ""}
                    alt={steps[activeStep]?.title || ""}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Floating elements for mobile */}
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 animate-bounce items-center justify-center rounded-full bg-[#648402] sm:hidden">
                    <Smartphone className="h-4 w-4 text-black" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 flex h-6 w-6 animate-pulse items-center justify-center rounded-full bg-yellow-400 sm:hidden">
                    <Clock className="h-3 w-3 text-black" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="order-1 space-y-4 sm:space-y-6 lg:order-2">
                <div>
                  <h3 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl">
                    {steps[activeStep]?.title || ""}
                  </h3>
                  <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
                    {steps[activeStep]?.description || ""}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2 sm:space-y-3">
                  {steps[activeStep]?.details?.map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#648402] sm:h-8 sm:w-8">
                        <CheckCircle className="h-3 w-3 text-white sm:h-4 sm:w-4" />
                      </div>
                      <span className="text-sm text-gray-300 sm:text-base">
                        {detail}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#648402] px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl sm:w-auto sm:px-8 sm:py-4"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
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
