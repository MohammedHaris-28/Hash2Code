import React, { useState } from "react";
import { Mail, MapPin, Phone, ArrowRight, Send, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email our studio",
      description: "For project inquiries, partnerships, and RFPs.",
      content: "hash2codeteam@gmail.com",
      link: "mailto:hash2codeteam@gmail.com",
      actionText: "Send email",
    },
    {
      icon: Phone,
      title: "Call our developers",
      description: "Direct line for immediate discovery calls.",
      content: "+91 9036486726",
      link: "tel:+919036486726",
      actionText: "Call directly",
    },
    {
      icon: MapPin,
      title: "Headquarters",
      description: "Our core engineering and creative base.",
      content: "Bhadravathi, Shivamogga, Karnataka, India",
      link: "https://maps.google.com/?q=Bhadravathi,Shivamogga,Karnataka,India",
      actionText: "Open in Maps",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Structure a highly-professional, clean message layout for WhatsApp
    const whatsappMessage = `*🚀 New Architectural Review Request*\n\n` +
      `*👤 Name:* ${formState.name}\n` +
      `*📧 Work Email:* ${formState.email}\n\n` +
      `*📝 Project Parameters & Scope:* \n${formState.message}`;

    // 2. URL-encode text safely to prevent string breakages
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const targetPhoneNumber = "919036486726";
    
    // 3. Construct direct click-to-chat API routing link
    const whatsappUrl = `https://wa.me/${targetPhoneNumber}?text=${encodedMessage}`;

    // Simulated short delay for UI premium feedback before transition
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Open WhatsApp workspace tab directly
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      
      // Reset form controls
      setFormState({ name: "", email: "", message: "" });
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-neutral-900 font-sans antialiased selection:bg-[#50DC7D]/30">
      
      {/* Premium Minimal Hero Header Section */}
      <section className="relative pt-36 pb-20 bg-white border-b border-neutral-200/60 overflow-hidden">
        {/* Subtle Grid Background Matching the Home Page */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-neutral-100 border border-neutral-200/80 px-3 py-1 rounded-full text-xs font-medium text-neutral-600">
            <span className="w-1.5 h-1.5 rounded-full bg-[#50DC7D] animate-pulse" />
            Response SLA: Instant WhatsApp Routing
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 leading-none">
            Let's build something <br />
            <span className="relative inline-block mt-2">
              extraordinary
              <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#50DC7D]/80 rounded-full -z-10" />
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Have a clear blueprint or just a raw concept? Drop us a line. Our software architects are ready to design your operational edge.
          </p>
        </div>
      </section>

      {/* Main Form & Info Section Split */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start max-w-6xl mx-auto">
            
            {/* Left Side: Dynamic Channels & Office Hours */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Direct Channels</span>
                <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Reach our team</h2>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.title === "Headquarters" ? "_blank" : undefined}
                    rel={info.title === "Headquarters" ? "noopener noreferrer" : undefined}
                    className="group flex gap-5 bg-white border border-neutral-200/80 p-5 rounded-2xl hover:border-neutral-400 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.01)]"
                  >
                    <div className="w-12 h-12 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center group-hover:bg-[#50DC7D]/10 group-hover:border-[#50DC7D]/50 transition-colors flex-shrink-0">
                      <info.icon className="w-5 h-5 text-neutral-700 group-hover:text-neutral-900 transition-colors" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <h3 className="text-base font-bold text-neutral-900">{info.title}</h3>
                      <p className="text-xs text-neutral-400 leading-normal">{info.description}</p>
                      <p className="text-sm font-medium text-neutral-600 pt-1 break-all">{info.content}</p>
                      <div className="text-xs font-semibold text-[#42c56e] inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity pt-2">
                        {info.actionText} <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Office Hours High Contrast Callout */}
              <div className="bg-neutral-950 text-white rounded-2xl p-6 relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Sparkles className="w-16 h-16 text-white" />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-4">Availability Matrix</h4>
                <div className="space-y-3 text-sm text-neutral-300">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Mon — Fri</span>
                    <span className="font-semibold text-white">9:00 AM — 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Saturday</span>
                    <span className="font-semibold text-white">10:00 AM — 4:00 PM IST</span>
                  </div>
                  <div className="flex justify-between text-neutral-500">
                    <span>Sunday</span>
                    <span className="font-semibold text-neutral-500">Closed (Devs Resting)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Interactive High-Converting Form Console */}
            <div className="lg:col-span-7 bg-white border border-neutral-200 p-8 md:p-10 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] space-y-8">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold tracking-tight text-neutral-900">Initiate Architectural Review</h3>
                <p className="text-sm text-neutral-400">Fill out this quick dossier, and you will be instantly redirected to WhatsApp to initialize a live sync with an engineer.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3.5 bg-neutral-50 border border-neutral-200 rounded-xl outline-none text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-neutral-400 focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full px-4 py-3.5 bg-neutral-50 border border-neutral-200 rounded-xl outline-none text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-neutral-400 focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Project Parameters & Scope</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell us about the digital ecosystem or platform you want designed, timeline expectations, or any system bottlenecks you're currently facing..."
                    className="w-full px-4 py-3.5 bg-neutral-50 border border-neutral-200 rounded-xl outline-none text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-neutral-400 focus:bg-white transition-all resize-none leading-relaxed"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#50DC7D] hover:bg-[#42c56e] text-neutral-950 font-bold py-6 rounded-xl shadow-sm transition-all text-sm flex items-center justify-center gap-2 border-none disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Deploy Inquiry
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>

              {/* Data Safety Trust Indicator Footnote */}
              <div className="pt-4 border-t border-neutral-100 flex items-start gap-2.5 text-xs text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-[#22c55e] mt-0.5 flex-shrink-0" />
                <p>
                  <strong>Confidentiality Assured:</strong> All project specs submitted through our architectural console are automatically covered under standard preliminary non-disclosure terms. Your data remains completely internal.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;