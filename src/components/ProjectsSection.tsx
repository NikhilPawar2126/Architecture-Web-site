import { Calendar, MapPin, Award, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProjects } from "@/hooks/useProjects";
import ProjectGallery from "./ProjectGallery";
import { useState } from "react";

const ProjectsSection = () => {
  const { projects, isLoading } = useProjects();
  const [selectedProject, setSelectedProject] = useState<{ title: string; images: string[] } | null>(null);

  // Fallback projects if database is empty or there's an error
  const fallbackProjects = [
    {
      id: "fallback-1",
      title: "Modern Villa Design", 
      category: "Residential" as const,
      location: "Vadodara",
      year: "2024",
      description: "A contemporary 3-bedroom villa featuring clean lines, natural materials, and seamless indoor-outdoor living spaces.",
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      created_at: "2024-01-01"
    },
    {
      id: "fallback-2",
      title: "Luxury Apartment Interior",
      category: "Residential" as const, 
      location: "Surat",
      year: "2024",
      description: "Elegant 2-bedroom apartment with modern minimalist design, premium finishes, and smart storage solutions.",
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      created_at: "2024-01-01"
    },
    {
      id: "fallback-3",
      title: "Contemporary Office Space",
      category: "Commercial" as const,
      location: "Ahmedabad", 
      year: "2023",
      description: "Modern office design with open workspace, collaborative areas, and sustainable design elements for productivity.",
      images: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      created_at: "2024-01-01"
    }
  ];

  const displayProjects = projects.length > 0 ? projects : fallbackProjects;

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            My Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my portfolio showcasing residential and commercial design expertise 
            with unique vision and meticulous attention to detail.
          </p>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading projects...</p>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {displayProjects.map((project) => (
            <div 
              key={project.id} 
              className="card-elegant rounded-2xl overflow-hidden bg-card group cursor-pointer"
              onClick={() => setSelectedProject({ title: project.title, images: project.images })}
            >
              <div className="relative">
                <img 
                  src={project.images[0]} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-smooth group-hover:scale-105"
                />
                <div className="project-overlay">
                  <Button 
                    variant="secondary" 
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-smooth"
                  >
                    <ImageIcon className="mr-2 h-4 w-4" />
                    View Photos ({project.images.length})
                  </Button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.category === 'Residential' 
                      ? 'bg-accent text-accent-foreground' 
                      : 'bg-secondary text-secondary-foreground'
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {project.year}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {project.location}
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-bold text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <Button 
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject({ title: project.title, images: project.images });
                  }}
                >
                  <ImageIcon className="mr-2 h-3 w-3" />
                  View Photos ({project.images.length})
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Gallery Modal */}
        {selectedProject && (
          <ProjectGallery
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            images={selectedProject.images}
            title={selectedProject.title}
          />
        )}

      </div>
    </section>
  );
};

export default ProjectsSection;