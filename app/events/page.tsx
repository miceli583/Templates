"use client";

import { api } from "~/trpc/react";

export default function EventsPage() {
  const { data: events, isLoading } = api.event.getUpcoming.useQuery();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Group Events & Workshops
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our community healing circles, workshops, and transformational group experiences.
            Connect with like-minded souls on the path of growth and healing.
          </p>
        </div>

        {/* Calendar Embed Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            View All Upcoming Events
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Browse our full calendar below and register for events that call to you
          </p>

          {/* Embedded Calendar - Replace with your actual calendar embed code */}
          <div className="aspect-video bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-6xl mb-4">📅</div>
              <p className="text-xl font-semibold text-gray-700 mb-2">
                Calendar Integration Ready
              </p>
              <p className="text-gray-600 max-w-md">
                Replace this section with your Calendly, Google Calendar, or other calendar
                embed code. Simply paste your embed iframe in the designated area below.
              </p>
              <div className="mt-6 p-4 bg-white rounded-lg border-2 border-dashed border-gray-300">
                <p className="text-sm text-gray-500 font-mono">
                  {'<iframe src="YOUR_CALENDAR_EMBED_URL" ...></iframe>'}
                </p>
              </div>
            </div>
          </div>

          {/* Example Calendly Integration Instructions */}
          <div className="mt-8 bg-primary-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">
              How to add your calendar:
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
              <li>Get your embed code from Calendly, Google Calendar, or your preferred service</li>
              <li>Open <code className="bg-white px-2 py-1 rounded">src/app/events/page.tsx</code></li>
              <li>Replace the placeholder div with your iframe embed code</li>
              <li>Adjust height/width as needed for your design</li>
            </ol>

            <div className="mt-4 text-sm">
              <p className="font-semibold text-gray-900 mb-2">Example Calendly embed:</p>
              <pre className="bg-white p-3 rounded overflow-x-auto text-xs">
{`<iframe
  src="https://calendly.com/your-username/group-events"
  width="100%"
  height="700"
  frameBorder="0"
></iframe>`}
              </pre>
            </div>
          </div>
        </div>

        {/* Featured Events from Database */}
        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            <p className="mt-4 text-gray-600">Loading events...</p>
          </div>
        ) : events && events.length > 0 ? (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Featured Upcoming Events
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event: any) => (
                <div
                  key={event.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-6 text-white">
                    <div className="text-4xl mb-2">🌟</div>
                    <h3 className="text-xl font-bold">{event.title}</h3>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{event.description}</p>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {new Date(event.eventDate).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>

                      <div className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {event.duration}
                      </div>

                      {event.location && (
                        <div className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {event.location}
                        </div>
                      )}

                      {event.online && (
                        <div className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                          </svg>
                          Online Event
                        </div>
                      )}
                    </div>

                    <div className="mt-4 pt-4 border-t flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">
                          {event.bookedSlots} / {event.maxSlots} spots filled
                        </p>
                      </div>
                      <p className="text-lg font-bold text-primary-600">{event.price}</p>
                    </div>

                    <button
                      className="mt-4 w-full rounded-full bg-primary-600 px-6 py-3 text-white font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={event.bookedSlots >= event.maxSlots}
                    >
                      {event.bookedSlots >= event.maxSlots ? 'Sold Out' : 'Register Now'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl shadow-md">
            <div className="text-6xl mb-4">🌸</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              New Events Coming Soon
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              I'm currently planning exciting group experiences. Check back soon or
              subscribe to our newsletter to be notified when registration opens.
            </p>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-12 bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Join a Group Event?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">💫</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Collective Energy</h3>
              <p className="text-gray-600 text-sm">
                Experience the amplified power of healing in community. Group sessions create
                a sacred container for deeper transformation.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Shared Journey</h3>
              <p className="text-gray-600 text-sm">
                Connect with others who understand your path. Build meaningful relationships
                and feel supported in your growth.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Focused Learning</h3>
              <p className="text-gray-600 text-sm">
                Each workshop is designed around specific themes and practices, offering
                structured guidance and actionable tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
