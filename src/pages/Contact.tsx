import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4595.91851433398!2d75.67410687573216!3d13.809257495959494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb01b32e1ee5c5%3A0x14018401ae7bde20!2s%232Code%20Studio!5e1!3m2!1sen!2sin!4v1795617821156!5m2!1sen!2sin";

const CONTACT_DETAILS = [
  {
    icon: Mail,
    eyebrow: "01 / Email",
    title: "Email our studio",
    description: "Project inquiries, partnerships and proposals.",
    value: "hash2codeteam@gmail.com",
    href: "mailto:hash2codeteam@gmail.com",
    action: "Send an email",
  },
  {
    icon: Phone,
    eyebrow: "02 / Phone",
    title: "Call our team",
    description: "Discuss your project directly with us.",
    value: "+91 9036486726",
    href: "tel:+919036486726",
    action: "Call our team",
  },
  {
    icon: MapPin,
    eyebrow: "03 / Location",
    title: "Based in Karnataka",
    description: "Working with businesses locally and remotely.",
    value: "Bhadravathi, Shivamogga, Karnataka, India",
    href: "https://www.google.com/maps/search/?api=1&query=%232Code+Studio+Shivamogga",
    action: "View location",
    external: true,
  },
];

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);
  const updateField = (field: keyof typeof formState, value: string) => {
    setFormState((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    const whatsappMessage = [
      "*New Project Inquiry — #2CODE*",
      "",
      `*Name:* ${formState.name.trim()}`,
      `*Email:* ${formState.email.trim()}`,
      "",
      "*Project details: *",
      formState.message.trim(),
    ].join("\n");

    const whatsappUrl = `https://wa.me/919036486726?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp in a new tab. The visitor reviews and sends the message there.
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setIsSubmitting(false);
  };

  return (
    <main className="h2c-contact">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        .h2c-contact .contact-input {
  width: 100%;
  min-width: 0;
  border: 1px solid #E5E7EB;
  border-radius: 16px !important;
  background: #F8F9FA;
  padding: 15px 16px;
  color: #101211;
  font: 14px/1.6 Inter, ui-sans-serif, system-ui, sans-serif;
  outline: none;
  box-shadow: none;
  transition: border-color .2s ease, background .2s ease, box-shadow .2s ease;
  appearance: none;
  -webkit-appearance: none;
}

.h2c-contact .contact-input::placeholder {
  color: #9A9F9B;
}

.h2c-contact .contact-input:hover {
  border-color: #C5CBC7;
}

.h2c-contact .contact-input:focus {
  border-color: #50DC7D;
  background: #FFFFFF;
  border-radius: 16px !important;
  box-shadow: 0 0 0 3px rgba(80,220,125,.16);
}

        .h2c-contact {
          --contact-bg: #F8F9FA;
          --contact-ink: #101211;
          --contact-green: #50DC7D;
          --contact-muted: #777D79;
          --contact-line: rgba(16,18,17,.14);
          width: 100%;
          overflow: clip;
          background: var(--contact-bg);
          color: var(--contact-ink);
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .h2c-contact * { box-sizing: border-box; }
        .h2c-contact .hc-display { font-family: "Space Grotesk", Inter, sans-serif; font-weight: 700; letter-spacing: -.075em; }
        .h2c-contact .hc-mono { font-family: "DM Mono", monospace; letter-spacing: .1em; text-transform: uppercase; }
        .h2c-contact .hc-wrap { width: min(100% - 48px, 1480px); margin-inline: auto; }
        .h2c-contact .hc-kicker { display:flex; align-items:center; gap:10px; color:#626964; font: 11px "DM Mono",monospace; letter-spacing:.1em; text-transform:uppercase; }
        .h2c-contact .hc-kicker:before { content:""; width:8px; height:8px; flex:none; border-radius:50%; background:var(--contact-green); box-shadow:0 0 0 4px rgba(80,220,125,.14); }
        .h2c-contact .hc-action { min-height:54px; display:inline-flex; align-items:center; justify-content:space-between; gap:24px; padding:7px 8px 7px 22px; border-radius:999px; background:var(--contact-ink); color:white; font-size:13px; font-weight:650; text-decoration:none; transition:transform .25s ease,background .25s ease,color .25s ease; }
        .h2c-contact .hc-action:hover { transform:translateY(-3px); background:var(--contact-green); color:var(--contact-ink); }
        .h2c-contact .hc-action-icon { width:38px; height:38px; display:grid; place-items:center; border-radius:50%; background:var(--contact-green); color:var(--contact-ink); }
        .h2c-contact .hc-card { border:1px solid var(--contact-line); background:#fff; transition:border-color .25s ease,transform .25s ease,background .25s ease; }
        .h2c-contact .hc-card:hover { transform:translateY(-3px); border-color:rgba(16,18,17,.4); }
        .h2c-contact .hc-field { width:100%; min-width:0; border:1px solid var(--contact-line); border-radius:0; background:#F8F9FA; padding:15px 16px; color:var(--contact-ink); font:14px/1.6 Inter,ui-sans-serif,system-ui,sans-serif; outline:none; transition:border-color .2s ease,background .2s ease; }
        .h2c-contact .hc-field::placeholder { color:#9A9F9B; }
        .h2c-contact .hc-field:hover { border-color:rgba(16,18,17,.3); }
        .h2c-contact .hc-field:focus { border-color:var(--contact-ink); background:#fff; }
        .h2c-contact .hc-map-frame { display:block; width:100%; height:100%; min-height:320px; border:0; filter:grayscale(.12) contrast(.96); }
        .h2c-contact .hc-map-shell { min-height:320px; overflow:hidden; background:#E7EBE8; }
        .h2c-contact .hc-fade-up { animation:hc-fade-up .7s cubic-bezier(.2,.7,.2,1) both; }
        @keyframes hc-fade-up { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @media (max-width:767px) {
          .h2c-contact .hc-wrap { width:min(100% - 36px,1480px); }
          .h2c-contact .hc-map-frame { min-height:300px; }
          .h2c-contact .hc-map-shell { min-height:300px; }
        }
        @media (max-width:380px) {
          .h2c-contact .hc-map-frame { min-height:270px; }
          .h2c-contact .hc-map-shell { min-height:270px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .h2c-contact .hc-fade-up { animation:none !important; }
          .h2c-contact * { scroll-behavior:auto !important; transition-duration:.01ms !important; }
        }
      `}</style>

      {/* HERO */}
      <section className="relative pb-16 pt-28 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-40">
        <div className="hc-wrap">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="hc-kicker">Start a conversation</p>
            <p className="hc-mono text-[10px] text-neutral-500">#2Code Studio / Contact</p>
          </div>

          <div className="mt-12 grid items-end gap-10 lg:grid-cols-[1.2fr_.8fr] lg:gap-16">
            <div className="hc-fade-up">
              <h1 className="hc-display max-w-[1050px] text-[clamp(3.35rem,9vw,8.6rem)] leading-[.88]">
                Have an idea?
                <br />
                <span className="text-neutral-400">Let’s make it</span>
                <br />
                happen<span className="text-[#50DC7D]">.</span>
              </h1>
            </div>
            <div className="hc-fade-up pb-1 lg:pb-3" style={{ animationDelay: "130ms" }}>
              <p className="max-w-[430px] text-base leading-8 text-neutral-600 sm:text-lg">
                Tell us what you’re planning. Whether it’s a website, app, creative
                project or custom software, we’ll help you find the right next step.
              </p>
              <a href="#contact-form" className="hc-action mt-7">
                <span>Tell us about your project</span>
                <span className="hc-action-icon"><ArrowUpRight size={17} /></span>
              </a>
            </div>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-300 pt-5 sm:mt-20">
            <span className="hc-mono text-[10px] text-neutral-500">Projects / Partnerships / Ideas</span>
            <span className="hc-mono text-[10px] text-neutral-500">Shivamogga, Karnataka · India</span>
          </div>
        </div>
      </section>

      {/* CONTACT CHANNELS */}
      <section className="border-y border-neutral-200 bg-white py-20 sm:py-24">
        <div className="hc-wrap">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end lg:gap-16">
            <div>
              <p className="hc-kicker">Reach the studio</p>
              <h2 className="hc-display mt-6 text-4xl leading-[.98] sm:text-5xl lg:text-6xl">
                Good things start with a conversation<span className="text-[#50DC7D]">.</span>
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-neutral-500 sm:text-base">
              Choose the channel that works best for you. Share a little about
              your goals and we’ll take it from there, with clear communication
              from the first conversation.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
  {CONTACT_DETAILS.map((item) => {
    const Icon = item.icon;

    return (
      <a
        key={item.title}
        href={item.href}
        target={item.external ? "_blank" : undefined}
        rel={item.external ? "noopener noreferrer" : undefined}
        className="group flex min-w-0 flex-col rounded-[24px] border border-neutral-200/80 bg-[#F8F9FA] p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#50DC7D]/60 hover:bg-white hover:shadow-[0_16px_40px_rgba(16,18,17,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#50DC7D] focus-visible:ring-offset-4 sm:p-7"
      >
        {/* Icon and category */}
        <div className="flex items-center justify-between gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl border border-neutral-200/80 bg-white text-neutral-800 transition-all duration-300 group-hover:border-[#50DC7D] group-hover:bg-[#50DC7D] group-hover:text-[#101211]">
            <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
          </span>

          <span className="hc-mono rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-[9px] uppercase tracking-wider text-neutral-400 transition-colors group-hover:border-[#50DC7D]/40">
            {item.eyebrow}
          </span>
        </div>

        {/* Card content */}
        <div className="mt-8">
          <h3 className="hc-display text-2xl leading-tight tracking-tight text-[#101211] sm:text-3xl">
            {item.title}
          </h3>

          <p className="mt-3 min-h-[48px] text-sm leading-6 text-neutral-500">
            {item.description}
          </p>
        </div>

        {/* Contact value */}
        <div className="mt-6 border-t border-neutral-200/80 pt-5">
          <p className="break-words text-sm font-semibold leading-6 text-neutral-900">
            {item.value}
          </p>
        </div>

        {/* Action */}
        <div className="mt-7 flex items-center justify-between">
          <span className="text-xs font-semibold text-neutral-600 transition-colors group-hover:text-neutral-950">
            {item.action}
          </span>

          <span className="grid h-9 w-9 place-items-center rounded-full border border-neutral-200 bg-white text-neutral-500 transition-all duration-300 group-hover:border-[#50DC7D] group-hover:bg-[#50DC7D] group-hover:text-[#101211]">
            <ArrowUpRight
              size={16}
              strokeWidth={1.8}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </a>
    );
  })}
</div>
        </div>
      </section>

    
{/* FORM + HOURS */}
<section className="py-20 sm:py-28">
  <div className="hc-wrap">
    <div className="grid items-start gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
      <aside className="lg:sticky lg:top-28">
        <p className="hc-kicker">A few details to begin</p>
        <h2 className="hc-display mt-6 text-4xl leading-[.98] sm:text-5xl lg:text-6xl">
          Let’s talk about what you want to build<span className="text-[#50DC7D]">.</span>
        </h2>
        <p className="mt-6 max-w-md text-sm leading-7 text-neutral-500 sm:text-base">
          No lengthy brief needed. Tell us the essentials and we’ll start
          with a practical discussion about your idea.
        </p>

        <div className="mt-9 rounded-[24px] border border-neutral-200/80 bg-white p-5 shadow-[0_8px_28px_rgba(16,18,17,0.035)] sm:p-6">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#50DC7D]/20 text-[#101211]">
              <Clock3 size={18} aria-hidden="true" />
            </span>
            <div>
              <p className="hc-mono text-[9px] text-neutral-400">Studio availability</p>
              <p className="mt-1 text-sm font-semibold text-[#101211]">Working hours · IST</p>
            </div>
          </div>
          <div className="mt-6 space-y-4 text-sm">
            <div className="flex flex-wrap justify-between gap-2 border-b border-neutral-200 pb-3">
              <span className="text-neutral-500">Monday – Friday</span>
              <span className="font-semibold text-neutral-900">9 AM – 6 PM</span>
            </div>
            <div className="flex flex-wrap justify-between gap-2 border-b border-neutral-200 pb-3">
              <span className="text-neutral-500">Saturday</span>
              <span className="font-semibold text-neutral-900">10 AM – 4 PM</span>
            </div>
            <div className="flex flex-wrap justify-between gap-2">
              <span className="text-neutral-400">Sunday</span>
              <span className="font-medium text-neutral-400">Closed</span>
            </div>
          </div>
        </div>
      </aside>

      <div
        id="contact-form"
        className="min-w-0 scroll-mt-24 rounded-[26px] border border-neutral-200/80 bg-white p-5 shadow-[0_18px_55px_rgba(16,18,17,0.055)] sm:rounded-[30px] sm:p-8 lg:p-10"
      >
        <div className="flex flex-wrap items-start justify-between gap-5 border-b border-neutral-200 pb-7">
          <div>
            <p className="hc-mono text-[9px] text-neutral-400">Project inquiry / 01</p>
            <h3 className="hc-display mt-3 text-3xl tracking-tight sm:text-4xl">
              Tell us about your project
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-neutral-500">
              Your message will be prepared in WhatsApp, where you can
              review it before sending it to our team.
            </p>
          </div>
          <span className="hidden h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#50DC7D]/20 text-[#101211] sm:grid">
            <Send size={19} aria-hidden="true" />
          </span>
        </div>

       
<form onSubmit={handleSubmit} className="mt-8 space-y-6">
  <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
    <div className="min-w-0 space-y-2">
      <label htmlFor="contact-name" className="hc-mono block text-[9px] font-medium text-neutral-500">
        Your name
      </label>
      <input
        className="contact-input"
        type="text"
        id="contact-name"
        name="name"
        autoComplete="name"
        required
        maxLength={100}
        value={formState.name}
        onChange={(event) => updateField("name", event.target.value)}
        placeholder="Enter your full name"
      />
    </div>

    <div className="min-w-0 space-y-2">
      <label htmlFor="contact-email" className="hc-mono block text-[9px] font-medium text-neutral-500">
        Email address
      </label>
      <input
        className="contact-input"
        type="email"
        id="contact-email"
        name="email"
        autoComplete="email"
        required
        maxLength={254}
        value={formState.email}
        onChange={(event) => updateField("email", event.target.value)}
        placeholder="you@company.com"
      />
    </div>
  </div>

  <div className="space-y-2">
    <label htmlFor="contact-message" className="hc-mono block text-[9px] font-medium text-neutral-500">
      Project details
    </label>
    <textarea
      className="contact-input min-h-[160px] resize-y"
      id="contact-message"
      name="message"
      required
      rows={6}
      maxLength={3000}
      value={formState.message}
      onChange={(event) => updateField("message", event.target.value)}
      placeholder="What are you looking to build? Share your goals, key features or expected timeline..."
    />
    <p className="hc-mono text-right text-[9px] text-neutral-400" aria-live="polite">
      {formState.message.length}/3000 characters
    </p>
  </div>

  {/* CONSENT CHECKBOX */}
  <label
    htmlFor="contact-consent"
    className="group flex cursor-pointer items-start gap-3 rounded-2xl border border-neutral-200/80 bg-[#F8F9FA] p-4 transition-colors duration-200 hover:border-[#50DC7D]/60 sm:p-5"
  >
    <input
      type="checkbox"
      id="contact-consent"
      name="consent"
      required
      checked={hasConsent}
      onChange={(event) => setHasConsent(event.target.checked)}
      className="mt-0.5 h-[17px] w-[17px] shrink-0 cursor-pointer appearance-none rounded-[5px] border border-neutral-300 bg-white transition-all duration-200 checked:border-[#50DC7D] checked:bg-[#50DC7D] checked:bg-[length:11px_11px] checked:bg-center checked:bg-no-repeat focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#50DC7D] focus-visible:ring-offset-2"
      style={{
        backgroundImage: hasConsent
          ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='m3 8 3.2 3.2L13 4.5' fill='none' stroke='%23101211' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")"
          : "none",
      }}
    />

    <span className="text-xs leading-6 text-neutral-500">
      I agree that <strong className="font-semibold text-neutral-900">#2Code Studio</strong> may use the information I provide to respond to my project inquiry and contact me regarding it. I understand that WhatsApp will open with my message prepared for review before sending.
    </span>
  </label>

  {/* SUBMIT BUTTON */}
  <button
    type="submit"
    disabled={isSubmitting || !hasConsent}
    className="hc-action group mt-2 disabled:cursor-not-allowed disabled:opacity-40"
  >
    <span>
      {isSubmitting ? "Preparing WhatsApp…" : "Continue to WhatsApp"}
    </span>
    <span className="hc-action-icon">
      <ArrowUpRight size={17} aria-hidden="true" />
    </span>
  </button>
</form>


        <div className="mt-7 flex items-start gap-3 rounded-[20px] border border-neutral-200/70 bg-[#F8F9FA] p-4 text-xs leading-6 text-neutral-500 sm:p-5">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-neutral-700" aria-hidden="true" />
          <p>
            <strong className="font-semibold text-neutral-900">Your information.</strong>{" "}
            It is used to respond to your inquiry. WhatsApp opens with your message prepared; you can review it before sending. Please avoid including passwords or other sensitive credentials.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* STUDIO LOCATION / RESPONSIVE MAP */}
      <section className="bg-[#101211] py-20 text-white sm:py-28">
        <div className="hc-wrap">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end lg:gap-16">
            <div>
              <p className="hc-kicker !text-white/60">Find the studio</p>
              <h2 className="hc-display mt-6 text-5xl leading-[.94] sm:text-6xl lg:text-7xl">
                Rooted in Karnataka<span className="text-[#50DC7D]">.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-md text-sm leading-7 text-white/60 sm:text-base">
                Find #2Code Studio on the map. We’re based in the Shivamogga
                region and work with teams both locally and remotely.
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=%232Code+Studio+Shivamogga"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#50DC7D] transition-all hover:gap-3"
              >
                Open in Google Maps <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-[22px] border border-white/15 bg-white/5 sm:mt-14 sm:rounded-[28px]">
            <div className="hc-map-shell relative w-full">
              <iframe
                src={MAP_EMBED_URL}
                title="#2Code Studio location on Google Maps"
                className="hc-map-frame"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <div className="flex flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#50DC7D] text-[#101211]"><MapPin size={18} /></span>
                <div>
                  <p className="text-sm font-semibold">#2Code Studio</p>
                  <p className="mt-1 text-xs text-white/50">Bhadravathi · Shivamogga · Karnataka, India</p>
                </div>
              </div>
              <span className="hc-mono text-[9px] text-white/40">Map data © Google</span>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      
    </main>
  );
};

export default Contact;
