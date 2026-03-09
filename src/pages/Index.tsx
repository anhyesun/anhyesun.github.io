import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { SpeakingSection } from '@/components/SpeakingSection';
import { PressSection } from '@/components/PressSection';
import { AwardsSection } from '@/components/AwardsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SpeakingSection />
        <PressSection />
        <AwardsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
