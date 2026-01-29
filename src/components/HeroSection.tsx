import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
      style={{ contain: "layout style" }}
    >
      {/* Premium mesh gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] opacity-40" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px] opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-studios/5 blur-[150px] opacity-20" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]" 
          style={{
            backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="section-badge mb-10 animate-fade-in">
            <span>Trusted Web Development Agency</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 animate-fade-in tracking-tight" style={{ animationDelay: "0.1s" }}>
            Web Development & <br className="hidden md:block" />
            <span className="gradient-text">IT Solutions</span> That Drive Growth
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            From custom web development and Shopify stores to UI/UX design and IT consulting — 
            we help startups and enterprises build digital experiences that convert.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a 
              href="#contact" 
              className="btn-primary group flex items-center gap-3 min-w-[220px] justify-center"
            >
              Get a Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="btn-secondary flex items-center gap-3 min-w-[180px] justify-center"
            >
              <Play className="w-4 h-4" />
              View Our Services
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "150+", label: "Projects Delivered" },
              { value: "50+", label: "Happy Clients" },
              { value: "3", label: "Expert Divisions" },
              { value: "99%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-3 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2 animate-pulse">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
