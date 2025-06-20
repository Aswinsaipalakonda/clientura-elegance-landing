import { Button } from "@/components/ui/button";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Custom Hero Component with Clientura branding */}
      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-clientura-navy to-clientura-navy/90">
        {/* Background decoration with brand colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-clientura-gold/[0.08] via-transparent to-clientura-gold/[0.05] blur-3xl" />

        {/* Geometric shapes with brand colors */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: -150, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: 12 }}
            transition={{ duration: 2.4, delay: 0.3, ease: [0.23, 0.86, 0.39, 0.96] }}
            className="absolute left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="w-[600px] h-[140px] relative"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-clientura-gold/[0.15] to-transparent backdrop-blur-[2px] border-2 border-clientura-gold/[0.2] shadow-[0_8px_32px_0_rgba(217,169,0,0.15)]" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -150, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: -15 }}
            transition={{ duration: 2.4, delay: 0.5, ease: [0.23, 0.86, 0.39, 0.96] }}
            className="absolute right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="w-[500px] h-[120px] relative"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-clientura-light/[0.12] to-transparent backdrop-blur-[2px] border-2 border-clientura-light/[0.2] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -150, rotate: 7 }}
            animate={{ opacity: 1, y: 0, rotate: -8 }}
            transition={{ duration: 2.4, delay: 0.4, ease: [0.23, 0.86, 0.39, 0.96] }}
            className="absolute left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="w-[300px] h-[80px] relative"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-clientura-gold/[0.1] to-transparent backdrop-blur-[2px] border-2 border-clientura-gold/[0.15] shadow-[0_8px_32px_0_rgba(217,169,0,0.1)]" />
            </motion.div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <h1 className="font-playfair text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                  CLIENTURA
                </span>
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <h2 className="font-playfair text-2xl md:text-4xl font-medium mb-8 bg-clip-text text-transparent bg-gradient-to-r from-clientura-gold via-clientura-light to-clientura-gold">
                Strategize. Innovate. Elevate.
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <p className="text-base sm:text-lg md:text-xl text-white/60 mb-12 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4">
                Transforming businesses through strategic consultancy, innovative solutions, and sustainable growth partnerships.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <Button 
                onClick={scrollToServices}
                size="lg"
                className="bg-clientura-gold hover:bg-clientura-gold/90 text-clientura-navy px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore Services
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-clientura-navy via-transparent to-clientura-navy/80 pointer-events-none" />
      </div>
    </div>
  );
};

export default HeroSection;