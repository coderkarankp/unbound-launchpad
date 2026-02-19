import { Brain, Zap, Shield, FileSearch, BarChart3, Globe } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered OCR",
    description: "Advanced machine learning extracts text from any document format with 99.5% accuracy.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process thousands of documents in minutes, not hours. Real-time extraction and analysis.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant with end-to-end encryption. Your documents never leave secure infrastructure.",
  },
  {
    icon: FileSearch,
    title: "Smart Classification",
    description: "Automatically categorize invoices, receipts, contracts, and more with intelligent routing.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track processing volumes, accuracy rates, and cost savings with real-time analytics.",
  },
  {
    icon: Globe,
    title: "Multi-Language",
    description: "Support for 50+ languages and currencies. Process global documents without configuration.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-badge mb-4">Features</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-5">
            Powering Document Processing <span className="gradient-text">at Scale</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to automate document workflows, reduce manual data entry,
            and unlock insights from your business documents.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-7 rounded-2xl bg-card border border-border hover:border-primary/20 card-hover transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
