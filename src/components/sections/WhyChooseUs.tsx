"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Premium Quality",
    description:
      "Sourced from the finest clay and fired at optimal temperatures for unmatched durability.",
    icon: "💎",
  },
  {
    title: "Eco-Friendly",
    description:
      "Sustainable manufacturing processes that minimize carbon footprint and waste.",
    icon: "🌱",
  },
  {
    title: "Custom Solutions",
    description:
      "Tailored brick sizes, colors, and textures to meet specific architectural needs.",
    icon: "✨",
  },
];

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    gsap.fromTo(
      container.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="py-24 bg-neutral-900 border-y border-neutral-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-red-500 font-bold tracking-widest uppercase text-sm block mb-2">
            Why Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Building Excellence
          </h2>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-24 h-24 mx-auto bg-neutral-800 rounded-full flex items-center justify-center text-4xl mb-6 group-hover:bg-red-600 transition-colors duration-500 shadow-lg group-hover:shadow-red-600/30">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
