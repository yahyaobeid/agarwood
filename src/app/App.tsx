import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Product } from './components/Product';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="size-full">
      <a
        href="#contact"
        className="fixed top-0 right-4 z-50 bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-b-md shadow-lg hover:opacity-90 transition-opacity"
      >
        Contact Us
      </a>
      <Hero />
      <Product />
      <Story />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}