import {
  Globe,
  ShoppingCart,
  Wrench,
  PenTool,
  Layers,
  Lock,
  Server,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Custom Web Development",
    description: "Modern, responsive websites built with React, Next.js, and cutting-edge technologies for fast load times and SEO performance.",
  },
  {
    icon: ShoppingCart,
    title: "Shopify & E-Commerce",
    description: "Professional Shopify store development with custom themes, payment integration, and conversion optimization for online sellers.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description: "Reliable website maintenance services including security updates, performance monitoring, and 24/7 technical support.",
  },
  {
    icon: PenTool,
    title: "Brand & Logo Design",
    description: "Strategic brand identity design that communicates your unique value proposition and builds lasting customer trust.",
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    description: "User-centered interface design backed by research and testing to maximize engagement and conversion rates.",
  },
  {
    icon: Lock,
    title: "Cybersecurity Services",
    description: "Comprehensive security audits, penetration testing, and compliance solutions to protect your business from threats.",
  },
  {
    icon: Server,
    title: "IT Solutions & Consulting",
    description: "Custom IT infrastructure solutions, cloud migration, and strategic technology consulting for growing businesses.",
  },
  {
    icon: GraduationCap,
    title: "Professional Training",
    description: "Industry-certified cybersecurity training programs and hands-on internships for aspiring security professionals.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative bg-muted/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(47,191,158,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(47,191,158,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-badge mb-4">Our Services</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            End-to-End <span className="gradient-text">Digital Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you're a startup launching your first website or an enterprise scaling your digital presence, 
            our expert team delivers solutions that drive measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/20 card-hover transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
