import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, Handshake, Target } from "lucide-react";

const MOUSection = () => {
  const benefits = [
    {
      icon: <CheckCircle className="h-8 w-8 text-accent" />,
      title: "Structured Collaboration",
      description: "Clear frameworks and defined roles for seamless project execution and accountability."
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Legal Protection",
      description: "Comprehensive legal safeguards protecting both parties' interests and intellectual property."
    },
    {
      icon: <Handshake className="h-8 w-8 text-accent" />,
      title: "Long-term Partnership",
      description: "Foundation for lasting business relationships with mutual growth and success objectives."
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Clear Objectives",
      description: "Well-defined goals, timelines, and deliverables ensuring project success and satisfaction."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
              Memorandum of Understanding
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Establish a solid foundation for our partnership with a comprehensive MoU that ensures mutual success and clear expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-card rounded-2xl p-8 shadow-xl fade-in-up">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-playfair text-2xl font-semibold text-primary mb-4">
                  Why Sign an MoU with Clientura?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our Memorandum of Understanding serves as the cornerstone of our professional relationship, establishing clear guidelines, expectations, and mutual commitments that benefit both parties.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    Risk mitigation and legal clarity
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    Streamlined communication channels
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    Performance benchmarks and KPIs
                  </li>
                </ul>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=500&h=300"
                  alt="MOU Benefits"
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MOUSection;