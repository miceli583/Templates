"use client";

import Link from "next/link";
import { api } from "~/trpc/react";

export default function PersonalTemplate2() {
  const { data: offerings } = api.offering.getAll.useQuery(undefined, {
    initialData: [],
  });
  const { data: reviews } = api.review.getFeatured.useQuery(undefined, {
    initialData: [],
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      {/* Decorative sunflowers */}
      <div className="fixed top-10 right-10 text-6xl opacity-20 animate-spin-slow">🌻</div>
      <div className="fixed bottom-10 left-10 text-5xl opacity-20 animate-spin-slow">🌻</div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 flex justify-center gap-3 text-5xl">
              <span className="animate-bounce">🌻</span>
              <span className="animate-bounce delay-100">🌸</span>
              <span className="animate-bounce delay-200">🌻</span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-orange-900 sm:text-7xl md:text-8xl" style={{ fontFamily: 'cursive' }}>
              Welcome to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500">
                Sunny Days Studio
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-xl text-orange-800 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              Where creativity blooms and dreams come to life! ✨ Join me on a journey of
              artistic expression, playful learning, and joyful moments.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/personal-template-2/book"
                className="group relative rounded-full bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 px-10 py-5 text-xl font-semibold text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                style={{ fontFamily: 'cursive' }}
              >
                <span className="relative z-10">Book a Session 🌈</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                href="/personal-template-2#offerings"
                className="rounded-full border-3 border-orange-400 bg-white/80 backdrop-blur-sm px-10 py-5 text-xl font-semibold text-orange-700 hover:bg-orange-100 transition-all"
                style={{ fontFamily: 'cursive' }}
              >
                Explore Services 💫
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-8xl opacity-10">🌼</div>
          <div className="absolute top-40 right-20 text-7xl opacity-10">🌺</div>
          <div className="absolute bottom-20 left-1/4 text-6xl opacity-10">🌸</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/60 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-4xl font-bold text-orange-900 sm:text-5xl mb-8" style={{ fontFamily: 'cursive' }}>
                Meet Daisy Bloom 🌻
              </h2>
              <div className="space-y-6 text-lg text-orange-800" style={{ fontFamily: 'Georgia, serif' }}>
                <p>
                  Hi there, lovely soul! I'm so glad you found your way here. ☀️
                  For over 8 years, I've been creating magical spaces where creativity and
                  joy come together in the most delightful ways!
                </p>
                <p>
                  As an art therapist, children's workshop facilitator, and creative coach,
                  I believe that life is meant to be colorful, playful, and full of wonder.
                  Every session is sprinkled with warmth, laughter, and a touch of magic! ✨
                </p>
                <p>
                  My approach is all about celebrating YOU - your unique sparkle, your beautiful
                  journey, and your incredible potential. Together, we'll create something amazing! 🌈
                </p>
                <p className="font-semibold text-orange-900 text-xl pt-4" style={{ fontFamily: 'cursive' }}>
                  Ready to bloom? Let's make something wonderful together! 💛
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-amber-200 via-orange-200 to-rose-200 shadow-2xl flex items-center justify-center border-8 border-white relative overflow-hidden">
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 text-4xl">🌻</div>
                  <div className="absolute top-4 right-4 text-4xl">🌸</div>
                  <div className="absolute bottom-4 left-4 text-4xl">🌺</div>
                  <div className="absolute bottom-4 right-4 text-4xl">🌼</div>
                </div>

                <div className="text-center p-8 relative z-10">
                  <div className="text-8xl mb-6">🌻💛</div>
                  <p className="text-3xl font-bold text-orange-900 mb-2" style={{ fontFamily: 'cursive' }}>Daisy Bloom</p>
                  <p className="text-orange-700 text-lg mb-6" style={{ fontFamily: 'Georgia, serif' }}>Creative Sunshine Spreader</p>
                  <div className="space-y-3 text-sm bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                    <p className="font-semibold text-orange-900" style={{ fontFamily: 'cursive' }}>Spreading joy through:</p>
                    <p className="text-orange-700">🎨 Art Therapy Sessions</p>
                    <p className="text-orange-700">🌈 Creative Workshops</p>
                    <p className="text-orange-700">✨ Playful Coaching</p>
                    <p className="text-orange-700">💫 Kids & Family Classes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section id="offerings" className="py-20 bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-900 sm:text-5xl mb-4" style={{ fontFamily: 'cursive' }}>
              Creative Services ✨
            </h2>
            <p className="text-xl text-orange-700" style={{ fontFamily: 'Georgia, serif' }}>
              Choose your adventure in creativity and joy!
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Art Therapy */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all hover:scale-105 border-4 border-amber-200">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-orange-900 mb-4" style={{ fontFamily: 'cursive' }}>Art Therapy</h3>
              <p className="text-orange-800 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Express yourself through color, texture, and creativity. Healing has never been this fun!
              </p>
              <ul className="text-sm text-orange-700 space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="mr-2">🌻</span>
                  <span>Individual Sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🌸</span>
                  <span>Group Workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🌺</span>
                  <span>Family Art Time</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🌼</span>
                  <span>Teen Expression Groups</span>
                </li>
              </ul>
            </div>

            {/* Creative Coaching */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all hover:scale-105 border-4 border-orange-200">
              <div className="text-6xl mb-4">🌈</div>
              <h3 className="text-2xl font-bold text-orange-900 mb-4" style={{ fontFamily: 'cursive' }}>Creative Coaching</h3>
              <p className="text-orange-800 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Unlock your creative superpowers and watch your dreams blossom into reality!
              </p>
              <ul className="text-sm text-orange-700 space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="mr-2">💫</span>
                  <span>Creative Breakthrough</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✨</span>
                  <span>Dream Building</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🌟</span>
                  <span>Confidence Boosting</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🎯</span>
                  <span>Goal Manifesting</span>
                </li>
              </ul>
            </div>

            {/* Kids Workshops */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all hover:scale-105 border-4 border-rose-200">
              <div className="text-6xl mb-4">🎪</div>
              <h3 className="text-2xl font-bold text-orange-900 mb-4" style={{ fontFamily: 'cursive' }}>Kids Workshops</h3>
              <p className="text-orange-800 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Where little artists discover their magic and have a blast creating masterpieces!
              </p>
              <ul className="text-sm text-orange-700 space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="mr-2">🎨</span>
                  <span>Messy Art Adventures</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🖌️</span>
                  <span>Storytelling & Crafts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🌈</span>
                  <span>Nature Art Explorations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🎭</span>
                  <span>Creative Play Sessions</span>
                </li>
              </ul>
            </div>

            {/* Celebrations */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all hover:scale-105 border-4 border-yellow-200">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-orange-900 mb-4" style={{ fontFamily: 'cursive' }}>Celebrations</h3>
              <p className="text-orange-800 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Make your special day extra magical with creative fun and memorable moments!
              </p>
              <ul className="text-sm text-orange-700 space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="mr-2">🎂</span>
                  <span>Birthday Art Parties</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🎈</span>
                  <span>Special Event Workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🎊</span>
                  <span>Family Gatherings</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🌟</span>
                  <span>Custom Celebrations</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              href="/personal-template-2/book"
              className="inline-block rounded-full bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 px-12 py-6 text-2xl font-semibold text-white shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
              style={{ fontFamily: 'cursive' }}
            >
              Let's Create Together! 🌻
            </Link>
          </div>
        </div>
      </section>

      {/* Transformations Section */}
      <section id="transformations" className="py-20 bg-white/60 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-900 sm:text-5xl mb-4" style={{ fontFamily: 'cursive' }}>
              Your Creative Journey 🌈
            </h2>
            <p className="text-xl text-orange-700" style={{ fontFamily: 'Georgia, serif' }}>
              What blooms when you embrace your creative spirit
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="text-center p-8 bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl">
              <div className="mx-auto w-20 h-20 bg-amber-300 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <span className="text-4xl">🦋</span>
              </div>
              <h3 className="text-2xl font-bold text-orange-900 mb-4" style={{ fontFamily: 'cursive' }}>
                Discover Your Sparkle
              </h3>
              <p className="text-orange-800" style={{ fontFamily: 'Georgia, serif' }}>
                Uncover your unique talents and watch your confidence bloom like a
                beautiful flower in spring! You're more amazing than you know! ✨
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-rose-100 to-pink-100 rounded-3xl">
              <div className="mx-auto w-20 h-20 bg-rose-300 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <span className="text-4xl">💖</span>
              </div>
              <h3 className="text-2xl font-bold text-orange-900 mb-4" style={{ fontFamily: 'cursive' }}>
                Express Your Heart
              </h3>
              <p className="text-orange-800" style={{ fontFamily: 'Georgia, serif' }}>
                Find your voice through art and creativity. Share your story, your feelings,
                and your beautiful perspective with the world! 🌸
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-3xl">
              <div className="mx-auto w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <span className="text-4xl">🌻</span>
              </div>
              <h3 className="text-2xl font-bold text-orange-900 mb-4" style={{ fontFamily: 'cursive' }}>
                Bloom with Joy
              </h3>
              <p className="text-orange-800" style={{ fontFamily: 'Georgia, serif' }}>
                Experience pure happiness and playful energy in every creation. Life is
                meant to be lived in full color! 🌈
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-br from-orange-50 via-rose-50 to-pink-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-900 sm:text-5xl mb-4" style={{ fontFamily: 'cursive' }}>
              Happy Hearts 💛
            </h2>
            <p className="text-xl text-orange-700" style={{ fontFamily: 'Georgia, serif' }}>
              Stories of joy, creativity, and magical moments!
            </p>
          </div>

          {reviews.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all border-4 border-orange-200"
                >
                  <div className="flex items-center mb-4 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="text-2xl"
                      >
                        {i < review.rating ? "⭐" : "☆"}
                      </span>
                    ))}
                  </div>
                  <p className="text-orange-800 mb-6 italic" style={{ fontFamily: 'Georgia, serif' }}>{review.content}</p>
                  <div className="border-t-2 border-orange-200 pt-4">
                    <p className="font-semibold text-orange-900" style={{ fontFamily: 'cursive' }}>{review.name}</p>
                    {review.title && (
                      <p className="text-sm text-orange-600">{review.title}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white/60 backdrop-blur-sm rounded-3xl">
              <p className="text-xl text-orange-600" style={{ fontFamily: 'Georgia, serif' }}>
                More happy stories coming soon! Be the first to share yours! 🌻
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 text-9xl">🌻</div>
          <div className="absolute bottom-10 right-10 text-9xl">🌸</div>
          <div className="absolute top-1/2 left-1/3 text-7xl">🌺</div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white sm:text-6xl mb-8" style={{ fontFamily: 'cursive' }}>
            Ready to Create Magic? ✨
          </h2>
          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto" style={{ fontFamily: 'Georgia, serif' }}>
            Let's paint your world with joy, creativity, and endless possibilities!
            Your beautiful journey starts here! 🌈
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/personal-template-2/book"
              className="rounded-full bg-white px-12 py-6 text-2xl font-semibold text-orange-600 shadow-2xl hover:bg-orange-50 transition-all hover:scale-105"
              style={{ fontFamily: 'cursive' }}
            >
              Book Your Spot 🎨
            </Link>
            <Link
              href="/personal-template-2/events"
              className="rounded-full border-4 border-white px-12 py-6 text-2xl font-semibold text-white hover:bg-white/20 transition-all"
              style={{ fontFamily: 'cursive' }}
            >
              See Events 🎉
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
