'use client';

import { useState } from 'react';
import Image from 'next/image';
import { BookOpen, ShoppingCart } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Books() {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <section id="books" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="text-gold" size={28} />
              <p className="text-gold font-space text-sm tracking-[0.3em] uppercase">
                Bestselling Author
              </p>
            </div>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl md:text-5xl">
              The <span className="gold-text">Book</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Book with 3D Tilt */}
          <ScrollReveal direction="left">
            <div className="flex justify-center" style={{ perspective: '1000px' }}>
              <div
                className="relative cursor-pointer animate-float-slow"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                  transition: 'transform 0.1s ease-out',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Book shadow */}
                <div className="absolute -inset-4 bg-gold/10 rounded-2xl blur-2xl opacity-60" />

                {/* Book image */}
                <div className="relative w-[260px] h-[380px] sm:w-[300px] sm:h-[440px] rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/book-build-dont-talk.jpeg"
                    alt="Build Don't Talk by Raj Shamani - Published by Penguin"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 260px, 300px"
                  />
                </div>

                {/* Penguin badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass-card px-4 py-1.5 rounded-full text-xs font-inter text-text-secondary border border-gold/20">
                  📚 Published by Penguin
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Book Info */}
          <ScrollReveal direction="right">
            <div>
              <h3 className="font-outfit font-bold text-3xl md:text-4xl mb-2">
                <span className="gold-text">Build Don&apos;t Talk</span>
              </h3>
              <p className="text-gold/60 font-space text-sm tracking-wide mb-6">
                BY RAJ SHAMANI · PENGUIN RANDOM HOUSE
              </p>
              <p className="text-text-secondary font-inter text-base md:text-lg leading-relaxed mb-4">
                A hard-hitting book that cuts through the noise of motivational
                fluff and delivers actionable frameworks for building real
                businesses, real brands, and real impact.
              </p>
              <p className="text-text-secondary font-inter text-base md:text-lg leading-relaxed mb-8">
                Packed with lessons from Raj&apos;s own entrepreneurial journey
                and conversations with India&apos;s most successful founders,
                this book is your playbook for turning ideas into action.
              </p>

              {/* Key takeaways */}
              <div className="space-y-3 mb-8">
                {[
                  'Why execution beats planning every single time',
                  'The personal branding frameworks that built a ₹200Cr empire',
                  'Real stories from India\'s top entrepreneurs',
                  'The mindset shifts that separate builders from talkers',
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 text-text-secondary font-inter text-sm md:text-base"
                  >
                    <span className="text-gold mt-0.5">▸</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://www.amazon.in/s?k=build+dont+talk+raj+shamani"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2"
              >
                <ShoppingCart size={18} className="relative z-10" />
                <span className="relative z-10">Buy Now on Amazon</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
