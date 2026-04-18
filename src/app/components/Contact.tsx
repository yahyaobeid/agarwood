import { Mail, MapPin, Phone } from 'lucide-react';
import React, { useState } from 'react';

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxqBVrQofYG6x7wCxYi0YtZOzGZ3cFtxv-rJL1Rug3yr1l2phrgGxnJ8XzDDGyq1R-yOw/exec';

const contactItems = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 408 758 0451',
    href: 'tel:+14087580451',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@caoagarwoodestate.com',
    href: 'mailto:contact@caoagarwoodestate.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'California, USA',
    href: null,
  },
];

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.25em] uppercase opacity-60 mb-4">Reach Out</p>
          <h2 className="text-4xl md:text-5xl font-medium mb-5">
            Experience Pure Agarwood
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto leading-relaxed">
            Interested in our premium oud oil? We'd love to share our family's
            legacy with you. Contact us to learn more about our products and heritage.
          </p>
        </div>

        {/* Contact info — 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactItems.map(({ icon: Icon, label, value, href }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center p-6 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors duration-200"
            >
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <p className="text-xs tracking-widest uppercase opacity-50 mb-1">{label}</p>
              {href ? (
                <a href={href} className="opacity-90 hover:opacity-100 transition-opacity text-sm">
                  {value}
                </a>
              ) : (
                <p className="opacity-90 text-sm">{value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Contact form */}
        <div className="max-w-2xl mx-auto">
          <div className="h-px bg-primary-foreground/15 mb-12" />

          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-5">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-medium mb-3">Message Received</h3>
              <p className="opacity-70">We'll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs tracking-widest uppercase opacity-60">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-primary-foreground/10 border border-primary-foreground/15 rounded-lg px-4 py-3 text-primary-foreground placeholder:opacity-40 focus:outline-none focus:border-primary-foreground/40 transition-colors text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs tracking-widest uppercase opacity-60">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-primary-foreground/10 border border-primary-foreground/15 rounded-lg px-4 py-3 text-primary-foreground placeholder:opacity-40 focus:outline-none focus:border-primary-foreground/40 transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs tracking-widest uppercase opacity-60">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us what you're looking for…"
                  className="bg-primary-foreground/10 border border-primary-foreground/15 rounded-lg px-4 py-3 text-primary-foreground placeholder:opacity-40 focus:outline-none focus:border-primary-foreground/40 transition-colors resize-none text-sm"
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-center opacity-70">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-primary-foreground text-primary font-medium py-4 rounded-lg hover:bg-primary-foreground/90 active:scale-[0.99] transition-all duration-200 tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
