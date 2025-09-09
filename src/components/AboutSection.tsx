import { Building2, Home, Palette, Ruler, GraduationCap, MapPin } from "lucide-react";

const AboutSection = () => {
  const expertise = [
    {
      icon: Building2,
      title: "Architecture",
      description: "Complete architectural design and planning for residential and commercial projects"
    },
    {
      icon: Home,
      title: "Interior Design", 
      description: "Transforming interiors with thoughtful design that reflects your personality"
    },
    {
      icon: Palette,
      title: "Space Planning",
      description: "Optimizing layouts for functionality, flow, and aesthetic appeal"
    },
    {
      icon: Ruler,
      title: "3D Visualization",
      description: "Bringing designs to life with detailed 3D models and renderings"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Hello! I'm a dedicated Architect and Interior Designer with over six years 
                of experience in creating functional, elegant, and personalized spaces. 
                With a strong foundation in both architecture and interior design, my work 
                bridges the gap between structure and style.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My goal in every project is simple: <strong>design with purpose</strong>. 
                I believe that every space should tell a story — your story — and reflect 
                the people who live or work in it.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether it's a modern minimalist home, a vibrant workspace, or a cozy 
                remodel, I focus on blending aesthetics with functionality, comfort, 
                and attention to detail.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="card-elegant p-6 rounded-xl bg-card">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-4 w-4 text-accent" />
                  </div>
                  <h4 className="font-semibold text-primary">Education</h4>
                </div>
                <p className="text-muted-foreground">Architecture & Interior Design</p>
              </div>
              <div className="card-elegant p-6 rounded-xl bg-card">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-accent" />
                  </div>
                  <h4 className="font-semibold text-primary">Location</h4>
                </div>
                <p className="text-muted-foreground">Gujarat, India</p>
              </div>
            </div>
          </div>

          {/* Expertise Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-semibold text-primary mb-8">
              Areas of Expertise
            </h3>
            <div className="grid gap-6">
              {expertise.map((item, index) => (
                <div key={index} className="card-elegant p-6 rounded-xl bg-card group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-smooth">
                        <item.icon className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;