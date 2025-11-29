import { Calendar, MapPin, Award, ImageIcon, AreaChart } from "lucide-react";
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
      title: "Modern Home Design",
      category: "Residential" as const,
      location: "Ganthinagar",
      year: "2022",
      Area: "810 sq ft",
      description: "The design offers a modern, spacious layout with vibrant accents, creating a stylish, functional, and energetic home for the young couple.",
      images: [
        "/photos/R1.jpg",
        "/photos/R2.jpg",
        "/photos/R2,2.jpg",
        "/photos/R3.jpg",
        "/photos/R4.jpg",
        "/photos/R5.jpg",
        "/photos/R6.jpg",
        "/photos/R7.jpg",
        "/photos/R8.jpg",
        "/photos/R9.jpg",
      ],
      created_at: "2024-01-01"
    },

    {
      id: "fallback-2",
      title: "Office Interior",
      category: "Commercial" as const,
      location: "Vadodara",
      year: "2023",
      Area: "200 sq ft",
      description: "Modern small office with director's desk, staff desks, pantry, waiting area, and geometric accents.",
      images: [
        "/photos/C1.jpg",
        "/photos/C2.jpg",
        "/photos/C3.jpg",
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
        <div
          className="grid gap-8 justify-center 
             max-w-7xl mx-auto 
             grid-cols-[repeat(auto-fit,minmax(300px,1fr))]"
        >
          {displayProjects.map((project) => (
            <div
              key={project.id}
              className="card-elegant rounded-2xl overflow-hidden bg-card group cursor-pointer"
              onClick={() =>
                setSelectedProject({ title: project.title, images: project.images })
              }
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
                    View Photos 
                  </Button>
                </div>
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${project.category === "commercial" || project.category === "Commercial"  || project.category === "residential" || project.category === "Residential"  
                        ? "bg-accent text-accent-foreground"
                        : "bg-secondary text-secondary-foreground"
                      }`}
                  >
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
                    <div className="flex items-center">
                      <AreaChart className="h-3 w-3 mr-1" />
                      {project.Area ? project.Area : "N/A"}
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-bold text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
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