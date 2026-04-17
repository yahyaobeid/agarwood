import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Product } from './components/Product';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="size-full">
      <Hero />
      <Story />
      <Product />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}