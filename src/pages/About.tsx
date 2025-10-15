import { Target, Award, Users, Monitor, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To empower businesses with cutting-edge digital solutions that drive growth and innovation.",
    },
    {
      icon: TrendingUp,
      title: "Vision",
      description: "To be the leading development team known for excellence, innovation, and client satisfaction.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in code quality, design, and project delivery.",
    },
    {
      icon: Monitor,
      title: "Collaboration",
      description: "We work closely with clients as partners to achieve shared success.",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-display font-bold">
              About <span className="text-gradient">#2Code</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A passionate team of developers, designers, and innovators dedicated to building exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl font-display font-bold mb-8 animate-fade-in">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground animate-fade-in-up">
              <p>
                Founded by a group of passionate developers, #2Code started with a simple project that make a difference. What began as a small team working on weekend projects has grown into a full-fledged development team.
              </p>
              <p>
                Over the time, Each project has taught us valuable lessons and helped us refine our craft.
              </p>
              <p>
                Today, we're proud to offer a comprehensive suite of development services, from web and mobile applications to custom software solutions. Our team brings together diverse skills and perspectives, united by a shared passion for building creative products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-16">
            Our Core <span className="text-gradient">Values</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass p-8 rounded-2xl hover:glow transition-all animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-12 text-center">
              Our <span className="text-gradient">Approach</span>
            </h2>
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "We start by understanding your vision, goals, and challenges. This helps us create a tailored strategy.",
                },
                {
                  step: "02",
                  title: "Design",
                  description: "Our designers create intuitive, beautiful interfaces that users love and that align with your brand.",
                },
                {
                  step: "03",
                  title: "Development",
                  description: "Using modern technologies and best practices, we build robust, scalable solutions.",
                },
                {
                  step: "04",
                  title: "Delivery & Support",
                  description: "We ensure smooth deployment and provide ongoing support to keep your product running flawlessly.",
                },
              ].map((phase, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl font-display font-bold text-gradient opacity-50">
                    {phase.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-semibold mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-muted-foreground">{phase.description}</p>
                  </div>
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