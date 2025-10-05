import Link from "next/link";

export default function Footer2() {
  return (
    <footer className="bg-gradient-to-r from-amber-100 via-orange-100 to-rose-100 border-t-4 border-orange-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-5xl">🌻</span>
              <h3 className="text-3xl font-bold text-orange-900" style={{ fontFamily: 'cursive' }}>
                Sunny Days Studio
              </h3>
            </div>
            <p className="text-orange-800 mb-6 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              Where creativity blooms and dreams come to life! Join us for art therapy,
              creative workshops, and joyful celebrations. Let's make something magical together! ✨
            </p>
            <div className="flex gap-4">
              <div className="text-3xl hover:scale-110 transition-transform cursor-pointer">🌸</div>
              <div className="text-3xl hover:scale-110 transition-transform cursor-pointer">🌺</div>
              <div className="text-3xl hover:scale-110 transition-transform cursor-pointer">🌼</div>
              <div className="text-3xl hover:scale-110 transition-transform cursor-pointer">🌷</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-orange-900 mb-6" style={{ fontFamily: 'cursive' }}>
              Quick Links 🌈
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/personal-template-2#about" className="text-orange-700 hover:text-orange-900 transition-colors">
                  About Daisy
                </Link>
              </li>
              <li>
                <Link href="/personal-template-2#offerings" className="text-orange-700 hover:text-orange-900 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/personal-template-2#reviews" className="text-orange-700 hover:text-orange-900 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-orange-700 hover:text-orange-900 transition-colors">
                  Upcoming Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold text-orange-900 mb-6" style={{ fontFamily: 'cursive' }}>
              Get in Touch 💌
            </h4>
            <ul className="space-y-3 text-orange-700">
              <li className="flex items-start gap-2">
                <span>📧</span>
                <span>hello@sunnydaysstudio.com</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📱</span>
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>123 Sunshine Lane<br />Creative City, CC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t-2 border-orange-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-orange-700 text-center" style={{ fontFamily: 'Georgia, serif' }}>
              © 2025 Sunny Days Studio. Spreading sunshine and creativity! 🌻
            </p>
            <div className="flex gap-6 text-sm text-orange-700">
              <Link href="#" className="hover:text-orange-900 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-orange-900 transition-colors">
                Terms of Service
              </Link>
              <Link href="/" className="hover:text-orange-900 transition-colors">
                Back to Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
