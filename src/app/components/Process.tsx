import { ImageWithFallback } from './figma/ImageWithFallback';

export function Process() {
  const steps = [
    {
      number: '01',
      title: 'Cultivation',
      description: 'We nurture Agarwood trees on our family estate, allowing them to mature naturally over many years in the fertile Chinese forests.'
    },
    {
      number: '02',
      title: 'Resin Formation',
      description: 'Through natural processes, the trees develop the precious aromatic resin that transforms the heartwood into valuable agarwood.'
    },
    {
      number: '03',
      title: 'Harvesting',
      description: 'Using sustainable practices and deep knowledge passed through generations, we carefully harvest the resin-rich wood at its peak.'
    },
    {
      number: '04',
      title: 'Distillation',
      description: 'The agarwood undergoes traditional steam distillation, a meticulous process that extracts the pure, precious oud oil.'
    }
  ];

  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-primary">
            From Tree to Treasure
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey of patience, expertise, and reverence for nature
          </p>
        </div>

        {/* Process Image */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl mb-16">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1681438080729-5c62d90f9416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ2Fyd29vZCUyMHJlc2luJTIwdGV4dHVyZXxlbnwxfHx8fDE3NzYzNzgyODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Agarwood Resin Texture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent"></div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-bold text-primary/10 mb-4">
                {step.number}
              </div>
              <h4 className="mb-3 text-primary">
                {step.title}
              </h4>
              <p className="text-muted-foreground">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-border"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
