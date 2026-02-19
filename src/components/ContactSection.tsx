import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
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
      <div className="absolute inset-0 bg-[linear-gradient(hsl(205_72%_52%/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(205_72%_52%/0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <span className="section-badge mb-4">Start Your Project</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
              Get Your <span className="gradient-text">Free Consultation</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Ready to take your business to the next level? Whether you need a custom website, 
              Shopify store, brand redesign, or IT solutions — our experts are here to help. 
              Contact us today for a free, no-obligation consultation.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
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
                </div>
              ))}
            </div>

            {/* CTA Banner */}
            <div className="mt-10 p-6 rounded-2xl gradient-bg text-white">
              <h4 className="font-semibold mb-2">Free 30-Minute Strategy Call</h4>
              <p className="text-sm opacity-90 mb-4">
                Discuss your project goals with our experts and get actionable recommendations — no strings attached.
              </p>
              <a 
                href="mailto:hello@unboundhq.com?subject=Strategy%20Session%20Request" 
                className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
              >
                Book Your Free Call <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Content - Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 border border-border shadow-card"
            >
              <h3 className="text-xl font-bold mb-6">Send us a message</h3>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Service Interested In</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="input-field"
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
                  className="input-field resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
