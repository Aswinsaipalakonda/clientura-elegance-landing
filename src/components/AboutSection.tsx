const AboutSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-8 fade-in-up">
            About Clientura
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up stagger-1">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&h=400"
                alt="Our Team"
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
            </div>
            
            <div className="text-left fade-in-up stagger-2">
              <h3 className="font-playfair text-2xl font-semibold text-primary mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At Clientura, we envision a world where every business reaches its full potential through strategic innovation and collaborative partnerships. We believe in transforming challenges into opportunities.
              </p>
              
              <h3 className="font-playfair text-2xl font-semibold text-primary mb-4">
                Our Values
              </h3>
              <ul className="text-muted-foreground space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Excellence in every engagement
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Innovation-driven solutions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Transparency and trust
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Long-term partnerships
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;