import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, FileText, ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 scanlines">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }} />

      {/* Animated scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-hud-scan"
        />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/3 blur-[100px]" />

      {/* HUD corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-primary/30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-primary/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-primary/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-primary/30" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Status indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 font-mono text-xs text-primary/80 mb-6 tracking-[0.3em] uppercase border border-primary/20 px-4 py-2"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          System Online — Player Profile Loaded
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-mono text-sm text-primary mb-4 tracking-[0.2em] uppercase"
        >
          &lt; Junior Software Engineer /&gt;
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-wider mb-4 text-flicker"
        >
          <span className="text-foreground">ANTHONY</span>
          <span className="text-gradient-blue">_</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="font-body text-lg sm:text-xl text-silver mb-8 max-w-xl mx-auto leading-relaxed"
        >
          <p>Building clean, scalable web applications with modern technologies.</p>
          <p className="text-silver-muted mt-1">Ready to bring value to your engineering team.</p>
        </motion.div>

        {/* Menu-style CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
        >
          <a
            href="#projects"
            className="group flex items-center gap-3 bg-primary/10 border border-primary/40 text-primary px-7 py-3 font-display text-sm uppercase tracking-wider hover:bg-primary/20 hover:border-primary/70 hover:shadow-blue-glow transition-all duration-300"
          >
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            View My Work
          </a>
          <a
            href="/Anthony Falice_Resume_Java 11-1.pdf"
            download="Anthony Falice_Resume_Java.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 border border-border/60 text-silver px-7 py-3 font-display text-sm uppercase tracking-wider hover:text-primary hover:border-primary/40 transition-all duration-300"
          >
            <FileText size={16} />
            Download Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex items-center justify-center gap-4 mb-14"
        >
          {[
            { icon: Github, href: "https://github.com/AnthonyF525", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/anthonyfalice/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:anthony.falice@yahoo.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="p-3 border border-border/40 text-silver-muted hover:text-primary hover:border-primary/50 hover:shadow-blue-glow transition-all duration-300"
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-[10px] font-mono tracking-[0.4em] uppercase">Scroll Down</span>
          <ArrowDown size={14} className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
