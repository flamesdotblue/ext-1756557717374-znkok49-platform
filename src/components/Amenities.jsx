import React from 'react';
import { Trophy, Users, Star, Clock } from 'lucide-react';

const amenities = [
  {
    icon: Trophy,
    title: '18 Championship Holes',
    desc: 'A challenging, meticulously maintained course with fast greens and coastal breezes.'
  },
  {
    icon: Star,
    title: 'Elite Practice Facilities',
    desc: 'Full driving range, short-game complex, and illuminated putting greens.'
  },
  {
    icon: Users,
    title: 'Modern Clubhouse',
    desc: 'Chef-led dining, lounge, lockers, and pro shop featuring top brands.'
  },
  {
    icon: Clock,
    title: 'Premier Tee Access',
    desc: 'Member-first tee times and on-site concierge for guests and groups.'
  }
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Unforgettable Golf in the City by the Bay</h2>
          <p className="mt-3 text-neutral-600">
            From sunrise rounds to golden-hour finishes, our course pairs coastal scenery with impeccable service.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-neutral-200 bg-neutral-50 hover:bg-white hover:shadow-lg transition-all overflow-hidden">
              <div className="p-5">
                <div className="h-10 w-10 rounded-lg bg-emerald-600/10 text-emerald-700 flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{desc}</p>
              </div>
              <div className="h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
