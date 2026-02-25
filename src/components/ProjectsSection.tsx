import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronRight, Gamepad2 } from "lucide-react";

const projects = [
  {
    title: "Group Casino Project - Roulette",
    description:
      "A group project about making casino games. I worked on the Roulette game!",
    tags: ["java"],
    github: "https://github.com/AnthonyF525/GroupCasinoWeek5",
    live: "#",
  },
  {
    title: "Group Demo project: Ping",
    description:
      "A minimalist blog platform made for developers, by deleopers! I covered the wirefame and the AI bot: Pong!",
    tags: ["Java", "React", "PostgreSQL", "Vercel"],
    github: "https://github.com/Demo-Project-Summer-25/SlackClone",
    live: "#",
  },
  {
    title: "EPIC: The Muscial - Interactive Map",
    description:
      "A passion project! Still a work in progress",
    tags: ["React", "OpenWeather API", "Java", "TypeScript"],
    github: "https://github.com/AnthonyF525/Epic-Timeline",
    live: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <ChevronRight size={16} className="text-primary" />
            <p className="font-mono text-sm text-primary tracking-[0.2em] uppercase">03 // Projects</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Quest Log<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative border border-border/50 bg-card/40 backdrop-blur-sm p-6 flex flex-col hover:border-primary/40 transition-all duration-300 overflow-hidden"
            >
              {/* Hover scan effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/5 to-primary/0 -translate-y-full group-hover:translate-y-full transition-transform duration-700" />

              <div className="relative z-10 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <Gamepad2 className="text-primary" size={22} />
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      aria-label="View source code"
                      className="text-silver-muted hover:text-primary transition-colors"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.live}
                      aria-label="View live site"
                      className="text-silver-muted hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <h3 className="font-display text-base tracking-wider text-foreground mb-2 group-hover:text-primary transition-colors uppercase">
                  {project.title}
                </h3>
                <p className="text-sm text-silver-muted mb-6 flex-1 leading-relaxed font-body">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono text-primary/70 border border-primary/20 px-2 py-0.5 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
