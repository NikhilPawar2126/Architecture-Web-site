import { Mail, Phone, MapPin, ExternalLink, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const locations = [
    "Vadodara", "Ahmedabad", "Gandhinagar", 
    "Junagadh", "Rajkot", "Surat"
  ];

  const services = [
    "Architectural Design",
    "Interior Design", 
    "Space Planning",
    "3D Visualization",
    "Project Management",
    "Consultation"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="font-display font-bold text-2xl mb-4">
              Interior23Design
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Creating functional, elegant, and personalized spaces with 6+ years 
              of architectural and interior design expertise.
            </p>
            <div className="space-y-3">
              <a 
                href="mailto:interior23design@gmail.com"
                className="flex items-center text-primary-foreground/80 hover:text-accent transition-smooth"
              >
                <Mail className="h-4 w-4 mr-3" />
                interior23design@gmail.com
              </a>
              <a 
                href="tel:+918141698614"
                className="flex items-center text-primary-foreground/80 hover:text-accent transition-smooth"
              >
                <Phone className="h-4 w-4 mr-3" />
                +91 8141698614
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-primary-foreground/80 hover:text-accent transition-smooth cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {locations.map((location, index) => (
                <li key={index} className="flex items-center">
                  <MapPin className="h-3 w-3 mr-2 text-accent" />
                  <span className="text-primary-foreground/80">{location}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio & Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Portfolio</h4>
            <div className="space-y-4">
              <a
                href="https://www.houzz.in/pro/interior-23design/interior-23design"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary-foreground/80 hover:text-accent transition-smooth"
              >
                <ExternalLink className="h-4 w-4 mr-3" />
                View on Houzz
              </a>
              <div className="pt-4">
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  Ready to transform your space? Let's discuss your vision and 
                  create something beautiful together.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-primary-foreground/80 text-sm">
              <span>© {currentYear} Interior23Design. Made with</span>
              <Heart className="h-4 w-4 mx-1 text-accent fill-current" />
              <span>for beautiful spaces.</span>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-primary-foreground/60 text-sm">
                Architect & Interior Designer | Gujarat, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;