"use client";

import Link from "next/link";
import { useState } from "react";

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    timeline: "",
    budget: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest! This is a demo form. In production, this would send your inquiry.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Let's Build Something Together
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Tell me about your project and let's explore how we can create solutions that drive your business forward.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200">
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                placeholder="john@company.com"
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-slate-900 mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                placeholder="Your Company"
              />
            </div>

            {/* Project Type */}
            <div>
              <label htmlFor="projectType" className="block text-sm font-semibold text-slate-900 mb-2">
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all bg-white"
              >
                <option value="">Select a project type</option>
                <option value="automation">Business Automation</option>
                <option value="systems">Custom Systems Development</option>
                <option value="animation">Animation & Motion Design</option>
                <option value="integration">System Integration</option>
                <option value="consulting">Strategy & Consulting</option>
                <option value="course">Course or Training</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Timeline */}
            <div>
              <label htmlFor="timeline" className="block text-sm font-semibold text-slate-900 mb-2">
                Project Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all bg-white"
              >
                <option value="">Select a timeline</option>
                <option value="urgent">ASAP (within 2 weeks)</option>
                <option value="short">1-2 months</option>
                <option value="medium">3-6 months</option>
                <option value="long">6+ months</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            {/* Budget */}
            <div>
              <label htmlFor="budget" className="block text-sm font-semibold text-slate-900 mb-2">
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all bg-white"
              >
                <option value="">Select a budget range</option>
                <option value="small">Under $5,000</option>
                <option value="medium">$5,000 - $15,000</option>
                <option value="large">$15,000 - $50,000</option>
                <option value="enterprise">$50,000+</option>
                <option value="discuss">Let's Discuss</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-slate-900 mb-2">
                Project Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell me about your project, challenges you're facing, and what you're hoping to achieve..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-slate-900 text-white rounded-lg font-bold text-lg hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl"
            >
              Submit Inquiry
            </button>
          </div>
        </form>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-xl border border-slate-200">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Quick Response</h3>
            <p className="text-sm text-slate-600">I'll get back to you within 24 hours</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-slate-200">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Confidential</h3>
            <p className="text-sm text-slate-600">Your information is always secure</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-slate-200">
            <div className="text-3xl mb-3">💼</div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">No Obligation</h3>
            <p className="text-sm text-slate-600">Free initial consultation and quote</p>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            href="/personal-template-3"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
