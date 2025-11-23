"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: 1,
    title: "Sourcing Clay",
    description:
      "We source the finest clay from our sustainable quarries, ensuring the perfect composition for durability and color.",
    icon: "🌍",
  },
  {
    id: 2,
    title: "Shaping & Molding",
    description:
      "The clay is ground, mixed with water, and extruded through precision molds to create the perfect brick shape.",
    icon: "🧱",
  },
  {
    id: 3,
    title: "Firing",
    description:
      "Bricks are fired in our high-tech kilns at over 1000°C, giving them their strength and signature red hue.",
    icon: "🔥",
  },
  {
    id: 4,
    title: "Quality Control",
    description:
      "Every batch undergoes rigorous testing for strength, water absorption, and size consistency.",
    icon: "✅",
  },
  {
    id: 5,
    title: "Shipping",
    description:
      "Carefully packaged and delivered to your construction site, ready to build the future.",
    icon: "🚚",
  },
];

export default function ProcessFlow() {
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    stepsRef.current.forEach((step) => {
      if (!step) return;

      gsap.fromTo(
        step,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative">
      {/* Background Image Parallax Container */}
      <div className="fixed inset-0 z-[-1] opacity-20 pointer-events-none">
        {/* Using the generated image as a subtle background */}
        <Image
          src="/images/process-conveyor.png"
          alt="Process Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-neutral-950/80" />
      </div>

      <div className="space-y-24">
        {steps.map((step, index) => (
          <div
            key={step.id}
            ref={(el) => {
              stepsRef.current[index] = el;
            }}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-32 h-32 md:w-48 md:h-48 bg-neutral-900 rounded-full flex items-center justify-center text-6xl md:text-8xl border-4 border-red-600 shadow-[0_0_30px_rgba(220,38,38,0.3)]">
                {step.icon}
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <span className="text-red-500 font-bold text-lg mb-2 block">
                Step 0{step.id}
              </span>
              <h3 className="text-3xl font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-neutral-300 text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
