import { ExternalLink, Calendar, MapPin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Villa Design", 
      category: "Residential",
      location: "Vadodara",
      year: "2024",
      description: "A contemporary 3-bedroom villa featuring clean lines, natural materials, and seamless indoor-outdoor living spaces.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      houzzLink: "https://www.houzz.in/pro/interior-23design/interior-23design",
      featured: true
    },
    {
      id: 2,
      title: "Corporate Office Interior",
      category: "Commercial", 
      location: "Ahmedabad",
      year: "2024",
      description: "Professional workspace design focused on productivity and employee well-being with modern furnishings and optimal lighting.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      houzzLink: "https://www.houzz.in/pro/interior-23design/interior-23design"
    },
    {
      id: 3,
      title: "Luxury Apartment Renovation",
      category: "Residential",
      location: "Surat", 
      year: "2023",
      description: "Complete transformation of a 2BHK apartment with custom storage solutions and elegant material palette.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      houzzLink: "https://www.houzz.in/pro/interior-23design/interior-23design"
    },
    {
      id: 4,
      title: "Retail Showroom Design",
      category: "Commercial",
      location: "Rajkot",
      year: "2023", 
      description: "Inviting retail space design that enhances customer experience and showcases products effectively.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      houzzLink: "https://www.houzz.in/pro/interior-23design/interior-23design"
    },
    {
      id: 5,
      title: "Traditional Home Revival",
      category: "Residential",
      location: "Junagadh",
      year: "2023",
      description: "Restoration and modernization of a heritage home while preserving its traditional character and charm.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      houzzLink: "https://www.houzz.in/pro/interior-23design/interior-23design"
    },
    {
      id: 6,
      title: "Minimalist Studio Apartment", 
      category: "Residential",
      location: "Gandhinagar",
      year: "2023",
      description: "Smart space planning for a compact studio apartment maximizing functionality without compromising on style.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      houzzLink: "https://www.houzz.in/pro/interior-23design/interior-23design"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore a selection of my recent work spanning residential and commercial projects 
            across Gujarat, each designed with unique vision and meticulous attention to detail.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16">
          {projects.filter(p => p.featured).map((project) => (
            <div key={project.id} className="card-elegant rounded-2xl overflow-hidden bg-card">
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
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(p => !p.featured).map((project) => (
            <div key={project.id} className="card-elegant rounded-xl overflow-hidden bg-card group">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-smooth group-hover:scale-105"
                />
                <div className="project-overlay">
                  <Button 
                    variant="secondary"
                    onClick={() => window.open(project.houzzLink, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                    {project.category}
                  </span>
                  <span>•</span>
                  <span>{project.year}</span>
                  <span>•</span> 
                  <span>{project.location}</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-primary mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
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