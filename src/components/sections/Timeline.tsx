"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "1985",
    title: "Foundation",
    description:
      "Started with a single kiln and a vision to build the best bricks in the region.",
  },
  {
    year: "1995",
    title: "Expansion",
    description:
      "Opened two new factories and introduced automated molding technology.",
  },
  {
    year: "2005",
    title: "Green Innovation",
    description:
      "Pioneered eco-friendly firing processes, reducing emissions by 40%.",
  },
  {
    year: "2015",
    title: "Global Reach",
    description:
      "Began exporting to international markets, becoming a global leader in brick manufacturing.",
  },
  {
    year: "2024",
    title: "The Future",
    description:
      "Investing in AI-driven quality control and sustainable materials.",
  },
];

export default function Timeline() {
  const lineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    // Line animation
    gsap.fromTo(
      line,
      { height: "0%" },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: line.parentElement,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      }
    );

    // Items animation
    itemsRef.current.forEach((item, index) => {
      if (!item) return;
      gsap.fromTo(
        item,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto py-10">
      {/* Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-neutral-800">
        <div ref={lineRef} className="w-full bg-red-600" />
      </div>

      {milestones.map((milestone, index) => (
        <div
          key={index}
          ref={(el) => {
            itemsRef.current[index] = el;
          }}
          className={`relative flex items-center justify-between mb-16 ${
            index % 2 === 0 ? "flex-row-reverse" : ""
          }`}
        >
          <div className="w-5/12" />
          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-neutral-950 z-10" />
          <div
            className={`w-5/12 p-6 bg-neutral-900 rounded-lg border border-neutral-800 hover:border-red-600/50 transition-colors ${
              index % 2 === 0 ? "text-right" : "text-left"
            }`}
          >
            <span className="text-red-500 font-bold text-xl block mb-2">
              {milestone.year}
            </span>
            <h3 className="text-xl font-bold text-white mb-2">
              {milestone.title}
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {milestone.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
