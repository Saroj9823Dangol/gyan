"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import ProductCard from "@/components/ui/ProductCard";

const products = [
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
    name: "Rustic Red",
    category: "Red",
    image: "/images/product-red.png", // Reusing for demo
    price: "$0.85 / brick",
  },
  {
    id: 4,
    name: "Slate Grey",
    category: "Grey",
    image: "/images/product-grey.png", // Reusing for demo
    price: "$1.00 / brick",
  },
  {
    id: 5,
    name: "Heritage Red",
    category: "Red",
    image: "/images/product-red.png", // Reusing for demo
    price: "$0.90 / brick",
  },
  {
    id: 6,
    name: "Concrete Block",
    category: "Grey",
    image: "/images/product-grey.png", // Reusing for demo
    price: "$1.20 / brick",
  },
];

const categories = ["All", "Red", "Grey"];

export default function ProductGallery() {
  const [filter, setFilter] = useState("All");
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProducts =
    filter === "All" ? products : products.filter((p) => p.category === filter);

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }
  }, [filter]);

  return (
    <div>
      {/* Filters */}
      <div className="flex justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full border transition-all duration-300 ${
              filter === cat
                ? "bg-red-600 border-red-600 text-white"
                : "bg-transparent border-neutral-700 text-neutral-400 hover:border-white hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
