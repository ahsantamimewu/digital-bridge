"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  Smartphone,
  Globe,
  Database,
  Shield,
  Zap,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

export const ServicesSnapshot = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Modern, responsive websites and web apps crafted for performance, beauty, and impact.",
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: "Mobile Development",
      description:
        "Native and cross-platform apps with smooth performance and stunning UI/UX.",
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      title: "Full-Stack Solutions",
      description:
        "End-to-end scalable solutions from concept to global deployment.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "Data Solutions",
      description:
        "Transform raw data into insights with analytics, AI, and visualization.",
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "Security & Testing",
      description:
        "Build with confidence using robust security and thorough testing.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Performance Optimization",
      description:
        "Maximize speed, SEO, and user satisfaction with cutting-edge optimization.",
      icon: <Zap className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Digital Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to launch, we deliver innovative solutions tailored to
            your vision.
          </p>
        </motion.div>

        {/* Grid layout like demo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10 border-t border-neutral-200 dark:border-neutral-800">
          {services.map((service, index) => (
            <Feature key={service.title} {...service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-8 rounded-2xl border border-primary/10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Ideas?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let’s create innovative solutions together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink to="/services">
                <Button variant="outline" size="lg" className="group border-2">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                    Explore All Services
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                </Button>
              </NavLink>
              <NavLink to="/contact">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-primary to-primary/70 hover:from-primary/80 hover:to-primary/90 shadow-lg hover:shadow-primary/30"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </NavLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col border-b border-r border-neutral-200 dark:border-neutral-800 py-10 relative group/feature",
        index % 3 === 0 && "lg:border-l dark:border-neutral-800"
      )}
    >
      {/* Hover overlay */}
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />

      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-primary transition-all duration-200" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
