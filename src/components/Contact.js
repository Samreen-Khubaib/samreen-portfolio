import { Mail, Phone, Github, Linkedin, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { profile } from "@/data/portfolio";

const LINKS = [
  {
    label: "Email",
    value: profile.email,
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`,
    icon: Mail,
  },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: Phone },
  { label: "GitHub", value: "Samreen-Khubaib", href: profile.github, icon: Github },
  { label: "LinkedIn", value: "samreen-khubaib", href: profile.linkedin, icon: Linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 sm:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-[1600px]">
        <ScrollReveal>
          <p className="eyebrow mb-3">05 / Contact</p>
          <h2 className="font-display max-w-xl text-3xl font-medium text-paper sm:text-4xl xl:text-5xl">
            Have a role, a project, or just want to talk stacks? My inbox is open.
          </h2>
        </ScrollReveal>

        <ScrollReveal className="mt-10 grid gap-4 sm:grid-cols-2">
          {LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="panel group flex items-center gap-4 p-6 transition-colors hover:border-teal"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-copper transition-colors group-hover:border-teal group-hover:text-teal">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span className="flex-1">
                  <span className="eyebrow block">{link.label}</span>
                  <span className="mt-1 block text-base text-paper">{link.value}</span>
                </span>
                <ArrowRight className="h-4 w-4 text-teal transition-transform group-hover:translate-x-1" />
              </a>
            );
          })}
        </ScrollReveal>
      </div>

      <footer className="mx-auto mt-20 max-w-[1600px] border-t border-line pt-6">
        <p className="font-mono text-xs text-paper-dim">
          Built with Next.js + Tailwind CSS · © {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </section>
  );
}
