import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Send,
  ShieldCheck,

  Clock3,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email our studio",
      description: "Project inquiries, partnerships, and proposals.",
      content: "hash2codeteam@gmail.com",
      link: "mailto:hash2codeteam@gmail.com",
      actionText: "Send an email",
    },
    {
      icon: Phone,
      title: "Call our team",
      description: "Discuss your project directly with us.",
      content: "+91 9036486726",
      link: "tel:+919036486726",
      actionText: "Call our team",
    },
    {
      icon: MapPin,
      title: "Based in Karnataka",
      description: "Working with businesses locally and remotely.",
      content: "Bhadravathi, Shivamogga, Karnataka, India",
      link: "https://maps.google.com/?q=Bhadravathi,Shivamogga,Karnataka,India",
      actionText: "View location",
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    const whatsappMessage = [
      "*New Project Inquiry — #2CODE*",
      "",
      `*Name:* ${formState.name.trim()}`,
      `*Email:* ${formState.email.trim()}`,
      "",
      "*Project details:*",
      formState.message.trim(),
    ].join("\n");

    const whatsappUrl = `https://wa.me/919036486726?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    const whatsappWindow = window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );

    setIsSubmitting(false);

    if (whatsappWindow) {
      setFormState({ name: "", email: "", message: "" });
    } else {
      window.location.href = whatsappUrl;
    }
  };

  return (
    <main className="min-h-screen overflow-x-clip bg-white font-sans text-neutral-950 antialiased selection:bg-[#50DC7D]/30 pt-20 sm:pt-24 lg:pt-28">
      {/* Subtle background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 opacity-60"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* Hero */}
      <header className="relative border-b border-neutral-200 bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 2xl:px-16">
          

          <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
            
                
                
              
              <h1 className="max-w-5xl text-[clamp(2.8rem,6.4vw,6rem)] font-bold leading-[0.98] tracking-[-0.065em]">
                Have an idea? <span className="text-neutral-400">Let's make it real.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
                Tell us what you’re planning. Whether it’s a website, app, or custom
                software, we’ll help you work out the right next step.
              </p>
            </div>

            <div className="hidden border-l border-neutral-200 pl-6 lg:col-span-4 lg:block lg:pb-1">
             
              <p className="max-w-xs text-sm leading-7 text-neutral-500">
                Direct communication channels and project inquiry routing to discuss
                your goals with our technical team.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-neutral-200 pt-4 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-400">
              Hash2Code Team
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-400">
              Inquiries / WhatsApp / Direct
            </span>
          </div>
        </div>
      </header>

      {/* Overview strip */}
      <section className="border-b border-neutral-200 bg-[#F8F9FA]">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 px-5 sm:grid-cols-3 sm:px-8 lg:grid-cols-3 lg:px-12 2xl:px-16">
          <OverviewItem
            icon={<Mail className="h-5 w-5" />}
            title="Email response"
            description="Quick replies to project proposals and detailed requirements within business hours."
          />
          <OverviewItem
            icon={<Phone className="h-5 w-5" />}
            title="Direct discussions"
            description="Call our studio team directly to talk about milestones and technology stack."
          />
          <OverviewItem
            icon={<MapPin className="h-5 w-5" />}
            title="Studio location"
            description="Based in Karnataka, India, working with clients locally and globally."
            last
          />
        </div>
      </section>

      {/* Main body: Contact info & Form */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16 2xl:px-16">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] lg:gap-14 xl:gap-20">
            <aside className="space-y-8 lg:sticky lg:top-8">
              <div>
                <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                  Communication channels
                </p>
                <h2 className="max-w-lg text-3xl font-bold leading-[1.08] tracking-[-0.05em] sm:text-4xl">
                  Talk to our team.{" "}
                  <span className="text-neutral-400">Always accessible.</span>
                </h2>
                <p className="mt-5 max-w-md text-sm leading-7 text-neutral-500">
                  Choose the channel that works best for you. We’ll help clarify
                  your goals, scope, and possible next steps.
                </p>
              </div>

              <div className="grid gap-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;

                  return (
                    <a
                      key={info.title}
                      href={info.link}
                      target={info.title === "Based in Karnataka" ? "_blank" : undefined}
                      rel={info.title === "Based in Karnataka" ? "noopener noreferrer" : undefined}
                      className="group flex min-w-0 items-start gap-4 border border-neutral-200 bg-[#F8F9FA] p-4 transition-colors hover:border-neutral-400 hover:bg-white sm:p-5"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-neutral-200 bg-white text-neutral-700 transition-colors group-hover:border-[#50DC7D] group-hover:bg-[#50DC7D]/10">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-bold text-neutral-900">
                          {info.title}
                        </span>
                        <span className="mt-1 block text-xs leading-5 text-neutral-500">
                          {info.description}
                        </span>
                        <span className="mt-2 block break-words text-sm font-semibold text-neutral-900">
                          {info.content}
                        </span>
                        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-neutral-500 transition-colors group-hover:text-neutral-950">
                          {info.actionText}
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>

              <div className="relative border border-neutral-200 bg-[#F8F9FA] p-5 sm:p-6">
                <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-500">
                  <Clock3 className="h-4 w-4 text-neutral-700" aria-hidden="true" />
                  Working hours
                </div>
                <div className="mt-4 space-y-3 text-xs sm:text-sm">
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-neutral-200 pb-3">
                    <span className="text-neutral-600">Monday – Friday</span>
                    <span className="font-semibold text-neutral-900">9 AM – 6 PM IST</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-neutral-200 pb-3">
                    <span className="text-neutral-600">Saturday</span>
                    <span className="font-semibold text-neutral-900">10 AM – 4 PM IST</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                    <span className="text-neutral-400">Sunday</span>
                    <span className="font-medium text-neutral-400">Closed</span>
                  </div>
                </div>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-400">
                  Hours listed in Indian Standard Time (IST).
                </p>
              </div>
            </aside>

            <div className="min-w-0 border-t border-neutral-200 lg:border-t-0">
              <div className="border border-neutral-200 bg-white p-6 sm:p-8 md:p-10">
                <div className="mb-8">
                
                  <h2 className="text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
                    Tell us about your project
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-500 sm:text-base">
                    Share a few details to get the conversation started. Your
                    message will be prepared in WhatsApp so you can review and
                    send it to our team.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-neutral-500"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      maxLength={100}
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder="Enter your full name"
                      className="w-full border border-neutral-200 bg-[#F8F9FA] px-4 py-3.5 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 hover:border-neutral-300 focus:border-neutral-900 focus:bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-neutral-500"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      placeholder="you@company.com"
                      className="w-full border border-neutral-200 bg-[#F8F9FA] px-4 py-3.5 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 hover:border-neutral-300 focus:border-neutral-900 focus:bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-neutral-500"
                    >
                      Project details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      maxLength={3000}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="What are you looking to build? Include your goals, key features, or expected timeline..."
                      className="w-full resize-y border border-neutral-200 bg-[#F8F9FA] px-4 py-3.5 text-sm leading-6 text-neutral-900 outline-none transition placeholder:text-neutral-400 hover:border-neutral-300 focus:border-neutral-900 focus:bg-white"
                    />
                    <p className="text-right font-mono text-[10px] uppercase tracking-[0.1em] text-neutral-400">
                      {formState.message.length}/3000 characters
                    </p>
                  </div>

                 <Button
  type="submit"
  disabled={isSubmitting}
  className="group relative flex h-auto w-full items-center justify-between rounded-none border border-neutral-950 bg-neutral-950 px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.16em] text-white shadow-none transition-all duration-200 hover:border-[#50DC7D] hover:bg-[#50DC7D] hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
>
  {isSubmitting ? (
    <>
      <span className="flex items-center gap-3">
        <span className="h-3.5 w-3.5 animate-spin rounded-none border-2 border-current border-t-transparent" />
        Preparing WhatsApp…
      </span>
      <span className="text-[10px] opacity-60">[01/01]</span>
    </>
  ) : (
    <>
      <span>Continue to WhatsApp</span>
      <div className="flex items-center gap-2">
        <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
      </div>
    </>
  )}
</Button>
                </form>

                <div className="mt-7 flex items-start gap-3 border-t border-neutral-200 pt-5 text-xs leading-6 text-neutral-500">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-neutral-700" aria-hidden="true" />
                  <p>
                    <strong className="font-semibold text-neutral-900">
                      Your information
                    </strong>{" "}
                    is used to respond to your inquiry. WhatsApp will open with
                    your message prepared; you can review it before sending.
                    Please avoid including passwords or other sensitive credentials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </main>
  );
};

interface OverviewItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  last?: boolean;
}

const OverviewItem = ({
  icon,
  title,
  description,
  last = false,
}: OverviewItemProps) => (
  <div
    className={`flex items-start gap-4 border-b border-neutral-200 py-5 sm:py-6 lg:border-b-0 ${
      last ? "" : "lg:border-r lg:pr-6"
    } sm:pr-5 lg:my-5 lg:py-2 ${last ? "lg:pl-6" : "lg:pl-0"}`}
  >
    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-neutral-200 bg-white text-neutral-700">
      {icon}
    </div>
    <div>
      <h2 className="mb-1.5 text-sm font-bold text-neutral-900">{title}</h2>
      <p className="max-w-md text-xs leading-6 text-neutral-500 sm:text-sm">
        {description}
      </p>
    </div>
  </div>
);

export default Contact;