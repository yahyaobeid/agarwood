import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Story() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl text-primary">
              Our Family Legacy
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Our family tends to a large estate of Agarwood trees, each one planted
                and raised with deliberate care. From the beginning, we manage the land
                to give every tree what it needs — the right spacing to breathe, the
                right nutrition to grow strong, and the right conditions to develop slowly.
              </p>
              <p>
                There is no shortcut to raising a quality Agarwood tree. It takes years
                of attention before a tree is ready, and that investment of time is
                something we take seriously. We watch each tree closely, adjusting as
                needed through the seasons.
              </p>
              <p>
                For us, the estate isn't just a farm — it's the foundation everything
                else is built on. The quality of what ends up in the bottle starts here,
                in the soil and the care we put into every tree long before harvest.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="/agarwood-estate-dark.jpg"
              alt="Agarwood trees on our family estate"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
