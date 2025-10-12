import { Linkedin, Instagram, Mail } from "lucide-react";

const Members = () => {
  const members = [
    {
      name: "Alex Chen",
      role: "Lead Developer",
      specialty: "Full-Stack Development",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    },
    {
      name: "Sarah Martinez",
      role: "UI/UX Designer",
      specialty: "Product Design",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      name: "James Wilson",
      role: "Backend Developer",
      specialty: "Cloud Architecture",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    },
    {
      name: "Emily Zhang",
      role: "Mobile Developer",
      specialty: "iOS & Android",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    },
    {
      name: "Michael Brown",
      role: "DevOps Engineer",
      specialty: "Infrastructure",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
    {
      name: "Lisa Anderson",
      role: "Frontend Developer",
      specialty: "React & Vue",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-display font-bold">
              Meet Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Talented individuals who bring creativity, expertise, and passion to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {members.map((member, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-8 text-center hover:glow transition-all group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 gradient-primary rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-full h-full rounded-full border-4 border-accent/30 group-hover:border-accent transition-colors"
                  />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-1">
                  {member.name}
                </h3>
                <p className="text-accent font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-6">
                  {member.specialty}
                </p>
                <div className="flex justify-center space-x-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:glow-accent transition-all"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:glow-accent transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:glow-accent transition-all"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-display font-bold">
              Want to <span className="text-gradient">Join Us?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              We're always looking for talented individuals who share our passion for creating exceptional digital experiences.
            </p>
            <a
              href="mailto:careers@codersclub.dev"
              className="inline-block px-8 py-4 gradient-primary rounded-xl font-semibold hover:glow transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Members;