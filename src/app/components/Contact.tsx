import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-6">
          Experience Pure Agarwood
        </h2>
        <p className="text-xl mb-12 opacity-90">
          Interested in our premium oud oil? We'd love to share our family's 
          legacy with you. Contact us to learn more about our products and heritage.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-primary-foreground/10 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h4 className="mb-2">Email</h4>
            <p className="opacity-80">contact@familyoud.com</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-primary-foreground/10 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="mb-2">Location</h4>
            <p className="opacity-80">Family Estate, China</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-primary-foreground/10 rounded-full flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h4 className="mb-2">Phone</h4>
            <p className="opacity-80">+86 XXX XXX XXXX</p>
          </div>
        </div>

        <button className="bg-primary-foreground text-primary px-8 py-4 rounded-lg hover:bg-primary-foreground/90 transition-all duration-300">
          Get In Touch
        </button>
      </div>
    </section>
  );
}
