import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Scale, Megaphone, Computer, Users, DollarSign } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Briefcase className="h-10 w-10 text-accent" />,
      title: "Business Consulting",
      description: "Strategic planning, operational efficiency, and growth optimization for sustainable business success."
    },
    {
      icon: <Scale className="h-10 w-10 text-accent" />,
      title: "Legal Advisory",
      description: "Comprehensive legal guidance, compliance management, and risk assessment for informed decision-making."
    },
    {
      icon: <Megaphone className="h-10 w-10 text-accent" />,
      title: "Marketing Strategy",
      description: "Data-driven marketing campaigns, brand positioning, and customer acquisition strategies."
    },
    {
      icon: <Computer className="h-10 w-10 text-accent" />,
      title: "IT Solutions",
      description: "Digital transformation, system integration, and technology consulting for modern businesses."
    },
    {
      icon: <Users className="h-10 w-10 text-accent" />,
      title: "HR Consulting",
      description: "Talent acquisition, organizational development, and performance management solutions."
    },
    {
      icon: <DollarSign className="h-10 w-10 text-accent" />,
      title: "Financial Planning",
      description: "Financial analysis, budgeting strategies, and investment planning for long-term stability."
    }
  ];

  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive consultancy services designed to address every aspect of your business needs and drive sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-accent/10 rounded-full">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;