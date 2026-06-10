'use client';

import { TrendingUp, Crown, BadgeDollarSign, Users, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp size={24} />,
  Crown: <Crown size={24} />,
  BadgeDollarSign: <BadgeDollarSign size={24} />,
  Users: <Users size={24} />,
};

const features = [
  {
    title: 'Creator Growth',
    description: 'Strategic content consulting and audience growth frameworks',
    icon: 'TrendingUp',
  },
  {
    title: 'Brand Building',
    description: 'End-to-end personal brand development and positioning',
    icon: 'Crown',
  },
  {
    title: 'Monetization',
    description: 'Revenue diversification through products, courses, and partnerships',
    icon: 'BadgeDollarSign',
  },
  {
    title: 'Community',
    description: 'Building engaged communities that drive lasting impact',
    icon: 'Users',
  },
];

export default function HouseOfX() {
  return (
    <section id="housex" className="section-padding relative overflow-hidden">
      {/* Futuristic gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary via-secondary to-primary" />
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-gold/[0.03] rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <ScrollReveal>
              <p className="text-gold font-space text-sm tracking-[0.3em] uppercase mb-3">
                The Platform
              </p>
              <h2 className="font-outfit font-bold text-3xl sm:text-4xl md:text-5xl mb-6">
                <span className="gold-text">House of X</span>
              </h2>
              <p className="text-text-secondary font-inter text-base md:text-lg leading-relaxed mb-4">
                House of X is Raj Shamani&apos;s creator brand-building
                platform — a powerhouse ecosystem designed to help
                creators, entrepreneurs, and personal brands scale from
                zero to iconic.
              </p>
              <p className="text-text-secondary font-inter text-base md:text-lg leading-relaxed mb-8">
                From content strategy to monetization, from brand
                positioning to community building — House of X provides
                the frameworks, tools, and mentorship to build brands
                that outlast trends.
              </p>

              <a
                href="https://houseofx.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2 group"
              >
                <span className="relative z-10">Learn More</span>
                <ArrowRight
                  size={18}
                  className="relative z-10 group-hover:translate-x-1 transition-transform"
                />
              </a>
            </ScrollReveal>
          </div>

          {/* Right: Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.1} direction="right">
                <div className="glass-card card-glow p-6 rounded-xl group h-full">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                    {iconMap[feature.icon]}
                  </div>
                  <h3 className="font-outfit font-semibold text-lg mb-2 group-hover:text-gold transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary font-inter text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
