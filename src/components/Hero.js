import { profile } from "@/data/portfolio";

const STATS = [
  { value: "3", label: "roles completed" },
  { value: "6", label: "tech domains" },
  { value: "1", label: "capstone led" },
  { value: "3.56", label: "CGPA" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-6 py-24 sm:px-10 md:grid-cols-[1.5fr_1fr] md:py-32 lg:px-16 xl:px-24">
        <div>
          <p className="eyebrow mb-6">Full Stack Software Engineer · Lahore, PK</p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-paper sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="font-display mt-5 text-2xl text-copper sm:text-3xl lg:text-4xl">
            {profile.focus}
          </p>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper-dim">
            {profile.summary}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="border border-copper bg-copper px-7 py-3.5 font-mono text-sm uppercase tracking-widest text-ink transition-opacity hover:opacity-90"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="border border-line px-7 py-3.5 font-mono text-sm uppercase tracking-widest text-paper transition-colors hover:border-teal hover:text-teal"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="relative hidden md:flex md:items-center md:justify-center">
          <span
            aria-hidden="true"
            className="font-mono pointer-events-none select-none text-[13rem] font-semibold leading-none text-line opacity-60"
          >
            {"</>"}
          </span>
          <div className="relative flex flex-col gap-5 border-l-2 border-copper pl-6">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <span className="font-display text-3xl text-copper">{stat.value}</span>
                <span className="ml-2 font-mono text-xs uppercase tracking-widest text-paper-dim">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
