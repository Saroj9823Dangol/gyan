import Timeline from "@/components/sections/Timeline";
import AboutContent from "@/components/sections/AboutContent";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-20">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl md:text-7xl font-bold mb-12 text-center tracking-tighter">
          OUR <span className="text-red-600">STORY</span>
        </h1>

        <AboutContent />

        <div className="my-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center uppercase tracking-widest">
            History & Milestones
          </h2>
          <Timeline />
        </div>
      </div>
    </div>
  );
}
