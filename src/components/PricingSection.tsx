import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "For individuals getting started",
    features: ["100 pages/month", "5 document types", "Basic OCR", "Email support", "CSV export"],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Pro",
    monthlyPrice: 49,
    yearlyPrice: 39,
    description: "For growing teams and businesses",
    features: ["5,000 pages/month", "All document types", "AI extraction", "Priority support", "API access", "ERP integrations", "Analytics dashboard"],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: 199,
    yearlyPrice: 159,
    description: "For large-scale operations",
    features: ["Unlimited pages", "Custom AI models", "Dedicated support", "SLA guarantee", "On-premise option", "SSO & RBAC", "Custom integrations", "Audit logs"],
    cta: "Contact Sales",
    popular: false,
  },
];

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-badge mb-4">Pricing</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-5">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Start free, upgrade when you're ready. No hidden fees.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-muted rounded-full p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                !isYearly ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                isYearly ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"
              }`}
            >
              Yearly
              <span className="ml-1.5 text-xs text-primary font-bold">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl border card-hover transition-colors ${
                plan.popular
                  ? "bg-card border-primary/30 shadow-glow"
                  : "bg-card border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full text-xs font-bold gradient-bg text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-5">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-extrabold">
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-muted-foreground text-sm">/month</span>
              </div>

              <a
                href="#"
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all ${
                  plan.popular
                    ? "btn-primary"
                    : "btn-secondary"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </a>

              <ul className="mt-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
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

export default PricingSection;
