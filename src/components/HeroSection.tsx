import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-architecture.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Modern architectural design" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
              Creating Spaces That
              <span className="block hero-text-gradient">
                Tell Your Story
              </span>
            </h1>
          </div>

          {/* Professional Details */}
          <div className="mb-8 text-xl text-white/90 max-w-2xl leading-relaxed">
            <p className="mb-4">
              Architect & Interior Designer with 6+ years of experience 
              transforming spaces with purpose, style, and functionality.
            </p>
            <p>
              From residential homes to commercial spaces, I blend aesthetics 
              with purpose to create environments that inspire and endure.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-lg">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-accent/20 rounded-lg mb-3 mx-auto">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-white">6+</div>
              <div className="text-sm text-white/70">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-accent/20 rounded-lg mb-3 mx-auto">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-white/70">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-accent/20 rounded-lg mb-3 mx-auto">
                <Calendar className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-white">100+</div>
              <div className="text-sm text-white/70">Projects Done</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="btn-accent text-lg px-8 py-6 group"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 transition-smooth"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;