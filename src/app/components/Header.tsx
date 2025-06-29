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
    <header className="sticky top-0 z-30 w-full bg-[#18191B] shadow-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
        {/* Logo */}
        <a
          href="#home"
          className="font-poppins text-2xl font-extrabold tracking-tight text-gray-900"
          style={{
            fontFamily: 'var(--font-poppins), "Nunito Sans", sans-serif',
          }}
        >
          Oyo <span className="text-[#F97316]">Eats</span>
        </a>
        {/* Desktop Nav */}
        <div className="hidden items-center gap-2 md:flex lg:gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-lg px-3 py-2 text-base font-medium text-gray-700 text-white transition-colors duration-200 hover:bg-orange-50 hover:text-[#F97316]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#download"
            className="ml-2 inline-flex items-center rounded-full bg-[#F97316] px-5 py-2 text-base font-semibold text-white shadow-md transition-colors duration-200 hover:bg-orange-500 focus:ring-2 focus:ring-[#F97316]/50 focus:outline-none"
          >
            Download
          </a>
        </div>
        {/* Hamburger Icon */}
        <button
          className="flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-orange-50 focus:ring-2 focus:ring-[#F97316]/50 focus:outline-none md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 z-40 flex w-64 flex-col gap-4 rounded-l-xl bg-white p-6 shadow-xl md:hidden"
            style={{
              fontFamily: 'var(--font-poppins), "Nunito Sans", sans-serif',
            }}
            aria-label="Mobile navigation drawer"
          >
            <button
              className="mb-4 self-end rounded-lg p-2 text-gray-700 hover:bg-orange-50 focus:ring-2 focus:ring-[#F97316]/50 focus:outline-none"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <X size={28} />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block rounded-lg px-3 py-3 text-lg font-medium text-gray-700 transition-colors duration-200 hover:bg-orange-50 hover:text-[#F97316]"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#download"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#F97316] px-5 py-2 text-base font-semibold text-white shadow-md transition-colors duration-200 hover:bg-orange-500 focus:ring-2 focus:ring-[#F97316]/50 focus:outline-none"
              onClick={() => setMenuOpen(false)}
            >
              Download
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
