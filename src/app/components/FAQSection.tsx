"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  "Is OYO Eats available in my area?",
  "How do I track my order?",
  "What restaurants are listed?",
];

const FAQSection = () => (
  <section className="py-12 bg-[#18191B] text-white px-5">
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((question, i) => (
          <div
            key={i}
            className="rounded-lg border border-[#E5E7EB] bg-[#00070D] overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left font-medium focus:outline-none"
              tabIndex={-1}
              style={{ cursor: "default" }}
              disabled
            >
              <span className="text-base font-medium text-white">
                {question}
              </span>
              <span className="flex items-center justify-center w-6 h-6">
                <ChevronDown className="w-5 h-5 text-[#00D707]" />
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FAQSection;
