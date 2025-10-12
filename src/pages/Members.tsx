import { Linkedin, Instagram, Mail } from "lucide-react";

// Define the member type
interface Member {
  name: string;
  role: string;
  specialty: string;
  image: string;
  instagram?: string;
  linkedin?: string;
  email?: string;
  order: number;
}

const Members = () => {
  // This would typically come from your CMS/data fetching
  // For now, using static data that matches the CMS structure
  const members: Member[] = [
    {
      name: "Mohammed Haris",
      role: "Software Developer",
      specialty: "Full-Stack Development",
      image: "/images/uploads/haris.jpg",
      instagram: "https://www.instagram.com/mohammed_haris_28?igsh=MWhtdWpicGQxeDhvNA%3D%3D",
      email: "mohammedharis",
      order: 0
    },
    {
      name: "Hafeez Ahammed",
      role: "Software Developer",
      specialty: "Full-Stack Development",
      image: "src/assets/hafeez.png",
      instagram: "https://www.instagram.com/hafeez_7724?igsh=dGdlc3gzZTh6NHA0",
      linkedin: "https://www.linkedin.com/in/hafeez-ahammed-798a87379/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "hafeezahammed264@gmail.com",
      order: 1
    },
    {
      name: "Mohammed Sanaulla",
      role: "Backend Developer",
      specialty: "UI/UX Design & APIs",
      image: "/images/uploads/sanaulla.jpg",
      instagram: "https://www.instagram.com/sho3b.6?igsh=MWVsNzVkZ3dnYzE1dg%3D%3D",
      linkedin: "https://linkedin.com/in/sanaulla-profile",
      email: "sanaulla@codersclub.dev",
      order: 2
    }
  ];

  // Sort members by order
  const sortedMembers = [...members].sort((a, b) => a.order - b.order);

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
            {sortedMembers.map((member, index) => (
              <div
                key={member.order}
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
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:glow-accent transition-all"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:glow-accent transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:glow-accent transition-all"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
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