"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Kamal Perera",
    location: "Central Nawalapitiya",
    rating: 5,
    comment:
      "Amazing service! Food arrived hot and fresh in just 20 minutes. The app is so easy to use, and the delivery guy was very polite. Highly recommend!",
  },
  {
    id: 2,
    name: "Nimali Silva",
    location: "Nawalapitiya Suburbs",
    rating: 5,
    comment:
      "Best food delivery app in Nawalapitiya! I love how I can track my order in real-time. The food quality is always excellent and delivery is super fast.",
  },
  {
    id: 3,
    name: "Sunil Fernando",
    location: "Surrounding Village",
    rating: 4,
    comment:
      "Great app for food delivery! Even though I'm in a village, they deliver here. Food arrives fresh and the delivery fees are reasonable. Very satisfied customer!",
  },
  {
    id: 4,
    name: "Priya Weerasinghe",
    location: "Central Nawalapitiya",
    rating: 5,
    comment:
      "Oyo Eats has become my go-to for lunch at work. Quick delivery, fresh food, and excellent customer service. The app interface is user-friendly too!",
  },
  {
    id: 5,
    name: "Ajith Bandara",
    location: "Nawalapitiya Suburbs",
    rating: 5,
    comment:
      "Fantastic service! I ordered late at night and still got my food delivered quickly. The delivery person was very professional. Will definitely use again!",
  },
];

const CustomerReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? "fill-current text-yellow-400" : "text-gray-400"
        }`}
      />
    ));
  };

  return (
    <section className="bg-[#111113] px-5 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Join thousands of satisfied customers who trust Oyo Eats for their
            daily meals
          </p>
        </motion.div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-4 rounded-xl border border-gray-700 bg-[#1E1E1E] px-8 py-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00D707]">4.8</div>
              <div className="text-sm text-gray-400">Average Rating</div>
            </div>
            <div className="h-16 border-l border-gray-600"></div>
            <div className="text-center">
              <div className="mb-2 flex gap-1">{renderStars(5)}</div>
              <div className="text-sm text-gray-400">
                Based on 3000+ reviews
              </div>
            </div>
            <div className="h-16 border-l border-gray-600"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00D707]">98%</div>
              <div className="text-sm text-gray-400">Satisfaction Rate</div>
            </div>
          </div>
        </motion.div>

        {/* Review Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mx-auto max-w-4xl"
        >
          <div className="rounded-xl border border-gray-700 bg-[#1E1E1E] p-8">
            <div className="mb-6 text-center">
              <Quote className="mx-auto mb-4 h-12 w-12 text-[#00D707]" />
              <p className="text-lg leading-relaxed text-gray-300 italic">
                "{reviews[currentReview]?.comment}"
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-semibold text-white">
                    {reviews[currentReview]?.name ?? ""}
                  </div>
                  <div className="text-sm text-gray-400">
                    {reviews[currentReview]?.location ?? ""}
                  </div>
                </div>
              </div>

              <div className="flex gap-1">
                {renderStars(reviews[currentReview]?.rating ?? 0)}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-6 flex cursor-pointer justify-center gap-4">
            <button
              onClick={prevReview}
              className="group cursor-pointer rounded-full border border-gray-700 bg-[#1E1E1E] p-3 transition-colors hover:border-[#00D707]"
            >
              <ChevronLeft className="h-5 w-5 cursor-pointer text-white" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`h-3 w-3 rounded-full transition-colors ${
                    index === currentReview
                      ? "bg-[#00D707]"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextReview}
              className="group cursor-pointer rounded-full border border-gray-700 bg-[#1E1E1E] p-3 transition-colors hover:border-[#00D707]"
            >
              <ChevronRight className="h-5 w-5 cursor-pointer text-white" />
            </button>
          </div>
        </motion.div>

        {/* Review Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          <div className="rounded-xl border border-gray-700 bg-[#1E1E1E] p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-[white]">3000+</div>
            <div className="text-gray-300">Happy Customers</div>
          </div>
          <div className="rounded-xl border border-gray-700 bg-[#1E1E1E] p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-[white]">1000+</div>
            <div className="text-gray-300">Orders Delivered</div>
          </div>
          <div className="rounded-xl border border-gray-700 bg-[#1E1E1E] p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-[white]">25min</div>
            <div className="text-gray-300">Average Delivery</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 rounded-xl border border-[#00D707]/20 bg-gradient-to-r from-[#00D707]/10 to-[#00D707]/5 p-8 text-center"
        >
          <h3 className="mb-2 text-xl font-semibold text-[#00D707]">
            Join Our Happy Customers!
          </h3>
          <p className="mb-4 text-gray-300">
            Download the app today and experience the best food delivery service
            in Nawalapitiya
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-[#00D707] px-6 py-3 font-semibold text-black transition-colors hover:bg-[#00B300]"
            >
              Download for Android
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-900"
            >
              Download for iOS
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerReviewsSection;
