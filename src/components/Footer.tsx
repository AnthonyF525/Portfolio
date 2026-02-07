import { forwardRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <footer ref={ref} className="py-8 px-6 border-t border-border/50">
      <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} Anthony. Built with passion.
        </p>
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Mail, href: "mailto:anthony@example.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
