import { motion } from "framer-motion";
import { ChevronRight, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "JavaScript", level: 65 },
      { name: "HTML", level: 30 },
      { name: "Python", level: 30 },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React", level: 85 },
      { name: "Next.js", level: 30 },
      { name: "Node.js", level: 30 },
      { name: "Tailwind CSS", level: 75 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Docker", level: 55 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: 70 },
      { name: "SQL", level: 65 },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 px-6 bg-secondary/20">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }} />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <ChevronRight size={16} className="text-primary" />
            <p className="font-mono text-sm text-primary tracking-[0.2em] uppercase">02 // Skills</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Tech Stack<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="border border-border/50 bg-card/40 backdrop-blur-sm p-5 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 mb-5">
                <Cpu size={14} className="text-primary" />
                <h3 className="font-display text-xs tracking-[0.15em] text-primary uppercase">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-silver font-body">{skill.name}</span>
                      <span className="font-mono text-[10px] text-silver-muted">{skill.level}%</span>
                    </div>
                    <div className="h-[3px] bg-border/50 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + catIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
