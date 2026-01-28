import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ contain: "layout style" }}
    >
      {/* Background Elements - simplified, no motion for better CLS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl opacity-25" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-primary/15 blur-3xl opacity-20" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(47,191,158,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(47,191,158,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="section-badge mb-8 animate-fade-in">
            <span>Trusted Web Development Agency</span>
          </div>

          {/* Main Heading - H1 for SEO, no layout-shifting animations */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Web Development & <span className="gradient-text">IT Solutions</span> That Drive Growth
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body animate-fade-in" style={{ animationDelay: "0.2s" }}>
            From custom web development and Shopify stores to UI/UX design and IT consulting — 
            we help startups and enterprises build digital experiences that convert visitors into customers.
          </p>

          {/* CTA Buttons - fixed dimensions to prevent CLS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a 
              href="#contact" 
              className="btn-primary group flex items-center gap-2 min-w-[200px] justify-center"
            >
              Get a Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="btn-secondary flex items-center gap-2 min-w-[180px] justify-center"
            >
              <Play className="w-4 h-4" />
              View Our Services
            </a>
          </div>

          {/* Stats - fixed grid layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-border animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "150+", label: "Projects Delivered" },
              { value: "50+", label: "Happy Clients" },
              { value: "3", label: "Expert Divisions" },
              { value: "99%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-body group-hover:text-primary transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator - simplified */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
