"use client";

import Link from "next/link";

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Family Art Day",
      date: "Saturday, March 15, 2025",
      time: "10:00 AM - 2:00 PM",
      description: "A magical day of creative fun for the whole family! Paint, craft, and create beautiful memories together.",
      spots: "8 spots left",
      emoji: "🎨",
      color: "from-amber-200 to-orange-200"
    },
    {
      id: 2,
      title: "Kids Creative Workshop",
      date: "Wednesday, March 20, 2025",
      time: "3:30 PM - 5:00 PM",
      description: "Little artists explore messy art, storytelling, and imaginative play in this fun-filled workshop!",
      spots: "5 spots left",
      emoji: "🌈",
      color: "from-rose-200 to-pink-200"
    },
    {
      id: 3,
      title: "Spring Flower Art Class",
      date: "Saturday, March 22, 2025",
      time: "1:00 PM - 4:00 PM",
      description: "Celebrate spring by creating beautiful flower art! Learn watercolor techniques while having a blast.",
      spots: "12 spots left",
      emoji: "🌸",
      color: "from-yellow-200 to-amber-200"
    },
    {
      id: 4,
      title: "Teen Expression Group",
      date: "Friday, March 28, 2025",
      time: "4:00 PM - 6:00 PM",
      description: "A safe, creative space for teens to express themselves through art and find their unique voice.",
      spots: "6 spots left",
      emoji: "✨",
      color: "from-purple-200 to-pink-200"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 py-20">
      {/* Decorative elements */}
      <div className="fixed top-10 right-10 text-7xl opacity-10 animate-spin-slow">🌻</div>
      <div className="fixed bottom-10 left-10 text-6xl opacity-10 animate-spin-slow">🎉</div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center gap-3 text-5xl mb-6">
            <span className="animate-bounce">🎪</span>
            <span className="animate-bounce delay-100">🌈</span>
            <span className="animate-bounce delay-200">🎨</span>
          </div>
          <h1 className="text-6xl font-bold text-orange-900 mb-6" style={{ fontFamily: 'cursive' }}>
            Upcoming Events & Workshops! 🎉
          </h1>
          <p className="text-2xl text-orange-700 max-w-3xl mx-auto" style={{ fontFamily: 'Georgia, serif' }}>
            Join us for creative adventures, joyful gatherings, and magical moments!
            Each event is designed with love and sprinkled with sunshine! ☀️
          </p>
        </div>

        {/* Calendar Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 mb-12 border-4 border-orange-200">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-orange-900 mb-4" style={{ fontFamily: 'cursive' }}>
              March 2025 Calendar 📅
            </h2>
            <p className="text-lg text-orange-700" style={{ fontFamily: 'Georgia, serif' }}>
              Mark your calendars for these wonderful creative gatherings!
            </p>
          </div>

          {/* Simple Calendar Visual */}
          <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-7 gap-4 text-center">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="text-lg font-bold text-orange-900" style={{ fontFamily: 'cursive' }}>
                  {day}
                </div>
              ))}
              {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                <div
                  key={day}
                  className={`p-4 rounded-xl text-orange-800 ${
                    [15, 20, 22, 28].includes(day)
                      ? 'bg-gradient-to-br from-amber-300 to-orange-300 font-bold text-white'
                      : 'bg-white/50'
                  }`}
                >
                  {day}
                  {[15, 20, 22, 28].includes(day) && <div className="text-2xl mt-1">🌻</div>}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-orange-600" style={{ fontFamily: 'Georgia, serif' }}>
              🌻 Days marked with sunflowers have special events!
            </p>
          </div>
        </div>

        {/* Events List */}
        <div className="space-y-8">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border-4 border-orange-200 hover:shadow-2xl transition-all hover:scale-[1.02]"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Event Icon */}
                <div className={`flex-shrink-0 w-24 h-24 bg-gradient-to-br ${event.color} rounded-2xl flex items-center justify-center text-5xl shadow-lg`}>
                  {event.emoji}
                </div>

                {/* Event Details */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <h3 className="text-3xl font-bold text-orange-900" style={{ fontFamily: 'cursive' }}>
                      {event.title}
                    </h3>
                    <span className="bg-gradient-to-r from-amber-200 to-orange-200 px-4 py-2 rounded-full text-sm font-semibold text-orange-900">
                      {event.spots}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <p className="text-lg text-orange-800 font-semibold">
                      📅 {event.date}
                    </p>
                    <p className="text-lg text-orange-800 font-semibold">
                      ⏰ {event.time}
                    </p>
                  </div>

                  <p className="text-orange-700 mb-6 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                    {event.description}
                  </p>

                  <button
                    className="rounded-full bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 px-8 py-4 text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
                    style={{ fontFamily: 'cursive' }}
                    onClick={() => alert('Coming soon! 🌻 Use the "Book Now" button in the navigation to book a session!')}
                  >
                    Reserve Your Spot! 🌈
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="text-xl font-bold text-orange-900 mb-2" style={{ fontFamily: 'cursive' }}>
              All Materials Included
            </h3>
            <p className="text-orange-800" style={{ fontFamily: 'Georgia, serif' }}>
              Everything you need for a creative adventure is provided!
            </p>
          </div>
          <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">👨‍👩‍👧‍👦</div>
            <h3 className="text-xl font-bold text-orange-900 mb-2" style={{ fontFamily: 'cursive' }}>
              Family Friendly
            </h3>
            <p className="text-orange-800" style={{ fontFamily: 'Georgia, serif' }}>
              A welcoming space for all ages and abilities!
            </p>
          </div>
          <div className="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">💫</div>
            <h3 className="text-xl font-bold text-orange-900 mb-2" style={{ fontFamily: 'cursive' }}>
              Magical Memories
            </h3>
            <p className="text-orange-800" style={{ fontFamily: 'Georgia, serif' }}>
              Take home beautiful creations and joyful experiences!
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'cursive' }}>
            Don't See What You're Looking For? ✨
          </h2>
          <p className="text-2xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Georgia, serif' }}>
            Let's create a custom event just for you! Birthday parties, private workshops,
            and special celebrations are my favorite! 🎉
          </p>
          <Link
            href="/personal-template-2/book"
            className="inline-block rounded-full bg-white px-12 py-6 text-2xl font-bold text-orange-600 shadow-2xl hover:bg-orange-50 transition-all hover:scale-105"
            style={{ fontFamily: 'cursive' }}
          >
            Let's Chat! 💛
          </Link>
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            href="/personal-template-2"
            className="inline-flex items-center gap-2 text-xl text-orange-700 hover:text-orange-900 transition-colors"
            style={{ fontFamily: 'cursive' }}
          >
            <span>←</span> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
