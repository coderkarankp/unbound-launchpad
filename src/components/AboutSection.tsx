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
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Why Choose Unbound
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
              Where Vision Meets{" "}
              <span className="gradient-text">Execution</span>
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
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
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl opacity-30" />
            <div className="relative glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">
                The Unbound Advantage
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background"
                      />
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