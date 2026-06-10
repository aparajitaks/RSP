'use client';

import { useState, FormEvent } from 'react';
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle,
  XCircle,
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { CONTACT_SUBJECTS, SOCIAL_LINKS } from '@/lib/constants';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 5000);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        showToast('success', 'Message sent successfully! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
        showToast('error', data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      showToast('error', 'Network error. Please check your connection and try again.');
    }

    setTimeout(() => setStatus('idle'), 3000);
  };

  const inputClasses =
    'w-full bg-card/60 border border-white/10 rounded-lg px-4 py-3.5 text-white font-inter text-sm placeholder:text-text-secondary/60 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all duration-300';

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/[0.02] rounded-full blur-[200px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageSquare className="text-gold" size={28} />
              <p className="text-gold font-space text-sm tracking-[0.3em] uppercase">
                Get in Touch
              </p>
            </div>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
              Let&apos;s <span className="gold-text">Connect</span>
            </h2>
            <p className="text-text-secondary font-inter text-base md:text-lg max-w-xl mx-auto">
              Whether it&apos;s a speaking engagement, brand partnership, or
              collaboration — let&apos;s create something extraordinary.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <ScrollReveal direction="left" className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass-card p-6 md:p-10 rounded-2xl space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="relative">
                  <User
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary/50"
                  />
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className={`${inputClasses} pl-10`}
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary/50"
                  />
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={`${inputClasses} pl-10`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Phone */}
                <div className="relative">
                  <Phone
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary/50"
                  />
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className={`${inputClasses} pl-10`}
                  />
                </div>

                {/* Subject */}
                <select
                  id="contact-subject"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className={`${inputClasses} appearance-none cursor-pointer`}
                >
                  <option value="" disabled>
                    Select Subject
                  </option>
                  {CONTACT_SUBJECTS.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <textarea
                id="contact-message"
                placeholder="Your Message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className={`${inputClasses} resize-none`}
              />

              {/* Submit */}
              <button
                id="contact-submit"
                type="submit"
                disabled={status === 'loading'}
                className="btn-gold w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin relative z-10" />
                    <span className="relative z-10">Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} className="relative z-10" />
                    <span className="relative z-10">Send Message</span>
                  </>
                )}
              </button>
            </form>
          </ScrollReveal>

          {/* Social & Info */}
          <ScrollReveal direction="right" className="lg:col-span-2">
            <div className="space-y-8">
              {/* Info Card */}
              <div className="glass-card p-6 md:p-8 rounded-2xl">
                <h3 className="font-outfit font-semibold text-lg mb-4">
                  Quick Connect
                </h3>
                <p className="text-text-secondary font-inter text-sm leading-relaxed mb-6">
                  For speaking inquiries, brand collaborations, and
                  partnerships, please fill out the form or reach out
                  directly through social media.
                </p>

                {/* Social Links */}
                <div className="space-y-3">
                  <SocialLink
                    href={SOCIAL_LINKS.youtube}
                    label="YouTube"
                    handle="@RajShamani"
                    icon={
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                        <path fill="#0a0a0a" d="M9.545 15.568V8.432L15.818 12z" />
                      </svg>
                    }
                  />
                  <SocialLink
                    href={SOCIAL_LINKS.instagram}
                    label="Instagram"
                    handle="@rajshamani"
                    icon={
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    }
                  />
                  <SocialLink
                    href={SOCIAL_LINKS.twitter}
                    label="X (Twitter)"
                    handle="@rajshamani"
                    icon={
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    }
                  />
                  <SocialLink
                    href={SOCIAL_LINKS.linkedin}
                    label="LinkedIn"
                    handle="/rajshamani"
                    icon={
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    }
                  />
                  <SocialLink
                    href={SOCIAL_LINKS.spotify}
                    label="Spotify"
                    handle="Figuring Out"
                    icon={
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381C8.64 5.801 15.6 6.001 20.04 8.4c.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                      </svg>
                    }
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <div
          className={`toast ${
            toast.type === 'success' ? 'toast-success' : 'toast-error'
          } flex items-center gap-3`}
        >
          {toast.type === 'success' ? (
            <CheckCircle size={18} />
          ) : (
            <XCircle size={18} />
          )}
          <span className="font-inter text-sm">{toast.message}</span>
        </div>
      )}
    </section>
  );
}

function SocialLink({
  href,
  label,
  handle,
  icon,
}: {
  href: string;
  label: string;
  handle: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300 group"
    >
      <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold/20 transition-colors">
        {icon}
      </div>
      <div>
        <p className="font-inter text-sm font-medium text-white group-hover:text-gold transition-colors">
          {label}
        </p>
        <p className="font-inter text-xs text-text-secondary">{handle}</p>
      </div>
    </a>
  );
}
