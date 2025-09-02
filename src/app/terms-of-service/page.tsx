"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  AlertTriangle,
  Shield,
  CreditCard,
  Truck,
  Users,
  Gavel,
} from "lucide-react";

const TermsOfServiceSection = () => (
  <section id="terms-of-service" className="bg-[#111113] px-5 py-20 text-white">
    <div className="mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16 text-center"
      >
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">
          Terms of Service
        </h1>
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
            <FileText className="h-8 w-8 text-[#00D707]" />
            <h2 className="text-2xl font-semibold">Acceptance of Terms</h2>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>
              By accessing and using OYO Eats services, you accept and agree to
              be bound by the terms and provision of this agreement. If you do
              not agree to abide by the above, please do not use this service.
            </p>
            <p>
              These terms apply to all users of the service, including without
              limitation users who are browsers, vendors, customers, merchants,
              and/or contributors of content.
            </p>
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
            <Users className="h-8 w-8 text-[#00D707]" />
            <h2 className="text-2xl font-semibold">User Accounts</h2>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>
              When you create an account with us, you must provide accurate and
              complete information:
            </p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                You are responsible for safeguarding your account credentials
              </li>
              <li>You must notify us immediately of any unauthorized use</li>
              <li>You must be at least 18 years old to create an account</li>
              <li>One account per person is allowed</li>
              <li>You are responsible for all activities under your account</li>
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
            <Truck className="h-8 w-8 text-[#00D707]" />
            <h2 className="text-2xl font-semibold">Ordering and Delivery</h2>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>Our food delivery service is subject to the following terms:</p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                Orders are subject to restaurant availability and operating
                hours
              </li>
              <li>
                Delivery times are estimates and may vary based on conditions
              </li>
              <li>We are not responsible for food quality or preparation</li>
              <li>Delivery fees and minimum order requirements apply</li>
              <li>
                Orders may be cancelled if restaurants are unable to fulfill
                them
              </li>
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
            <CreditCard className="h-8 w-8 text-[#00D707]" />
            <h2 className="text-2xl font-semibold">Payment and Billing</h2>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>Payment terms and conditions:</p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>All prices are in Sri Lankan Rupees (LKR)</li>
              <li>Payment is processed at the time of order confirmation</li>
              <li>We accept cash on delivery and digital payments</li>
              <li>Delivery fees are non-refundable</li>
              <li>Prices may change without notice</li>
              <li>Refunds are processed according to our refund policy</li>
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
            <AlertTriangle className="h-8 w-8 text-[#00D707]" />
            <h2 className="text-2xl font-semibold">Prohibited Activities</h2>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>You agree not to engage in any of the following activities:</p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Violating any applicable laws or regulations</li>
              <li>Impersonating another person or entity</li>
              <li>Interfering with the service or other users</li>
              <li>Attempting to gain unauthorized access to our systems</li>
              <li>Using the service for illegal or harmful purposes</li>
              <li>Harassing or threatening other users or staff</li>
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
            <Shield className="h-8 w-8 text-[#00D707]" />
            <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>
              OYO Eats shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, including without
              limitation, loss of profits, data, use, goodwill, or other
              intangible losses, resulting from your use of the service.
            </p>
            <p>
              Our total liability to you for any claims arising from the use of
              our service shall not exceed the amount you paid us in the 12
              months preceding the claim.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="rounded-xl border border-gray-700 bg-[#1E1E1E] p-8"
        >
          <div className="mb-4 flex items-center gap-3">
            <Gavel className="h-8 w-8 text-[#00D707]" />
            <h2 className="text-2xl font-semibold">Governing Law</h2>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>
              These terms shall be governed by and construed in accordance with
              the laws of Sri Lanka. Any disputes arising from these terms or
              the use of our service shall be subject to the exclusive
              jurisdiction of the courts in Nawalapitiya, Sri Lanka.
            </p>
            <p>
              If any provision of these terms is found to be unenforceable, the
              remaining provisions will continue to be valid and enforceable.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="rounded-xl border border-gray-700 bg-[#1E1E1E] p-8"
        >
          <div className="mb-4 flex items-center gap-3">
            <FileText className="h-8 w-8 text-[#00D707]" />
            <h2 className="text-2xl font-semibold">Changes to Terms</h2>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>
              We reserve the right to modify these terms at any time. We will
              notify users of any material changes by posting the new terms on
              our website and updating the "Last updated" date.
            </p>
            <p>
              Your continued use of the service after any changes constitutes
              acceptance of the new terms. If you do not agree to the new terms,
              you should discontinue use of our service.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default TermsOfServiceSection;
