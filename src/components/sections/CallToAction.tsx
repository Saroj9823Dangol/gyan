"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "@/components/ui/MagneticButton";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function CallToAction() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    gsap.fromTo(
      container,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="py-32 bg-neutral-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div
          ref={containerRef}
          className="relative bg-red-600 rounded-2xl p-12 md:p-24 text-center overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
              READY TO BUILD YOUR VISION?
            </h2>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Contact us today to discuss your project requirements and discover
              how our premium bricks can elevate your design.
            </p>

            <Link href="/contact">
              <MagneticButton className="inline-block px-10 py-5 bg-white text-red-600 font-bold rounded-full hover:bg-neutral-100 transition-colors uppercase tracking-wider shadow-xl">
                Get a Quote
              </MagneticButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
