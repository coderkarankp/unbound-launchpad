import { motion } from "framer-motion";
import { CheckCircle2, Target, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're committed to empowering businesses with technology that unlocks limitless potential.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We build lasting partnerships, not just projects.",
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "We stay ahead of the curve, adopting cutting-edge tools and methodologies.",
  },
];

const benefits = [
  "End-to-end digital solutions under one roof",
  "Dedicated team of experts across all domains",
  "Transparent pricing with no hidden costs",
  "24/7 support and rapid response times",
  "Proven track record with 150+ successful projects",
  "Flexible engagement models tailored to your needs",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/2 -right-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/4 -left-32 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl pointer-events-none animate-float" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring" }}
          >
            <span className="section-badge mb-4 energy-pulse">Why Choose Unbound</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
              Where Vision Meets{" "}
              <span className="gradient-text neon-glow">Execution</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              At Unbound, we believe in breaking the barriers between ideas and
              reality. Our integrated approach combines development, design, and
              security expertise to deliver comprehensive solutions that propel
              your business forward.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ x: 8 }}
                  className="flex gap-4 group cursor-default"
                >
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-300 relative"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className="absolute inset-0 rounded-xl bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors relative z-10" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Benefits Card */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
            className="relative"
          >
            {/* Animated glow background */}
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-3xl"
              animate={{ 
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <div className="relative bg-card rounded-2xl p-8 border border-border shadow-card overflow-hidden neon-border">
              {/* Shimmer effect */}
              <div className="absolute inset-0 shimmer-sweep pointer-events-none" />
              
              <h3 className="text-xl font-bold mb-6 relative z-10">
                The Unbound Advantage
              </h3>
              <ul className="space-y-4 relative z-10">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 group cursor-default"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary))]" />
                    </motion.div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-border relative z-10">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        className="w-10 h-10 rounded-full gradient-bg border-2 border-card flex items-center justify-center text-white text-xs font-bold"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                        whileHover={{ scale: 1.15, zIndex: 10 }}
                      >
                        {["JD", "MK", "AS", "RB"][i - 1]}
                      </motion.div>
                    ))}
                  </div>
                  <div>
                    <div className="font-semibold">50+ Happy Clients</div>
                    <div className="text-sm text-muted-foreground">
                      Trust Unbound for their digital needs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
