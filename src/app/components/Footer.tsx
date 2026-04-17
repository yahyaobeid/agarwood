import React from "react";

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl mb-4 text-primary">Family Oud</h3>
            <p className="text-muted-foreground">
              Authentic Agarwood oud oil from our family estate in China. 
              Cultivated with care, distilled with tradition.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-primary">Our Heritage</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Family Estate</li>
              <li>Traditional Methods</li>
              <li>Sustainable Practices</li>
              <li>Pure Authenticity</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-primary">Learn More</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>About Agarwood</li>
              <li>Our Process</li>
              <li>Quality Standards</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>© 2026 Family Oud. All rights reserved. Preserving tradition, sharing nature's treasure.</p>
        </div>
      </div>
    </footer>
  );
}
