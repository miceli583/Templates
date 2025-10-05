"use client";

import Link from "next/link";

export default function CommunityTemplate() {
  const teamMembers = [
    {
      name: "Luna Solaris",
      role: "Holistic Wellness Guide",
      image: "🌙",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      description: "Guiding souls through transformative healing journeys with ancient wisdom and modern practice.",
      templatePath: "/personal-template-1"
    },
    {
      name: "Sunny Days Studio",
      role: "Creative Arts Facilitator",
      image: "🌻",
      gradient: "from-amber-500 via-orange-500 to-rose-500",
      description: "Bringing joy and creativity to families through playful art therapy and workshops.",
      templatePath: "/personal-template-2"
    },
    {
      name: "Solar Crane",
      role: "Systems Architect",
      image: "⚡",
      gradient: "from-amber-500 via-orange-500 to-rose-600",
      description: "Building automated systems and digital infrastructure that empower our community.",
      templatePath: "/personal-template-3"
    }
  ];

  const events = [
    {
      id: 1,
      title: "Full Moon Gathering",
      date: "March 14, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "Community Garden",
      description: "Join us for a monthly celebration under the full moon with meditation, music, and connection.",
      type: "Wellness",
      icon: "🌕"
    },
    {
      id: 2,
      title: "Community Art Day",
      date: "March 16, 2025",
      time: "11:00 AM - 4:00 PM",
      location: "Arts Hall",
      description: "A day of creative expression for all ages. Bring your family and create together!",
      type: "Creative",
      icon: "🎨"
    },
    {
      id: 3,
      title: "Tech Skills Workshop",
      date: "March 20, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Innovation Lab",
      description: "Learn automation basics and digital tools to enhance your personal and professional projects.",
      type: "Tech",
      icon: "💻"
    },
    {
      id: 4,
      title: "Community Potluck",
      date: "March 25, 2025",
      time: "5:00 PM - 8:00 PM",
      location: "Main Hall",
      description: "Share food, stories, and laughter. Bring a dish and connect with your community.",
      type: "Social",
      icon: "🍽️"
    }
  ];

  const values = [
    {
      title: "Connection",
      icon: "🤝",
      description: "We believe in fostering deep, meaningful relationships within our community."
    },
    {
      title: "Growth",
      icon: "🌱",
      description: "Supporting individual and collective evolution through learning and exploration."
    },
    {
      title: "Creativity",
      icon: "✨",
      description: "Celebrating artistic expression and innovative thinking in all its forms."
    },
    {
      title: "Sustainability",
      icon: "🌍",
      description: "Building practices that honor the earth and ensure a thriving future."
    },
    {
      title: "Inclusivity",
      icon: "🌈",
      description: "Creating a welcoming space where all beings are honored and celebrated."
    },
    {
      title: "Wisdom",
      icon: "📚",
      description: "Honoring both ancient knowledge and modern innovation in our practices."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Decorative mycelium-inspired background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-40 right-10 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center gap-3 text-6xl mb-6">
              <span className="animate-pulse">🍄</span>
              <span className="animate-pulse animation-delay-1000">🌿</span>
              <span className="animate-pulse animation-delay-2000">🍄</span>
            </div>
            <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-700 mb-6">
              The Mycocosm
            </h1>
            <p className="text-2xl text-emerald-800 max-w-3xl mx-auto mb-4 leading-relaxed font-light">
              A thriving community ecosystem where wellness, creativity, and innovation grow together
            </p>
            <p className="text-lg text-teal-700 max-w-2xl mx-auto italic">
              "Like mycelium networks that connect the forest, we connect hearts, minds, and spirits"
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="relative py-20 bg-white/60 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl p-10 shadow-xl">
              <div className="text-5xl mb-4">🎯</div>
              <h2 className="text-3xl font-bold text-emerald-900 mb-4">Our Mission</h2>
              <p className="text-emerald-800 leading-relaxed text-lg">
                To cultivate a regenerative community ecosystem where individuals can explore holistic wellness,
                creative expression, and technological empowerment while building meaningful connections.
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-3xl p-10 shadow-xl">
              <div className="text-5xl mb-4">🔮</div>
              <h2 className="text-3xl font-bold text-teal-900 mb-4">Our Vision</h2>
              <p className="text-teal-800 leading-relaxed text-lg">
                A world where community spaces serve as living organisms—interconnected, adaptive, and thriving—
                supporting the evolution of human consciousness and creative potential.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">Our Values</h2>
            <p className="text-lg text-teal-700 max-w-2xl mx-auto">
              The principles that guide our community ecosystem
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02] border-2 border-emerald-200 hover:border-emerald-400"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-3">{value.title}</h3>
                <p className="text-teal-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-emerald-900 mb-6">About The Mycocosm</h2>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border-2 border-teal-200">
            <p className="text-lg text-teal-800 leading-relaxed mb-6">
              The Mycocosm is more than a community—it's a living network inspired by the mycelial connections
              found in nature. Just as fungal networks share nutrients and information beneath the forest floor,
              we create pathways for sharing wisdom, creativity, and support.
            </p>
            <p className="text-lg text-teal-800 leading-relaxed mb-6">
              Founded in 2024, our community brings together practitioners of holistic wellness, creative arts,
              and technological innovation. We believe that true transformation happens at the intersection of
              these domains, where ancient wisdom meets modern tools, and individual growth supports collective evolution.
            </p>
            <p className="text-lg text-teal-800 leading-relaxed">
              Whether you're seeking healing, creative expression, technical skills, or simply connection,
              The Mycocosm offers a safe and nourishing space to explore, learn, and grow alongside kindred spirits.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="relative py-20 bg-white/60 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-teal-700 max-w-2xl mx-auto">
              The diverse practitioners who make The Mycocosm thrive
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] border-2 border-teal-200 hover:border-teal-400"
              >
                {/* Member Image */}
                <div className={`relative h-64 bg-gradient-to-br ${member.gradient} flex items-center justify-center`}>
                  <div className="text-9xl">{member.image}</div>
                </div>

                {/* Member Info */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-emerald-900 mb-2">{member.name}</h3>
                  <p className="text-teal-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-teal-700 leading-relaxed mb-6">{member.description}</p>
                  <Link
                    href={member.templatePath}
                    className="inline-block w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold text-center hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl"
                  >
                    View {member.name.split(' ')[0]}'s Page →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Calendar */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">Community Events Calendar</h2>
            <p className="text-lg text-teal-700 max-w-2xl mx-auto">
              Upcoming gatherings, workshops, and celebrations
            </p>
          </div>

          {/* Visual Calendar */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-12 border-2 border-emerald-200">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-emerald-900 text-center mb-2">March 2025</h3>
              <p className="text-center text-teal-600">🍄 Marked days have community events</p>
            </div>

            {/* Calendar Grid */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6">
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center text-sm font-bold text-emerald-900 py-2">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {/* Empty cells for days before month starts (March 2025 starts on Saturday) */}
                {[...Array(6)].map((_, i) => (
                  <div key={`empty-${i}`} className="aspect-square" />
                ))}
                {/* Days of the month */}
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
                  const hasEvent = [14, 16, 20, 25].includes(day);
                  const eventIcons = {
                    14: '🌕',
                    16: '🎨',
                    20: '💻',
                    25: '🍽️'
                  };

                  return (
                    <div
                      key={day}
                      className={`aspect-square rounded-xl flex flex-col items-center justify-center text-sm font-medium transition-all ${
                        hasEvent
                          ? 'bg-gradient-to-br from-emerald-400 to-teal-400 text-white shadow-lg hover:shadow-xl cursor-pointer hover:scale-105'
                          : 'bg-white/70 text-emerald-800 hover:bg-white'
                      }`}
                    >
                      <span className="text-base">{day}</span>
                      {hasEvent && (
                        <span className="text-xl mt-1">{eventIcons[day as keyof typeof eventIcons]}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-teal-700">
                Click on event dates below to see details and RSVP
              </p>
            </div>
          </div>

          {/* Event List */}
          <div className="space-y-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-emerald-200 hover:border-emerald-400"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Event Icon */}
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-2xl flex items-center justify-center text-4xl shadow-lg">
                    {event.icon}
                  </div>

                  {/* Event Details */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <h3 className="text-2xl font-bold text-emerald-900">{event.title}</h3>
                      <span className="bg-gradient-to-r from-emerald-200 to-teal-200 px-4 py-1 rounded-full text-sm font-semibold text-emerald-900">
                        {event.type}
                      </span>
                    </div>
                    <div className="space-y-2 mb-4">
                      <p className="text-teal-700 font-semibold">📅 {event.date}</p>
                      <p className="text-teal-700 font-semibold">⏰ {event.time}</p>
                      <p className="text-teal-700 font-semibold">📍 {event.location}</p>
                    </div>
                    <p className="text-teal-800 leading-relaxed mb-6">{event.description}</p>
                    <button className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg">
                      RSVP for Event
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="relative py-20 bg-white/60 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">Community Resources</h2>
            <p className="text-lg text-teal-700 max-w-2xl mx-auto">
              Tools, guides, and spaces to support your journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center border-2 border-emerald-200">
              <div className="text-5xl mb-3">📖</div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Library</h3>
              <p className="text-teal-700 text-sm">Access our collection of books and resources</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center border-2 border-emerald-200">
              <div className="text-5xl mb-3">💬</div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Forums</h3>
              <p className="text-teal-700 text-sm">Connect with members online anytime</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center border-2 border-emerald-200">
              <div className="text-5xl mb-3">🏡</div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Spaces</h3>
              <p className="text-teal-700 text-sm">Book our community rooms and gardens</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center border-2 border-emerald-200">
              <div className="text-5xl mb-3">🎓</div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Learning Hub</h3>
              <p className="text-teal-700 text-sm">Courses, workshops, and skill-shares</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🍄</div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Join Our Growing Community
          </h2>
          <p className="text-2xl text-emerald-50 mb-10 leading-relaxed">
            Become part of The Mycocosm and connect with a network of conscious, creative beings.
          </p>
          <button className="px-12 py-5 bg-white text-emerald-700 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all shadow-2xl hover:shadow-3xl hover:scale-105">
            Become a Member
          </button>
        </div>
      </section>
    </div>
  );
}
