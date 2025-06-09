import { Home, User, FileText, Briefcase } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MOUSection from "@/components/MOUSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const navItems = [
    { name: 'Home', url: '#hero', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Services', url: '#services', icon: Briefcase },
    { name: 'Contact', url: '#contact', icon: FileText }
  ];

  return (
    <div className="min-h-screen">
      <NavBar items={navItems} />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="mou">
        <MOUSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="team">
        <TeamSection />
      </div>
      <div id="why-choose">
        <WhyChooseUsSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;