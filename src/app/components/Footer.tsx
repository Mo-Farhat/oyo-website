"use client";

import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Clock,
  Download,
} from "lucide-react";

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-gray-700 bg-[#111113] px-5 pt-16 pb-8 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Main Footer Content */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <span className="text-white">OYO</span>
              <span className="text-[#00D707]">Eats</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              The leading food delivery service in Nawalapitiya, connecting you
              with the best local restaurants for quick, fresh, and delicious
              meals.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="rounded-lg bg-[#1E1E1E] p-2 text-gray-400 transition-colors hover:bg-[#2A2A2A] hover:text-[#00D707]"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-lg bg-[#1E1E1E] p-2 text-gray-400 transition-colors hover:bg-[#2A2A2A] hover:text-[#00D707]"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-lg bg-[#1E1E1E] p-2 text-gray-400 transition-colors hover:bg-[#2A2A2A] hover:text-[#00D707]"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#00D707]">
              Quick Links
            </h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("#about")}
                className="block cursor-pointer text-left text-gray-400 transition-colors hover:text-white"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("#how-it-works")}
                className="block cursor-pointer text-left text-gray-400 transition-colors hover:text-white"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("#area-coverage")}
                className="block cursor-pointer text-left text-gray-400 transition-colors hover:text-white"
              >
                Area Coverage
              </button>
              <button
                onClick={() => scrollToSection("#for-restaurants")}
                className="block cursor-pointer text-left text-gray-400 transition-colors hover:text-white"
              >
                For Restaurants
              </button>
              <button
                onClick={() => scrollToSection("#faq")}
                className="block cursor-pointer text-left text-gray-400 transition-colors hover:text-white"
              >
                FAQ
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#00D707]">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="h-4 w-4 text-[#00D707]" />
                <span className="text-sm">support@oyoeats.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="h-4 w-4 text-[#00D707]" />
                <span className="text-sm">+94 11 234 5678</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="h-4 w-4 text-[#00D707]" />
                <span className="text-sm">Nawalapitiya, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Clock className="h-4 w-4 text-[#00D707]" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Download App */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#00D707]">
              Download App
            </h3>
            <p className="text-sm text-gray-400">
              Get the OYO Eats app for the best food delivery experience
            </p>
            <div className="space-y-3">
              <button
                onClick={() => scrollToSection("#download")}
                className="flex w-full cursor-pointer items-center gap-2 rounded-lg bg-[#00D707] px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-[#00B300]"
              >
                <Download className="h-4 w-4" />
                Android App
              </button>
              <button
                onClick={() => scrollToSection("#download")}
                className="flex w-full cursor-pointer items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-900"
              >
                <Download className="h-4 w-4" />
                iOS App
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-8 border-t border-gray-700"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500">
              © 2024 OYO Eats. All rights reserved. | Serving Nawalapitiya and
              surrounding areas
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <button
              onClick={() => scrollToSection("#privacy-policy")}
              className="cursor-pointer transition-colors hover:text-[#00D707]"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => scrollToSection("#terms-of-service")}
              className="cursor-pointer transition-colors hover:text-[#00D707]"
            >
              Terms of Service
            </button>
            <button
              onClick={() => scrollToSection("#contact")}
              className="cursor-pointer transition-colors hover:text-[#00D707]"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-xs text-gray-600">
            OYO Eats is a registered trademark. Food delivery available within
            20km radius of Nawalapitiya. Delivery times may vary based on
            location and restaurant preparation time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
