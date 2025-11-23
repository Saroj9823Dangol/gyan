import ProcessFlow from "@/components/sections/ProcessFlow";

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-20">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl md:text-7xl font-bold mb-12 text-center tracking-tighter">
          OUR <span className="text-red-600">PROCESS</span>
        </h1>
        <p className="text-center text-neutral-400 max-w-2xl mx-auto mb-20 text-lg">
          From the earth to your home, every brick goes through a rigorous
          journey of transformation.
        </p>

        <ProcessFlow />
      </div>
    </div>
  );
}
