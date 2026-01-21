import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DivisionsSection from "@/components/DivisionsSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import AnimatedSection from "@/components/AnimatedSection";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingScreen from "@/components/LoadingScreen";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.15,
    }
  },
  exit: { opacity: 0 }
};

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            className="min-h-screen bg-background cursor-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ScrollProgress />
            <CustomCursor />
            <Navbar />
            <AnimatePresence mode="wait">
              <motion.main
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <AnimatedSection>
                  <HeroSection />
                </AnimatedSection>
                <AnimatedSection delay={0.1}>
                  <DivisionsSection />
                </AnimatedSection>
                <AnimatedSection delay={0.1}>
                  <ServicesSection />
                </AnimatedSection>
                <AnimatedSection delay={0.1}>
                  <AboutSection />
                </AnimatedSection>
                <AnimatedSection delay={0.1}>
                  <ContactSection />
                </AnimatedSection>
                <AnimatedSection delay={0.1}>
                  <Footer />
                </AnimatedSection>
              </motion.main>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;