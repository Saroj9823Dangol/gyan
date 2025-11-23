"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Process", href: "/process" },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    // Initial animation
    gsap.fromTo(
      header,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
    );

    // Sticky animation
    /*
    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        if (self.direction === -1) {
          gsap.to(header, { y: 0, duration: 0.3 });
        } else if (self.direction === 1 && self.progress > 0.1) {
          gsap.to(header, { y: -100, duration: 0.3 });
        }
      },
    });
    */
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 bg-neutral-900/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-white tracking-tighter"
        >
          BRICK<span className="text-red-600">FACTORY</span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-neutral-300 hover:text-red-500 transition-colors duration-300 uppercase tracking-wide"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button className="md:hidden text-white">
          {/* Mobile Menu Icon Placeholder */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
