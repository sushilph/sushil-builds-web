import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sushil Phulara — QA Automation & Cybersecurity Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Sushil Phulara — QA Automation Engineer specializing in Playwright, API testing, and production observability.",
      },
      { property: "og:title", content: "Sushil Phulara — QA Automation Engineer" },
      {
        property: "og:description",
        content:
          "Building robust end-to-end automation pipelines with Playwright, Postman, and backend data validation.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700;800&display=swap",
      },
    ],
  }),
  component: Portfolio,
});

const skills = [
  {
    title: "Automation Frameworks",
    items: ["Playwright (POM, Global Auth)", "Selenium WebDriver", "Page Object Model"],
  },
  {
    title: "API & Backend",
    items: ["Postman (JS scripting)", "REST API verification", "SQL · Joins · Subqueries", "NoSQL · JSON validation"],
  },
  {
    title: "Methodologies",
    items: ["Shift-Left Testing", "Regression & Functional", "Defect Lifecycle", "Spatial Data Validation"],
  },
  {
    title: "Observability & PM",
    items: ["Sentry", "Datadog", "Jira", "ClickUp"],
  },
];

const projects = [
  {
    name: "E2E Playwright Suite",
    description:
      "End-to-end regression pipeline for a SaaS platform using Playwright with Global Auth and Page Object Model — cut release verification time by 70%.",
    tech: ["Playwright", "TypeScript", "CI/CD"],
  },
  {
    name: "API Contract Verifier",
    description:
      "Postman-driven REST verification suite with JS automation scripts, schema assertions, and JSON contract validation across microservices.",
    tech: ["Postman", "JavaScript", "REST"],
  },
  {
    name: "Production Observability Bridge",
    description:
      "Integrated Sentry and Datadog alerts into the QA defect lifecycle — surfacing production regressions inside Jira within minutes.",
    tech: ["Sentry", "Datadog", "Jira"],
  },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Work" },
  { href: "#contact", label: "Contact" },
];

function Portfolio() {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Sticky header */}
      <header className="fixed top-0 z-50 w-full glass">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg font-extrabold tracking-tight">
            <span className="text-gradient">sushil</span>
            <span className="text-primary">.qa</span>
          </a>
          <ul className="hidden gap-8 md:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-display text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-md border border-primary/40 bg-primary/10 px-4 py-2 font-display text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            Hire me
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative flex min-h-screen items-center justify-center px-6 pt-24"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="absolute inset-0 grid-bg opacity-40" style={{ animation: "grid-drift 30s linear infinite" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 font-display text-xs text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Available for new engagements
          </div>
          <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tighter md:text-7xl lg:text-8xl">
            Sushil
            <br />
            <span className="text-gradient">Phulara</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            QA Automation Engineer · Cybersecurity Practitioner.
            <br />
            <span className="text-foreground/80">Turning ideas into resilient, fully automated digital experiences.</span>
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="group rounded-md bg-primary px-6 py-3 font-display text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-neon)]"
            >
              View my work →
            </a>
            <a
              href="#contact"
              className="rounded-md border border-border bg-card/50 px-6 py-3 font-display text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-primary/50"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.5fr] md:gap-16">
          <div className="reveal">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">01 · About</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
              Quality is a <span className="text-gradient">system</span>, not a step.
            </h2>
          </div>
          <div className="reveal space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a QA Automation Engineer with a passion for building robust end-to-end automation pipelines using{" "}
              <span className="text-foreground">Playwright</span> and <span className="text-foreground">Postman</span>,
              with a strong focus on backend data validation and production observability.
            </p>
            <p>
              My approach is <span className="text-primary">shift-left</span> by default — pushing verification into
              every layer of the stack so bugs surface in CI, not in customer dashboards. I treat test code with the
              same rigor as production code.
            </p>
            <p>
              Cybersecurity-minded throughout: I look for the failure modes others miss.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative px-6 py-24">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative mx-auto max-w-6xl">
          <div className="reveal mb-14 text-center">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">02 · Toolkit</p>
            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">Stack & specialties</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((g, i) => (
              <div
                key={g.title}
                className="reveal glass group rounded-xl p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-neon)]"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="mb-4 font-display text-xs text-primary">0{i + 1}</div>
                <h3 className="mb-4 font-display text-lg font-bold">{g.title}</h3>
                <ul className="space-y-2">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">03 · Selected work</p>
              <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">Featured projects</h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              A snapshot of automation pipelines and verification systems I've architected.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((p, i) => (
              <article
                key={p.name}
                className="reveal group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/20 blur-3xl transition-opacity group-hover:opacity-100"
                  aria-hidden
                />
                <div className="relative">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-display text-xs text-primary">PROJECT 0{i + 1}</span>
                    <span className="font-display text-xs text-muted-foreground">→</span>
                  </div>
                  <h3 className="mb-3 font-display text-xl font-bold leading-tight">{p.name}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 font-display text-[11px] text-foreground/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="reveal mb-12 text-center">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">04 · Contact</p>
            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
              Let's <span className="text-gradient">ship quality</span> together
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Have a system that needs hardening? An automation suite to architect? I'd love to hear about it.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="reveal glass space-y-5 rounded-2xl p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-display text-xs uppercase tracking-wider text-muted-foreground">
                  Name
                </span>
                <input
                  required
                  type="text"
                  className="w-full rounded-md border border-border bg-input/50 px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
                />
              </label>
              <label className="block">
                <span className="mb-2 block font-display text-xs uppercase tracking-wider text-muted-foreground">
                  Email
                </span>
                <input
                  required
                  type="email"
                  className="w-full rounded-md border border-border bg-input/50 px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block font-display text-xs uppercase tracking-wider text-muted-foreground">
                Message
              </span>
              <textarea
                required
                rows={5}
                className="w-full resize-none rounded-md border border-border bg-input/50 px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-md bg-primary px-6 py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-neon)]"
            >
              {sent ? "Message received ✓" : "Send message →"}
            </button>
            <p className="text-center text-sm text-muted-foreground">
              or reach me directly at{" "}
              <a href="mailto:sushilphulara@gmail.com" className="text-primary hover:underline">
                sushilphulara@gmail.com
              </a>
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <p className="font-display text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sushil Phulara. Built with precision.
          </p>
          <div className="flex gap-6">
            {[
              { label: "GitHub", href: "https://github.com" },
              { label: "LinkedIn", href: "https://linkedin.com" },
              { label: "Twitter", href: "https://twitter.com" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="font-display text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
