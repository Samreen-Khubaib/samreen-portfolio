import { Layout, Server, Sparkles, Database, Cloud, Terminal } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { stack } from "@/data/portfolio";

const ICONS = {
  frontend: Layout,
  backend: Server,
  ai: Sparkles,
  data: Database,
  cloud: Cloud,
  lang: Terminal,
};

export default function Skills() {
  return (
    <section id="stack" className="border-b border-line px-6 py-24 sm:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-[1600px]">
        <ScrollReveal>
          <p className="eyebrow mb-3">02 / Stack</p>
          <h2 className="font-display mb-10 text-3xl font-medium text-paper sm:text-4xl xl:text-5xl">
            Tools I reach for
          </h2>
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((group) => {
            const Icon = ICONS[group.id];
            return (
              <ScrollReveal key={group.id} className="panel p-6" as="div">
                <div className="mb-4 flex items-center gap-3">
                  <Icon className="h-5 w-5 text-copper" strokeWidth={1.75} />
                  <h3 className="font-display text-lg text-paper">{group.label}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border border-line px-3 py-1.5 font-mono text-sm text-paper-dim"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
