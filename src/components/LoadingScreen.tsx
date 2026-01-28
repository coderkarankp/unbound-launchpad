import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Reduced to 500ms for better LCP (was 2000ms)
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300);
    }, 500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Logo container - simplified for faster render */}
          <motion.div
            className="relative flex flex-col items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {/* Logo text */}
            <span className="text-4xl md:text-5xl font-semibold text-foreground">
              Unbound
            </span>

            {/* Tagline */}
            <p className="text-sm text-muted-foreground tracking-widest uppercase">
              Agency
            </p>

            {/* Simple loading bar */}
            <div className="w-32 h-0.5 bg-border rounded-full overflow-hidden mt-2">
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
