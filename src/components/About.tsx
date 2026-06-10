'use client';

import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const milestones = [
  {
    year: 'Early Days',
    title: 'Born in Indore',
    description:
      'Started entrepreneurial journey from a small city with big dreams and relentless ambition.',
  },
  {
    year: 'Building',
    title: 'Founded Shamani Industries',
    description:
      'Built a diversified business empire valued at ₹200Cr through grit, innovation, and strategic vision.',
  },
  {
    year: 'Global Stage',
    title: 'United Nations Assembly',
    description:
      'Became one of the youngest Indians to address the United Nations General Assembly on global youth issues.',
  },
  {
    year: 'Thought Leadership',
    title: 'TEDx & Beyond',
    description:
      'Delivered powerful TEDx talks and keynotes across 26+ countries, inspiring millions of young minds.',
  },
  {
    year: 'Digital',
    title: 'Figuring Out Podcast',
    description:
      'Launched India\'s #1 business podcast with 400M+ yearly views, featuring the biggest names in business.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Image */}
          <ScrollReveal direction="left">
            <div className="relative sticky top-28">
              {/* Gold accent border */}
              <div className="absolute -inset-[2px] bg-gold-gradient rounded-2xl opacity-40" />
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-w-[450px] mx-auto">
                <Image
                  src="/images/raj-formal.jpeg"
                  alt="Raj Shamani - Formal Portrait"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
              </div>

              {/* Floating stat badge */}
              <div className="absolute -bottom-4 -right-4 md:bottom-8 md:-right-8 glass-card px-5 py-3 rounded-xl">
                <p className="font-space text-2xl font-bold gold-text">₹200Cr+</p>
                <p className="text-text-secondary text-xs font-inter">
                  Business Empire
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Content */}
          <div>
            <ScrollReveal>
              <p className="text-gold font-space text-sm tracking-[0.3em] uppercase mb-3">
                The Journey
              </p>
              <h2 className="font-outfit font-bold text-3xl sm:text-4xl md:text-5xl mb-6">
                From Indore to a{' '}
                <span className="gold-text">₹200Cr Business Empire</span>
              </h2>
              <p className="text-text-secondary font-inter text-base md:text-lg leading-relaxed mb-12">
                Raj Shamani&apos;s journey is a testament to the power of relentless
                hustle, authenticity, and the courage to build in public. From
                starting in Indore to addressing the United Nations, from
                building Shamani Industries to hosting India&apos;s most-loved
                business podcast — every chapter has been about figuring it out,
                one step at a time.
              </p>
            </ScrollReveal>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical gold line */}
              <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold/60 via-gold/30 to-transparent" />

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <ScrollReveal key={milestone.title} delay={index * 0.1}>
                    <div className="flex gap-6 group">
                      {/* Timeline dot */}
                      <div className="relative flex-shrink-0 mt-1.5">
                        <div className="w-4 h-4 rounded-full bg-primary border-2 border-gold group-hover:bg-gold transition-colors duration-300" />
                      </div>

                      {/* Content */}
                      <div>
                        <span className="text-gold font-space text-xs tracking-widest uppercase">
                          {milestone.year}
                        </span>
                        <h3 className="font-outfit font-semibold text-lg md:text-xl mt-1 mb-2 group-hover:text-gold transition-colors duration-300">
                          {milestone.title}
                        </h3>
                        <p className="text-text-secondary font-inter text-sm md:text-base leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
