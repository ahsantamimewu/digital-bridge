"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Users, Award } from "lucide-react";
import { NavLink } from "react-router-dom";

export const WhoWeAre = () => {
  return (
    <section className="py-28 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Digital Bridge is a premium offshore development company based
                in Bangladesh, connecting global businesses with world-class
                developers in a luxury office environment. We specialize in
                delivering high-quality tech talent and solutions at competitive
                rates.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our modern facilities and client-centric approach ensure
                seamless collaboration across time zones, making us the trusted
                partner for startups and enterprises worldwide.
              </p>
            </div>

            <Button asChild className="bg-primary hover:bg-primary/90">
              <NavLink to="/about" className="group">
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </NavLink>
            </Button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/home/pairprograming.svg"
                alt="Modern Office Environment"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
