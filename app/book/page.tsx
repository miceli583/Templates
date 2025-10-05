"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "~/trpc/react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  offerings: string[];
  clientStory: string;
  preferredDates: string;
};

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);
  const { data: offerings } = api.offering.getAll.useQuery();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const createBooking = api.booking.create.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      reset();
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      await createBooking.mutateAsync({
        name: data.name,
        email: data.email,
        phone: data.phone,
        offeringIds: data.offerings,
        clientStory: data.clientStory,
        preferredDates: data.preferredDates,
      });
    } catch (error) {
      console.error("Booking error:", error);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="mx-auto w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-10 h-10 text-primary-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Request Has Been Received!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for taking this important step in your healing journey. I'll review your
              submission and reach out within 24 hours to schedule your session.
            </p>
            <p className="text-gray-600 mb-8">
              In the meantime, take a moment to honor yourself for choosing growth and
              transformation.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="rounded-full bg-primary-600 px-8 py-3 text-white font-semibold hover:bg-primary-700 transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Book Your 1-on-1 Session
          </h1>
          <p className="text-lg text-gray-600">
            Share a bit about yourself and what you're seeking. This helps me prepare
            the most transformative experience for you.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                className="w-full rounded-lg border-gray-300 border px-4 py-3 focus:border-primary-500 focus:ring-primary-500"
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full rounded-lg border-gray-300 border px-4 py-3 focus:border-primary-500 focus:ring-primary-500"
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                {...register("phone")}
                className="w-full rounded-lg border-gray-300 border px-4 py-3 focus:border-primary-500 focus:ring-primary-500"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* Offerings */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                What are you interested in? (Select all that apply) *
              </label>
              <div className="space-y-3">
                <label className="flex items-start p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="checkbox"
                    value="energy-healing"
                    {...register("offerings", {
                      required: "Please select at least one offering",
                    })}
                    className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <span className="ml-3">
                    <span className="block font-medium text-gray-900">
                      Energy Healing & Reiki
                    </span>
                    <span className="block text-sm text-gray-600">
                      Chakra balancing, aura cleansing, energy clearing
                    </span>
                  </span>
                </label>

                <label className="flex items-start p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="checkbox"
                    value="coaching"
                    {...register("offerings")}
                    className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <span className="ml-3">
                    <span className="block font-medium text-gray-900">
                      Life & Transformation Coaching
                    </span>
                    <span className="block text-sm text-gray-600">
                      Goal setting, breakthrough sessions, purpose discovery
                    </span>
                  </span>
                </label>

                <label className="flex items-start p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="checkbox"
                    value="somatic-therapy"
                    {...register("offerings")}
                    className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <span className="ml-3">
                    <span className="block font-medium text-gray-900">
                      Somatic Therapy
                    </span>
                    <span className="block text-sm text-gray-600">
                      Trauma release, nervous system regulation, embodiment
                    </span>
                  </span>
                </label>

                <label className="flex items-start p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="checkbox"
                    value="massage"
                    {...register("offerings")}
                    className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <span className="ml-3">
                    <span className="block font-medium text-gray-900">
                      Massage & Bodywork
                    </span>
                    <span className="block text-sm text-gray-600">
                      Deep tissue, myofascial release, integrative sessions
                    </span>
                  </span>
                </label>
              </div>
              {errors.offerings && (
                <p className="mt-2 text-sm text-red-600">{errors.offerings.message}</p>
              )}
            </div>

            {/* Client Story */}
            <div>
              <label htmlFor="clientStory" className="block text-sm font-semibold text-gray-900 mb-2">
                Tell me about yourself and what brings you here *
              </label>
              <p className="text-sm text-gray-600 mb-3">
                What are you hoping to heal, release, or transform? What support are you seeking?
                The more you share, the better I can serve you.
              </p>
              <textarea
                id="clientStory"
                rows={6}
                {...register("clientStory", {
                  required: "Please share a bit about yourself",
                  minLength: {
                    value: 10,
                    message: "Please provide more detail (at least 10 characters)",
                  },
                })}
                className="w-full rounded-lg border-gray-300 border px-4 py-3 focus:border-primary-500 focus:ring-primary-500"
                placeholder="I'm seeking support with..."
              />
              {errors.clientStory && (
                <p className="mt-1 text-sm text-red-600">{errors.clientStory.message}</p>
              )}
            </div>

            {/* Preferred Dates */}
            <div>
              <label htmlFor="preferredDates" className="block text-sm font-semibold text-gray-900 mb-2">
                Preferred dates or times (optional)
              </label>
              <input
                type="text"
                id="preferredDates"
                {...register("preferredDates")}
                className="w-full rounded-lg border-gray-300 border px-4 py-3 focus:border-primary-500 focus:ring-primary-500"
                placeholder="e.g., Tuesdays in the morning, weekends, etc."
              />
            </div>

            {/* Error Message */}
            {createBooking.error && (
              <div className="rounded-lg bg-red-50 p-4">
                <p className="text-sm text-red-800">
                  There was an error submitting your request. Please try again.
                </p>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-primary-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Booking Request"}
              </button>
              <p className="mt-4 text-center text-sm text-gray-600">
                I'll review your submission and reach out within 24 hours to confirm your session.
              </p>
            </div>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-8 bg-primary-50 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-2">What happens next?</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>I'll review your intake form and reach out via email within 24 hours</li>
            <li>We'll schedule a time that works for both of us</li>
            <li>You'll receive a confirmation with session details and preparation guidance</li>
            <li>We'll meet for your transformative session</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
