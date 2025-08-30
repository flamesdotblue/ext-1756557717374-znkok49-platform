import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1527766833261-b9adf10a5997?q=80&w=2000&auto=format&fit=crop"
          alt="Golf fairway at sunrise overlooking rolling greens"
          className="h-[80vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-white"></div>
      </div>

      <div className="container mx-auto px-4 h-[80vh] flex items-end">
        <div className="max-w-3xl text-white pb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs border border-white/20 mb-4">
            <MapPin size={14} />
            <span>San Francisco, California</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
            Championship Golf, Steps from the Golden Gate
          </h1>
          <p className="mt-4 text-base md:text-lg text-neutral-100/90">
            Experience a world-class 18-hole course with sweeping Bay vistas, pristine fairways, and a welcoming club community in the heart of San Francisco.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#membership"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-emerald-900/20 transition-colors"
            >
              Become a Member <ArrowRight size={18} />
            </a>
            <a
              href="#amenities"
              className="inline-flex items-center gap-2 rounded-full bg-white/90 hover:bg-white text-neutral-900 px-5 py-3 text-sm font-medium transition-colors"
            >
              Explore the Course
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
