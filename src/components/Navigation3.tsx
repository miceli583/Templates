"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation3() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/personal-template-3" className="flex items-center gap-3 group">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 via-orange-500 to-rose-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-rose-500/20">
                SC
              </div>
              <div>
                <div className="text-xl font-bold text-white tracking-tight">
                  Solar Crane
                </div>
                <div className="text-xs text-gray-400">
                  Systems Architect
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/personal-template-3#services"
              className="text-gray-300 hover:text-white font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              href="/personal-template-3#courses"
              className="text-gray-300 hover:text-white font-medium transition-colors"
            >
              Courses
            </Link>
            <Link
              href="/personal-template-3#newsletter"
              className="text-gray-300 hover:text-white font-medium transition-colors"
            >
              Insights
            </Link>
            <Link
              href="/personal-template-3/book"
              className="px-6 py-2.5 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-rose-500/20 transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <Link
                href="/personal-template-3#services"
                className="text-gray-300 hover:text-white font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/personal-template-3#courses"
                className="text-gray-300 hover:text-white font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Courses
              </Link>
              <Link
                href="/personal-template-3#newsletter"
                className="text-gray-300 hover:text-white font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Insights
              </Link>
              <Link
                href="/personal-template-3/book"
                className="px-6 py-3 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-rose-500/20 transition-all text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
