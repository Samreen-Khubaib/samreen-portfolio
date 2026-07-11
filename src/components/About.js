import { GraduationCap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { education } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="border-b border-line px-6 py-24 sm:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-[1600px]">
        <ScrollReveal>
          <p className="eyebrow mb-3">01 / About</p>
        </ScrollReveal>
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-medium text-paper sm:text-4xl xl:text-5xl">
              I like building the part of the app users never see —
              and making it fast enough that they never have to think about it.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper-dim">
              I&apos;m a final-year Software Engineering student who spent the
              last year moving between three teams — frontend, backend, and a
              self-led capstone — picking up a different piece of the stack
              at each stop. That range is deliberate: I want to be the
              engineer who can take a feature from database schema to
              production deploy without waiting on a handoff.
            </p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-paper-dim">
              I lead teams the same way I write code: clear ownership, small
              interfaces, and nothing shipped that hasn&apos;t been tested
              end to end.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex items-start gap-4 border-l-2 border-copper pl-6">
              <GraduationCap className="mt-1 h-6 w-6 shrink-0 text-copper" strokeWidth={1.5} />
              <div>
                <p className="eyebrow mb-3">Education</p>
                <p className="font-display text-xl text-paper">{education.degree}</p>
                <p className="mt-1.5 text-base text-paper-dim">{education.school}</p>
                <div className="mt-4 flex items-center gap-4 font-mono text-xs text-paper-dim">
                  <span>{education.period}</span>
                  <span className="text-teal">{education.detail}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
