import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", service: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: Mail, label: "Email Us", value: "hello@unboundhq.com", href: "mailto:hello@unboundhq.com" },
    { icon: Phone, label: "Call Us", value: "+1 (234) 567-890", href: "tel:+1234567890" },
    { icon: MapPin, label: "Location", value: "Available Worldwide, Remote-First", href: null },
  ];

  return (
    <section id="contact" className="py-24 relative bg-muted/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(47,191,158,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(47,191,158,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Floating Energy Orbs */}
      <div className="absolute top-10 right-20 w-48 h-48 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-10 left-20 w-36 h-36 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, 10, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring" }}
          >
            <span className="section-badge mb-4 energy-pulse">Get In Touch</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
              Let's Build Something{" "}
              <span className="gradient-text neon-glow">Extraordinary</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Ready to transform your digital presence? Whether you need a new
              website, brand refresh, or security audit — our team is here to
              help. Reach out for a free consultation.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300 relative"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className="absolute inset-0 rounded-xl bg-primary/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                    <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors relative z-10" />
                  </motion.div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="font-medium hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-medium">{item.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="mt-10 p-6 rounded-2xl gradient-bg text-white relative overflow-hidden group"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                  <h4 className="font-semibold">Free Strategy Session</h4>
                </div>
                <p className="text-sm opacity-90 mb-4">
                  Book a 30-minute call to discuss your project requirements.
                </p>
                <motion.a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-sm font-medium"
                  whileHover={{ gap: '12px' }}
                >
                  Schedule Now <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -5 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 border border-border shadow-card relative overflow-hidden group"
            >
              {/* Neon border effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                   style={{ boxShadow: '0 0 30px hsl(var(--primary) / 0.2), inset 0 0 30px hsl(var(--primary) / 0.05)' }} />
              
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                Send us a message
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  ✨
                </motion.div>
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-field focus:shadow-[0_0_15px_hsl(var(--primary)/0.2)] transition-shadow"
                    placeholder="John Doe"
                  />
                </motion.div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-field focus:shadow-[0_0_15px_hsl(var(--primary)/0.2)] transition-shadow"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Service Interested In</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="input-field focus:shadow-[0_0_15px_hsl(var(--primary)/0.2)] transition-shadow"
                >
                  <option value="">Select a service...</option>
                  <option value="web-development">Web Development</option>
                  <option value="ecommerce">E-Commerce & Shopify</option>
                  <option value="branding">Brand & Logo Design</option>
                  <option value="uiux">UI/UX Design</option>
                  <option value="cybersecurity">Cybersecurity Services</option>
                  <option value="training">Training & Certification</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Your Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="input-field resize-none focus:shadow-[0_0_15px_hsl(var(--primary)/0.2)] transition-shadow"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 relative overflow-hidden group/btn disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Button shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                
                <span className="relative z-10">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
                <motion.div
                  animate={isSubmitting ? { rotate: 360 } : {}}
                  transition={{ duration: 1, repeat: isSubmitting ? Infinity : 0 }}
                  className="relative z-10"
                >
                  <Send className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
