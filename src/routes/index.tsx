import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Home, Layers, FolderKanban, Tag, Info, Mail, Search, Bell, ChevronDown, ArrowRight,
  Sparkles, Palette, Smartphone, TrendingUp, LifeBuoy, Check, Rocket, Crown, Zap,
  Globe, Wrench, RefreshCw, Puzzle, Menu, X, Phone, MapPin, Hexagon,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import hero from "@/assets/hero-illustration.png";

const BRAND = "Brightline Studio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `Pricing & Plans — ${BRAND}` },
      { name: "description", content: "Professional websites and digital solutions. Compare Starter, Growth and Premium plans." },
      { property: "og:title", content: `Pricing & Plans — ${BRAND}` },
      { property: "og:description", content: "Simple, transparent web-development packages built around your business." },
    ],
  }),
  component: Index,
});

const nav = [
  { label: "Home", icon: Home }, { label: "Services", icon: Layers },
  { label: "Projects", icon: FolderKanban }, { label: "Pricing", icon: Tag },
  { label: "About", icon: Info }, { label: "Contact", icon: Mail },
];

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
        <Hexagon className="h-5 w-5" strokeWidth={2.5} />
      </div>
      <span className="text-lg font-extrabold tracking-tight">{BRAND}</span>
    </div>
  );
}

