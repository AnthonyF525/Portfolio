import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "TaskFlow",
    description:
      "A modern task management app with drag-and-drop, real-time updates, and team collaboration features.",
    tags: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "DevBlog",
    description:
      "A minimalist blog platform for developers with markdown support, syntax highlighting, and SEO optimization.",
    tags: ["Next.js", "MDX", "PostgreSQL", "Vercel"],
    github: "#",
    live: "#",
  },
  {
    title: "WeatherScope",
    description:
      "A beautiful weather dashboard with location-based forecasts, interactive maps, and severe weather alerts.",
    tags: ["React", "OpenWeather API", "Chart.js", "CSS Modules"],
    github: "#",
    live: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-2 tracking-wider">03. Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Things I've built<span className="text-gradient-blue">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 flex flex-col hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="text-primary" size={28} />
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    aria-label="View source code"
                    className="text-silver-muted hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.live}
                    aria-label="View live site"
                    className="text-silver-muted hover:text-primary transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-silver-muted mb-6 flex-1 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-muted-foreground bg-muted/50 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
