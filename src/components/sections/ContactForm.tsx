"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [focused, setFocused] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFocus = (name: string) => setFocused(name);
  const handleBlur = () => setFocused(null);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
        <div className="relative">
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-transparent border-b-2 border-neutral-700 py-4 text-white focus:outline-none focus:border-red-600 transition-colors peer"
            placeholder=" "
            onFocus={() => handleFocus("name")}
            onBlur={handleBlur}
          />
          <label
            htmlFor="name"
            className={`absolute left-0 top-4 text-neutral-500 transition-all duration-300 pointer-events-none ${
              focused === "name" || formData.name
                ? "-top-6 text-xs text-red-500"
                : ""
            } peer-focus:-top-6 peer-focus:text-xs peer-focus:text-red-500`}
          >
            Your Name
          </label>
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent border-b-2 border-neutral-700 py-4 text-white focus:outline-none focus:border-red-600 transition-colors peer"
            placeholder=" "
            onFocus={() => handleFocus("email")}
            onBlur={handleBlur}
          />
          <label
            htmlFor="email"
            className={`absolute left-0 top-4 text-neutral-500 transition-all duration-300 pointer-events-none ${
              focused === "email" || formData.email
                ? "-top-6 text-xs text-red-500"
                : ""
            } peer-focus:-top-6 peer-focus:text-xs peer-focus:text-red-500`}
          >
            Email Address
          </label>
        </div>

        <div className="relative">
          <textarea
            name="message"
            id="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-transparent border-b-2 border-neutral-700 py-4 text-white focus:outline-none focus:border-red-600 transition-colors peer resize-none"
            placeholder=" "
            onFocus={() => handleFocus("message")}
            onBlur={handleBlur}
          />
          <label
            htmlFor="message"
            className={`absolute left-0 top-4 text-neutral-500 transition-all duration-300 pointer-events-none ${
              focused === "message" || formData.message
                ? "-top-6 text-xs text-red-500"
                : ""
            } peer-focus:-top-6 peer-focus:text-xs peer-focus:text-red-500`}
          >
            Message
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-red-600 text-white font-bold uppercase tracking-widest hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-red-600/20"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
