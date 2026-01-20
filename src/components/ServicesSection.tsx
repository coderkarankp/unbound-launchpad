import { motion } from "framer-motion";
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
    title: "Web Development",
    description: "Custom websites built with modern tech stacks for optimal performance.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Shopify",
    description: "Scalable online stores that convert visitors into loyal customers.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description: "24/7 support, updates, and optimization to keep your site running flawlessly.",
  },
  {
    icon: PenTool,
    title: "Brand & Logo Design",
    description: "Memorable brand identities that stand out in crowded markets.",
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    description: "User-centered interfaces that delight and drive engagement.",
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    description: "Comprehensive security audits and protection for your digital assets.",
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    description: "Robust, scalable infrastructure solutions for growing enterprises.",
  },
  {
    icon: GraduationCap,
    title: "Certified Training",
    description: "Industry-recognized cybersecurity courses and internship programs.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative bg-muted/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(47,191,158,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(47,191,158,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Floating Energy Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-secondary/10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-accent/10 blur-2xl animate-pulse-glow" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-4 energy-pulse">What We Offer</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Comprehensive <span className="gradient-text neon-glow">Digital Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From concept to launch and beyond — we provide everything your business
            needs to thrive in the digital landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group p-6 rounded-2xl bg-card border border-border relative overflow-hidden shimmer-sweep"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
              
              {/* Neon border on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" 
                   style={{ boxShadow: '0 0 20px hsl(var(--primary) / 0.3), inset 0 0 20px hsl(var(--primary) / 0.1)' }} />
              
              <div className="relative z-10">
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-all duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </motion.div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
