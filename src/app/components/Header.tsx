"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full bg-[#111113] shadow-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
        {/* Logo - Minimalist and bold, using Poppins font for a premium feel */}
        <a
          href="#home"
          className="font-poppins text-2xl font-extrabold tracking-tight text-white"
          style={{
            fontFamily: 'var(--font-poppins), "Nunito Sans", sans-serif',
          }}
        >
          Oyo <span className="text-[#F97316]">Eats</span>
        </a>
        {/* Desktop Navigation - Clean and interactive with subtle hover effects */}
        <div className="hidden items-center gap-2 md:flex lg:gap-4">
          {/* Download Button - Prominent and interactive */}
          <motion.a
            href="#download"
            className="ml-2 inline-flex items-center rounded-lg bg-[#648402] px-5 py-2 text-lg font-bold text-white shadow-md transition-colors duration-200 hover:bg-[#4A6202] focus:ring-2 focus:ring-[#F97316]/50 focus:outline-none"
            whileHover={{ scale: 1.05 }} // Subtle scale on hover
            whileTap={{ scale: 0.95 }}
          >
            Download
          </motion.a>
        </div>
        {/* Hamburger Icon for Mobile - Interactive and clear */}
        <button
          className="flex items-center justify-center rounded-lg p-2 text-white hover:bg-[#F97316]/10 focus:ring-2 focus:ring-[#F97316]/50 focus:outline-none md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}{" "}
          {/* Icon changes based on menu state */}
        </button>
      </nav>
      {/* Mobile Drawer - Animated and minimalist */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }} // Starts off-screen to the right
            animate={{ x: 0 }} // Slides in from the right
            exit={{ x: "100%" }} // Slides out to the right
            transition={{ type: "spring", stiffness: 300, damping: 30 }} // Smooth spring animation
            className="fixed inset-y-0 right-0 z-40 flex w-64 flex-col gap-4 rounded-l-xl border-l border-gray-700 bg-[#111113] p-6 shadow-xl md:hidden" // Dark background, subtle border
            style={{
              fontFamily: 'var(--font-poppins), "Nunito Sans", sans-serif',
            }}
            aria-label="Mobile navigation drawer"
          >
            {/* Close Button for Mobile Drawer */}
            <button
              className="mb-4 self-end rounded-lg p-2 text-white hover:bg-[#F97316]/10 focus:ring-2 focus:ring-[#F97316]/50 focus:outline-none"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <X size={28} />
            </button>
            {/* Mobile Navigation Links - Interactive and clear */}
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="block rounded-lg px-3 py-3 text-lg font-medium text-white transition-colors duration-200 hover:bg-white/10 hover:text-[#F97316]"
                onClick={() => setMenuOpen(false)}
                whileHover={{ x: 5 }} // Slight horizontal shift on hover
                whileTap={{ scale: 0.98 }}
              >
                {link.name}
              </motion.a>
            ))}
            {/* Mobile Download Button - Consistent with desktop styling */}
            <motion.a
              href="#download"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#648402] px-5 py-2 text-base font-semibold text-white shadow-md transition-colors duration-200 hover:bg-[#4A6202] focus:ring-2 focus:ring-[#F97316]/50 focus:outline-none"
              onClick={() => setMenuOpen(false)}
              whileHover={{ scale: 1.02 }} // Subtle scale on hover
              whileTap={{ scale: 0.98 }}
            >
              Download
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
