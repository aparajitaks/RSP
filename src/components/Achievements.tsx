'use client';

import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { ACHIEVEMENTS, MILESTONES } from '@/lib/constants';
import ScrollReveal from './ScrollReveal';
import { Award } from 'lucide-react';

function AnimatedCounter({
  value,
  prefix,
  suffix,
  isInView,
}: {
  value: number;
  prefix: string;
  suffix: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span className="font-space font-bold text-4xl md:text-5xl lg:text-6xl gold-text tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="achievements"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gold/[0.02] rounded-full blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="text-gold" size={28} />
              <p className="text-gold font-space text-sm tracking-[0.3em] uppercase">
                Milestones
              </p>
            </div>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl md:text-5xl">
              Achievements <span className="gold-text">Wall</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Counters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-16">
          {ACHIEVEMENTS.map((item, index) => (
            <ScrollReveal key={item.label} delay={index * 0.1}>
              <div className="glass-card card-glow text-center p-6 md:p-8 rounded-xl relative overflow-hidden group">
                {/* Gold gradient border on hover */}
                <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500" />

                <AnimatedCounter
                  value={item.value}
                  prefix={item.prefix}
                  suffix={item.suffix}
                  isInView={isInView}
                />
                <p className="text-text-secondary font-inter text-xs md:text-sm mt-3">
                  {item.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Milestone Badges */}
        <ScrollReveal delay={0.5}>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {MILESTONES.map((milestone) => (
              <div
                key={milestone}
                className="glass-card px-4 md:px-6 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-inter text-text-secondary border border-gold/20 hover:border-gold/50 hover:text-gold transition-all duration-300"
              >
                {milestone}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
