import { motion } from "framer-motion";
import { Code2, Rocket, Users, Briefcase, ChevronRight } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, well-tested code that follows industry best practices and design patterns.",
    stat: "LVL 8",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Quickly adapting to new technologies, frameworks, and codebases to deliver results from day one.",
    stat: "LVL 9",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Experienced in Agile workflows, code reviews, and collaborative development using Git and CI/CD.",
    stat: "LVL 8",
  },
  {
    icon: Briefcase,
    title: "Results-Driven",
    description: "Focused on delivering features that create real business impact and improve user experience.",
    stat: "LVL 8",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <ChevronRight size={16} className="text-primary" />
            <p className="font-mono text-sm text-primary tracking-[0.2em] uppercase">01 // About</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Why Hire Me<span className="text-primary">?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 font-body text-lg text-silver leading-relaxed"
          >
            <p>
              I'm a junior software engineer with a strong foundation in modern web development.
              I bring a genuine passion for building high-quality software and a proven ability to
              learn quickly in fast-paced environments.
            </p>
            <p>
              My core expertise is in <span className="text-primary font-semibold">Java</span>,{" "}
              <span className="text-primary font-semibold">React</span>, and{" "}
              <span className="text-primary font-semibold">TypeScript</span>. I'm
              comfortable working across the entire stack and eager to take on challenges that
              push my skills further.
            </p>
            <p>
              I thrive in collaborative teams where I can contribute clean, well-documented code
              while learning from senior engineers. I'm looking for a role where I can grow,
              make a meaningful impact, and help build great products.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="group border border-border/50 p-4 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover scan effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                
                <div className="flex items-start gap-4 relative z-10">
                  <div className="p-2 border border-primary/30 text-primary flex-shrink-0">
                    <item.icon size={18} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-display text-sm tracking-wider text-foreground">{item.title}</h3>
                      <span className="font-mono text-[10px] text-primary tracking-wider">{item.stat}</span>
                    </div>
                    <p className="text-sm text-silver-muted font-body">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
