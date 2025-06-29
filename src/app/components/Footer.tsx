"use client";

import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-[#111113] border-t border-[#E5E7EB] pt-10 pb-4 px-5 text-white">
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
        {/* Logo */}
        <div className="flex items-center gap-1 text-2xl font-bold">
          <span className="text-white">OYO</span>
          <span className="text-[#00D707]">Eats</span>
        </div>
        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
        {/* Footer Links */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
          <a href="#" className="hover:text-white">
            About Us
          </a>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 border-t border-[#E5E7EB] pt-4">
        © 2023 OYO Eats. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
