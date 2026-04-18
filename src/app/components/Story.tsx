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
                For generations, our family has cultivated the sacred Agarwood trees 
                in the lush forests of China. These ancient trees, also known as 
                Aquilaria, produce one of the world's most precious natural fragrances.
              </p>
              <p>
                When the Agarwood tree is infected by a specific mold, it produces a 
                dark, aromatic resin as a defense mechanism. This resin, aged over many 
                years, becomes the precious oud oil that has been treasured in cultures 
                across Asia and the Middle East for millennia.
              </p>
              <p>
                We carefully harvest and distill this resin using traditional methods 
                passed down through our family, ensuring the highest quality and purity. 
                Each bottle represents years of patient cultivation and masterful 
                craftsmanship.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1486707471592-8e7eb7e36f78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXN0eSUyMGdyZWVuJTIwZm9yZXN0JTIwY2hpbmF8ZW58MXx8fHwxNzc2Mzc4Mjg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Misty Chinese Forest"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
