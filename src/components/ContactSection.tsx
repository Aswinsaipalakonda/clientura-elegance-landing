import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to a server
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business? Let's start a conversation about how Clientura can help you achieve your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="fade-in-up stagger-1">
              <h3 className="font-playfair text-2xl font-semibold text-primary mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8">
                We're here to answer your questions and discuss how we can work together to elevate your business to new heights.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Email</p>
                    <p className="text-muted-foreground">contact@clientura.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Office</p>
                    <p className="text-muted-foreground">123 Business Avenue<br />Suite 100, City, State 12345</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-0 shadow-xl fade-in-up stagger-2">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-primary font-medium">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2 border-border focus:ring-accent"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-primary font-medium">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2 border-border focus:ring-accent"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="company" className="text-primary font-medium">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-2 border-border focus:ring-accent"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-primary font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 border-border focus:ring-accent min-h-[120px]"
                      placeholder="Tell us about your project or how we can help..."
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;