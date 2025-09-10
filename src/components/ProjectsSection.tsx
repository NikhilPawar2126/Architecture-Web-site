import { ExternalLink, Calendar, MapPin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const project = {
    id: 1,
    title: "Modern Villa Design", 
    category: "Residential",
    location: "Vadodara",
    year: "2024",
    description: "A contemporary 3-bedroom villa featuring clean lines, natural materials, and seamless indoor-outdoor living spaces.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    houzzLink: "https://www.houzz.in/pro/interior-23design/interior-23design"
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Featured Project
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my recent work showcasing residential design expertise 
            with unique vision and meticulous attention to detail.
          </p>
        </div>

        {/* Single Featured Project */}
        <div className="max-w-6xl mx-auto">
          <div className="card-elegant rounded-2xl overflow-hidden bg-card">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-80 lg:h-full object-cover transition-smooth group-hover:scale-105"
                />
                <div className="project-overlay">
                  <Button 
                    variant="secondary" 
                    size="lg"
                    className="opacity-0 group-hover:opacity-100 transition-smooth"
                    onClick={() => window.open(project.houzzLink, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    View on Houzz
                  </Button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.year}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </div>
                  </div>
                  <h3 className="text-3xl font-display font-bold text-primary mb-4">
                    {project.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <Button 
                  className="btn-primary w-fit"
                  onClick={() => window.open(project.houzzLink, '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Project Details
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Award className="h-4 w-4" />
              View Complete Portfolio on Houzz
            </div>
            <p className="text-lg text-muted-foreground">
              See all my projects, client reviews, and detailed case studies on my official Houzz profile.
            </p>
          </div>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            onClick={() => window.open('https://www.houzz.in/pro/interior-23design/interior-23design', '_blank')}
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            Visit Houzz Profile
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;