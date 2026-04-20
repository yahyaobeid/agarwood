import React from "react";

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="text-center">
            <h3 className="text-2xl mb-4 text-primary">Cao Agarwood Estate</h3>
            <p className="text-muted-foreground">
              Authentic Agarwood oud oil from our family estate in China. 
              Cultivated with care, distilled with tradition.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>© 2026 Cao Agarwood Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