function SidebarBody() {
  return (
    <div className="flex h-full flex-col p-5">
      <Logo />
      <nav className="mt-10 space-y-1">
        {nav.map(({ label, icon: Icon }) => {
          const active = label === "Pricing";
          return (
            <a key={label} href="#"
              className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-colors duration-300 ${active ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground hover:bg-muted"}`}>
              <Icon className="h-[18px] w-[18px]" />{label}
            </a>
          );
        })}
      </nav>
      <div className="mt-auto rounded-2xl bg-gradient-soft p-5">
        <p className="font-bold">Have a project in mind?</p>
        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">Let's build something that works for your business.</p>
        <a href="#contact" className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90">Let's Talk <ArrowRight className="h-4 w-4" /></a>
      </div>
    </div>
  );
}

const quick = [
  { n: "01", t: "Professional Design", d: "Clean, modern layouts that build trust.", i: Palette },
  { n: "02", t: "Mobile Responsive", d: "Looks great on every screen size.", i: Smartphone },
  { n: "03", t: "SEO Ready", d: "Structured to be found on Google.", i: TrendingUp },
  { n: "04", t: "Ongoing Support", d: "We stay with you after launch.", i: LifeBuoy },
];

const plans = [
  { name: "Starter", sub: "For businesses getting started online", price: "₹7,999", icon: Zap, cta: "Get Started",
    f: ["Professional Website", "Responsive Design", "Basic SEO", "Basic Integrations", "Contact / Inquiry Setup"] },
  { name: "Growth", sub: "For businesses ready to grow", price: "₹14,999", icon: Rocket, cta: "Get Started", popular: true,
    f: ["Everything in Starter", "Advanced SEO", "WhatsApp Integration", "Google Maps Integration", "Forms / Lead Integration", "Hosting Setup", "Maintenance Support"] },
  { name: "Premium", sub: "For a complete digital presence", price: "₹24,999", icon: Crown, cta: "Go Premium",
    f: ["Everything in Growth", "Premium Website Experience", "Advanced Integrations", "Hosting + Domain Setup", "Advanced Optimization", "Priority Maintenance", "Future Feature Support"] },
];

const extras = [
  { t: "Domain + Hosting", d: "Domain registration, hosting setup and deployment.", i: Globe },
  { t: "Maintenance", d: "Regular updates, fixes and technical support.", i: Wrench },
  { t: "Future Updates", d: "New pages, features and improvements whenever you need them.", i: RefreshCw },
  { t: "Custom Features", d: "Have a specific requirement? Let's build it.", i: Puzzle },
];

const compare: [string, boolean, boolean, boolean][] = [
  ["Website", true, true, true], ["Responsive Design", true, true, true], ["Basic SEO", true, true, true],
  ["Advanced SEO", false, true, true], ["WhatsApp Integration", false, true, true], ["Maps Integration", false, true, true],
  ["Forms", true, true, true], ["Hosting", false, true, true], ["Domain", false, false, true],
  ["Maintenance", false, true, true], ["Future Updates", false, false, true], ["Custom Features", false, false, true],
  ["Priority Support", false, false, true],
];

const steps = [
  { n: "01", t: "Discuss", d: "Tell us about your business and requirements." },
  { n: "02", t: "Plan", d: "We decide the right package and features." },
  { n: "03", t: "Build", d: "We design and develop your website." },
  { n: "04", t: "Launch", d: "Your website goes live and we provide support." },
];

const faqs = [
  ["What is included in each package?", "Every package includes a professionally designed, responsive website. Higher plans add SEO, integrations, hosting, domain and maintenance — see the comparison table for details."],
  ["Can I request custom features?", "Absolutely. Tell us what you need and we'll scope and quote it separately or fold it into the Premium plan."],
  ["Do you provide domain and hosting?", "Yes. Hosting setup is included from Growth, and Premium includes both hosting and domain setup. It's also available as an add-on."],
  ["Can I upgrade my package later?", "Yes — you only pay the difference between plans when you upgrade."],
  ["Do you provide maintenance?", "Growth includes maintenance support and Premium includes priority maintenance. Starter clients can add it anytime."],
  ["How long does website development take?", "Most Starter sites launch in about 1 week, Growth in 2 weeks and Premium in 3–4 weeks depending on content."],
  ["What happens after the website is launched?", "We hand over everything, train you on updates, and stay available for support, fixes and future improvements."],
];

function SectionHead({ title, text }: { title: string; text?: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">{title}</h2>
      {text && <p className="mt-2 text-muted-foreground">{text}</p>}
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[200px] border-r border-sidebar-border bg-sidebar md:block lg:w-[240px]">
        <SidebarBody />
      </aside>
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-foreground/30" onClick={() => setOpen(false)} />
          <aside className="absolute inset-y-0 left-0 w-[260px] bg-sidebar animate-fade-up">
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="absolute right-4 top-5 text-muted-foreground"><X /></button>
            <SidebarBody />
          </aside>
        </div>
      )}

      <div className="md:pl-[200px] lg:pl-[240px]">
        <header className="sticky top-0 z-20 flex items-center gap-4 bg-background/80 px-5 py-4 backdrop-blur md:px-10">
          <button aria-label="Open menu" onClick={() => setOpen(true)} className="md:hidden"><Menu /></button>
          <div className="flex flex-1 items-center gap-2 rounded-2xl border border-border bg-card px-4 py-2.5 shadow-soft md:max-w-sm">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input placeholder="Search..." className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
          </div>
          <div className="ml-auto flex items-center gap-4">
            <button aria-label="Notifications" className="relative grid h-10 w-10 place-items-center rounded-xl bg-card shadow-soft">
              <Bell className="h-[18px] w-[18px]" />
              <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-primary" />
            </button>
            <div className="flex items-center gap-2.5">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-sm font-bold text-primary-foreground">BS</div>
              <span className="hidden text-sm font-semibold sm:block">Let's Work Together</span>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-6xl space-y-20 px-5 pb-10 pt-4 md:px-10">
          {/* Hero */}
          <section className="card-soft grid items-center gap-8 overflow-hidden p-8 animate-fade-up md:p-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-xs font-semibold text-accent-foreground">
                <Sparkles className="h-3.5 w-3.5" /> Simple & Transparent
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">
                Build your <span className="text-primary">digital presence</span> with the <span className="text-primary">right plan.</span>
              </h1>
              <p className="mt-5 max-w-md text-lg text-muted-foreground">Professional websites and digital solutions designed around your business needs.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow transition hover:-translate-y-0.5">Get Started <ArrowRight className="h-4 w-4" /></a>
                <a href="#services" className="inline-flex items-center rounded-xl border border-border bg-card px-6 py-3 font-semibold transition hover:border-primary hover:text-primary">View Services</a>
              </div>
            </div>
            <img src={hero} width={1024} height={864} alt="Laptop showing a website with floating analytics cards" className="w-full animate-float" />
          </section>

          <section className="-mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quick.map(({ n, t, d, i: I }) => (
              <div key={n} className="card-soft card-hover p-6">
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary"><I className="h-5 w-5" /></div>
                  <span className="text-sm font-bold text-muted-foreground/60">{n}</span>
                </div>
                <p className="mt-4 font-bold">{t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </section>

          {/* Pricing */}
          <section id="pricing">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Choose the right plan</h2>
              <p className="mt-3 text-muted-foreground">Simple pricing designed to give you exactly what your business needs.</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {plans.map((p) => (
                <div key={p.name} className={`card-soft card-hover relative flex flex-col p-8 ${p.popular ? "border-2 border-primary/40 shadow-glow lg:-translate-y-3 lg:hover:-translate-y-5" : ""}`}>
                  {p.popular && <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-4 py-1 text-xs font-bold text-primary-foreground">Most Popular</span>}
                  <div className={`grid h-12 w-12 place-items-center rounded-2xl ${p.popular ? "bg-gradient-primary text-primary-foreground" : "bg-secondary text-primary"}`}><p.icon className="h-5 w-5" /></div>
                  <h3 className="mt-5 text-xl font-extrabold">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.sub}</p>
                  <p className="mt-6 text-4xl font-extrabold tracking-tight">{p.price}<span className="ml-1 text-sm font-medium text-muted-foreground">one-time</span></p>
                  <ul className="mt-6 flex-1 space-y-3 border-t border-border pt-6">
                    {p.f.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-secondary text-primary"><Check className="h-3 w-3" strokeWidth={3} /></span>{f}</li>
                    ))}
                  </ul>
                  <a href="#contact" className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition duration-300 ${p.popular ? "bg-primary text-primary-foreground hover:opacity-90" : "border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"}`}>{p.cta} <ArrowRight className="h-4 w-4" /></a>
                </div>
              ))}
            </div>
          </section>

          <section id="services">
            <SectionHead title="Additional Services" text="Add what you need whenever your business requires it." />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {extras.map(({ t, d, i: I }) => (
                <a href="#contact" key={t} className="card-soft card-hover group flex flex-col p-6">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground"><I className="h-5 w-5" /></div>
                  <p className="mt-4 font-bold">{t}</p>
                  <p className="mt-1 flex-1 text-sm text-muted-foreground">{d}</p>
                  <ArrowRight className="mt-4 h-4 w-4 text-primary transition group-hover:translate-x-1" />
                </a>
              ))}
            </div>
          </section>

          <section>
            <SectionHead title="Compare Plans" />
            <div className="card-soft overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="p-5 font-semibold text-muted-foreground">Feature</th>
                    {["Starter", "Growth", "Premium"].map((h) => <th key={h} className={`p-5 text-center font-bold ${h === "Growth" ? "text-primary" : ""}`}>{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {compare.map(([f, ...v]) => (
                    <tr key={f} className="border-b border-border last:border-0">
                      <td className="px-5 py-3.5 font-medium">{f}</td>
                      {v.map((ok, i) => (
                        <td key={i} className={`px-5 py-3.5 text-center ${i === 1 ? "bg-secondary/50" : ""}`}>
                          {ok ? <Check className="mx-auto h-4 w-4 text-primary" strokeWidth={3} /> : <span className="text-muted-foreground/50">—</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <SectionHead title="How it works" />
            <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="absolute left-0 right-0 top-1/2 hidden h-px bg-border lg:block" />
              {steps.map((s) => (
                <div key={s.n} className="card-soft card-hover relative p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-sm font-bold text-primary-foreground">{s.n}</span>
                  <p className="mt-4 text-sm font-extrabold uppercase tracking-widest">{s.t}</p>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="relative overflow-hidden rounded-[2rem] bg-gradient-soft p-10 md:p-14">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/10" />
            <div className="absolute -bottom-20 right-32 h-48 w-48 rounded-[3rem] rotate-12 bg-accent-foreground/10" />
            <div className="relative max-w-lg">
              <h2 className="text-3xl font-extrabold tracking-tight">Need something different?</h2>
              <p className="mt-3 text-muted-foreground">Tell us what you need and we'll create a solution around your business requirements.</p>
              <a href="#contact" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow transition hover:-translate-y-0.5">Start a Project <ArrowRight className="h-4 w-4" /></a>
            </div>
          </section>

          <section>
            <SectionHead title="Frequently asked questions" />
            <Accordion type="single" collapsible className="card-soft px-6">
              {faqs.map(([q, a]) => (
                <AccordionItem key={q} value={q}>
                  <AccordionTrigger className="py-5 text-base font-semibold hover:no-underline">{q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section id="contact" className="rounded-[2rem] bg-gradient-primary p-10 text-center text-primary-foreground shadow-glow md:p-16">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Ready to build your website?</h2>
            <p className="mx-auto mt-3 max-w-md opacity-85">Let's turn your idea into a professional digital experience.</p>
            <a href="mailto:hello@brightline.studio" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-card px-7 py-3.5 font-semibold text-primary transition hover:-translate-y-0.5">Let's Work Together <ArrowRight className="h-4 w-4" /></a>
          </section>
        </main>

        <footer className="mx-auto max-w-6xl px-5 pb-8 md:px-10">
          <div className="card-soft grid gap-10 p-8 md:grid-cols-3 md:p-10">
            <div>
              <Logo />
              <p className="mt-4 text-sm text-muted-foreground">Professional websites and digital solutions built for modern businesses.</p>
            </div>
            <div>
              <p className="font-bold">Quick Links</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {["Home", "Services", "Projects", "Pricing", "About"].map((l) => <li key={l}><a href="#" className="hover:text-primary">{l}</a></li>)}
              </ul>
            </div>
            <div>
              <p className="font-bold">Contact</p>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@brightline.studio</li>
                <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 98765 43210</li>
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Kolkata, India</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
            <p>© 2026 {BRAND}. All rights reserved.</p>
            <div className="flex gap-5"><a href="#" className="hover:text-primary">Privacy Policy</a><a href="#" className="hover:text-primary">Terms & Conditions</a></div>
          </div>
        </footer>
      </div>
    </div>
  );
}
