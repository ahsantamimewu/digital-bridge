"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

export const HeroParallax = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-300 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

      {/* Main container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] lg:min-h-[70vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-taskor">
                Bridging Ideas with{" "}
                <span className="text-primary">Technology</span>
                <br />
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed"
            >
              We help startups and enterprises scale faster through embedded
              tech talent, cutting-edge development, and innovative automation
              solutions. Your success is our mission.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <NavLink to="/contact">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </NavLink>

              <NavLink to="/projects">
                <Button
                  variant="outline"
                  size="lg"
                  className="group border-2 border-gray-300 hover:border-primary hover:text-primary transition-all duration-200"
                >
                  <Play className="mr-2 h-4 w-4" />
                  View Our Work
                </Button>
              </NavLink>
            </motion.div>
          </motion.div>

          {/* Right SVG */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl"></div>

              {/* Main SVG */}
              {/* <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <img
                  src="/home/pairprograming.svg"
                  alt="Pair Programming Illustration"
                  className="w-full max-w-lg h-auto drop-shadow-lg"
                />
              </motion.div> */}

              {/* <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute bottom-10 -right-6 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-xl flex items-center justify-center"
              >
                <Play className="w-6 h-6 text-blue-500" />
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
