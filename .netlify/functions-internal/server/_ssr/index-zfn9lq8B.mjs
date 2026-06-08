import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { U as User, A as AtSign, M as MessageSquare, C as Check, S as Send, a as Mail, G as Github, L as Linkedin, T as Twitter } from "../_libs/lucide-react.mjs";
const skills = [{
  title: "Automation Frameworks",
  items: ["Playwright (POM, Global Auth)", "Selenium WebDriver", "Page Object Model"]
}, {
  title: "API & Backend",
  items: ["Postman (JS scripting)", "REST API verification", "SQL · Joins · Subqueries", "NoSQL · JSON validation"]
}, {
  title: "Methodologies",
  items: ["Shift-Left Testing", "Regression & Functional", "Defect Lifecycle", "Spatial Data Validation"]
}, {
  title: "Observability & PM",
  items: ["Sentry", "Datadog", "Jira", "ClickUp"]
}];
const projects = [{
  name: "E2E Playwright Suite",
  description: "End-to-end regression pipeline for a SaaS platform using Playwright with Global Auth and Page Object Model — cut release verification time by 70%.",
  tech: ["Playwright", "TypeScript", "CI/CD"]
}, {
  name: "API Contract Verifier",
  description: "Postman-driven REST verification suite with JS automation scripts, schema assertions, and JSON contract validation across microservices.",
  tech: ["Postman", "JavaScript", "REST"]
}, {
  name: "Production Observability Bridge",
  description: "Integrated Sentry and Datadog alerts into the QA defect lifecycle — surfacing production regressions inside Jira within minutes.",
  tech: ["Sentry", "Datadog", "Jira"]
}];
const navLinks = [{
  href: "#about",
  label: "About"
}, {
  href: "#skills",
  label: "Skills"
}, {
  href: "#projects",
  label: "Work"
}, {
  href: "#contact",
  label: "Contact"
}];
const ROLES = ["QA Engineer", "Cybersecurity Practitioner", "Automation Architect"];
const profileImage = "/profile.jpg";
function useTypewriter(words, typeSpeed = 75, deleteSpeed = 40, pause = 1600) {
  const [text, setText] = reactExports.useState("");
  const [wordIdx, setWordIdx] = reactExports.useState(0);
  const [deleting, setDeleting] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const current = words[wordIdx];
    if (!deleting && text === current) {
      const t2 = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t2);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(() => {
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, deleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(t);
  }, [text, deleting, wordIdx, words, typeSpeed, deleteSpeed, pause]);
  return text;
}
function Portfolio() {
  const [sent, setSent] = reactExports.useState(false);
  const [profileImageFailed, setProfileImageFailed] = reactExports.useState(false);
  const typed = useTypewriter(ROLES);
  reactExports.useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.12
    });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4e3);
    e.target.reset();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen overflow-x-hidden bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed top-0 z-50 w-full glass", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "font-display text-lg font-extrabold tracking-tight", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "sushil" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: ".qa" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden gap-8 md:flex", children: navLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, className: "font-display text-sm text-muted-foreground transition-colors hover:text-primary", children: l.label }) }, l.href)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#about", "aria-label": "View Sushil Phulara profile", className: "group relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-primary/50 bg-primary/10 shadow-[0_0_24px_oklch(0.85_0.22_145/0.18)] transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-[var(--shadow-neon)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 18, className: "absolute text-primary opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100", "aria-hidden": true }),
          profileImageFailed ? /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 18, className: "text-primary transition-transform group-hover:scale-110", "aria-hidden": true }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: profileImage, alt: "Sushil Phulara", className: "h-full w-full object-cover transition-all duration-300 ease-out group-hover:scale-125 group-hover:rotate-6 group-hover:opacity-0", onError: () => setProfileImageFailed(true) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "rounded-md border border-primary/40 bg-primary/10 px-4 py-2 font-display text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground", children: "Hire me" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "animated-gradient relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full opacity-40 blur-3xl", style: {
        background: "radial-gradient(circle, oklch(0.85 0.22 145 / 0.6), transparent 70%)",
        animation: "blob-float 18s ease-in-out infinite"
      }, "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -bottom-32 -right-32 h-[32rem] w-[32rem] rounded-full opacity-40 blur-3xl", style: {
        background: "radial-gradient(circle, oklch(0.75 0.18 195 / 0.6), transparent 70%)",
        animation: "blob-float 22s ease-in-out infinite reverse"
      }, "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-30", style: {
        animation: "grid-drift 30s linear infinite"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-4xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 font-display text-xs text-primary backdrop-blur-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 animate-pulse rounded-full bg-primary" }),
          "Available for new engagements"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-6xl font-extrabold leading-[0.95] tracking-tighter md:text-8xl lg:text-9xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: "Sushil" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-gradient", children: "Phulara" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex min-h-[2.5rem] items-center justify-center font-display text-xl text-foreground md:text-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "> " }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: typed }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret ml-1 h-6 md:h-7", "aria-hidden": true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg", children: "I build resilient end-to-end automation pipelines with Playwright and Postman — with a security-first mindset that catches what others miss." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#projects", className: "group relative overflow-hidden rounded-md bg-primary px-7 py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-neon)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: "View My Work →" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "rounded-md border border-primary/40 bg-card/30 px-7 py-3.5 font-display text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10 hover:text-primary", children: "Contact Me" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "relative px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.5fr] md:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs uppercase tracking-[0.3em] text-primary", children: " About" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl font-extrabold leading-tight md:text-5xl", children: [
          "Quality is a ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "system" }),
          ", not a step."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal space-y-5 text-lg leading-relaxed text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "I'm a QA Automation Engineer with a passion for building robust end-to-end automation pipelines using ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Playwright" }),
          " and",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Postman" }),
          ", with a strong focus on backend data validation and production observability."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "My approach is ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "shift-left" }),
          " by default — pushing verification into every layer of the stack so bugs surface in CI, not in customer dashboards. I treat test code with the same rigor as production code."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Cybersecurity-minded throughout: I look for the failure modes others miss." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "skills", className: "relative px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mb-14 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs uppercase tracking-[0.3em] text-primary", children: "Toolkit" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-4xl font-extrabold md:text-5xl", children: "Stack & specialties" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: skills.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal glass group rounded-xl p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-neon)]", style: {
          transitionDelay: `${i * 80}ms`
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 font-display text-lg font-bold", children: g.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: g.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" }),
            item
          ] }, item)) })
        ] }, g.title)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "projects", className: "relative px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mb-14 flex flex-wrap items-end justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-xs uppercase tracking-[0.3em] text-primary", children: [
            " ",
            "Selected work"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-4xl font-extrabold md:text-5xl", children: "Featured projects" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md text-muted-foreground", children: "A snapshot of automation pipelines and verification systems I've architected." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-3", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "reveal group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50", style: {
        transitionDelay: `${i * 100}ms`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/20 blur-3xl transition-opacity group-hover:opacity-100", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 font-display text-xl font-bold leading-tight", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-sm leading-relaxed text-muted-foreground", children: p.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: p.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md border border-border bg-secondary/50 px-2.5 py-1 font-display text-[11px] text-foreground/80", children: t }, t)) })
        ] })
      ] }, p.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "relative overflow-hidden px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl", style: {
        background: "radial-gradient(circle, oklch(0.85 0.22 145 / 0.5), transparent 70%)",
        animation: "blob-float 20s ease-in-out infinite"
      }, "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -bottom-32 right-0 h-[28rem] w-[28rem] rounded-full opacity-25 blur-3xl", style: {
        background: "radial-gradient(circle, oklch(0.75 0.18 195 / 0.5), transparent 70%)",
        animation: "blob-float 26s ease-in-out infinite reverse"
      }, "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-10", style: {
        animation: "grid-drift 40s linear infinite"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mb-12 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs uppercase tracking-[0.3em] text-primary", children: " Contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl font-extrabold md:text-5xl", children: [
            "Let's ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "ship quality" }),
            " together"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-xl text-muted-foreground", children: "Have a system that needs hardening? An automation suite to architect? I'd love to hear about it." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "reveal glass space-y-5 rounded-2xl p-8 shadow-[var(--shadow-card)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mb-2 flex items-center gap-2 font-display text-xs uppercase tracking-wider text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 12 }),
                " Name"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "text", placeholder: "Your name", className: "w-full rounded-md border border-border bg-input/40 px-4 py-3 text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-primary focus:bg-input/70 focus:shadow-[0_0_0_3px_oklch(0.85_0.22_145/0.15)]" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mb-2 flex items-center gap-2 font-display text-xs uppercase tracking-wider text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(AtSign, { size: 12 }),
                " Email"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", placeholder: "you@domain.com", className: "w-full rounded-md border border-border bg-input/40 px-4 py-3 text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-primary focus:bg-input/70 focus:shadow-[0_0_0_3px_oklch(0.85_0.22_145/0.15)]" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mb-2 flex items-center gap-2 font-display text-xs uppercase tracking-wider text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { size: 12 }),
              " Message"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 5, placeholder: "Tell me about your project...", className: "w-full resize-none rounded-md border border-border bg-input/40 px-4 py-3 text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-primary focus:bg-input/70 focus:shadow-[0_0_0_3px_oklch(0.85_0.22_145/0.15)]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: sent, className: "group relative w-full overflow-hidden rounded-md bg-primary px-6 py-4 font-display text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-neon)] active:translate-y-0 disabled:opacity-90", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full", "aria-hidden": true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10 inline-flex items-center justify-center gap-2", children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 16, className: "animate-[fade-in_0.3s_ease-out]" }),
              "Message received"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              "Send Message",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 16, className: "transition-transform duration-300 group-hover:translate-x-1 group-hover:-rotate-12" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-4 pt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:sushilphulara@gmail.com", className: "inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 14 }),
              "sushilphulara@gmail.com"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: [{
              icon: Github,
              label: "GitHub",
              href: "https://github.com"
            }, {
              icon: Linkedin,
              label: "LinkedIn",
              href: "https://linkedin.com"
            }, {
              icon: Twitter,
              label: "Twitter",
              href: "https://twitter.com"
            }].map(({
              icon: Icon,
              label,
              href
            }) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, target: "_blank", rel: "noreferrer", "aria-label": label, className: "group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/50 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[var(--shadow-neon)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18, className: "transition-transform duration-300 group-hover:scale-110" }) }, label)) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative border-t border-border px-6 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-sm text-muted-foreground", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Sushil Phulara. Built with precision."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs uppercase tracking-[0.2em] text-muted-foreground/60", children: "Quality is a system, not a step." })
    ] }) })
  ] });
}
export {
  Portfolio as component
};
