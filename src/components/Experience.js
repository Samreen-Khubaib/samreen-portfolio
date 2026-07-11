import { Briefcase } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line px-6 py-24 sm:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-[1600px]">
        <ScrollReveal>
          <p className="eyebrow mb-3">03 / Experience</p>
          <h2 className="font-display mb-12 text-3xl font-medium text-paper sm:text-4xl xl:text-5xl">
            Where I&apos;ve worked
          </h2>
        </ScrollReveal>

        <div className="relative border-l border-line pl-9">
          {experience.map((job) => (
            <ScrollReveal key={job.id} className="relative mb-14 last:mb-0">
              <span
                className="absolute -left-[calc(2.25rem+1px)] top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-copper bg-ink"
                aria-hidden="true"
              >
                <Briefcase className="h-3.5 w-3.5 text-copper" strokeWidth={2} />
              </span>
              <p className="font-mono text-sm text-teal">{job.period}</p>
              <h3 className="font-display mt-1.5 text-xl text-paper sm:text-2xl">{job.role}</h3>
              <p className="text-base text-copper">{job.org}</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3 text-base leading-relaxed text-paper-dim">
                    <span className="mt-2.5 h-1 w-1 shrink-0 bg-line" aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
