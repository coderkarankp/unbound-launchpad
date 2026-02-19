import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "ScanDoc cut our invoice processing time by 85%. What used to take our team days now happens in minutes with near-perfect accuracy.",
    name: "Sarah Chen",
    role: "CFO, TechVentures Inc.",
    initials: "SC",
  },
  {
    quote: "The API integration was seamless. We connected ScanDoc to our ERP in under an hour and immediately saw results in our accounts payable workflow.",
    name: "Marcus Rivera",
    role: "CTO, DataFlow Systems",
    initials: "MR",
  },
  {
    quote: "As a researcher, processing hundreds of academic papers manually was a nightmare. ScanDoc extracts citations and data tables flawlessly.",
    name: "Dr. Emily Thornton",
    role: "Research Lead, Oxford AI Lab",
    initials: "ET",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-badge mb-4">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-5">
            Loved by <span className="gradient-text">Teams Worldwide</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-7 rounded-2xl bg-card border border-border card-hover"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-xs font-bold text-primary-foreground">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
