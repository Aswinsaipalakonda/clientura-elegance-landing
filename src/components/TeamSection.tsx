import { Card, CardContent } from "@/components/ui/card";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Sarah Mitchell",
      title: "CEO & Founder",
      description: "Visionary leader with 15+ years in strategic consulting",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=300&h=400"
    },
    {
      name: "David Chen",
      title: "Head of Technology",
      description: "Innovation expert driving digital transformation",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=400"
    },
    {
      name: "Emily Rodriguez",
      title: "Legal Counsel",
      description: "Expert in corporate law and compliance management",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=400"
    },
    {
      name: "Michael Thompson",
      title: "Financial Advisor",
      description: "Strategic financial planning and investment specialist",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&h=400"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Expert Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the passionate professionals dedicated to your success. Our diverse team brings together decades of experience across multiple industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium mb-3">
                    {member.title}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {member.description}
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

export default TeamSection;