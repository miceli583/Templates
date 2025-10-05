import Link from "next/link";

export default function BackToGallery4() {
  return (
    <Link
      href="/"
      className="fixed bottom-8 left-8 z-[9999] group"
      title="Back to Gallery"
    >
      <div className="relative">
        {/* Main button with mycelium/nature theme */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 shadow-2xl flex items-center justify-center text-white text-2xl hover:scale-110 transition-all duration-300 hover:shadow-emerald-500/50 border-2 border-emerald-300">
          ←
        </div>

        {/* Tooltip */}
        <div className="absolute left-20 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-emerald-900 border border-emerald-500/30 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shadow-xl">
            Back to Gallery
          </div>
        </div>
      </div>
    </Link>
  );
}
