import Link from "next/link";

export default function BackToGallery() {
  return (
    <Link
      href="/"
      className="fixed bottom-8 left-8 z-50 group"
      title="Back to Gallery"
    >
      <div className="relative">
        {/* Main button */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 shadow-2xl flex items-center justify-center text-white text-2xl hover:scale-110 transition-all duration-300 hover:shadow-purple-500/50">
          ←
        </div>

        {/* Tooltip */}
        <div className="absolute left-20 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shadow-xl">
            Back to Gallery
          </div>
        </div>
      </div>
    </Link>
  );
}
