import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/60 shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 group">
          <Terminal size={18} className="text-primary" />
          <span className="font-display text-sm tracking-[0.15em] uppercase">
            <span className="text-primary">Anthony</span>
            <span className="text-silver-muted">.dev</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="menu-item px-4 py-2 font-display text-xs tracking-[0.15em] uppercase text-silver-muted hover:text-primary transition-colors duration-200"
              >
                <span className="font-mono text-primary/50 mr-1">0{i + 1}.</span>
                {link.label}
              </a>
            </li>
          ))}
          <li className="ml-3">
            <a
              href="#contact"
              className="border border-primary/40 text-primary px-5 py-2 font-display text-xs tracking-[0.15em] uppercase hover:bg-primary/10 hover:shadow-blue-glow transition-all duration-300"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2 border border-border/40 hover:border-primary/40 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50 overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-1 py-6">
              {navLinks.map((link, i) => (
                <li key={link.href} className="w-full">
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="menu-item block text-center px-6 py-3 font-display text-xs tracking-[0.15em] uppercase text-silver-muted hover:text-primary transition-colors"
                  >
                    <span className="font-mono text-primary/50 mr-2">0{i + 1}.</span>
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="border border-primary/40 text-primary px-6 py-2 font-display text-xs tracking-[0.15em] uppercase"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
