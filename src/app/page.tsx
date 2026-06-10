import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Podcast from '@/components/Podcast';
import Achievements from '@/components/Achievements';
import Books from '@/components/Books';
import HouseOfX from '@/components/HouseOfX';
import Speaking from '@/components/Speaking';
import SocialProof from '@/components/SocialProof';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Podcast />
      <SectionDivider />
      <Achievements />
      <SectionDivider />
      <Books />
      <SectionDivider />
      <HouseOfX />
      <SectionDivider />
      <Speaking />
      <SectionDivider />
      <SocialProof />
      <SectionDivider />
      <Contact />
      <Footer />
    </main>
  );
}
