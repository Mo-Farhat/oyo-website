"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isInView, setIsInView] = useState(false);

  const handleScroll = useCallback(() => {
    if (sectionRef.current && isInView) {
      const scrollPos = window.scrollY;
      setScrollY(scrollPos);
    }
  }, [isInView]);

  useEffect(() => {
    let animationFrameId: number;
    let ticking = false;

    const updateParallax = () => {
      if (!isInView) {
        ticking = false;
        return;
      }

      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      ticking = false;
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const onScroll = () => {
      if (!ticking && !prefersReducedMotion && isInView) {
        ticking = true;
        animationFrameId = requestAnimationFrame(updateParallax);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry?.isIntersecting ?? false);
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isInView]); // Removed handleScroll from dependencies to prevent infinite re-renders

  const getParallaxTransform = useCallback(
    (speed: number) => {
      if (!sectionRef.current) return "translateY(0px)";
      const sectionTop = sectionRef.current.offsetTop;
      const scrollOffset = scrollY - sectionTop;
      return `translateY(${scrollOffset * speed}px)`;
    },
    [scrollY],
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#18191B] py-16 text-white md:py-24"
      style={{ willChange: isInView ? "transform" : "auto" }}
    >
      {/* Layer 1 (Background): Static dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#18191B] to-black"></div>

      {/* Layer 2 (Far Background): Subtle animated food icons/elements */}
      <div
        className="absolute inset-0 z-10"
        style={{
          transform: getParallaxTransform(0.2),
          willChange: isInView ? "transform" : "auto",
        }}
      >
        {/* Floating food icons with slow rotation */}
        <div className="animate-spin-slow absolute top-[10%] left-[5%] text-4xl opacity-20 select-none">
          🍕
        </div>
        <div className="animate-spin-slow-reverse absolute top-[40%] right-[10%] text-5xl opacity-20 select-none">
          🍔
        </div>
        <div className="animate-spin-slow absolute bottom-[20%] left-[20%] text-3xl opacity-20 select-none">
          🍜
        </div>
      </div>

      {/* Layer 3 (Mid Background): Floating geometric shapes or delivery bike silhouettes */}
      <div
        className="absolute inset-0 z-20"
        style={{
          transform: getParallaxTransform(0.4),
          willChange: isInView ? "transform" : "auto",
        }}
      >
        {/* Floating geometric shapes */}
        {/* Delivery scooter silhouettes */}
        <div className="absolute top-[50%] left-[10%] hidden text-6xl opacity-15 select-none md:block">
          🛵
        </div>
        <div className="absolute right-[15%] bottom-[30%] hidden text-5xl opacity-15 select-none md:block">
          🛵
        </div>
      </div>

      {/* Main Content Container (Layer 4 & 5 will be inside this) */}
      <div className="relative z-30 container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Text Content (Layer 4) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 text-center lg:order-1 lg:text-left"
            style={{
              transform: getParallaxTransform(0.6),
              willChange: isInView ? "transform" : "auto",
            }}
          >
            <h1 className="mb-6 text-3xl leading-tight font-bold sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl">
              Bringing essential goods and services{" "}
              <span className="text-[#648402]">to your doorstep.</span>
            </h1>
            <p className="mb-8 text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl lg:text-2xl">
              Your go-to app for restaurants, bakeries, pharmacies, and pet
              supplies from local businesses in Nawalapitiya.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#648402] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#4A6202] hover:shadow-xl sm:px-8 sm:py-4 sm:text-base"
              >
                Download On Android
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-md border border-gray-700 bg-[#18191B] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:border-[#648402] hover:bg-[#2E3135] sm:px-8 sm:py-4 sm:text-base"
              >
                Download On iOS
              </motion.a>
            </div>

            {/* Trust Indicators */}
          </motion.div>

          {/* Right Column: Mobile UI Mockup (Layer 5) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-2 justify-center lg:order-2 lg:justify-end"
            style={{
              transform: getParallaxTransform(0.8),
              willChange: isInView ? "transform" : "auto",
            }}
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
              <img
                src="/landing-app.png"
                alt="Oyo App Interface"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
