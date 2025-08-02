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

export const ServicesSnapshot = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Modern, responsive websites and web applications built with the latest technologies",
      features: ["React/Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile apps that deliver exceptional user experiences",
      features: [
        "React Native",
        "iOS/Android",
        "Flutter",
        "Progressive Web Apps",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      icon: Globe,
      title: "Full-Stack Solutions",
      description:
        "End-to-end development from concept to deployment with scalable architecture",
      features: [
        "API Development",
        "Database Design",
        "Cloud Integration",
        "DevOps",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Database,
      title: "Data Solutions",
      description:
        "Powerful data processing, analytics, and machine learning implementations",
      features: ["Big Data", "Analytics", "ML/AI", "Data Visualization"],
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Shield,
      title: "Security & Testing",
      description:
        "Comprehensive security audits and automated testing for reliable applications",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Automated Testing",
        "Code Review",
      ],
      color: "from-red-500 to-red-600",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Speed up your applications and improve user experience with advanced optimization",
      features: [
        "Performance Tuning",
        "Code Optimization",
        "SEO",
        "Core Web Vitals",
      ],
      color: "from-yellow-500 to-yellow-600",
    },
  ];

  return (
    <section className="py-24  bg-gradient-to-b from-gray-50 to-white">
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-clip-text bg-gradient-to-r from-primary to-primary/70">
            Our Digital Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we provide comprehensive technology
            solutions that drive business growth and digital transformation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
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
                className={`w-14 h-14 mb-6 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.color} shadow-md group-hover:shadow-lg transition-all duration-300`}
              >
                <service.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    whileHover={{ x: 5 }}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary/70 rounded-full mr-3"></div>
                    {feature}
                  </motion.div>
                ))}
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
              Ready to Transform Your Ideas?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise can help you build innovative
              solutions that drive results.
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
