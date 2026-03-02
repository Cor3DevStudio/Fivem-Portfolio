import { Hero } from '@/components/Hero';
import { Contributions } from '@/components/Contributions';
import { TechStack } from '@/components/TechStack';
import { Products } from '@/components/Products';

export function HomePage() {
  return (
    <>
      <Hero />
      <section className="section section-contributions">
        <div className="container contributions-grid">
          <Contributions />
          <TechStack />
        </div>
      </section>
      <Products />
    </>
  );
}
