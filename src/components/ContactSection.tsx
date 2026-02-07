import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Calendar } from "lucide-react";

export const ContactSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section id="contact" ref={ref} className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-2 tracking-wider">04. Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Interested in working together<span className="text-gradient-blue">?</span>
          </h2>
          <p className="text-silver mb-10 leading-relaxed max-w-lg mx-auto">
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
          <div className="flex items-center gap-2 text-sm text-silver-muted">
            <Mail size={16} className="text-primary" />
            <span>anthony@example.com</span>
          </div>
          <span className="hidden sm:block text-border">|</span>
          <div className="flex items-center gap-2 text-sm text-silver-muted">
            <MapPin size={16} className="text-primary" />
            <span>Open to Remote & On-site</span>
          </div>
          <span className="hidden sm:block text-border">|</span>
          <div className="flex items-center gap-2 text-sm text-silver-muted">
            <Calendar size={16} className="text-primary" />
            <span>Available Immediately</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="mailto:anthony@example.com"
            className="inline-flex items-center gap-2 bg-gradient-blue text-primary-foreground px-8 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-blue-glow"
          >
            <Send size={18} />
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";
