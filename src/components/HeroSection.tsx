import { ArrowRight, Play, FileText, CheckCircle, Zap, BarChart3 } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/6 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Copy */}
          <div>
            <div className="section-badge mb-6">
              <Zap className="w-3.5 h-3.5" />
              <span>AI-Powered Document Processing</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              Upload Your Documents
              <br />
              and Get <span className="gradient-text">Data Digitally</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
              ScanDoc is an AI-powered Intelligent Document Processing solution that captures,
              understands, and connects document data to eliminate manual entry and reduce errors.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#pricing"
                className="btn-primary flex items-center gap-2.5"
              >
                Start Scanning Free
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#how-it-works"
                className="btn-secondary flex items-center gap-2.5"
              >
                <Play className="w-4 h-4" />
                View Demo
              </a>
            </div>

            {/* Trust bar */}
            <div className="flex items-center gap-6 mt-12 pt-8 border-t border-border/50">
              {[
                { value: "10M+", label: "Documents Processed" },
                { value: "99.5%", label: "Accuracy Rate" },
                { value: "500+", label: "Companies" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Product Mockup */}
          <div className="relative hidden lg:block">
            <div className="relative bg-card border border-border rounded-2xl shadow-elevated p-6 overflow-hidden">
              {/* Header bar */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">ScanDoc</div>
                    <div className="text-xs text-muted-foreground">AI based IDP</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-primary font-medium">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Connected to ERP
                </div>
              </div>

              {/* Extraction preview */}
              <div className="text-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">OCR & Financial Data Extraction</h3>
                <p className="text-xs text-muted-foreground mt-1">OCR reads document and AI extracts line items and totals.</p>
              </div>

              {/* Data cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-muted/50 rounded-xl p-4 border border-border/50">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="w-4 h-4 text-primary" />
                    <span className="text-xs font-semibold">Document Details</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between"><span className="text-muted-foreground">Vendor:</span><span className="font-medium">Acme Corporation</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Bill Date:</span><span className="font-medium">2025-10-23</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Due Date:</span><span className="font-medium">2025-11-23</span></div>
                  </div>
                </div>
                <div className="bg-muted/50 rounded-xl p-4 border border-border/50">
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart3 className="w-4 h-4 text-accent" />
                    <span className="text-xs font-semibold">Financial Summary</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between"><span className="text-muted-foreground">Subtotal:</span><span className="font-medium">[Auto-calc]</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Tax:</span><span className="font-medium">$350</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Total:</span><span className="font-bold text-primary">$4,500</span></div>
                  </div>
                </div>
              </div>

              {/* Progress */}
              <div className="mt-5">
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div className="h-full rounded-full gradient-bg" style={{ width: "65%" }} />
                </div>
                <div className="text-center text-xs text-muted-foreground mt-2">Step 2 of 4: Extraction</div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center animate-pulse">
              <Zap className="w-5 h-5 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
