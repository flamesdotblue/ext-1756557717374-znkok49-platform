import React from 'react';
import Hero from './components/Hero';
import Amenities from './components/Amenities';
import Membership from './components/Membership';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur-md bg-white/70 border-b border-neutral-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">GG</div>
            <span className="font-semibold tracking-tight">Golden Gate Golf Club</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#amenities" className="hover:text-emerald-700 transition-colors">Amenities</a>
            <a href="#membership" className="hover:text-emerald-700 transition-colors">Membership</a>
            <a href="#contact" className="hover:text-emerald-700 transition-colors">Contact</a>
          </nav>
          <a href="#membership" className="inline-flex items-center justify-center rounded-full bg-emerald-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-emerald-700 transition-colors">Join Now</a>
        </div>
      </header>

      <main className="pt-20">
        <Hero />
        <Amenities />
        <Membership />
        <ContactSection />
      </main>

      <footer className="border-t border-neutral-200 py-8 text-sm bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600">© {new Date().getFullYear()} Golden Gate Golf Club. All rights reserved.</p>
          <div className="flex items-center gap-6 text-neutral-600">
            <a href="#membership" className="hover:text-emerald-700">Membership</a>
            <a href="#amenities" className="hover:text-emerald-700">Course</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
