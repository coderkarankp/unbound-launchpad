import { Building2, GraduationCap, Briefcase } from "lucide-react";

const useCases = [
  {
    icon: Building2,
    title: "Businesses",
    description: "Automate accounts payable, invoice matching, and expense reporting. Cut processing costs by 80% and eliminate data entry errors.",
    benefits: ["Invoice automation", "Purchase order matching", "Expense management"],
  },
  {
    icon: GraduationCap,
    title: "Students & Researchers",
    description: "Digitize research papers, citations, and academic documents. Extract tables, figures, and references automatically.",
    benefits: ["Paper digitization", "Citation extraction", "Data table parsing"],
  },
  {
    icon: Briefcase,
    title: "Professionals",
    description: "Process contracts, legal documents, and compliance forms at scale. Smart extraction for key terms and obligations.",
    benefits: ["Contract analysis", "Compliance tracking", "Document search"],
  },
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-badge mb-4">Use Cases</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-5">
            Built for <span className="gradient-text">Everyone</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From Fortune 500 companies to individual professionals — ScanDoc adapts to your workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((uc) => (
            <div
              key={uc.title}
              className="group p-8 rounded-2xl bg-card border border-border card-hover hover:border-primary/20 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                <uc.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{uc.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {uc.description}
              </p>
              <ul className="space-y-2">
                {uc.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full gradient-bg flex-shrink-0" />
                    <span className="text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
