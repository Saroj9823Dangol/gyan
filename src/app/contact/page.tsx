import ContactForm from "@/components/sections/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-20">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl md:text-7xl font-bold mb-12 text-center tracking-tighter">
          GET IN <span className="text-red-600">TOUCH</span>
        </h1>
        <p className="text-center text-neutral-400 max-w-2xl mx-auto mb-20 text-lg">
          Ready to start your project? Contact us today for a consultation.
        </p>

        <ContactForm />
      </div>
    </div>
  );
}
