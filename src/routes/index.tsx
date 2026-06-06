import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Send,
  Check,
  User,
  AtSign,
  MessageSquare,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sushil Phulara - QA Automation & Cybersecurity Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Sushil Phulara - QA Automation Engineer specializing in Playwright, API testing, and production observability.",
      },
      { property: "og:title", content: "Sushil Phulara  QA Automation Engineer" },
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
    items: [
      "Postman (JS scripting)",
      "REST API verification",
      "SQL · Joins · Subqueries",
      "NoSQL · JSON validation",
    ],
  },
  {
    title: "Methodologies",
    items: [
      "Shift-Left Testing",
      "Regression & Functional",
      "Defect Lifecycle",
      "Spatial Data Validation",
    ],
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

const ROLES = ["QA Engineer", "Cybersecurity Practitioner", "Automation Architect"];
const profileImage = "/profile.jpg";

function useTypewriter(words: string[], typeSpeed = 75, deleteSpeed = 40, pause = 1600) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () => {
        setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
      },
      deleting ? deleteSpeed : typeSpeed,
    );
    return () => clearTimeout(t);
  }, [text, deleting, wordIdx, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

function Portfolio() {
  const [sent, setSent] = useState(false);
  const [profileImageFailed, setProfileImageFailed] = useState(false);
  const typed = useTypewriter(ROLES);

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
          <div className="flex items-center gap-3">
            <a
              href="#about"
              aria-label="View Sushil Phulara profile"
              className="group relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-primary/50 bg-primary/10 shadow-[0_0_24px_oklch(0.85_0.22_145/0.18)] transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-[var(--shadow-neon)]"
            >
              <User
                size={18}
                className="absolute text-primary opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
                aria-hidden
              />
              {profileImageFailed ? (
                <User
                  size={18}
                  className="text-primary transition-transform group-hover:scale-110"
                  aria-hidden
                />
              ) : (
                <img
                  src={profileImage}
                  alt="Sushil Phulara"
                  className="h-full w-full object-cover transition-all duration-300 ease-out group-hover:scale-125 group-hover:rotate-6 group-hover:opacity-0"
                  onError={() => setProfileImageFailed(true)}
                />
              )}
            </a>
            <a
              href="#contact"
              className="rounded-md border border-primary/40 bg-primary/10 px-4 py-2 font-display text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              Hire me
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="animated-gradient relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
      >
        {/* Floating gradient blobs */}
        <div
          className="pointer-events-none absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full opacity-40 blur-3xl"
          style={{
            background: "radial-gradient(circle, oklch(0.85 0.22 145 / 0.6), transparent 70%)",
            animation: "blob-float 18s ease-in-out infinite",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-32 -right-32 h-[32rem] w-[32rem] rounded-full opacity-40 blur-3xl"
          style={{
            background: "radial-gradient(circle, oklch(0.75 0.18 195 / 0.6), transparent 70%)",
            animation: "blob-float 22s ease-in-out infinite reverse",
          }}
          aria-hidden
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 grid-bg opacity-30"
          style={{ animation: "grid-drift 30s linear infinite" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 font-display text-xs text-primary backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Available for new engagements
          </div>

          <h1 className="font-display text-6xl font-extrabold leading-[0.95] tracking-tighter md:text-8xl lg:text-9xl">
            <span className="block">Sushil</span>
            <span className="block text-gradient">Phulara</span>
          </h1>

          {/* Typing subtitle */}
          <div className="mt-8 flex min-h-[2.5rem] items-center justify-center font-display text-xl text-foreground md:text-2xl">
            <span className="text-muted-foreground">&gt;&nbsp;</span>
            <span className="text-primary">{typed}</span>
            <span className="caret ml-1 h-6 md:h-7" aria-hidden />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            I build resilient end-to-end automation pipelines with Playwright and Postman — with a
            security-first mindset that catches what others miss.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="group relative overflow-hidden rounded-md bg-primary px-7 py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-neon)]"
            >
              <span className="relative z-10">View My Work →</span>
            </a>
            <a
              href="#contact"
              className="rounded-md border border-primary/40 bg-card/30 px-7 py-3.5 font-display text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.5fr] md:gap-16">
          <div className="reveal">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-primary"> About</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
              Quality is a <span className="text-gradient">system</span>, not a step.
            </h2>
          </div>
          <div className="reveal space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a QA Automation Engineer with a passion for building robust end-to-end automation
              pipelines using <span className="text-foreground">Playwright</span> and{" "}
              <span className="text-foreground">Postman</span>, with a strong focus on backend data
              validation and production observability.
            </p>
            <p>
              My approach is <span className="text-primary">shift-left</span> by default — pushing
              verification into every layer of the stack so bugs surface in CI, not in customer
              dashboards. I treat test code with the same rigor as production code.
            </p>
            <p>Cybersecurity-minded throughout: I look for the failure modes others miss.</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative px-6 py-24">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative mx-auto max-w-6xl">
          <div className="reveal mb-14 text-center">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">Toolkit</p>
            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">Stack & specialties</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((g, i) => (
              <div
                key={g.title}
                className="reveal glass group rounded-xl p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-neon)]"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
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
              <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">
                {" "}
                Selected work
              </p>
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
                  <h3 className="mb-3 font-display text-xl font-bold leading-tight">{p.name}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
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
      <section id="contact" className="relative overflow-hidden px-6 py-24">
        {/* Animated background */}
        <div
          className="pointer-events-none absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
          style={{
            background: "radial-gradient(circle, oklch(0.85 0.22 145 / 0.5), transparent 70%)",
            animation: "blob-float 20s ease-in-out infinite",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-32 right-0 h-[28rem] w-[28rem] rounded-full opacity-25 blur-3xl"
          style={{
            background: "radial-gradient(circle, oklch(0.75 0.18 195 / 0.5), transparent 70%)",
            animation: "blob-float 26s ease-in-out infinite reverse",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 grid-bg opacity-10"
          style={{ animation: "grid-drift 40s linear infinite" }}
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="reveal mb-12 text-center">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-primary"> Contact</p>
            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
              Let's <span className="text-gradient">ship quality</span> together
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Have a system that needs hardening? An automation suite to architect? I'd love to hear
              about it.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="reveal glass space-y-5 rounded-2xl p-8 shadow-[var(--shadow-card)]"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 flex items-center gap-2 font-display text-xs uppercase tracking-wider text-muted-foreground">
                  <User size={12} /> Name
                </span>
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-md border border-border bg-input/40 px-4 py-3 text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-primary focus:bg-input/70 focus:shadow-[0_0_0_3px_oklch(0.85_0.22_145/0.15)]"
                />
              </label>
              <label className="block">
                <span className="mb-2 flex items-center gap-2 font-display text-xs uppercase tracking-wider text-muted-foreground">
                  <AtSign size={12} /> Email
                </span>
                <input
                  required
                  type="email"
                  placeholder="you@domain.com"
                  className="w-full rounded-md border border-border bg-input/40 px-4 py-3 text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-primary focus:bg-input/70 focus:shadow-[0_0_0_3px_oklch(0.85_0.22_145/0.15)]"
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-2 flex items-center gap-2 font-display text-xs uppercase tracking-wider text-muted-foreground">
                <MessageSquare size={12} /> Message
              </span>
              <textarea
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-md border border-border bg-input/40 px-4 py-3 text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-primary focus:bg-input/70 focus:shadow-[0_0_0_3px_oklch(0.85_0.22_145/0.15)]"
              />
            </label>

            <button
              type="submit"
              disabled={sent}
              className="group relative w-full overflow-hidden rounded-md bg-primary px-6 py-4 font-display text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-neon)] active:translate-y-0 disabled:opacity-90"
            >
              {/* Sweep shine */}
              <span
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                aria-hidden
              />
              <span className="relative z-10 inline-flex items-center justify-center gap-2">
                {sent ? (
                  <>
                    <Check size={16} className="animate-[fade-in_0.3s_ease-out]" />
                    Message received
                  </>
                ) : (
                  <>
                    Send Message
                    <Send
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-rotate-12"
                    />
                  </>
                )}
              </span>
            </button>

            <div className="flex flex-col items-center gap-4 pt-4">
              <a
                href="mailto:sushilphulara@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail size={14} />
                sushilphulara@gmail.com
              </a>

              <div className="flex items-center gap-3">
                {[
                  { icon: Github, label: "GitHub", href: "https://github.com" },
                  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
                  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/50 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[var(--shadow-neon)]"
                  >
                    <Icon
                      size={18}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </a>
                ))}
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-display text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sushil Phulara. Built with precision.
          </p>
          <p className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground/60">
            Quality is a system, not a step.
          </p>
        </div>
      </footer>
    </div>
  );
}
