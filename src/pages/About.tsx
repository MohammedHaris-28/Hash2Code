import React from "react";
import { Target, Award, Monitor, TrendingUp, Cpu, Layers, ShieldCheck, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Targeted Mission",
      description: "To arm scale-bound enterprises with hyper-optimized custom web structures that instantly outpace market alternatives.",
    },
    {
      icon: TrendingUp,
      title: "Forward Vision",
      description: "To operate as the premier engineering house recognized for converting complex backend operational loops into flawless user surfaces.",
    },
    {
      icon: Award,
      title: "Code Excellence",
      description: "We enforce structural code reviews and standardized internal boilerplate systems to guarantee flawless, secure deployments.",
    },
    {
      icon: Monitor,
      title: "Unified Partners",
      description: "We bypass administrative boundaries. Our engineers sit co-operatively alongside your team throughout the development cycle.",
    },
  ];

  const phases = [
    {
      step: "01",
      title: "Discovery & Dossier Blueprinting",
      description: "We isolate operational friction points, dissect competing platform profiles, and lock down exact scope variables before writing a single line of script.",
    },
    {
      step: "02",
      title: "High-Fidelity Interface Mapping",
      description: "We discard generic layouts. Our creative leads produce unique, blazing-fast responsive interaction matrices built purely to sustain target conversion rates.",
    },
    {
      step: "03",
      title: "Continuous Sprint Engineering",
      description: "Deploying bleeding-edge multi-tenant stacks, our developers ship functional, production-grade milestone iterations on a strict fortnightly roadmap.",
    },
    {
      step: "04",
      title: "Automated Launch & Support SLA",
      description: "From cloud infrastructure staging to final domain caching, we secure structural integrity and maintain an around-the-clock developer support desk.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-neutral-900 font-sans antialiased selection:bg-[#50DC7D]/30">
      
      {/* Hero & Structural Grid Background Header */}
      <section className="relative pt-36 pb-20 bg-white border-b border-neutral-200/60 overflow-hidden">
        {/* Subtle Elegant Minimal Grid Background Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-neutral-100 border border-neutral-200/80 px-3 py-1 rounded-full text-xs font-medium text-neutral-600">
              <span className="w-1.5 h-1.5 rounded-full bg-[#50DC7D]" />
              Engineering Studio Profile
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
              Engineered for absolute <br />
              <span className="relative inline-block mt-2">
                digital dominance
                <span className="absolute bottom-2 left-0 w-full h-[6px] bg-[#50DC7D]/80 rounded-full -z-10" />
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-500 max-w-xl mx-auto leading-relaxed">
              We are a collective of developers, system architects, and UX scientists focused completely on replacing slow legacy code with flawless digital performance.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section: Modern Asymmetric Layout */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start max-w-6xl mx-auto">
            
            {/* Left Column: Pinned Big Callout */}
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-32">
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">The Genesis</span>
              <h2 className="text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
                Our evolution <br />
                <span className="text-neutral-400 font-normal">from day zero</span>
              </h2>
              
              {/* Aesthetic Metric Box to link with Home page structure */}
              <div className="pt-6">
                <div className="inline-flex items-center gap-4 bg-[#F8F9FA] border border-neutral-200/80 p-4 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#50DC7D]/10 border border-[#50DC7D]/40 flex items-center justify-center text-neutral-900">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-neutral-400 font-medium">Production Output</div>
                    <div className="text-sm font-bold text-neutral-900">~150+ Systems Live</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative Space */}
            <div className="lg:col-span-7 space-y-6 text-base md:text-lg text-neutral-500 leading-relaxed border-l-2 border-neutral-100 pl-8 lg:pl-12">
              <p>
                Founded by a tight core of product engineers, <strong className="text-neutral-900 font-semibold">#2Code</strong> was forged to solve a persistent corporate bottleneck: the deployment of generic, slow-loading development setups that disrupt scale velocity. 
              </p>
              <p>
                What launched as an elite internal infrastructure taskforce has matured into a comprehensive, global product studio. Every architecture deployment has given us concrete telemetry data, helping us perfect a predictable, hyper-accelerated sprint methodology.
              </p>
              <p>
                Today, we deliver complex multi-tenant ecosystems, custom web setups, and pristine mobile applications for organizations worldwide. We don't just assign resources; we deploy tailored engineering solutions designed explicitly to convert users and manage infrastructure cleanly.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section: Minimal Light Grid */}
      <section className="py-28 bg-[#F8F9FA] border-y border-neutral-200/60">
        <div className="container mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 max-w-6xl mx-auto border-b border-neutral-200 pb-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Our Protocol</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
                Core structural <span className="text-neutral-400 font-normal">principles</span>
              </h2>
            </div>
            <p className="text-neutral-500 max-w-md text-sm md:text-base mt-4 md:mt-0 leading-relaxed">
              How we think, review code, and safeguard your architectural edge throughout the platform lifespan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white border border-neutral-200/80 p-8 rounded-2xl hover:border-neutral-400 transition-all duration-300 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.01)]"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center mb-6 text-neutral-700">
                    <value.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-neutral-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-neutral-500 text-xs leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Delivery Blueprint (The Approach) - High Contrast Dark Mode Box Frame */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-6">
          <div className="bg-neutral-950 text-white rounded-[32px] px-8 py-16 md:p-16 space-y-16 relative overflow-hidden shadow-xl max-w-6xl mx-auto">
            {/* Subtle architectural design circle background lines */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/[0.01] border border-white/[0.03] rounded-full pointer-events-none" />
            
            <div className="max-w-2xl text-left space-y-3 relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#50DC7D]">SLA Roadmap</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Our step-by-step approach
              </h2>
              <p className="text-neutral-400 text-sm md:text-base max-w-lg">
                Four predictable deployment gates engineered to prevent roadmap creep and keep launches strictly on time.
              </p>
            </div>

            {/* Industrial Step Stack Rows Grid */}
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 relative z-10 border-t border-white/10 pt-12">
              {phases.map((phase, index) => (
                <div key={index} className="space-y-3 group text-left">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-[#50DC7D] bg-[#50DC7D]/10 px-2 py-0.5 rounded border border-[#50DC7D]/20">
                      Phase {phase.step}
                    </span>
                    <div className="h-px bg-white/10 flex-1 group-hover:bg-white/20 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-white">{phase.title}</h3>
                  <p className="text-neutral-400 text-xs leading-relaxed max-w-md">{phase.description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;