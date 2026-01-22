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

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-4">What We Offer</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Comprehensive <span className="gradient-text">Digital Services</span>
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
