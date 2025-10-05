"use client";

import { useState } from "react";
import Link from "next/link";

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for booking! We'll be in touch soon! 🌻");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 py-20">
      {/* Decorative elements */}
      <div className="fixed top-20 right-20 text-7xl opacity-10 animate-spin-slow">🌻</div>
      <div className="fixed bottom-20 left-20 text-6xl opacity-10 animate-spin-slow">🌸</div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center gap-2 text-4xl mb-4">
            <span className="animate-bounce">🎨</span>
            <span className="animate-bounce delay-100">🌈</span>
            <span className="animate-bounce delay-200">✨</span>
          </div>
          <h1 className="text-5xl font-bold text-orange-900 mb-4" style={{ fontFamily: 'cursive' }}>
            Book Your Creative Session! 🌻
          </h1>
          <p className="text-xl text-orange-700" style={{ fontFamily: 'Georgia, serif' }}>
            Let's create something magical together! Fill out the form below and
            I'll get back to you with sunshine and excitement! ☀️
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border-4 border-orange-200">
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-lg font-semibold text-orange-900 mb-2" style={{ fontFamily: 'cursive' }}>
                Your Name 💛
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-2xl border-2 border-orange-200 px-6 py-4 text-orange-900 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
                placeholder="What should I call you?"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg font-semibold text-orange-900 mb-2" style={{ fontFamily: 'cursive' }}>
                Email Address 📧
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-2xl border-2 border-orange-200 px-6 py-4 text-orange-900 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-lg font-semibold text-orange-900 mb-2" style={{ fontFamily: 'cursive' }}>
                Phone Number 📱
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full rounded-2xl border-2 border-orange-200 px-6 py-4 text-orange-900 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-lg font-semibold text-orange-900 mb-2" style={{ fontFamily: 'cursive' }}>
                What creative adventure are you interested in? 🎨
              </label>
              <select
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full rounded-2xl border-2 border-orange-200 px-6 py-4 text-orange-900 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
              >
                <option value="">Choose your service...</option>
                <option value="art-therapy">🎨 Art Therapy Session</option>
                <option value="creative-coaching">🌈 Creative Coaching</option>
                <option value="kids-workshop">🎪 Kids Workshop</option>
                <option value="celebration">🎉 Special Celebration</option>
                <option value="group-session">✨ Group Session</option>
                <option value="family-time">💫 Family Art Time</option>
              </select>
            </div>

            {/* Preferred Date */}
            <div>
              <label className="block text-lg font-semibold text-orange-900 mb-2" style={{ fontFamily: 'cursive' }}>
                When would you like to meet? 📅
              </label>
              <input
                type="date"
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full rounded-2xl border-2 border-orange-200 px-6 py-4 text-orange-900 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-lg font-semibold text-orange-900 mb-2" style={{ fontFamily: 'cursive' }}>
                Tell me about your creative dreams! ✨
              </label>
              <textarea
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-2xl border-2 border-orange-200 px-6 py-4 text-orange-900 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
                placeholder="What would you like to create? What are you hoping to explore? Share anything that feels important!"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 px-12 py-6 text-2xl font-bold text-white shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
              style={{ fontFamily: 'cursive' }}
            >
              Let's Create Together! 🌻
            </button>
          </div>
        </form>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">⏰</div>
            <h3 className="text-xl font-bold text-orange-900 mb-2" style={{ fontFamily: 'cursive' }}>
              Quick Response!
            </h3>
            <p className="text-orange-800" style={{ fontFamily: 'Georgia, serif' }}>
              I'll get back to you within 24 hours with a big smile! 😊
            </p>
          </div>
          <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">💌</div>
            <h3 className="text-xl font-bold text-orange-900 mb-2" style={{ fontFamily: 'cursive' }}>
              Flexible Scheduling
            </h3>
            <p className="text-orange-800" style={{ fontFamily: 'Georgia, serif' }}>
              We'll find the perfect time that works for your beautiful life! 🌈
            </p>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            href="/personal-template-2"
            className="inline-flex items-center gap-2 text-lg text-orange-700 hover:text-orange-900 transition-colors"
            style={{ fontFamily: 'cursive' }}
          >
            <span>←</span> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
