import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Droplet, Leaf, Award, Heart } from 'lucide-react';

export function Product() {
  const features = [
    {
      icon: Droplet,
      title: 'Pure & Authentic',
      description: ' 100% natural oud oil with no additives or synthetic fragrances'
    },
    {
      icon: Leaf,
      title: 'Sustainably Sourced',
      description: 'Harvested from our family estate with care for the environment'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Aged resin distilled using traditional methods for superior aroma'
    },
    {
      icon: Heart,
      title: 'Family Tradition',
      description: 'Generations of expertise in cultivating the finest Agarwood'
    }
  ];

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-primary">
            Liquid Gold from the Forest
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our premium oud oil captures the essence of ancient Agarwood trees, 
            offering a rich, complex fragrance that has captivated civilizations for centuries.
          </p>
        </div>

        {/* Product Showcase */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="/product_bottle.jpeg"
              alt="Xuan Tan Jing pure oud oil — 100% pure agarwood oil, steam distilled, no additives, undiluted"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl text-primary">
              The Art of Agarwood
            </h3>
            <p className="text-lg text-muted-foreground">
              Agarwood, known scientifically as Aquilaria, is one of nature's most 
              remarkable creations. The formation of oud begins when the tree is 
              wounded or infected, triggering a natural defense that produces a 
              dark, fragrant resin.
            </p>
            <p className="text-lg text-muted-foreground">
              This transformation can take decades, making genuine oud oil incredibly 
              rare and valuable. The resulting scent is deeply woody, complex, and 
              utterly unforgettable—a symphony of earthy, sweet, and balsamic notes.
            </p>
            <div className="pt-4">
              <a href="#contact" className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg transition-all duration-300">
                Inquire About Our Oil
              </a>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="mb-2 text-primary">
                {feature.title}
              </h4>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
