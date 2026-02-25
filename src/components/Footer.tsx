import { forwardRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <footer ref={ref} className="py-8 px-6 border-t border-border/30">
      <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground font-mono tracking-wider">
          © {new Date().getFullYear()} ANTHONY<span className="text-primary">_</span> // ALL RIGHTS RESERVED
        </p>
        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Mail, href: "mailto:anthony@example.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="p-2 border border-border/30 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
