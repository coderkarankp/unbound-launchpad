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
      {/* Background Accent with animation */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="section-badge mb-4 neon-border shimmer-sweep"
            whileHover={{ scale: 1.05 }}
          >
            Our Expertise
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Three Divisions.{" "}
            <motion.span 
              className="gradient-text neon-glow inline-block"
              animate={{
                textShadow: [
                  "0 0 10px hsl(166 61% 47% / 0.3)",
                  "0 0 30px hsl(166 61% 47% / 0.6)",
                  "0 0 10px hsl(166 61% 47% / 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              One Mission.
            </motion.span>
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
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 150
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-card rounded-2xl p-8 border border-border card-hover overflow-hidden neon-border"
            >
              {/* Gradient Overlay on Hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
                className={`absolute inset-0 bg-gradient-to-br ${division.gradient}`}
              />

              {/* Shimmer effect */}
              <div className="absolute inset-0 shimmer-sweep rounded-2xl" />

              {/* Icon with anime bounce */}
              <motion.div
                whileHover={{ 
                  scale: 1.15,
                  rotate: [0, -10, 10, 0],
                }}
                transition={{ duration: 0.4 }}
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${division.gradient} flex items-center justify-center mb-6 relative energy-pulse`}
              >
                <division.icon className="w-7 h-7 text-white" />
              </motion.div>

              {/* Content */}
              <motion.h3 
                className="text-xl font-bold mb-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {division.name}
              </motion.h3>
              <p className={`bg-gradient-to-r ${division.gradient} bg-clip-text text-transparent text-sm font-semibold mb-4`}>
                {division.tagline}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-body">
                {division.description}
              </p>

              {/* Services Tags with stagger animation */}
              <div className="flex flex-wrap gap-2 mb-6">
                {division.services.map((service, serviceIndex) => (
                  <motion.span
                    key={service}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + serviceIndex * 0.05 }}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "hsl(var(--primary) / 0.2)"
                    }}
                    className="px-3 py-1.5 rounded-full text-xs bg-muted text-muted-foreground font-medium cursor-default transition-colors"
                  >
                    {service}
                  </motion.span>
                ))}
              </div>

              {/* CTA with arrow animation */}
              <motion.a
                href="#contact"
                className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${division.gradient} bg-clip-text text-transparent`}
                whileHover={{ x: 5 }}
              >
                Learn More
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowUpRight className="w-4 h-4 text-primary" />
                </motion.span>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivisionsSection;
