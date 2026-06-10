'use client';

import { Mic } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const stats = [
  { value: '400M+', label: 'Yearly Views' },
  { value: '11M+', label: 'Subscribers' },
  { value: '#1', label: 'Business Podcast in India' },
];

export default function Podcast() {
  return (
    <section
      id="podcast"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/[0.02] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mic className="text-gold" size={28} />
              <p className="text-gold font-space text-sm tracking-[0.3em] uppercase">
                The Podcast
              </p>
            </div>
            <h2 className="font-outfit font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="gold-text">FIGURING OUT</span>
            </h2>
            <p className="text-text-secondary font-inter text-base md:text-lg mt-4 max-w-2xl mx-auto">
              India&apos;s #1 business podcast where the biggest entrepreneurs,
              creators, and thought leaders share the unfiltered truth about
              success.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats Bar */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card card-glow text-center py-6 px-4"
              >
                <p className="font-space font-bold text-3xl md:text-4xl gold-text">
                  {stat.value}
                </p>
                <p className="text-text-secondary font-inter text-sm mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Embedded Players */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* YouTube Embed */}
          <ScrollReveal direction="left" delay={0.3}>
            <div className="glass-card card-glow p-4 rounded-xl">
              <div className="aspect-video w-full rounded-lg overflow-hidden bg-card">
                {/* Replace VIDEO_ID with an actual YouTube video ID */}
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/?listType=user_uploads&list=RajShamani"
                  title="Figuring Out Podcast on YouTube"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <p className="text-center text-text-secondary text-xs mt-3 font-inter">
                {/* Swap the src above with a specific video embed URL */}
                📺 Replace with your featured YouTube video embed
              </p>
            </div>
          </ScrollReveal>

          {/* Spotify Embed */}
          <ScrollReveal direction="right" delay={0.3}>
            <div className="glass-card card-glow p-4 rounded-xl">
              <div className="aspect-video w-full rounded-lg overflow-hidden bg-card">
                {/* Replace SHOW_ID with the actual Spotify show ID */}
                <iframe
                  src="https://open.spotify.com/embed/show/figuringout?utm_source=generator&theme=0"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Figuring Out Podcast on Spotify"
                  className="w-full h-full"
                />
              </div>
              <p className="text-center text-text-secondary text-xs mt-3 font-inter">
                {/* Swap the src above with the correct Spotify embed URL */}
                🎧 Replace with your Spotify show embed
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Subscribe CTAs */}
        <ScrollReveal delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://open.spotify.com/show/figuringout"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold py-3.5 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(29,185,84,0.3)]"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381C8.64 5.801 15.6 6.001 20.04 8.4c.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              Listen on Spotify
            </a>
            <a
              href="https://www.youtube.com/@RajShamani"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-red-500 text-white font-bold py-3.5 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(230,57,70,0.3)]"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Watch on YouTube
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
