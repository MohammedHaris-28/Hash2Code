import {
  ExternalLink,
  Globe,
  Database,
  Smartphone,
  BarChart3,
} from "lucide-react";

interface Project {
  title: string;
  type: string;
  description: string;
  technologies: string[];
  features: string[];
  url?: string;
  icon: JSX.Element;
  order: number;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "PulsPense",
      type: "Expense Tracker App",
      description:
        "Feature-rich money tracking app with offline support and Google Drive backup support.",
      technologies: ["Flutter", "SQLite", "Google Drive API"],
      features: [
        "PDF Reports",
        "Spend Analysis & Graphs",
        "EMI Reminder",
        "Custom Theming",
        "Receipt Image Saving",
        "Barcode Scanning",
        "Offline Support",
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      order: 0,
    },

    {
      title: "SMVGSC Library",
      type: "Website",
      description:
        "Informative website for Sir MV Government Science College Library with modern UI and responsive design.",
      technologies: ["TypeScript", "React", "Tailwind CSS"],
      features: [
        "Responsive Design",
        "Modern UI",
        "Library Information",
        "Smooth Navigation",
      ],
      url: "https://sirmvgsclibrary.netlify.app/",
      icon: <Globe className="w-8 h-8" />,
      order: 1,
    },

    {
      title: "#2Code",
      type: "Website",
      description: "Informative website showcasing #2Code projects and works.",
      technologies: ["TypeScript", "React", "Tailwind CSS"],
      features: [
        "Project Showcase",
        "Modern Design",
        "Responsive Layout",
      ],
      icon: <Globe className="w-8 h-8" />,
      order: 2,
    },

    {
      title: "BloodSync",
      type: "Website",
      description:
        "Online blood donor directory and blood request management platform.",
      technologies: ["TypeScript", "React", "Supabase"],
      features: [
        "Blood Donor Directory",
        "Blood Request Portal",
        "Authentication",
        "Realtime Database",
      ],
      url: "https://bloodsyncproject.vercel.app/",
      icon: <Database className="w-8 h-8" />,
      order: 3,
    },

    {
      title: "#2Code Restaurant Systems",
      type: "Web App",
      description:
        "QR Menu, Restaurant POS and management system for modern restaurants.",
      technologies: ["TypeScript", "React", "Supabase"],
      features: [
        "QR Menu",
        "Restaurant POS",
        "Order Management",
        "Analytics",
        "Management Dashboard",
      ],
      url: "https://hash2codetools.netlify.app/",
      icon: <Database className="w-8 h-8" />,
      order: 4,
    },

    {
      title: "Architects Portfolio Website",
      type: "Website",
      description:
        "Portfolio website for architects with useful construction calculators and service sections.",
      technologies: ["TypeScript", "React"],
      features: [
        "Bricks Calculator",
        "Tiles Calculator",
        "Area Calculator",
        "Material Calculator",
        "Staircase Calculator",
        "Portfolio Showcase",
      ],
      url: "https://engineerswebsite.netlify.app/",
      icon: <Smartphone className="w-8 h-8" />,
      order: 5,
    },
  ];

  const sortedProjects = [...projects].sort(
    (a, b) => a.order - b.order
  );

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-display font-bold">
              Our <span className="text-gradient">Projects</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              We build modern digital products including websites, web apps,
              mobile apps and management systems focused on performance,
              usability and real-world impact.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {sortedProjects.map((project, index) => (
              <div
                key={project.order}
                className="glass rounded-3xl p-8 hover:glow transition-all duration-500 group hover:-translate-y-2 animate-scale-in border border-white/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Top */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:glow-accent transition-all"
                      aria-label={`${project.title} website`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>

                {/* Title */}
                <div className="mb-5">
                  <h2 className="text-2xl font-display font-bold mb-2">
                    {project.title}
                  </h2>

                  <p className="text-accent font-medium mb-3">
                    {project.type}
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3 text-lg">
                    Key Features
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-sm text-accent"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="font-semibold mb-3 text-lg">
                    Tech Stack
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg glass text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                {project.url && (
                  <div className="mt-8">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl gradient-primary font-medium hover:glow transition-all"
                    >
                      Visit Project
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-display font-bold">
              Have a <span className="text-gradient">Project Idea?</span>
            </h2>

            <p className="text-xl text-muted-foreground">
              We design and develop modern websites, applications and digital
              systems tailored to your business needs.
            </p>

            <a
              href="mailto:hash2codeteam@gmail.com"
              className="inline-block px-8 py-4 rounded-2xl gradient-primary font-semibold hover:glow transition-all"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;