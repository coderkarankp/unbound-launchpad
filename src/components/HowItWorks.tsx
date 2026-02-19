import { Upload, Brain, Download } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload Documents",
    description: "Drag and drop or upload invoices, receipts, contracts — any document format. Batch upload supported.",
  },
  {
    icon: Brain,
    step: "02",
    title: "AI Analysis",
    description: "Our AI engine reads, classifies, and extracts structured data in seconds with enterprise-grade accuracy.",
  },
  {
    icon: Download,
    step: "03",
    title: "Export & Integrate",
    description: "Download clean data or push directly to your ERP, accounting software, or database via API.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-badge mb-4">How It Works</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-5">
            Three Steps to <span className="gradient-text">Automation</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Go from paper documents to structured digital data in minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-border" />

          {steps.map((s) => (
            <div key={s.step} className="relative text-center">
              <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6 relative z-10">
                <s.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="text-xs font-bold text-primary mb-2 tracking-widest">STEP {s.step}</div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
