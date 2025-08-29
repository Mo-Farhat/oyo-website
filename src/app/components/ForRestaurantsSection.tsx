"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  FileText,
  X,
  Building2,
  MapPin,
  Phone,
  Clock,
  Users,
  ChefHat,
} from "lucide-react";

const ForRestaurantsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    restaurantName: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    cuisineType: "",
    openingHours: "",
    deliveryRadius: "",
    currentOrders: "",
    partnershipType: "restaurant",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with web3forms
    console.log("Form submitted:", formData);
    // Reset form and close modal
    setFormData({
      restaurantName: "",
      ownerName: "",
      email: "",
      phone: "",
      address: "",
      cuisineType: "",
      openingHours: "",
      deliveryRadius: "",
      currentOrders: "",
      partnershipType: "restaurant",
      message: "",
    });
    setIsModalOpen(false);
  };

  return (
    <>
      <section
        id="for-restaurants"
        className="bg-[#18191B] px-5 py-20 text-white"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-6xl"
        >
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Grow Your Business with OYO Eats
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300">
              Join our growing network of restaurant partners and reach hundreds
              of customers daily. Whether you run a restaurant, café, or food
              stall, OYO Eats helps you expand your reach and increase your
              revenue through our reliable delivery platform.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-xl border border-gray-700 bg-[#1E1E1E] p-6 text-center"
            >
              <Users className="mx-auto mb-4 h-12 w-12 text-[#00D707]" />
              <h3 className="mb-3 text-xl font-semibold">
                Reach More Customers
              </h3>
              <p className="text-gray-400">
                Access our growing customer base of 500+ active users in
                Nawalapitiya
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl border border-gray-700 bg-[#1E1E1E] p-6 text-center"
            >
              <Clock className="mx-auto mb-4 h-12 w-12 text-[#00D707]" />
              <h3 className="mb-3 text-xl font-semibold">24/7 Platform</h3>
              <p className="text-gray-400">
                Your menu is always available to customers, even when you're
                closed
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-xl border border-gray-700 bg-[#1E1E1E] p-6 text-center"
            >
              <ChefHat className="mx-auto mb-4 h-12 w-12 text-[#00D707]" />
              <h3 className="mb-3 text-xl font-semibold">Focus on Food</h3>
              <p className="text-gray-400">
                We handle delivery logistics while you focus on creating amazing
                dishes
              </p>
            </motion.div>
          </div>

          {/* Partnership CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-xl border border-gray-700 bg-[#2E3135] p-8 shadow-lg"
          >
            <h3 className="mb-4 text-center text-2xl font-semibold text-[#00D707]">
              Ready to Partner With Us?
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-center text-gray-300">
              Join 50+ successful restaurant partners in Nawalapitiya. Our team
              will guide you through the onboarding process and help you get
              started within 48 hours.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-lg bg-[#00D707] px-6 py-3 font-semibold text-black shadow transition-colors hover:bg-[#00B300]"
              >
                <FileText className="h-5 w-5" />
                Fill Partnership Form
              </button>
              <a
                href="mailto:partner@oyoeats.com"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-green-700 shadow transition-colors hover:bg-gray-100"
              >
                <Mail className="h-5 w-5" />
                Email Us
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Partner Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-opacity-75 fixed inset-0 z-50 bg-black"
              onClick={() => setIsModalOpen(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-gray-700 bg-[#1E1E1E] shadow-2xl">
                {/* Modal Header */}
                <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-700 bg-[#1E1E1E] p-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      Become a Partner
                    </h2>
                    <p className="mt-1 text-gray-400">
                      Join OYO Eats and grow your business
                    </p>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Modal Body */}
                <form onSubmit={handleSubmit} className="space-y-6 p-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Restaurant Name */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-300">
                        Restaurant Name *
                      </label>
                      <input
                        type="text"
                        name="restaurantName"
                        value={formData.restaurantName}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-gray-600 bg-[#2A2A2A] px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-[#00D707] focus:outline-none"
                        placeholder="Enter restaurant name"
                      />
                    </div>

                    {/* Owner Name */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-300">
                        Owner/Manager Name *
                      </label>
                      <input
                        type="text"
                        name="ownerName"
                        value={formData.ownerName}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-gray-600 bg-[#2A2A2A] px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-[#00D707] focus:outline-none"
                        placeholder="Enter owner name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-gray-600 bg-[#2A2A2A] px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-[#00D707] focus:outline-none"
                        placeholder="Enter email address"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-300">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-gray-600 bg-[#2A2A2A] px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-[#00D707] focus:outline-none"
                        placeholder="Enter phone number"
                      />
                    </div>

                    {/* Address */}
                    <div className="md:col-span-2">
                      <label className="mb-2 block text-sm font-medium text-gray-300">
                        Restaurant Address *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-gray-600 bg-[#2A2A2A] px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-[#00D707] focus:outline-none"
                        placeholder="Enter full address"
                      />
                    </div>

                    {/* Cuisine Type */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-300">
                        Cuisine Type *
                      </label>
                      <select
                        name="cuisineType"
                        value={formData.cuisineType}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-gray-600 bg-[#2A2A2A] px-4 py-3 text-white transition-colors focus:border-[#00D707] focus:outline-none"
                      >
                        <option value="">Select cuisine type</option>
                        <option value="sri-lankan">
                          Sri Lankan Traditional
                        </option>
                        <option value="indian">Indian</option>
                        <option value="chinese">Chinese</option>
                        <option value="fast-food">Fast Food</option>
                        <option value="western">Western</option>
                        <option value="beverages">Beverages & Desserts</option>
                        <option value="mixed">Mixed Cuisine</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Partnership Type */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-300">
                        Partnership Type *
                      </label>
                      <select
                        name="partnershipType"
                        value={formData.partnershipType}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-gray-600 bg-[#2A2A2A] px-4 py-3 text-white transition-colors focus:border-[#00D707] focus:outline-none"
                      >
                        <option value="restaurant">Restaurant</option>
                        <option value="cafe">Café</option>
                        <option value="food-stall">Food Stall</option>
                        <option value="bakery">Bakery</option>
                        <option value="catering">Catering Service</option>
                      </select>
                    </div>

                    {/* Opening Hours */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-300">
                        Opening Hours
                      </label>
                      <input
                        type="text"
                        name="openingHours"
                        value={formData.openingHours}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-600 bg-[#2A2A2A] px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-[#00D707] focus:outline-none"
                        placeholder="e.g., 8:00 AM - 10:00 PM"
                      />
                    </div>

                    {/* Delivery Radius */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-300">
                        Preferred Delivery Radius
                      </label>
                      <select
                        name="deliveryRadius"
                        value={formData.deliveryRadius}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-600 bg-[#2A2A2A] px-4 py-3 text-white transition-colors focus:border-[#00D707] focus:outline-none"
                      >
                        <option value="">Select radius</option>
                        <option value="5km">5 km</option>
                        <option value="10km">10 km</option>
                        <option value="15km">15 km</option>
                        <option value="20km">20 km</option>
                      </select>
                    </div>

                    {/* Current Orders */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-300">
                        Current Daily Orders
                      </label>
                      <select
                        name="currentOrders"
                        value={formData.currentOrders}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-600 bg-[#2A2A2A] px-4 py-3 text-white transition-colors focus:border-[#00D707] focus:outline-none"
                      >
                        <option value="">Select range</option>
                        <option value="0-10">0-10 orders</option>
                        <option value="11-25">11-25 orders</option>
                        <option value="26-50">26-50 orders</option>
                        <option value="50+">50+ orders</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Additional Information
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full resize-none rounded-lg border border-gray-600 bg-[#2A2A2A] px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-[#00D707] focus:outline-none"
                      placeholder="Tell us about your restaurant, special dishes, or any questions you have..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end gap-4 border-t border-gray-700 pt-4">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-6 py-3 text-gray-300 transition-colors hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded-lg bg-[#00D707] px-8 py-3 font-semibold text-black transition-colors hover:bg-[#00B300]"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ForRestaurantsSection;
