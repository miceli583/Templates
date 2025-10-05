"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-amber-100 via-orange-100 to-rose-100 backdrop-blur-lg shadow-lg border-b-4 border-orange-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/personal-template-2" className="flex items-center gap-3 group">
            <div className="text-5xl group-hover:rotate-12 transition-transform">🌻</div>
            <span className="text-3xl font-bold text-orange-900" style={{ fontFamily: 'cursive' }}>
              Sunny Days Studio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/personal-template-2#about"
              className="text-lg font-semibold text-orange-800 hover:text-orange-600 transition-colors"
              style={{ fontFamily: 'cursive' }}
            >
              About ✨
            </Link>
            <Link
              href="/personal-template-2#offerings"
              className="text-lg font-semibold text-orange-800 hover:text-orange-600 transition-colors"
              style={{ fontFamily: 'cursive' }}
            >
              Services 🎨
            </Link>
            <Link
              href="/personal-template-2#reviews"
              className="text-lg font-semibold text-orange-800 hover:text-orange-600 transition-colors"
              style={{ fontFamily: 'cursive' }}
            >
              Reviews 💛
            </Link>
            <Link
              href="/personal-template-2/events"
              className="text-lg font-semibold text-orange-800 hover:text-orange-600 transition-colors"
              style={{ fontFamily: 'cursive' }}
            >
              Events 🎉
            </Link>
            <Link
              href="/personal-template-2/book"
              className="rounded-full bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 px-6 py-3 text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
              style={{ fontFamily: 'cursive' }}
            >
              Book Now! 🌈
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden rounded-lg bg-orange-200 p-2 text-orange-900 hover:bg-orange-300"
          >
            <span className="text-2xl">{isMenuOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 space-y-4">
            <Link
              href="/personal-template-2#about"
              className="block text-lg font-semibold text-orange-800 hover:text-orange-600 py-2"
              style={{ fontFamily: 'cursive' }}
              onClick={() => setIsMenuOpen(false)}
            >
              About ✨
            </Link>
            <Link
              href="/personal-template-2#offerings"
              className="block text-lg font-semibold text-orange-800 hover:text-orange-600 py-2"
              style={{ fontFamily: 'cursive' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Services 🎨
            </Link>
            <Link
              href="/personal-template-2#reviews"
              className="block text-lg font-semibold text-orange-800 hover:text-orange-600 py-2"
              style={{ fontFamily: 'cursive' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews 💛
            </Link>
            <Link
              href="/personal-template-2/events"
              className="block text-lg font-semibold text-orange-800 hover:text-orange-600 py-2"
              style={{ fontFamily: 'cursive' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Events 🎉
            </Link>
            <Link
              href="/personal-template-2/book"
              className="block rounded-full bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 px-6 py-3 text-lg font-bold text-white text-center shadow-lg"
              style={{ fontFamily: 'cursive' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now! 🌈
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
