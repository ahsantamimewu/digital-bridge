"use client";
import React from "react";
import { motion } from "framer-motion";
import { HeroParallax } from "@/components/Home/hero-parallax";
import { WhoWeAre } from "@/components/Home/WhoWeAre";
import { ServicesSnapshot } from "@/components/Home/ServicesSnapshot";
import { WhyChooseUs } from "@/components/Home/WhyChooseUs";
// import { CaseStudiesMetrics } from "@/components/Home/CaseStudiesMetrics";
import Testimonials from "@/components/Home/Testimonials";

const products = [
  {
    title: "Moonbeam",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },
  {
    title: "Editorially",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
  {
    title: "Algochurn",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroParallax products={products} />

      {/* Who We Are Section */}
      <WhoWeAre />

      {/* Services Snapshot */}
      <ServicesSnapshot />

      {/* Why Choose Us / Benefits */}
      <WhyChooseUs />

      {/* Case Studies & Success Metrics */}
      {/* <CaseStudiesMetrics /> */}

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
}
