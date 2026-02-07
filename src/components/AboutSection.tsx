import { motion } from "framer-motion";
import { Code2, Rocket, Users, Briefcase } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, well-tested code that follows industry best practices and design patterns.",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Quickly adapting to new technologies, frameworks, and codebases to deliver results from day one.",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Experienced in Agile workflows, code reviews, and collaborative development using Git and CI/CD.",
  },
  {
    icon: Briefcase,
    title: "Results-Driven",
    description: "Focused on delivering features that create real business impact and improve user experience.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-2 tracking-wider">01. About</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Why hire me<span className="text-gradient-blue">?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 text-silver leading-relaxed"
          >
            <p>
              I'm a junior software engineer with a strong foundation in modern web development.
              I bring a genuine passion for building high-quality software and a proven ability to
              learn quickly in fast-paced environments.
            </p>
            <p>
              My core expertise is in <span className="text-foreground font-medium">React</span>,{" "}
              <span className="text-foreground font-medium">TypeScript</span>, and{" "}
              <span className="text-foreground font-medium">full-stack JavaScript</span>. I'm
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
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4"
          >
            {highlights.map((item) => (
              <div
                key={item.title}
                className="glass-card rounded-xl p-5 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:shadow-blue-glow transition-shadow flex-shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-silver-muted">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
