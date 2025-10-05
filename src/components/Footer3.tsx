import Link from "next/link";

export default function Footer3() {
  return (
    <footer className="bg-black border-t border-white/10 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 via-orange-500 to-rose-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-rose-500/20">
                SC
              </div>
              <div>
                <div className="text-xl font-bold">Solar Crane</div>
                <div className="text-sm text-gray-400">Systems Architect</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Building custom automation solutions and systems that help businesses scale efficiently.
              Let's create something remarkable together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link href="/personal-template-3#services" className="block text-gray-400 hover:text-amber-400 transition-colors">
                Services
              </Link>
              <Link href="/personal-template-3#courses" className="block text-gray-400 hover:text-amber-400 transition-colors">
                Courses
              </Link>
              <Link href="/personal-template-3#newsletter" className="block text-gray-400 hover:text-amber-400 transition-colors">
                Insights
              </Link>
              <Link href="/personal-template-3/book" className="block text-gray-400 hover:text-amber-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-amber-400 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="block text-gray-400 hover:text-amber-400 transition-colors">
                Twitter
              </a>
              <a href="#" className="block text-gray-400 hover:text-amber-400 transition-colors">
                GitHub
              </a>
              <a href="#" className="block text-gray-400 hover:text-amber-400 transition-colors">
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Solar Crane. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
