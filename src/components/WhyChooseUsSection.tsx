import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Shield, Clock, Users2, Lightbulb } from "lucide-react";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Expert Advisors",
      description: "Industry-leading professionals with proven track records"
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Tailored Solutions",
      description: "Customized strategies designed for your unique business needs"
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Confidential & Trusted",
      description: "Highest standards of privacy and data security"
    },
    {
      icon: <Clock className="h-8 w-8 text-accent" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance when you need it most"
    },
    {
      icon: <Users2 className="h-8 w-8 text-accent" />,
      title: "Collaborative Approach",
      description: "Working together as partners in your success"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-accent" />,
      title: "Innovation-Driven",
      description: "Cutting-edge solutions for tomorrow's challenges"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
              Why Choose Clientura?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We stand apart through our commitment to excellence, innovation, and building lasting partnerships that drive meaningful results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent/10 rounded-full shrink-0">
                      {reason.icon}
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-semibold text-primary mb-3">
                        {reason.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid md:grid-cols-3 gap-8 text-center fade-in-up">
            <div className="p-8">
              <div className="text-4xl font-playfair font-bold text-accent mb-2">500+</div>
              <p className="text-muted-foreground">Successful Projects</p>
            </div>
            <div className="p-8">
              <div className="text-4xl font-playfair font-bold text-accent mb-2">98%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="p-8">
              <div className="text-4xl font-playfair font-bold text-accent mb-2">15+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;