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
      className="relative flex min-h-[100vh] items-center justify-center overflow-hidden bg-[#0a0a0a] py-16 text-white md:py-24"
      style={{ willChange: isInView ? "transform" : "auto" }}
    >
      {/* Layer 1 (Background): Static dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-black"></div>

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
        <div className="animate-float absolute top-[20%] right-[20%] h-12 w-12 rounded-full bg-orange-500 opacity-10"></div>
        <div className="animate-float-reverse absolute right-[5%] bottom-[10%] h-8 w-8 rotate-45 rounded-lg bg-green-500 opacity-10"></div>
        {/* Delivery scooter silhouettes */}
        <div className="absolute top-[50%] left-[10%] hidden text-6xl opacity-15 select-none md:block">
          🛵
        </div>
        <div className="absolute right-[15%] bottom-[30%] hidden text-5xl opacity-15 select-none md:block">
          🛵
        </div>
      </div>

      {/* Main Content Container (Layer 4 & 5 will be inside this) */}
      <div className="relative z-30 container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Left Column: Text Content (Layer 4) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-left"
            style={{
              transform: getParallaxTransform(0.6),
              willChange: isInView ? "transform" : "auto",
            }}
          >
            <h1 className="mb-6 text-4xl leading-tight font-bold md:text-6xl lg:text-6xl">
              Bringing the best food around you,{" "}
              <span className="text-[#00D707]">instantly.</span>
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-gray-300 md:text-xl lg:text-2xl">
              Your go-to app for quick, affordable, and delicious meals from
              local restaurants in Nawalapitiya.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#00D707] px-8 py-4 text-base font-semibold text-black shadow-lg transition-all duration-300 hover:bg-[#00B300] hover:shadow-xl"
              >
                Download On Android
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-md border border-gray-700 bg-[#18191B] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:border-[#00D707] hover:bg-[#2E3135]"
              >
                Download On iOS
              </motion.a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-col items-center gap-4 text-xs text-gray-500 sm:flex-row">
              <div className="flex items-center gap-2">
                <span className="text-[#00D707]">✓</span>
                <span>24/7 customer support</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Mobile UI Mockup (Layer 5) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center md:justify-end"
            style={{
              transform: getParallaxTransform(0.8),
              willChange: isInView ? "transform" : "auto",
            }}
          >
            <div className="relative mx-auto h-[600px] w-[300px] rounded-[2.5rem] border-[14px] border-gray-800 bg-gray-800 dark:border-gray-800">
              <div className="absolute -start-[17px] top-[72px] h-[32px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-800"></div>
              <div className="absolute -start-[17px] top-[124px] h-[46px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-800"></div>
              <div className="absolute -start-[17px] top-[178px] h-[46px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-800"></div>
              <div className="absolute -end-[17px] top-[142px] h-[64px] w-[3px] rounded-e-lg bg-gray-800 dark:bg-gray-800"></div>
              <div className="h-[572px] w-[272px] overflow-hidden rounded-[2rem] bg-white dark:bg-gray-800">
                {/* Fallback image with proper error handling */}
                <div className="flex h-[572px] w-[272px] items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-700 dark:to-gray-900">
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <img
                      src="/phone-screen.png"
                      alt="Hero Image"
                      className="h-[572px] w-[272px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
