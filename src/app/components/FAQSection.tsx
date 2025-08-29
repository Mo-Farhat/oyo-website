"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is OYO Eats available in my area?",
    answer:
      "OYO Eats currently covers a 20km radius around Nawalapitiya. Check the app or contact us to confirm if your location is within our delivery zone.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once you place an order, you'll receive real-time updates via push notifications. You can also track your order in real-time through the app's order tracking feature.",
  },
  {
    question: "What restaurants are listed on OYO Eats?",
    answer:
      "We partner with 50+ local restaurants in Nawalapitiya, including traditional Sri Lankan cuisine, fast food, and international options. New restaurants are added regularly.",
  },
  {
    question: "What are the delivery fees?",
    answer:
      "Delivery fees vary based on distance and range from Rs. 50-150. Orders above Rs. 1000 often qualify for free delivery. Check the app for current pricing.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery times range from 15-45 minutes depending on your location. Central Nawalapitiya: 15-25 min, Suburbs: 25-35 min, Surrounding villages: 35-45 min.",
  },
  {
    question: "Can I pay with cash?",
    answer:
      "Yes! We accept both cash on delivery and digital payments including credit cards, debit cards, and mobile wallets for your convenience.",
  },
  {
    question: "What if I'm not satisfied with my order?",
    answer:
      "We have a 100% satisfaction guarantee. If you're not happy with your order, contact our support team within 30 minutes of delivery and we'll make it right.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes! Our support team is available 24/7 through the app's chat feature, email, and phone. We're here to help with any questions or issues.",
  },
  {
    question: "Can I schedule orders in advance?",
    answer:
      "Currently, we offer same-day delivery. We're working on adding advance ordering features for special occasions and events.",
  },
  {
    question: "How do I become a restaurant partner?",
    answer:
      "Interested restaurants can contact us at partner@oyoeats.com or fill out our partnership form. We'll guide you through the onboarding process.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#18191B] px-5 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-300">
            Find answers to common questions about OYO Eats
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mb-8"
        >
          <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-gray-700 bg-[#1E1E1E] py-3 pr-4 pl-12 text-white placeholder-gray-400 transition-colors focus:border-[#00D707] focus:outline-none"
          />
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-lg border border-gray-700 bg-[#1E1E1E] transition-colors hover:border-[#00D707]"
            >
              <button
                className="flex w-full items-center justify-between px-6 py-4 text-left font-medium transition-colors hover:bg-[#2A2A2A] focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="pr-4 text-base font-medium text-white">
                  {faq.question}
                </span>
                <span className="flex h-6 w-6 items-center justify-center text-[#00D707]">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-gray-700 px-6 pb-4 text-gray-300">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 rounded-xl border border-[#00D707]/20 bg-gradient-to-r from-[#00D707]/10 to-[#00D707]/5 p-6 text-center"
        >
          <h3 className="mb-2 text-xl font-semibold text-[#00D707]">
            Still have questions?
          </h3>
          <p className="mb-4 text-gray-300">
            Can't find what you're looking for? Our support team is here to
            help!
          </p>
          <a
            href="mailto:support@oyoeats.com"
            className="inline-flex items-center gap-2 rounded-lg bg-[#00D707] px-6 py-3 font-semibold text-black transition-colors hover:bg-[#00B300]"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
