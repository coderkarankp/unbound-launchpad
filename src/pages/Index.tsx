import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DivisionsSection from "@/components/DivisionsSection";
import ServicesSection from "@/components/ServicesSection";
import ComplianceSection from "@/components/ComplianceSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Skip to main content - accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:font-medium">
        Skip to main content
      </a>
      <ScrollProgress />
      <BackToTop />
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <DivisionsSection />
        <ServicesSection />
        <ComplianceSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
