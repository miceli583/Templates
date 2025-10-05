"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary-600">
              Luna Solaris
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/#about"
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                About
              </Link>
              <Link
                href="/#offerings"
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                Offerings
              </Link>
              <Link
                href="/#transformations"
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                Transformations
              </Link>
              <Link
                href="/#reviews"
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                Reviews
              </Link>
              <Link
                href="/events"
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                Group Events
              </Link>
              <Link
                href="/book"
                className="rounded-full bg-primary-600 px-6 py-2 text-white hover:bg-primary-700 transition-colors"
              >
                Book Session
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-primary-600"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <Link
              href="/#about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#offerings"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Offerings
            </Link>
            <Link
              href="/#transformations"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Transformations
            </Link>
            <Link
              href="/#reviews"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Reviews
            </Link>
            <Link
              href="/events"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Group Events
            </Link>
            <Link
              href="/book"
              className="block rounded-md bg-primary-600 px-3 py-2 text-base font-medium text-white hover:bg-primary-700"
              onClick={() => setIsOpen(false)}
            >
              Book Session
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
