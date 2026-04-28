import { ArrowRight, Star } from "lucide-react";

const avatarColors = ["bg-indigo-400", "bg-amber-400", "bg-pink-400", "bg-emerald-400"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-indigo-600/20 border border-indigo-500/30 rounded-full px-4 py-1.5 mb-6">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="text-sm font-medium text-indigo-200">
              Summer Sale — Up to 40% off
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Discover Products{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-amber-400">
              You&apos;ll Love
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-xl">
            Curated collections of premium electronics, accessories, and footwear — delivered fast, priced right, and backed by our happiness guarantee.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:-translate-y-0.5"
            >
              Shop Now
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 backdrop-blur-sm"
            >
              Browse Products
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {avatarColors.map((color, i) => (
                  <div
                    key={i}
                    className={"w-7 h-7 rounded-full border-2 border-slate-900 " + color}
                  />
                ))}
              </div>
              <span>10,000+ happy customers</span>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
              <span className="ml-1">4.9 / 5 rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
