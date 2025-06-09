import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MOUSection from "@/components/MOUSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <MOUSection />
      <ServicesSection />
      <TeamSection />
      <WhyChooseUsSection />
      <ContactSection />
    </div>
  );
};

export default Index;