import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#divisions", label: "Divisions" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Check initial theme
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    
    // Add transition class for smooth theme change
    document.documentElement.classList.add("theme-transition");
    document.documentElement.classList.toggle("dark", newDark);
    
    // Remove transition class after animation completes
    setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 300);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
      style={{ contain: "layout" }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            className="text-xl font-semibold text-foreground hover:opacity-80 transition-opacity"
          >
            Unbound Agency
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl bg-muted hover:bg-primary/10 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-primary" />
              ) : (
                <Moon className="w-5 h-5 text-muted-foreground" />
              )}
            </button>

            <a href="#contact" className="btn-primary">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl bg-muted hover:bg-primary/10 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-primary" />
              ) : (
                <Moon className="w-5 h-5 text-muted-foreground" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden overflow-hidden animate-fade-in">
            <div className="py-6 flex flex-col gap-4 border-t border-border mt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary text-center mt-2"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
