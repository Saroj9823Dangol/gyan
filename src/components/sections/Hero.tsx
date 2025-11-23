"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const bg = bgRef.current;
    const text = textRef.current;

    if (!container || !bg || !text) return;

    // Initial Animation
    const tl = gsap.timeline();

    tl.fromTo(
      bg,
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
    ).fromTo(
      text.children,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" },
      "-=0.5"
    );

    // Parallax Effect
    gsap.to(bg, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background Image */}
      <div ref={bgRef} className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Brick Factory Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
      </div>

      {/* Content */}
      <div
        ref={textRef}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <h2 className="text-red-500 font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
          Est. 1985
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tighter leading-tight">
          BUILDING THE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
            FOUNDATION
          </span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Precision-crafted bricks for the modern world. Combining tradition
          with cutting-edge technology to create structures that last a
          lifetime.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-red-600 text-white font-bold rounded-none hover:bg-red-700 transition-colors uppercase tracking-wider">
            Explore Products
          </button>
          <button className="px-8 py-4 border border-white text-white font-bold rounded-none hover:bg-white hover:text-black transition-colors uppercase tracking-wider">
            Our Process
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-8 h-8 opacity-70"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </section>
  );
}
