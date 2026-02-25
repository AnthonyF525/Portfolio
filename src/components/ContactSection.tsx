import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Calendar, ChevronRight } from "lucide-react";

export const ContactSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section id="contact" ref={ref} className="relative py-24 px-6 bg-secondary/20">
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }} />

      <div className="container mx-auto max-w-2xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <ChevronRight size={16} className="text-primary" />
            <p className="font-mono text-sm text-primary tracking-[0.2em] uppercase">04 // Contact</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Start Mission<span className="text-primary">?</span>
          </h2>
          <p className="text-silver mb-10 leading-relaxed max-w-lg mx-auto font-body text-lg">
            I'm actively seeking junior software engineering roles. If you think I'd be a great
            fit for your team, I'd love to connect and discuss how I can contribute.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          {[
            { icon: Mail, text: "anthony.falice@yahoo.com" },
            { icon: MapPin, text: "Remote & On-site" },
            { icon: Calendar, text: "Available Now" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-sm text-silver-muted font-body border border-border/30 px-4 py-2">
              <Icon size={14} className="text-primary" />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="mailto:anthony@example.com"
            className="group inline-flex items-center gap-3 border border-primary/40 text-primary px-8 py-3.5 font-display text-sm tracking-[0.15em] uppercase hover:bg-primary/10 hover:shadow-blue-glow transition-all duration-300"
          >
            <Send size={16} />
            <span>Get in Touch</span>
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";
