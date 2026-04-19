import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1565950307432-07ec524a0c51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ2Fyd29vZCUyMGZvcmVzdCUyMHRyZWUlMjB0cnVuayUyMGRhcmt8ZW58MXx8fHwxNzc2Mzc4MjgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Agarwood Forest"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl mb-6 text-white">
          Pure Agarwood Oud Oil
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          From our family's estate in Hainan, China to your home. 
          Authentic, precious, and sustainably sourced.
        </p>
        <button
          onClick={() => document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
        >
          Discover Our Story
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
