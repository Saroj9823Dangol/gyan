"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "The Modern Residence",
    location: "California, USA",
    image: "/images/project-house.png",
    description:
      "A stunning example of contemporary architecture using our Classic Red bricks to create warmth and texture.",
  },
  {
    id: 2,
    title: "Urban Loft Complex",
    location: "New York, NY",
    image: "/images/project-house.png", // Reusing for demo
    description:
      "Industrial chic meets modern luxury. Our Grey Concrete bricks provide the perfect backdrop for this urban oasis.",
  },
  {
    id: 3,
    title: "Community Library",
    location: "London, UK",
    image: "/images/project-house.png", // Reusing for demo
    description:
      "A public space built to last. Heritage Red bricks were chosen to blend seamlessly with the historic neighborhood.",
  },
];

export default function ProjectShowcase() {
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    projectsRef.current.forEach((project) => {
      if (!project) return;

      const image = project.querySelector(".project-image");
      const content = project.querySelector(".project-content");

      if (image) {
        gsap.fromTo(
          image,
          { y: -50 },
          {
            y: 50,
            ease: "none",
            scrollTrigger: {
              trigger: project,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }

      if (content) {
        gsap.fromTo(
          content,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: project,
              start: "top 70%",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="space-y-32">
      {projects.map((project, index) => (
        <div
          key={project.id}
          ref={(el) => {
            projectsRef.current[index] = el;
          }}
          className={`flex flex-col md:flex-row items-center gap-12 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full md:w-3/5 relative h-[400px] md:h-[600px] overflow-hidden rounded-lg">
            <div className="project-image absolute inset-0 w-full h-[120%] -top-[10%]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-500" />
          </div>

          <div className="project-content w-full md:w-2/5">
            <span className="text-red-500 font-bold tracking-widest uppercase text-sm mb-2 block">
              {project.location}
            </span>
            <h2 className="text-4xl font-bold text-white mb-6">
              {project.title}
            </h2>
            <p className="text-neutral-300 text-lg leading-relaxed mb-8">
              {project.description}
            </p>
            <button className="text-white border-b border-red-600 pb-1 hover:text-red-500 transition-colors uppercase tracking-wider text-sm font-bold">
              View Project
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
