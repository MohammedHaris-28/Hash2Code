import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Code, 
  Smartphone, 
  Lightbulb, 
  Rocket, 
  CheckCircle 
} from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Stunning, responsive websites meticulously crafted to convert visitors into loyal customers.",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile ecosystems engineered with flawless, seamless UX.",
    },
    {
      icon: Lightbulb,
      title: "Software Solutions",
      description: "Tailor-made, robust internal software infrastructures automated for your business operations.",
    },
    {
      icon: Rocket,
      title: "Product Development",
      description: "End-to-end global product architecture designed perfectly from concept validation to launch.",
    },
  ];

  const techStack = [
    "Flutter", "React", "Supabase", "n8n", "HTML", "CSS", 
    "JavaScript", "TypeScript", "Python", "C#", "Django", "Sanity"
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-neutral-900 font-sans antialiased selection:bg-[#50DC7D]/30 overflow-x-hidden">
      
      {/* Injecting inline keyframe definitions directly to guarantee infinite continuous scrolling */}
      <style>{`
        @keyframes inlineMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-continuous {
          display: flex;
          width: max-content;
          animation: inlineMarquee 20s linear infinite;
        }
      `}</style>
      
      {/* Hero & Smooth Marquee Tech Section */}
      <section className="relative min-h-screen pt-32 pb-16 flex items-center overflow-hidden border-b border-neutral-200/60 bg-white">
        {/* Subtle Elegant Minimal Grid Background Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-8 text-left w-full">
              <div className="inline-flex items-center gap-2 bg-neutral-100 border border-neutral-200/80 px-3 py-1 rounded-full text-xs font-medium text-neutral-600">
                <span className="w-1.5 h-1.5 rounded-full bg-[#50DC7D] animate-pulse" />
                Now booking Q3/Q4 projects
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.05]">
                We build <br />
                <span className="relative inline-block">
                  digital excellence
                  <span className="absolute bottom-2 left-0 w-full h-[6px] bg-[#50DC7D]/80 rounded-full -z-10" />
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-neutral-500 max-w-xl leading-relaxed">
                Fast, user-friendly and engaging — transform your ideas into powerful digital systems with our elite team of developers and designers.
              </p>

              {/* Simplified Action Button Pill */}
              <div className="inline-block">
                <Link to="/contact">
                  <Button className="bg-neutral-950 hover:bg-neutral-800 text-white font-semibold px-7 py-6 rounded-xl shadow-md transition-all text-sm flex items-center justify-center gap-2 border-none tracking-wide group">
                    Book a consultation demo
                    <ArrowRight className="w-4 h-4 text-[#50DC7D] group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              {/* Pure Text Infinite Auto Smooth Scrolling Tech Track */}
              <div className="pt-8 border-t border-neutral-200/60 max-w-xl w-full relative">
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">Ecosystem Core Technologies</p>
                
                {/* Masked fading boundaries for high-end aesthetic layout */}
                <div className="w-full relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
                  <div className="animate-marquee-continuous gap-6 items-center">
                    
                    {/* First pass through arrays */}
                    {techStack.map((tech, i) => (
                      <div key={`tech-pass1-${i}`} className="bg-neutral-50 border border-neutral-200/60 px-4 py-2 rounded-xl flex items-center justify-center mx-1">
                        <span className="text-xs font-semibold text-neutral-700 tracking-wide">{tech}</span>
                      </div>
                    ))}
                    
                    {/* Second seamless safety wrap pass */}
                    {techStack.map((tech, i) => (
                      <div key={`tech-pass2-${i}`} className="bg-neutral-50 border border-neutral-200/60 px-4 py-2 rounded-xl flex items-center justify-center mx-1">
                        <span className="text-xs font-semibold text-neutral-700 tracking-wide">{tech}</span>
                      </div>
                    ))}
                    
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Right UI Mockup Graphics */}
            <div className="lg:col-span-5 relative hidden lg:flex justify-center items-center">
              <div className="relative w-full max-w-md h-[500px] border border-neutral-200 bg-neutral-50/50 rounded-3xl p-6 shadow-sm overflow-hidden">
                
                {/* Simulated Phone UI Container */}
                <div className="absolute right-[-20px] top-12 w-[280px] bg-white border border-neutral-200/80 rounded-[32px] p-4 shadow-xl space-y-4 transform rotate-[-4deg] hover:rotate-0 transition-transform duration-500">
                  <div className="flex justify-between items-center border-b border-neutral-100 pb-3">
                    <span className="text-xs font-bold text-neutral-900">Studio Chat</span>
                    <span className="text-[10px] px-2 py-0.5 bg-[#50DC7D]/20 text-neutral-800 rounded-full font-medium">Active</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-6 w-3/4 bg-neutral-100 rounded-lg" />
                    <div className="h-6 w-1/2 bg-neutral-100 rounded-lg" />
                  </div>
                  <div className="pt-2 border-t border-neutral-100">
                    <div className="flex justify-between items-center text-[11px] text-neutral-400 mb-1">
                      <span>Overall performance</span>
                      <span className="font-bold text-neutral-900">85.3%</span>
                    </div>
                    <div className="w-full bg-neutral-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#50DC7D] h-full w-[85%]" />
                    </div>
                  </div>
                </div>

                {/* Floating Micro-Card Component */}
                <div className="absolute left-4 bottom-12 w-[240px] bg-white border border-neutral-200 rounded-2xl p-4 shadow-lg transform rotate-[2deg] space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#50DC7D]" />
                    <span className="text-xs font-semibold text-neutral-900">To-do list</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-[11px] text-neutral-500">
                      <div className="w-3 h-3 rounded border border-neutral-300 flex items-center justify-center bg-[#50DC7D]/10"><CheckCircle className="w-2.5 h-2.5 text-[#22c55e]" /></div>
                      <span>Optimize system core</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-neutral-500">
                      <div className="w-3 h-3 rounded border border-neutral-300" />
                      <span>Deploy cloud container</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Abstract Vectors */}
                <div className="absolute top-1/2 left-8 w-16 h-16 border-l-2 border-t-2 border-neutral-300/40 rounded-tl-xl" />
                <div className="absolute bottom-1/3 right-12 w-24 h-24 border-r-2 border-b-2 border-neutral-300/40 rounded-br-xl" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-28 bg-[#F8F9FA]">
        <div className="container mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-neutral-200 pb-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Capabilities</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
                Our <span className="text-neutral-400 font-normal">services</span>
              </h2>
            </div>
            <p className="text-neutral-500 max-w-md text-base md:text-lg mt-4 md:mt-0 leading-relaxed">
              Comprehensive technical implementation blueprints engineered to bring your vision to absolute scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-neutral-200/80 p-8 rounded-2xl hover:border-neutral-400 transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center mb-6 group-hover:bg-[#50DC7D]/10 group-hover:border-[#50DC7D]/50 transition-colors">
                    <service.icon className="w-5 h-5 text-neutral-700 transition-colors group-hover:text-neutral-900" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-neutral-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center gap-1 text-xs font-semibold text-neutral-400 group-hover:text-neutral-900 transition-colors">
                  Explore solution <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-28 bg-white border-y border-neutral-200/60">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">The Framework</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
                Why choose <br />
                <span className="text-neutral-400 font-normal">#2Code?</span>
              </h2>
              <p className="text-neutral-500 leading-relaxed">
                We replace outdated methodologies with modern workflows, delivering structured products with predictable execution cycles.
              </p>

              <div className="bg-[#50DC7D] rounded-2xl p-8 text-neutral-950 space-y-2 shadow-sm">
                <div className="text-5xl font-extrabold tracking-tight">40%</div>
                <p className="text-sm font-medium leading-normal text-neutral-950/80">
                  Average structural deployment boost accelerated via our standardized internal boilerplate modules.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 border-t border-neutral-200">
              {[
                { title: "Modern, scalable technology stack", desc: "We deploy bleeding-edge frameworks built for multi-tenant scalability and robust continuous security." },
                { title: "Creative and user-centric designs", desc: "No generic designs. Interfaces built directly to prioritize target operational performance and clean interactions." },
                { title: "24/7 dedicated support SLA", desc: "Around-the-clock developer access guarantees that your production instances experience absolute minimal downtime." },
                { title: "On-time delivery guaranteed", desc: "Milestone timelines mapped strictly out on legal roadmaps with verified sprint releases every single fortnight." },
                { title: "Competitive transparent pricing", desc: "Fixed scope quotes structured perfectly with zero hidden onboarding retainers or maintenance surprises." },
              ].map((item, index) => (
                <div
                  key={index}
                  className="py-6 border-b border-neutral-200 flex flex-col sm:flex-row sm:items-center gap-4 justify-between group hover:bg-neutral-50/50 px-2 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-xs font-bold text-neutral-400 pt-1">0{index + 1}</span>
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-neutral-900 group-hover:text-neutral-950">{item.title}</h4>
                      <p className="text-neutral-500 text-sm max-w-xl">{item.desc}</p>
                    </div>
                  </div>
                  <CheckCircle className="w-5 h-5 text-[#22c55e] hidden sm:block flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-6">
          <div className="bg-neutral-950 text-white rounded-[32px] px-8 py-16 md:p-16 text-center space-y-8 relative overflow-hidden shadow-xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] border border-white/[0.05] rounded-full pointer-events-none" />
            
            <div className="max-w-2xl mx-auto space-y-4 relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Ready to start your project?
              </h2>
              <p className="text-neutral-400 text-base md:text-lg max-w-lg mx-auto">
                Let's turn complex manual workflows into elegant digital experiences. Contact us today for a free expert architectural consultation.
              </p>
            </div>

            <div className="pt-4 relative z-10">
              <Link to="/contact">
                <Button size="lg" className="bg-[#50DC7D] hover:bg-[#42c56e] text-neutral-950 font-bold px-8 py-6 rounded-xl transition-all shadow-md group border-none">
                  Get in touch
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;