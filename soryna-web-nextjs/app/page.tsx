import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Contact from '@/components/sections/Contact';
import MvpPlanner from '@/components/sections/MvpPlanner';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <MvpPlanner />
      <Portfolio />
      <Contact />
    </>
  );
}
