import React from 'react';
import { MapPin, Phone, Mail, Calendar, Clock, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Plan Your Visit</h2>
            <p className="mt-3 text-neutral-600">Book a tour, schedule a tee time, or speak with our membership concierge. We’re minutes from the Presidio with easy access across the city.</p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-emerald-600/10 text-emerald-700 flex items-center justify-center"><MapPin size={18} /></div>
                <div>
                  <p className="font-medium">98 Coastal Ave, San Francisco, CA</p>
                  <a
                    href="https://maps.google.com/?q=Golden+Gate+Golf+Club+San+Francisco"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-emerald-700 hover:underline inline-flex items-center gap-1"
                  >
                    Get Directions <ArrowRight size={14} />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-emerald-600/10 text-emerald-700 flex items-center justify-center"><Phone size={18} /></div>
                <a href="tel:+14155551234" className="text-neutral-800 hover:text-emerald-700">(415) 555-1234</a>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-emerald-600/10 text-emerald-700 flex items-center justify-center"><Mail size={18} /></div>
                <a href="mailto:membership@goldengategolfclub.com" className="text-neutral-800 hover:text-emerald-700">membership@goldengategolfclub.com</a>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-emerald-600/10 text-emerald-700 flex items-center justify-center"><Clock size={18} /></div>
                <div className="text-sm text-neutral-700">
                  <p className="font-medium text-neutral-900">Club Hours</p>
                  <p>Mon–Fri: 6:00a – 9:00p</p>
                  <p>Sat–Sun: 5:30a – 9:30p</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+14155551234" className="inline-flex items-center gap-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white px-5 py-3 text-sm font-medium">
                Call the Club
              </a>
              <a href="mailto:membership@goldengategolfclub.com" className="inline-flex items-center gap-2 rounded-full bg-white border border-neutral-200 hover:border-neutral-300 text-neutral-900 px-5 py-3 text-sm font-medium">
                Email Membership
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 text-sm font-medium">
                <Calendar size={16} /> Request a Tour
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100">
            <img
              src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1800&auto=format&fit=crop"
              alt="Clubhouse terrace with views over the course"
              className="w-full h-80 object-cover"
            />
            <div className="p-6 bg-white">
              <p className="text-sm text-neutral-600">
                Our course weaves through coastal cypress and gently rolling terrain, offering strategic play for all levels and postcard views of the city.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
