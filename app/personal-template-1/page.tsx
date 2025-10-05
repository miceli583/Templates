"use client";

import Link from "next/link";
import { api } from "~/trpc/react";

export default function HomePage() {
  const { data: offerings } = api.offering.getAll.useQuery(undefined, {
    initialData: [],
  });
  const { data: reviews } = api.review.getFeatured.useQuery(undefined, {
    initialData: [],
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
              Transform Your Life Through
              <span className="block text-primary-600">Holistic Healing</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
              Discover the power of energy healing, somatic therapy, and transformative coaching.
              Step into your highest potential and embrace profound healing.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link
                href="/book"
                className="rounded-full bg-primary-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-700 transition-all hover:scale-105"
              >
                Book Your Session
              </Link>
              <Link
                href="/#offerings"
                className="rounded-full border-2 border-primary-600 px-8 py-4 text-lg font-semibold text-primary-600 hover:bg-primary-50 transition-all"
              >
                Explore Offerings
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
                Meet Luna Solaris
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  For over a decade, I've walked alongside individuals on their journey to wholeness,
                  helping them reconnect with their authentic selves and unlock their innate healing power.
                </p>
                <p>
                  As a certified Reiki Master, somatic therapy practitioner, and holistic life coach,
                  I blend ancient wisdom with modern therapeutic techniques to create transformative
                  experiences that honor your unique path.
                </p>
                <p>
                  My approach is rooted in compassion, presence, and the belief that true healing
                  happens when we address the mind, body, and spirit as one interconnected system.
                </p>
                <p className="font-semibold text-primary-700">
                  Whether you're seeking relief from chronic pain, emotional healing, life direction,
                  or deeper spiritual connection—you've come to the right place.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-200 to-accent-200 shadow-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🌙✨</div>
                  <p className="text-2xl font-bold text-gray-800">Luna Solaris</p>
                  <p className="text-gray-600 mt-2">Holistic Wellness Practitioner</p>
                  <div className="mt-6 space-y-2 text-sm">
                    <p className="font-semibold text-gray-700">Certified in:</p>
                    <p className="text-gray-600">• Reiki Master Level III</p>
                    <p className="text-gray-600">• Somatic Experiencing</p>
                    <p className="text-gray-600">• Life & Transformation Coaching</p>
                    <p className="text-gray-600">• Therapeutic Bodywork</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section id="offerings" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Healing Modalities
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Choose the path that resonates with your healing journey
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Energy Healing */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Energy Healing</h3>
              <p className="text-gray-600 mb-4">
                Reiki and advanced energy work to clear blockages, balance chakras, and restore
                your natural flow of vitality.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Reiki Sessions</li>
                <li>• Chakra Balancing</li>
                <li>• Aura Cleansing</li>
                <li>• Distance Healing</li>
              </ul>
            </div>

            {/* Life Coaching */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Life Coaching</h3>
              <p className="text-gray-600 mb-4">
                Transformative coaching to help you overcome obstacles, clarify your vision,
                and create lasting positive change.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Personal Breakthrough Sessions</li>
                <li>• Goal Setting & Achievement</li>
                <li>• Life Transitions Support</li>
                <li>• Purpose Discovery</li>
              </ul>
            </div>

            {/* Somatic Therapy */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🧘</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Somatic Therapy</h3>
              <p className="text-gray-600 mb-4">
                Body-centered healing to release trauma, reduce stress, and reconnect with
                your innate wisdom.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Trauma Release</li>
                <li>• Nervous System Regulation</li>
                <li>• Embodiment Practices</li>
                <li>• Mind-Body Integration</li>
              </ul>
            </div>

            {/* Massage & Bodywork */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💆</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Massage & Bodywork</h3>
              <p className="text-gray-600 mb-4">
                Therapeutic touch to release tension, improve circulation, and promote
                deep relaxation and healing.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Deep Tissue Massage</li>
                <li>• Myofascial Release</li>
                <li>• Intuitive Bodywork</li>
                <li>• Integrative Sessions</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/book"
              className="inline-block rounded-full bg-primary-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-700 transition-all hover:scale-105"
            >
              Book Your Personalized Session
            </Link>
          </div>
        </div>
      </section>

      {/* Transformations Section */}
      <section id="transformations" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Your Transformation Awaits
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              What becomes possible when you commit to your healing
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center p-6">
              <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🦋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Release What No Longer Serves
              </h3>
              <p className="text-gray-600">
                Let go of old patterns, limiting beliefs, and stored trauma. Create space for
                new possibilities to emerge and flourish in your life.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="mx-auto w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">💫</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Reconnect With Your Power
              </h3>
              <p className="text-gray-600">
                Rediscover your innate strength, intuition, and authentic self. Step into
                alignment with your highest purpose and potential.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🌈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Embody Vibrant Wellness
              </h3>
              <p className="text-gray-600">
                Experience greater energy, clarity, and joy. Cultivate lasting well-being
                across all dimensions of your life—body, mind, and spirit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Client Testimonials
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Stories of healing and transformation
            </p>
          </div>

          {reviews.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">{review.content}</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    {review.title && (
                      <p className="text-sm text-gray-500">{review.title}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">
                Client testimonials will be displayed here. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            Take the first step towards transformation. Book your personalized session today
            or join us for an upcoming group event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-primary-600 shadow-lg hover:bg-gray-50 transition-all hover:scale-105"
            >
              Book 1-on-1 Session
            </Link>
            <Link
              href="/events"
              className="rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 transition-all"
            >
              View Group Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
