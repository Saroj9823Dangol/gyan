"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutContent() {
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
    <div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
    >
      <div>
        <h2 className="text-3xl font-bold mb-6 text-white">
          Building Stronger Communities
        </h2>
        <p className="text-neutral-300 mb-4 leading-relaxed">
          At Brick Factory, we believe that every brick tells a story. Since our
          inception, we have been dedicated to producing high-quality, durable,
          and sustainable building materials that stand the test of time.
        </p>
        <p className="text-neutral-300 leading-relaxed">
          Our mission is to empower architects, builders, and homeowners to
          create structures that are not only functional but also beautiful and
          environmentally responsible.
        </p>
      </div>
      <div className="relative h-64 md:h-96 bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800">
        {/* Placeholder for About Image */}
        <div className="absolute inset-0 flex items-center justify-center text-neutral-600">
          [About Image Placeholder]
        </div>
      </div>
    </div>
  );
}
