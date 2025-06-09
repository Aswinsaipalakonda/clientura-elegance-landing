import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto fade-in">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/9c215b1a-3889-4b8e-993e-f247e5a03e1d.png"
              alt="Clientura Logo"
              className="h-32 w-auto object-contain"
            />
          </div>
          
          {/* Main heading */}
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-primary mb-6 fade-in-up stagger-1">
            CLIENTURA
          </h1>
          
          {/* Tagline */}
          <h2 className="font-playfair text-2xl md:text-3xl text-accent font-medium mb-8 fade-in-up stagger-2">
            Strategize. Innovate. Elevate.
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto fade-in-up stagger-3">
            Transforming businesses through strategic consultancy, innovative solutions, and sustainable growth partnerships.
          </p>
          
          {/* CTA Button */}
          <div className="fade-in-up stagger-4">
            <Button 
              onClick={scrollToServices}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;