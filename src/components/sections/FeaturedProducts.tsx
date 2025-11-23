"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductCard from "@/components/ui/ProductCard";

gsap.registerPlugin(ScrollTrigger);

const featuredProducts = [
  {
    id: 1,
    name: "Classic Red",
    category: "Red",
    image: "/images/product-red.png",
    price: "$0.80 / brick",
  },
  {
    id: 2,
    name: "Urban Grey",
    category: "Grey",
    image: "/images/product-grey.png",
    price: "$0.95 / brick",
  },
  {
    id: 3,
    name: "Heritage Red",
    category: "Red",
    image: "/images/product-red.png",
    price: "$0.90 / brick",
  },
];

export default function FeaturedProducts() {
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
    <section className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-red-500 font-bold tracking-widest uppercase text-sm block mb-2">
              Collection
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Featured Products
            </h2>
          </div>
          <a
            href="/products"
            className="hidden md:block text-white border-b border-red-600 pb-1 hover:text-red-500 transition-colors uppercase tracking-wider text-sm font-bold"
          >
            View All Products
          </a>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a
            href="/products"
            className="text-white border-b border-red-600 pb-1 hover:text-red-500 transition-colors uppercase tracking-wider text-sm font-bold"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
