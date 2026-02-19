import { Code, Palette, Shield, ArrowUpRight } from "lucide-react";

const divisions = [
  {
    id: "solutions",
    name: "Unbound Solutions",
    tagline: "Build. Deploy. Scale.",
    description:
      "Expert web development services tailored for startups and enterprises. We build custom websites, Shopify stores, and e-commerce platforms that generate leads and increase revenue.",
    icon: Code,
    gradient: "from-primary to-studios",
    services: [
      "Custom Web Development",
      "Shopify Store Setup",
      "Website Maintenance",
      "IT Consulting",
    ],
  },
  {
    id: "studios",
    name: "Unbound Studios",
    tagline: "Design. Inspire. Transform.",
    description:
      "Award-winning UI/UX design agency creating memorable brand experiences. From logo design to complete brand identity systems, we help you stand out in competitive markets.",
    icon: Palette,
    gradient: "from-accent to-primary",
    services: [
      "Logo Design",
      "Brand Identity",
      "UI/UX Design",
      "Design Systems",
    ],
  },
  {
    id: "services",
    name: "Unbound Services",
    tagline: "Protect. Certify. Empower.",
    description:
      "Enterprise-grade IT solutions and cybersecurity services. We protect your digital assets, optimize your infrastructure, and provide industry-recognized training programs.",
    icon: Shield,
    gradient: "from-primary to-accent",
    services: [
      "Cybersecurity Audits",
      "IT Infrastructure",
      "Security Training",
      "Enterprise Solutions",
    ],
  },
];

const DivisionsSection = () => {
  return (
    <section id="divisions" className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-badge mb-4">Specialized Expertise</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            One Stop Destination To <span className="gradient-text">All Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Three specialized divisions working together to deliver comprehensive digital solutions. 
            From development to design to security — we handle everything your business needs to succeed online.
          </p>
        </div>

        {/* Division Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {divisions.map((division) => (
            <div
              key={division.id}
              className="group relative bg-card rounded-2xl p-8 border border-border card-hover overflow-hidden"
            >
              {/* Gradient Overlay on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${division.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${division.gradient} flex items-center justify-center mb-6`}
              >
                <division.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2">{division.name}</h3>
              <p className={`bg-gradient-to-r ${division.gradient} bg-clip-text text-transparent text-sm font-semibold mb-4`}>
                {division.tagline}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-body">
                {division.description}
              </p>

              {/* Services Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {division.services.map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1.5 rounded-full text-xs bg-muted text-muted-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {service}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${division.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all`}
              >
                Learn More
                <ArrowUpRight className="w-4 h-4 text-primary" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivisionsSection;
