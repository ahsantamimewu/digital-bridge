"use client";
import React from "react";
import { motion } from "framer-motion";
import { HeroParallax } from "@/components/Home/hero-parallax";
import { IllustrationsSection } from "@/components/Home/IllustrationsSection";
import { WhoWeAre } from "@/components/Home/WhoWeAre";
import { ServicesSnapshot } from "@/components/Home/ServicesSnapshot";
import { WhyChooseUs } from "@/components/Home/WhyChooseUs";
// import { CaseStudiesMetrics } from "@/components/Home/CaseStudiesMetrics";
import Testimonials from "@/components/Home/Testimonials";

const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
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
