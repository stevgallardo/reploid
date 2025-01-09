import { PixelBackground } from '@/components/PixelBackground'; // Import the background component
import { Hero } from '@/components/hero';
import { FreeConsultation } from '@/components/free-consultation';
import { Operations } from '@/components/operations';
import { Features } from '@/components/features';
import { Testimonials } from '@/components/testimonials';
import { Pricing } from '@/components/pricing';
import { CTA } from '@/components/cta';
import { Footer } from '@/components/footer';
import { Metrics } from '@/components/metrics';

export default function Home() {
  return (
    <main className="relative flex justify-center">
      <PixelBackground /> {/* Add the background animation here */}
      <div className="w-full max-w-7xl px-4">
        <Hero />
        <Metrics />
        <FreeConsultation />
        <Features />
        <Testimonials />
        <Pricing />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
