import { ImageWithFallback } from './figma/ImageWithFallback';

export function Process() {
  const steps = [
    {
      number: '01',
      title: 'Cultivation',
      description: 'We grow Agarwood trees across our family estate, carefully managing spacing, nutrition, and airflow to give each tree the best conditions to mature.'
    },
    {
      number: '02',
      title: 'Wounding',
      description: 'Once the trees have matured, we create precise wounds — holes drilled or saw cuts made into the trunk. The tree responds by producing a dense, aromatic resin to heal itself. This resin is the heart of agarwood.'
    },
    {
      number: '03',
      title: 'Harvesting',
      description: 'We wait until the resin has fully saturated the wounded wood before harvesting. Only then is the agarwood rich enough in fragrance compounds to yield a premium oil.'
    },
    {
      number: '04',
      title: 'Steam Distillation',
      description: 'The harvested wood is placed into a steam distillation vessel. Steam passes through the wood, carrying the aromatic oil with it. As it cools and condenses, the pure oud oil is separated and collected.'
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

        {/* Process Images */}
        <div className="grid grid-cols-2 gap-4 mb-16">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="/Agarwood_wounds.png"
              alt="Wounded agarwood tree trunks producing fragrant resin for oud oil extraction"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="/Agarwood_chips.png"
              alt="Harvested agarwood chips ready for steam distillation into oud oil"
              className="w-full h-full object-cover"
            />
          </div>
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
