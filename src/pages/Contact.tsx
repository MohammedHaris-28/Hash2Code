import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "hash2codeteam@gmail.com",
      link: "mailto:hash2codeteam@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 9036486726",
      link: "tel:+919036486726",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Bhadravathi, Shivamogga, Karnataka, India",
      link: "https://maps.google.com/?q=Bhadravathi,Shivamogga,Karnataka,India",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-display font-bold">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have a project in mind? Let's discuss how we can help bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="text-center">
                <h2 className="text-3xl font-display font-bold mb-8">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8">
                  Feel free to reach out through any of these channels. We're here to help!
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="glass p-6 rounded-xl flex flex-col items-center text-center space-y-4 hover:glow transition-all block cursor-pointer"
                    onClick={(e) => {
                      if (info.title === "Phone") {
                        window.location.href = info.link;
                      }
                    }}
                  >
                    <div className="w-16 h-16 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold mb-2 text-lg">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground">{info.content}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="glass p-8 rounded-xl max-w-2xl mx-auto">
                <h3 className="font-display font-semibold text-xl mb-4 text-center">
                  Office Hours
                </h3>
                <div className="space-y-2 text-muted-foreground text-center">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;