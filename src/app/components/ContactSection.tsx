"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with web3forms or email service
    console.log("Contact form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="bg-[#111113] px-5 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Contact Us</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Have questions, feedback, or need support? We're here to help! Reach
            out to our team and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="rounded-xl border border-gray-700 bg-[#1E1E1E] p-8">
              <h2 className="mb-6 text-2xl font-semibold text-white">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-lg bg-white/10 p-2">
                    <Mail className="h-6 w-6 text-[#00D707]" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-white">Email</h3>
                    <p className="text-gray-300">support@oyoeats.lk</p>
                    <p className="text-gray-300">partner@oyoeats.lk</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-lg bg-white/10 p-2">
                    <Phone className="h-6 w-6 text-[#00D707]" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-white">Phone</h3>

                    <p className="text-gray-300">+94 72 878 7872 </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-lg bg-white/10 p-2">
                    <MapPin className="h-6 w-6 text-[#00D707]" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-white">Address</h3>
                    <p className="text-gray-300">
                      Oyo Eats
                      <br />
                      Nawalapitiya, Sri Lanka
                      <br />
                      Central Province
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-lg bg-white/10 p-2">
                    <Clock className="h-6 w-6 text-[#00D707]" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-white">
                      Support Hours
                    </h3>
                    <p className="text-gray-300">24/7 Customer Support</p>
                    <p className="text-gray-300">
                      Business Hours: 10:00 AM - 11:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl border border-gray-700 bg-[#1E1E1E] p-8"
          >
            <h2 className="mb-6 text-2xl font-semibold text-white">
              Send us a Message
            </h2>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center"
              >
                <CheckCircle className="mx-auto mb-4 h-16 w-16 text-[#00D707]" />
                <h3 className="mb-2 text-xl font-semibold text-white">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-300">
                  Thank you for contacting us. We'll get back to you within 24
                  hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg border border-gray-600 bg-[#2A2A2A] px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-[#00D707] focus:outline-none"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg border border-gray-600 bg-[#2A2A2A] px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-[#00D707] focus:outline-none"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-gray-600 bg-[#2A2A2A] px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-[#00D707] focus:outline-none"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full resize-none rounded-lg border border-gray-600 bg-[#2A2A2A] px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-[#00D707] focus:outline-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#00D707] px-8 py-3 font-semibold text-black transition-colors hover:bg-[#00B300]"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
