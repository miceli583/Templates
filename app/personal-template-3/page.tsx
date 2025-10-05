"use client";

import Link from "next/link";

export default function PersonalTemplate3() {
  const services = [
    {
      icon: "⚡",
      title: "Business Automation",
      description: "Streamline your workflows with intelligent automation systems that save time and reduce errors."
    },
    {
      icon: "🔧",
      title: "Custom Solutions",
      description: "Tailored systems and tools designed specifically for your unique business challenges."
    },
    {
      icon: "🎬",
      title: "Animation & Motion",
      description: "Professional animations that bring your brand and content to life with engaging visuals."
    },
    {
      icon: "📊",
      title: "Systems Architecture",
      description: "Strategic planning and implementation of scalable systems for sustainable growth."
    }
  ];

  const courses = [
    {
      id: 1,
      title: "Automation Fundamentals",
      description: "Master the basics of business process automation and workflow optimization.",
      duration: "4 weeks",
      modules: 12
    },
    {
      id: 2,
      title: "Advanced Systems Building",
      description: "Deep dive into building robust, scalable systems for complex business needs.",
      duration: "6 weeks",
      modules: 18
    },
    {
      id: 3,
      title: "Motion Design Essentials",
      description: "Learn professional animation techniques for web and social media content.",
      duration: "5 weeks",
      modules: 15
    }
  ];

  const newsletters = [
    {
      id: 1,
      title: "The Future of Business Automation",
      date: "March 1, 2025",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    },
    {
      id: 2,
      title: "5 Systems Every Entrepreneur Needs",
      date: "February 15, 2025",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
    {
      id: 3,
      title: "Scaling with Smart Integrations",
      date: "February 1, 2025",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900">
      {/* Minimal animated rays background with crimson accents */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-96 bg-gradient-to-b from-transparent via-amber-500/10 to-transparent rotate-12 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/3 right-1/3 w-1 h-80 bg-gradient-to-b from-transparent via-rose-500/8 to-transparent -rotate-12 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-72 bg-gradient-to-b from-transparent via-orange-400/10 to-transparent rotate-6 animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <div className="mb-6 inline-block">
              <div className="flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-full text-sm font-medium">
                <span className="h-2 w-2 bg-amber-400 rounded-full animate-pulse" />
                Available for Projects
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Build Systems That
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500">
                Scale Your Business
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Custom automation solutions, systems architecture, and visual content that transforms how you work.
              Let's build something remarkable together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/personal-template-3/book"
                className="px-8 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-rose-500/30 transition-all shadow-lg"
              >
                Start a Project
              </Link>
              <Link
                href="/personal-template-3#courses"
                className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-lg font-semibold hover:bg-white/10 hover:border-rose-500/20 transition-all"
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24 bg-gradient-to-br from-gray-900 via-black to-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What I Do</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Comprehensive solutions for modern businesses looking to optimize and scale.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-rose-500/30 transition-all hover:shadow-2xl hover:shadow-rose-500/10"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="relative py-24 bg-gradient-to-br from-black via-gray-950 to-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Online Courses</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Learn at your own pace with comprehensive, practical courses designed for real-world application.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-rose-500/30 transition-all hover:shadow-2xl hover:shadow-rose-500/10"
              >
                {/* Placeholder Video */}
                <div className="relative bg-gradient-to-br from-gray-900 to-black aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-rose-500/10 border border-rose-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-10 h-10 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-sm font-medium">Course Preview</p>
                  </div>
                </div>

                {/* Course Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{course.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{course.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {course.modules} modules
                    </span>
                  </div>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-rose-500/20 transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="relative py-24 bg-gradient-to-br from-gray-950 via-black to-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Latest Insights</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Practical strategies, technical deep-dives, and industry insights delivered regularly.
            </p>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {newsletters.map((article) => (
              <article
                key={article.id}
                className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-rose-500/30 transition-all hover:shadow-2xl hover:shadow-rose-500/10 cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:via-orange-500 group-hover:to-rose-500 transition-all">
                    {article.title}
                  </h3>
                  <span className="text-sm text-gray-500 whitespace-nowrap">{article.date}</span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-4">{article.excerpt}</p>
                <div className="flex items-center gap-2 text-amber-400 group-hover:text-rose-400 font-semibold group-hover:gap-3 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 max-w-2xl mx-auto bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-rose-500/10 border border-rose-500/20 rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights on automation, systems, and business growth delivered to your inbox.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-rose-500/30"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-rose-500/20 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-black via-gray-950 to-gray-900 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            Let's discuss your unique challenges and build custom solutions that drive real results.
          </p>
          <Link
            href="/personal-template-3/book"
            className="inline-block px-10 py-5 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-white rounded-lg font-bold text-lg hover:shadow-3xl hover:shadow-rose-500/30 transition-all shadow-2xl shadow-rose-500/20"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
