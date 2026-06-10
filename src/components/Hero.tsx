'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown, Play, Headphones } from 'lucide-react';

const taglines = ['Entrepreneur.', 'Podcaster.', 'Speaker.', 'Author.'];

export default function Hero() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = taglines[currentTagline];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setCurrentTagline((prev) => (prev + 1) % taglines.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTagline]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/[0.02] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left z-10"
          >
            <motion.p
              variants={itemVariants}
              className="text-gold font-space text-sm md:text-base tracking-[0.3em] uppercase mb-4"
            >
              Welcome to my world
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="font-outfit font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-6"
            >
              <span className="gold-text">RAJ</span>
              <br />
              <span className="gold-text">SHAMANI</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="h-10 md:h-12 flex items-center justify-center lg:justify-start mb-8"
            >
              <span className="font-inter text-xl md:text-2xl text-text-secondary">
                {displayText}
              </span>
              <span className="inline-block w-[3px] h-7 bg-gold ml-1 animate-pulse" />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://www.youtube.com/@RajShamani"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex items-center justify-center gap-2 relative z-10"
              >
                <Play size={18} />
                <span className="relative z-10">Watch My Story</span>
              </a>
              <a
                href="https://open.spotify.com/show/figuringout"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold flex items-center justify-center gap-2"
              >
                <Headphones size={18} />
                Listen to Figuring Out
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative flex justify-center lg:justify-end z-10"
            initial={{ opacity: 0, scale: 0.8, x: 80 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="relative">
              {/* Gold frame */}
              <div className="absolute -inset-3 md:-inset-4 bg-gold-gradient rounded-2xl opacity-20 blur-sm" />
              <div className="absolute -inset-[2px] bg-gold-gradient rounded-2xl opacity-60" />

              <div className="relative rounded-2xl overflow-hidden animate-float-slow w-[280px] h-[370px] sm:w-[340px] sm:h-[440px] md:w-[400px] md:h-[520px]">
                <Image
                  src="/images/raj-podcast.jpeg"
                  alt="Raj Shamani - Entrepreneur, Podcaster & Speaker"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, 400px"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-gold/40" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2 border-gold/40" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <button
          onClick={() => {
            document
              .getElementById('about')
              ?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center gap-2 text-text-secondary hover:text-gold transition-colors group"
          aria-label="Scroll to About section"
        >
          <span className="text-xs tracking-widest uppercase font-space">
            Scroll
          </span>
          <ChevronDown
            size={20}
            className="animate-bounce-slow group-hover:text-gold"
          />
        </button>
      </motion.div>
    </section>
  );
}
