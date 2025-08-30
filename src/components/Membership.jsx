import React from 'react';
import { Check, Users, Trophy, Star } from 'lucide-react';

const tiers = [
  {
    name: 'Weekday',
    price: '$189/mo',
    tagline: 'Perfect for flexible schedules',
    features: [
      'Mon–Fri course access',
      '7-day advance tee times',
      'Practice facility access',
      'Member dining privileges'
    ],
    icon: Users
  },
  {
    name: 'Full',
    price: '$279/mo',
    tagline: 'Best value for avid golfers',
    features: [
      'Unlimited course access',
      '14-day advance tee times',
      'Guest passes each month',
      'Locker + bag storage'
    ],
    highlight: true,
    icon: Trophy
  },
  {
    name: 'Executive',
    price: '$389/mo',
    tagline: 'Premium access & perks',
    features: [
      'Priority tee access',
      'Concierge + event invites',
      'Complimentary fittings',
      'Tournament entry credits'
    ],
    icon: Star
  }
];

export default function Membership() {
  return (
    <section id="membership" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Memberships for Every Golfer</h2>
          <p className="mt-3 text-neutral-600">Flexible plans designed for San Francisco schedules—with member-first tee access and curated social events.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border ${tier.highlight ? 'border-emerald-300 bg-white shadow-xl shadow-emerald-900/5' : 'border-neutral-200 bg-white'} p-6 flex flex-col`}
            >
              <div className="flex items-center gap-3">
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${tier.highlight ? 'bg-emerald-600 text-white' : 'bg-emerald-600/10 text-emerald-700'}`}>
                  <tier.icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{tier.name}</h3>
                  <p className="text-xs text-neutral-500">{tier.tagline}</p>
                </div>
              </div>

              <div className="mt-6">
                <span className="text-3xl font-semibold">{tier.price}</span>
                <span className="text-neutral-500 text-sm"> · billed monthly</span>
              </div>

              <ul className="mt-6 space-y-3 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 text-emerald-700"><Check size={16} /></span>
                    <span className="text-neutral-700">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <a href="#contact" className={`inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors ${tier.highlight ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-neutral-900 text-white hover:bg-neutral-800'}`}>
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-neutral-500">Prices shown are illustrative and subject to change. Initiation fees may apply. Contact our membership team for current details.</p>
      </div>
    </section>
  );
}
