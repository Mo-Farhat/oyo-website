"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Eye, Lock, Users, Calendar, Phone, Mail } from "lucide-react";

const PrivacyPolicySection = () => (
  <section id="privacy-policy" className="bg-[#111113] px-5 py-20 text-white">
    <div className="mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16 text-center"
      >
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">Privacy Policy</h1>
        <p className="text-lg text-gray-300">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </motion.div>

      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl border border-gray-700 bg-[#1E1E1E] p-8"
        >
          <div className="mb-4 flex items-center gap-3">
            <Shield className="h-8 w-8 text-[#648402]" />
            <h2 className="text-2xl font-semibold">Information We Collect</h2>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>
              We collect information you provide directly to us, such as when
              you create an account, place an order, or contact customer
              support. This may include:
            </p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Name, email address, phone number, and delivery address</li>
              <li>
                Payment information (processed securely through our payment
                partners)
              </li>
              <li>Order history and preferences</li>
              <li>Communications with our customer support team</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-xl border border-gray-700 bg-[#1E1E1E] p-8"
        >
          <div className="mb-4 flex items-center gap-3">
            <Eye className="h-8 w-8 text-[#648402]" />
            <h2 className="text-2xl font-semibold">
              How We Use Your Information
            </h2>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>We use the information we collect to:</p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Process and fulfill your food delivery orders</li>
              <li>Communicate with you about your orders and account</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Improve our services and develop new features</li>
              <li>Send you promotional offers (with your consent)</li>
              <li>Ensure the security and integrity of our platform</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-xl border border-gray-700 bg-[#1E1E1E] p-8"
        >
          <div className="mb-4 flex items-center gap-3">
            <Lock className="h-8 w-8 text-[#648402]" />
            <h2 className="text-2xl font-semibold">Data Security</h2>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>
              We implement appropriate security measures to protect your
              personal information against unauthorized access, alteration,
              disclosure, or destruction. This includes:
            </p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication measures</li>
              <li>Secure payment processing through trusted partners</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded-xl border border-gray-700 bg-[#1E1E1E] p-8"
        >
          <div className="mb-4 flex items-center gap-3">
            <Users className="h-8 w-8 text-[#648402]" />
            <h2 className="text-2xl font-semibold">Information Sharing</h2>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>
              We do not sell, trade, or otherwise transfer your personal
              information to third parties except in the following
              circumstances:
            </p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>With restaurant partners to fulfill your orders</li>
              <li>With delivery partners to complete deliveries</li>
              <li>With payment processors to process payments</li>
              <li>When required by law or to protect our rights</li>
              <li>With your explicit consent</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="rounded-xl border border-gray-700 bg-[#1E1E1E] p-8"
        >
          <div className="mb-4 flex items-center gap-3">
            <Calendar className="h-8 w-8 text-[#648402]" />
            <h2 className="text-2xl font-semibold">Data Retention</h2>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>
              We retain your personal information for as long as necessary to
              provide our services and fulfill the purposes outlined in this
              policy. This typically includes:
            </p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Account information: Until you delete your account</li>
              <li>Order history: For customer service and legal compliance</li>
              <li>Payment information: As required by financial regulations</li>
              <li>Communications: For customer support purposes</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="rounded-xl border border-gray-700 bg-[#1E1E1E] p-8"
        >
          <div className="mb-4 flex items-center gap-3">
            <Mail className="h-8 w-8 text-[#648402]" />
            <h2 className="text-2xl font-semibold">Contact Us</h2>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>
              If you have any questions about this Privacy Policy or our data
              practices, please contact us:
            </p>
            <div className="space-y-2">
              <p>
                <strong>Email:</strong> privacy@oyoeats.lk
              </p>
              <p>
                <strong>Phone:</strong> +94 72 878 7872
              </p>
              <p>
                <strong>Address:</strong> OYO Eats, Nawalapitiya, Sri Lanka
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default PrivacyPolicySection;
