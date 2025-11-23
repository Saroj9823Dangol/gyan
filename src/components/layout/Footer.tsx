import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link
              href="/"
              className="text-2xl font-bold text-white tracking-tighter mb-4 block"
            >
              BRICK<span className="text-red-600">FACTORY</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Crafting the foundation of modern architecture with timeless
              quality and innovation.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-red-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/process"
                  className="hover:text-red-500 transition-colors"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-red-500 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-red-500 transition-colors"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>123 Brick Lane, Industrial City</li>
              <li>contact@brickfactory.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Social
            </h4>
            <div className="flex space-x-4">
              {/* Social Icons Placeholders */}
              <a href="#" className="hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>
            &copy; {new Date().getFullYear()} Brick Factory. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
