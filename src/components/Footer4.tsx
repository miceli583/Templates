import Link from "next/link";

export default function Footer4() {
  return (
    <footer className="bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-4xl">🍄</div>
              <div>
                <div className="text-2xl font-bold">The Mycocosm</div>
                <div className="text-sm text-emerald-300">Community Ecosystem</div>
              </div>
            </div>
            <p className="text-emerald-200 leading-relaxed max-w-md">
              A thriving community network connecting wellness, creativity, and innovation.
              Growing together like mycelium beneath the forest floor.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Explore</h3>
            <div className="space-y-3">
              <Link href="/community-template#about" className="block text-emerald-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/community-template#team" className="block text-emerald-300 hover:text-white transition-colors">
                Meet the Team
              </Link>
              <Link href="/community-template#events" className="block text-emerald-300 hover:text-white transition-colors">
                Events
              </Link>
              <Link href="/community-template#resources" className="block text-emerald-300 hover:text-white transition-colors">
                Resources
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="space-y-3">
              <a href="#" className="block text-emerald-300 hover:text-white transition-colors">
                Community Forum
              </a>
              <a href="#" className="block text-emerald-300 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="block text-emerald-300 hover:text-white transition-colors">
                Newsletter
              </a>
              <a href="#" className="block text-emerald-300 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-emerald-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-emerald-300 text-sm">
              © {new Date().getFullYear()} The Mycocosm. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-emerald-300">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
