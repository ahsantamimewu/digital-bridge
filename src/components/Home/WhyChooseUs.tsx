"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Clock,
  DollarSign,
  Users,
  Shield,
  Zap,
  Trophy,
  Globe,
  HeadphonesIcon,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export const WhyChooseUs = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Cost-Effective Solutions",
      description:
        "Get premium development services at 40-60% lower cost compared to local hiring, without compromising on quality.",
      stats: "40-60% Cost Savings",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Clock,
      title: "Faster Time-to-Market",
      description:
        "Our agile methodology and dedicated teams ensure rapid development cycles and quicker product launches.",
      stats: "50% Faster Delivery",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Work with senior developers, designers, and project managers with 5+ years of experience in cutting-edge technologies.",
      stats: "5+ Years Average Experience",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Rigorous testing, code reviews, and quality gates ensure bug-free, secure, and scalable applications.",
      stats: "99.9% Uptime Guarantee",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Globe,
      title: "Global Communication",
      description:
        "Seamless collaboration across time zones with English-fluent teams and modern communication tools.",
      stats: "24/7 Communication",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Zap,
      title: "Cutting-Edge Technology",
      description:
        "Stay ahead with the latest frameworks, tools, and best practices in modern software development.",
      stats: "Latest Tech Stack",
      color: "from-indigo-500 to-indigo-600",
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
            Our Advantages
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-clip-text bg-gradient-to-r from-primary to-primary/70">
            Why Choose Digital Bridge?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise, cost efficiency, and exceptional
            service to deliver outstanding results for businesses worldwide.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-100 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              <div
                className={`w-14 h-14 mb-6 rounded-xl flex items-center justify-center bg-gradient-to-br ${benefit.color} shadow-md group-hover:shadow-lg transition-all duration-300`}
              >
                <benefit.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {benefit.description}
              </p>

              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 text-primary text-sm font-medium border border-primary/10">
                {benefit.stats}
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-8 rounded-2xl backdrop-blur-sm border border-primary/10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Experience the Digital Bridge Advantage
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their
              businesses with our premium development services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink to="/about">
                <Button variant="outline" size="lg" className="group border-2">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                    Learn More About Us
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                </Button>
              </NavLink>
              <NavLink to="/contact">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-primary to-primary/70 hover:from-primary/80 hover:to-primary/90 shadow-lg hover:shadow-primary/30"
                >
                  Start Your Project Today
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
