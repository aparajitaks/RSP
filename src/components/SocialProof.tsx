'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS, PRESS_BADGES } from '@/lib/constants';
import ScrollReveal from './ScrollReveal';

export default function SocialProof() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold font-space text-sm tracking-[0.3em] uppercase mb-3">
              What People Say
            </p>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl md:text-5xl">
              Social <span className="gold-text">Proof</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Testimonial Carousel */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-3xl mx-auto mb-16">
            <div className="glass-card p-8 md:p-12 rounded-2xl relative min-h-[220px]">
              {/* Gold quotation marks */}
              <Quote
                size={48}
                className="absolute top-6 left-6 text-gold/20"
                aria-hidden="true"
              />
              <Quote
                size={48}
                className="absolute bottom-6 right-6 text-gold/20 rotate-180"
                aria-hidden="true"
              />

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="text-center relative z-10"
                >
                  <p className="font-inter text-base md:text-lg leading-relaxed text-text-secondary italic mb-8">
                    &ldquo;{TESTIMONIALS[current].quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-outfit font-semibold text-white">
                      {TESTIMONIALS[current].author}
                    </p>
                    <p className="text-gold font-inter text-sm">
                      {TESTIMONIALS[current].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <div className="flex items-center justify-center gap-6 mt-8">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setDirection(i > current ? 1 : -1);
                        setCurrent(i);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === current
                          ? 'bg-gold w-6'
                          : 'bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Press Badges */}
        <ScrollReveal delay={0.4}>
          <div className="text-center">
            <p className="text-text-secondary font-inter text-sm mb-6 tracking-wide uppercase">
              Featured In
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {PRESS_BADGES.map((badge) => (
                <div
                  key={badge}
                  className="font-outfit font-bold text-xl md:text-2xl text-white/20 hover:text-gold/60 transition-colors duration-500 cursor-default"
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
