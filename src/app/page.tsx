import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Placeholder for other sections */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            More Content Coming Soon
          </h2>
          <p className="text-neutral-400">
            We are currently building the rest of the site. Stay tuned!
          </p>
        </div>
      </section>
    </div>
  );
}
