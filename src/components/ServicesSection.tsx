import { Building, Home, RefreshCw, Layout, Box, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Building,
      title: "Architectural Design & Planning",
      description: "Complete architectural solutions from concept to construction, including structural planning and building permits.",
      features: ["Site Analysis", "Construction Documents", "Permit Assistance", "Project Management"]
    },
    {
      icon: Home,
      title: "Interior Design",
      description: "Residential and commercial interior design that reflects your style while maximizing functionality.",
      features: ["Space Planning", "Material Selection", "Furniture Design", "Color Coordination"]
    },
    {
      icon: RefreshCw,
      title: "Renovation & Re-styling",
      description: "Transform existing spaces with thoughtful renovations that breathe new life into your environment.",
      features: ["Space Transformation", "Modern Updates", "Structural Changes", "Style Refresh"]
    },
    {
      icon: Layout,
      title: "Space Planning & Layout Optimization",
      description: "Maximize your space's potential through strategic planning and intelligent layout solutions.",
      features: ["Flow Analysis", "Furniture Layout", "Storage Solutions", "Traffic Patterns"]
    },
    {
      icon: Box,
      title: "3D Design & Visualization",
      description: "See your project come to life before construction with detailed 3D models and realistic renderings.",
      features: ["3D Modeling", "Photorealistic Renders", "Virtual Walkthrough", "Material Previews"]
    },
    {
      icon: Eye,
      title: "Project Supervision & Support",
      description: "End-to-end project management ensuring your vision is executed perfectly from start to finish.",
      features: ["Quality Control", "Timeline Management", "Vendor Coordination", "Final Styling"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Services I Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to completion, I provide comprehensive design services 
            tailored to bring your vision to life with precision and style.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card card-elegant p-8 rounded-xl bg-card group"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-smooth accent-glow">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
              </div>

              {/* Content */}
              <div className="mb-6">
                <h3 className="text-xl font-display font-semibold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-8">
            Ready to start your project? Let's discuss your vision and bring it to life.
          </p>
          <a href="#contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-smooth text-lg px-8 py-6">
              Get Free Consultation
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;