import { motion } from "framer-motion";
import { Code, Palette, Shield, ArrowUpRight } from "lucide-react";

const divisions = [
  {
    id: "solutions",
    name: "Unbound Solutions",
    tagline: "Build. Deploy. Scale.",
    description:
      "Full-stack web development, e-commerce solutions, Shopify stores, and comprehensive website maintenance. We craft digital experiences that drive results.",
    icon: Code,
    gradient: "from-primary to-secondary",
    services: [
      "Web Development",
      "Shopify & E-commerce",
      "Website Maintenance",
      "IT Consulting",
    ],
  },
  {
    id: "studios",
    name: "Unbound Studios",
    tagline: "Design. Inspire. Transform.",
    description:
      "Creative design studio specializing in brand identity, logo design, UI/UX, and Figma prototypes. We bring your brand vision to life with stunning visuals.",
    icon: Palette,
    gradient: "from-purple-500 to-pink-500",
    services: [
      "Logo Design",
      "Brand Identity",
      "UI/UX Design",
      "Figma Prototypes",
    ],
  },
  {
    id: "services",
    name: "Unbound Services",
    tagline: "Protect. Certify. Empower.",
    description:
      "Enterprise-grade security solutions, IT infrastructure, network security, and certified cybersecurity training. Safeguard your digital assets with confidence.",
    icon: Shield,
    gradient: "from-blue-500 to-cyan-500",
    services: [
      "Cybersecurity",
      "Network Security",
      "Certified Training",
      "Enterprise Software",
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-4">Our Expertise</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Three Divisions.{" "}
            <span className="gradient-text">One Mission.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Each division of Unbound is dedicated to a specific domain, ensuring
            deep expertise and exceptional results across all digital needs.
          </p>
        </motion.div>

        {/* Division Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {divisions.map((division, index) => (
            <motion.div
              key={division.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivisionsSection;
