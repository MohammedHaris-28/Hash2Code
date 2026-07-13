import React from "react";
import { 
  ExternalLink, 
  Globe, 
  Database, 
  Smartphone, 
  BarChart3, 
  Flame, 
  Coffee,
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";

interface Project {
  title: string;
  type: string;
  description: string;
  technologies: string[];
  features: string[];
  url?: string;
  icon: React.ComponentType<{ className?: string }>;
  order: number;
  // Added image property for your hero screenshots
  imageUrl?: string; 
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "PulsPense",
      type: "Expense Tracker App",
      description: "Feature-rich money tracking app with offline support and Google Drive backup support.",
      technologies: ["Flutter", "SQLite", "Google Drive API"],
      features: [
        "PDF Reports",
        "Spend Analysis & Graphs",
        "EMI Reminder",
        "Offline Support",
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      order: 0,
      imageUrl: "/src/assets/pulspense.png" // Swap with your actual image path
    },
    {
      title: "ThunderFitness Gym",
      type: "Website",
      description: "A premium, high-octane fitness portal tracking gym memberships, personalized training packages, and virtual facility exploration.",
      technologies: ["TypeScript", "React", "Tailwind CSS"],
      features: [
        "Membership Enrollment Matrix",
        "Trainer Showcase Carousel",
        "Dynamic Class Schedules",
      ],
      url: "https://thunderfitnessbdvt.netlify.app/",
      icon: Flame,
      order: 1,
      imageUrl: "/src/assets/thunderfitness.png" // Swap with your actual image path
    },
    {
      title: "Malenadu Aroma",
      type: "Website",
      description: "E-commerce digital storefront optimized for regional coffee, spice discovery, and interactive ordering workflows.",
      technologies: ["TypeScript", "React", "Tailwind CSS"],
      features: [
        "Interactive Product Showcase",
        "Secure Order Management Interface",
        "Regional Sourcing Map System",
      ],
      url: "https://malenaduaroma.netlify.app/",
      icon: Coffee,
      order: 2,
      imageUrl: "/src/assets/malenadu aroma.png" // Swap with your actual image path
    },
    {
      title: "SMVGSC Library",
      type: "Website",
      description: "Informative website for Sir MV Government Science College Library with modern UI and responsive design.",
      technologies: ["TypeScript", "React", "Tailwind CSS"],
      features: [
        "Responsive Design",
        "Modern UI Layout",
        "Digital Catalog Information",
      ],
      url: "https://sirmvgsclibrary.netlify.app/",
      icon: Globe,
      order: 3,
      imageUrl: "/src/assets/sirmvgsc.png" // Swap with your actual image path
    },
    {
      title: "BloodSync",
      type: "Website",
      description: "Online blood donor directory and blood request management platform.",
      technologies: ["TypeScript", "React", "Supabase"],
      features: [
        "Blood Donor Directory Matrix",
        "Real-Time Request Portal",
        "Secure Access Authentication",
      ],
      url: "https://bloodsyncproject.vercel.app/",
      icon: Database,
      order: 5,
      imageUrl: "/src/assets/bloodsync.png" // Swap with your actual image path
    },
    {
      title: "#2Code-RestroSync",
      type: "Web App",
      description: "QR Menu, Restaurant POS and management system for modern restaurants.",
      technologies: ["TypeScript", "React", "Supabase"],
      features: [
        "Dynamic QR Menu Matrix",
        "Restaurant POS Terminal Core",
        "Real-Time Order Streams",
      ],
      url: "https://hash2codetools.netlify.app/",
      icon: Database,
      order: 6,
      imageUrl: "/src/assets/restrosync.png" // Swap with your actual image path
    },
    {
      title: "Architects Portfolio Website",
      type: "Website",
      description: "Portfolio website for architects with useful construction calculators and service sections.",
      technologies: ["TypeScript", "React"],
      features: [
        "Parametric Material Calculators",
        "Structural Brick & Tile Engines",
        "High-Fidelity Project Portfolios",
      ],
      url: "https://engineerswebsite.netlify.app/",
      icon: Smartphone,
      order: 7,
      imageUrl: "/src/assets/architecture.png" // Swap with your actual image path
    },
  ];

  const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-neutral-900 font-sans antialiased selection:bg-[#50DC7D]/30">
      
      {/* Hero Header */}
      <section className="relative pt-36 pb-20 bg-white border-b border-neutral-200/60 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-neutral-100 border border-neutral-200/80 px-3 py-1 rounded-full text-xs font-medium text-neutral-600">
              <span className="w-1.5 h-1.5 rounded-full bg-[#50DC7D]" />
              Production Track Registry
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
              Systems built to <br />
              <span className="relative inline-block mt-2">
                perform flawlessly
                <span className="absolute bottom-2 left-0 w-full h-[6px] bg-[#50DC7D]/80 rounded-full -z-10" />
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-neutral-500 max-w-xl mx-auto leading-relaxed">
              We engineer custom web applications, multi-tenant portals, and secure mobile platforms optimized for user retention.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Matrix Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {sortedProjects.map((project) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={project.order}
                  className="bg-white border border-neutral-200/80 rounded-2xl overflow-hidden hover:border-neutral-400 transition-all duration-300 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.01)] group"
                >
                  <div>
                    {/* Premium Image Frame wrapper (Browser mockup style) */}
                    <div className="relative aspect-[16/10] bg-neutral-100 w-full overflow-hidden border-b border-neutral-200/60 group-hover:bg-neutral-50 transition-colors">
                      {/* Browser Window UI Dots for premium detail */}
                      <div className="absolute top-3 left-4 flex gap-1.5 z-20">
                        <span className="w-2 h-2 rounded-full bg-neutral-300/70" />
                        <span className="w-2 h-2 rounded-full bg-neutral-300/70" />
                        <span className="w-2 h-2 rounded-full bg-neutral-300/70" />
                      </div>
                      
                      {project.imageUrl ? (
                        <img 
                          src={project.imageUrl} 
                          alt={`${project.title} Interface Preview`}
                          className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                          loading="lazy"
                          onError={(e) => {
                            // Fallback if local image doesn't load yet
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-neutral-300">
                          <IconComponent className="w-12 h-12 stroke-[1]" />
                        </div>
                      )}
                    </div>

                    {/* Content Block */}
                    <div className="p-6 md:p-8 space-y-6">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <span className="text-[10px] md:text-xs font-bold text-neutral-400 tracking-wider uppercase">
                            {project.type}
                          </span>
                          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-900">
                            {project.title}
                          </h2>
                        </div>

                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-lg bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-500 hover:text-neutral-900 flex items-center justify-center transition-all shrink-0"
                            aria-label={`Launch ${project.title} deployment`}
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        )}
                      </div>

                      <p className="text-xs md:text-sm text-neutral-500 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Architecture Specs */}
                      <div className="pt-4 border-t border-neutral-100">
                        <ul className="space-y-2">
                          {project.features.slice(0, 3).map((feature) => (
                            <li key={feature} className="flex items-start gap-2 text-xs text-neutral-500">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#50DC7D] mt-0.5 shrink-0" />
                              <span className="truncate">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack Footer */}
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <div className="pt-4 border-t border-neutral-100">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-[10px] md:text-[11px] font-mono font-medium rounded bg-neutral-100 text-neutral-600 border border-neutral-200/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conversion Area */}
      <section className="pb-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-6">
          <div className="bg-neutral-950 text-white rounded-[32px] px-8 py-16 md:p-16 text-center space-y-8 relative overflow-hidden shadow-xl max-w-4xl mx-auto">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.01] border border-white/[0.03] rounded-full pointer-events-none" />
            <div className="max-w-xl mx-auto space-y-4 relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#50DC7D]">Let's Build</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-none">
                Have a project idea?
              </h2>
              <p className="text-neutral-400 text-xs md:text-base leading-relaxed">
                Let's replace slow, unoptimized code frameworks with clean, resilient technology tailored for enterprise scaling metrics.
              </p>
            </div>
            <div className="relative z-10 pt-4">
              <a
                href="mailto:hash2codeteam@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-neutral-950 hover:bg-neutral-200 px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold transition-all shadow-md text-xs md:text-sm"
              >
                Let's Work Together
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
