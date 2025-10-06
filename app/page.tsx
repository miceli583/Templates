import Link from "next/link";

export default function HomePage() {
  const templates = [
    {
      id: "personal-1",
      name: "Personal Template 1",
      description: "Holistic wellness and healing coach template with booking system, events calendar, and client testimonials",
      category: "Wellness & Coaching",
      features: [
        "1-on-1 Booking System",
        "Group Events Calendar",
        "Client Testimonials",
        "Service Offerings Display",
        "T3 Stack (Next.js, TypeScript, tRPC, Prisma)"
      ],
      image: "🌙",
      gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
      accentColor: "purple",
      path: "/personal-template-1",
      hasNavigation: true
    },
    {
      id: "personal-2",
      name: "Personal Template 2",
      description: "Warm and playful creative studio template with sunflower aesthetics, cursive fonts, and feminine charm",
      category: "Creative & Arts",
      features: [
        "Art Therapy Services",
        "Kids Workshops",
        "Creative Coaching",
        "Celebration Events",
        "Warm Sunflower Aesthetic"
      ],
      image: "🌻",
      gradient: "from-amber-500/20 via-orange-500/20 to-rose-500/20",
      accentColor: "amber",
      path: "/personal-template-2",
      hasNavigation: true
    },
    {
      id: "personal-3",
      name: "Personal Template 3",
      description: "Minimal tech-forward template for personal guides, systems builders, and automation specialists",
      category: "Tech & Business",
      features: [
        "Business Automation Services",
        "Course Modules with Video Placeholders",
        "Newsletter & Insights",
        "Custom Solutions Showcase",
        "Clean Minimal Design"
      ],
      image: "⚡",
      gradient: "from-slate-500/20 via-zinc-500/20 to-gray-500/20",
      accentColor: "slate",
      path: "/personal-template-3",
      hasNavigation: true
    },
    {
      id: "community-1",
      name: "The Mycocosm",
      description: "Community platform inspired by mycelial networks, featuring team profiles, events calendar, and values showcase",
      category: "Community",
      features: [
        "Community Events Calendar",
        "Mission, Vision & Values",
        "Team Member Profiles with Links",
        "Resource Hub",
        "Nature-Inspired Design"
      ],
      image: "🍄",
      gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
      accentColor: "emerald",
      path: "/community-template",
      hasNavigation: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      {/* Animated background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-600/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-600/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Header */}
      <header className="relative border-b border-white/10 backdrop-blur-xl bg-white/5">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Template Gallery
            </h1>
          </div>
          <p className="text-gray-400 text-lg">
            Premium website templates crafted with modern technologies
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-white">4</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Active Templates</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-white">4</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Categories</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Modern Stack</div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {templates.map((template) => (
            <div
              key={template.id}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 transition-all duration-500 hover:scale-[1.02] hover:border-white/40 flex flex-col"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-purple-500/10 transition-all duration-500 rounded-2xl" />

              {/* Template Preview */}
              <div className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${template.gradient} border-b border-white/10`}>
                <div className="absolute inset-0 bg-black/20" />
                <span className="relative text-7xl drop-shadow-2xl">{template.image}</span>
              </div>

              {/* Template Info */}
              <div className="relative p-6 flex flex-col flex-1">
                <div className="mb-3">
                  <h2 className="text-lg font-bold text-white leading-tight mb-2">
                    {template.name}
                  </h2>
                  <span className={`inline-block rounded-full bg-gradient-to-r from-${template.accentColor}-500/20 to-${template.accentColor}-600/20 border border-${template.accentColor}-500/30 px-2 py-1 text-xs font-semibold text-white`}>
                    {template.category}
                  </span>
                </div>

                <p className="mb-4 text-xs text-gray-400 leading-relaxed flex-1">
                  {template.description}
                </p>

                {template.features.length > 0 && (
                  <div className="mb-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Key Features
                    </p>
                    <ul className="space-y-1.5">
                      {template.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-xs text-gray-300">
                          <span className="mr-2 mt-0.5 text-purple-400">✓</span>
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                      {template.features.length > 3 && (
                        <li className="text-xs text-gray-500">
                          + {template.features.length - 3} more
                        </li>
                      )}
                    </ul>
                  </div>
                )}

                <div className="mt-auto">
                  <Link
                    href={template.path}
                    className="group/btn block w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2.5 text-center text-xs font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-xl hover:shadow-purple-500/40 hover:scale-[1.02]"
                  >
                    <span className="flex items-center justify-center gap-2">
                      View Template
                      <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-20 text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <p className="text-sm text-gray-300">
              All templates built with modern technologies and best practices
            </p>
          </div>
          <p className="text-sm text-gray-500">
            Click on a template to explore its features and preview the design
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/10 bg-white/5 backdrop-blur-xl mt-20">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-gray-500">
            <p>Premium Templates • Modern Stack • Production Ready</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
