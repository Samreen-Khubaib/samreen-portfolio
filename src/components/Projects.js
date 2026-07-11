import { Github } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-line px-6 py-24 sm:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-[1600px]">
        <ScrollReveal>
          <p className="eyebrow mb-3">04 / Projects</p>
          <h2 className="font-display mb-10 text-3xl font-medium text-paper sm:text-4xl xl:text-5xl">
            Things I&apos;ve shipped
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <ScrollReveal key={project.id} className="panel p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <h3 className="font-display text-2xl text-paper sm:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-1.5 text-base text-copper">{project.tagline}</p>
                </div>
                <div className="text-right font-mono text-sm text-paper-dim">
                  <p>{project.role}</p>
                  <p className="text-teal">{project.period}</p>
                </div>
              </div>

              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-paper-dim">
                {project.description}
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-base text-paper-dim">
                    <span className="mt-2.5 h-1 w-1 shrink-0 bg-teal" aria-hidden="true" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-2 border-t border-line pt-6">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="border border-line px-3 py-1.5 font-mono text-sm text-paper-dim"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-teal hover:text-paper transition-colors"
              >
                <Github className="h-4 w-4" strokeWidth={1.75} />
                View on GitHub →
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
