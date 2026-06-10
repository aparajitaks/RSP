'use client';

import Image from 'next/image';
import {
  Rocket,
  Sparkles,
  Video,
  TrendingUp,
  Heart,
  CalendarCheck,
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { SPEAKING_TOPICS, PAST_STAGES } from '@/lib/constants';

const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket size={22} />,
  Sparkles: <Sparkles size={22} />,
  Video: <Video size={22} />,
  TrendingUp: <TrendingUp size={22} />,
  Heart: <Heart size={22} />,
};

export default function Speaking() {
  return (
    <section id="speaking" className="relative overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/raj-formal.jpeg"
          alt=""
          fill
          className="object-cover opacity-[0.07]"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
      </div>

      <div className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <CalendarCheck className="text-gold" size={28} />
                <p className="text-gold font-space text-sm tracking-[0.3em] uppercase">
                  Events & Keynotes
                </p>
              </div>
              <h2 className="font-outfit font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
                Book Raj for{' '}
                <span className="gold-text">Your Event</span>
              </h2>
              <p className="text-text-secondary font-inter text-base md:text-lg max-w-2xl mx-auto">
                200+ global keynotes across 26+ countries. From intimate
                workshops to arena-scale conferences, Raj delivers
                transformative experiences.
              </p>
            </div>
          </ScrollReveal>

          {/* Past Stages */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
              {PAST_STAGES.map((stage) => (
                <div
                  key={stage}
                  className="glass-card px-6 py-3 rounded-full font-outfit font-semibold text-sm md:text-base text-gold border border-gold/30 hover:border-gold/60 transition-colors duration-300"
                >
                  {stage}
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Topics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
            {SPEAKING_TOPICS.map((topic, index) => (
              <ScrollReveal key={topic.title} delay={0.1 + index * 0.08}>
                <div className="glass-card card-glow p-6 md:p-8 rounded-xl group h-full">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                    {iconMap[topic.icon]}
                  </div>
                  <h3 className="font-outfit font-semibold text-lg mb-2 group-hover:text-gold transition-colors duration-300">
                    {topic.title}
                  </h3>
                  <p className="text-text-secondary font-inter text-sm leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}

            {/* CTA Card */}
            <ScrollReveal delay={0.6}>
              <div className="glass-card p-6 md:p-8 rounded-xl border border-gold/30 flex flex-col items-center justify-center text-center h-full bg-gold/[0.03]">
                <h3 className="font-outfit font-semibold text-lg mb-3 gold-text">
                  Ready to Inspire Your Audience?
                </h3>
                <p className="text-text-secondary font-inter text-sm mb-6">
                  Let&apos;s create an unforgettable experience for your event.
                </p>
                <button
                  onClick={() =>
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="btn-gold text-sm relative z-10"
                >
                  <span className="relative z-10">Book Now</span>
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
