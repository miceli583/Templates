"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation4() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/community-template" className="flex items-center gap-3 group">
            <div className="flex items-center gap-2">
              <div className="text-4xl">🍄</div>
              <div>
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-teal-600">
                  The Mycocosm
                </div>
                <div className="text-xs text-teal-600">
                  Community Ecosystem
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/community-template#about"
              className="text-emerald-700 hover:text-emerald-900 font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/community-template#team"
              className="text-emerald-700 hover:text-emerald-900 font-medium transition-colors"
            >
              Team
            </Link>
            <Link
              href="/community-template#events"
              className="text-emerald-700 hover:text-emerald-900 font-medium transition-colors"
            >
              Events
            </Link>
            <Link
              href="/community-template#resources"
              className="text-emerald-700 hover:text-emerald-900 font-medium transition-colors"
            >
              Resources
            </Link>
            <button className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all shadow-md">
              Join Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-emerald-700 hover:text-emerald-900"
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
          <div className="md:hidden py-4 border-t border-emerald-200">
            <div className="flex flex-col gap-4">
              <Link
                href="/community-template#about"
                className="text-emerald-700 hover:text-emerald-900 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/community-template#team"
                className="text-emerald-700 hover:text-emerald-900 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Team
              </Link>
              <Link
                href="/community-template#events"
                className="text-emerald-700 hover:text-emerald-900 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/community-template#resources"
                className="text-emerald-700 hover:text-emerald-900 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <button
                className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all text-center shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
