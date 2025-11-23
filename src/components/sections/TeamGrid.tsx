"use client";

import React from "react";

const team = [
  {
    id: 1,
    name: "John Smith",
    role: "Founder & CEO",
    bio: "With over 40 years in the industry, John's vision drives our commitment to quality.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Head of Production",
    bio: "Sarah ensures that every brick meets our rigorous standards of excellence.",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Lead Architect",
    bio: "Michael works closely with clients to bring their architectural dreams to life.",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Sustainability Director",
    bio: "Emily leads our initiatives to reduce our carbon footprint and promote eco-friendly building.",
  },
];

export default function TeamGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {team.map((member) => (
        <div key={member.id} className="group h-80 [perspective:1000px]">
          <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front */}
            <div className="absolute inset-0 bg-neutral-900 border border-neutral-800 rounded-lg flex flex-col items-center justify-center p-6 [backface-visibility:hidden]">
              <div className="w-32 h-32 bg-neutral-800 rounded-full mb-6 flex items-center justify-center text-4xl">
                👤
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {member.name}
              </h3>
              <p className="text-red-500 font-medium text-sm uppercase tracking-wider">
                {member.role}
              </p>
            </div>

            {/* Back */}
            <div className="absolute inset-0 bg-red-900/90 border border-red-700 rounded-lg flex flex-col items-center justify-center p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <h3 className="text-xl font-bold text-white mb-4">
                {member.name}
              </h3>
              <p className="text-white text-center leading-relaxed">
                {member.bio}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
