"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function PageLoader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) return;

    const tl = gsap.timeline();

    tl.to(text, {
      opacity: 1,
      duration: 0.5,
      delay: 0.2,
    })
      .to(text, {
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
      })
      .to(container, {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut",
      });
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10000] bg-neutral-950 flex items-center justify-center"
    >
      <div ref={textRef} className="opacity-0">
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
          BRICK<span className="text-red-600">FACTORY</span>
        </h1>
      </div>
    </div>
  );
}
