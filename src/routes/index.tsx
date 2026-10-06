import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Home, Layers, FolderKanban, Tag, Info, Mail, ArrowRight, Sparkles, Smartphone,
  TrendingUp, LifeBuoy, Check, Rocket, Crown, Zap, Globe, Wrench, Puzzle, Menu, X,
  Phone, MapPin, Hexagon, MonitorSmartphone, LayoutTemplate, Search, MessageCircle,
  ShieldCheck, Clock, HeartHandshake, BadgeIndianRupee, Compass, PenTool, Code2,
  FlaskConical, Send, ClipboardList, ImageIcon,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import hero from "@/assets/hero-illustration.png";

const BRAND = "Brightline Studio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${BRAND} — Websites & Digital Solutions for Businesses` },
      { name: "description", content: "Professional, responsive websites with SEO, integrations, hosting and support. Plans from ₹7,999." },
      { property: "og:title", content: `${BRAND} — Websites & Digital Solutions` },
      { property: "og:description", content: "Professional websites built around your business. Simple, transparent plans from ₹7,999." },
    ],
  }),
  component: Index,
});

const nav = [
  { label: "Home", href: "#top", icon: Home },
  { label: "Services", href: "#services", icon: Layers },
  { label: "Pricing", href: "#pricing", icon: Tag },
  { label: "Why Us", href: "#why", icon: Info },
  { label: "Projects", href: "#work", icon: FolderKanban },
  { label: "Contact", href: "#contact", icon: Mail },
];

/* ---------- shared bits ---------- */
function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
        <Hexagon className="h-5 w-5" strokeWidth={2.5} />
      </span>
      <span className="leading-tight">
        <span className="block text-[15px] font-extrabold tracking-tight">{BRAND}</span>
        <span className="block text-[11px] font-medium text-muted-foreground">Web & Digital Services</span>
      </span>
    </a>
  );
}

function Btn({ href, children, variant = "primary", className = "" }: { href: string; children: React.ReactNode; variant?: "primary" | "outline" | "light"; className?: string }) {
  const v = {
    primary: "bg-primary text-primary-foreground shadow-glow hover:-translate-y-0.5 hover:opacity-95",
    outline: "border border-border bg-card text-foreground hover:border-primary/50 hover:text-primary",
    light: "bg-card text-primary hover:-translate-y-0.5",
  }[variant];
  return (
    <a href={href} className={`group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${v} ${className}`}>
      {children}
    </a>
  );
}

const Arrow = () => <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />;

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-xs font-semibold text-accent-foreground">
      <Sparkles className="h-3.5 w-3.5" /> {children}
    </span>
  );
}

function SectionHead({ eyebrow, title, text, center }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return (
    <div className={`mb-10 ${center ? "mx-auto max-w-xl text-center" : "max-w-xl"}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h2>
      {text && <p className="mt-3 text-muted-foreground">{text}</p>}
    </div>
  );
}

function IconTile({ icon: I, tone = "secondary" }: { icon: React.ElementType; tone?: "secondary" | "gradient" }) {
  return (
    <span className={`grid h-12 w-12 place-items-center rounded-2xl transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-[-6deg] ${tone === "gradient" ? "bg-gradient-primary text-primary-foreground" : "bg-secondary text-primary"}`}>
      <I className="h-5 w-5" />
    </span>
  );
}

/* ---------- content ---------- */
const services = [
  { t: "Business Websites", d: "Multi-page websites that present your business professionally.", info: "Starter & up", i: MonitorSmartphone },
  { t: "Landing Pages", d: "Focused single pages built to turn visitors into enquiries.", info: "Starter & up", i: LayoutTemplate },
  { t: "SEO Optimization", d: "Clean structure and on-page SEO so customers can find you.", info: "Basic → Advanced", i: Search },
  { t: "Integrations", d: "WhatsApp, Google Maps, enquiry forms and lead capture.", info: "Growth & up", i: MessageCircle },
  { t: "Domain & Hosting", d: "Domain registration, hosting setup and deployment.", info: "Add-on or included", i: Globe },
  { t: "Maintenance & Updates", d: "Fixes, updates, new pages and features when you need them.", info: "Growth & up", i: Wrench },
];

const plans = [
  { name: "Starter", sub: "For businesses getting started online", price: "₹7,999", icon: Zap, cta: "Get Started",
    f: ["Professional Website", "Responsive Design", "Basic SEO", "Basic Integrations", "Contact / Inquiry Setup"] },
  { name: "Growth", sub: "For businesses ready to grow", price: null, icon: Rocket, cta: "Get Started", popular: true,
    f: ["Everything in Starter", "Advanced SEO", "WhatsApp Integration", "Google Maps Integration", "Forms / Lead Integration", "Hosting Setup", "Maintenance Support"] },
  { name: "Premium", sub: "For a complete digital presence", price: null, icon: Crown, cta: "Go Premium",
    f: ["Everything in Growth", "Premium Website Experience", "Advanced Integrations", "Hosting + Domain Setup", "Advanced Optimization", "Priority Maintenance", "Future Feature Support"] },
];

const compare: [string, boolean, boolean, boolean][] = [
  ["Professional Website", true, true, true], ["Responsive Design", true, true, true], ["Basic SEO", true, true, true],
  ["Advanced SEO", false, true, true], ["WhatsApp Integration", false, true, true], ["Google Maps Integration", false, true, true],
  ["Forms / Lead Integration", false, true, true], ["Hosting Setup", false, true, true], ["Domain Setup", false, false, true],
  ["Maintenance", false, true, true], ["Future Feature Support", false, false, true], ["Priority Maintenance", false, false, true],
];

const why = [
  { t: "Transparent pricing", d: "Clear packages with no hidden costs — you know what you pay for.", i: BadgeIndianRupee },
  { t: "Built around you", d: "Every site is shaped to your business, not a generic template.", i: HeartHandshake },
  { t: "Mobile-first & fast", d: "Designed to look and work great on every phone and screen.", i: Smartphone },
  { t: "Ready to be found", d: "SEO foundations included so customers can discover you.", i: TrendingUp },
  { t: "Reliable & secure", d: "Proper hosting setup and best practices from day one.", i: ShieldCheck },
  { t: "Support after launch", d: "We stay available for fixes, updates and new features.", i: LifeBuoy },
];

const steps = [
  { t: "Discover", d: "We learn about your business, goals and customers.", i: Compass },
  { t: "Plan", d: "We pick the right package, pages and features.", i: ClipboardList },
  { t: "Design", d: "We create a clean, on-brand look for your site.", i: PenTool },
  { t: "Develop", d: "We build it fast, responsive and SEO-ready.", i: Code2 },
  { t: "Test", d: "We check every page, device and form.", i: FlaskConical },
  { t: "Launch", d: "Your site goes live — and we keep supporting you.", i: Send },
];

const faqs: [string, string][] = [
  ["What is included in each package?", "Every package includes a professionally designed, responsive website. Higher plans add advanced SEO, integrations, hosting, domain and maintenance — see the comparison table for the full breakdown."],
  ["Can I request custom features?", "Yes. Tell us what you need and we'll scope it for you as a custom feature."],
  ["Do you provide domain and hosting?", "Yes. Hosting setup is included in Growth, Premium includes hosting and domain setup, and it's available as an add-on for Starter."],
  ["Can I upgrade my package later?", "Yes, you can move to a higher plan whenever your business needs more."],
  ["Do you provide maintenance?", "Growth includes maintenance support and Premium includes priority maintenance. It can also be added separately."],
  ["How long does website development take?", "It depends on the package and how quickly content is ready. We'll share a clear timeline during planning."],
  ["What happens after the website is launched?", "We hand everything over and stay available for support, fixes and future improvements."],
];

/* ---------- page ---------- */
function Index() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <>
      {nav.map(({ label, href, icon: Icon }) => {
        const on = active === label;
        return (
          <a key={label} href={href} onClick={() => { setActive(label); onClick?.(); }}
            className={`group flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-all duration-300 ${on ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground hover:translate-x-0.5 hover:bg-muted hover:text-foreground"}`}>
            <Icon className="h-[18px] w-[18px]" />{label}
            {on && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />}
          </a>
        );
      })}
    </>
  );

  const SideCta = () => (
    <div className="mt-auto rounded-2xl bg-gradient-soft p-5">
      <p className="font-bold">Have a project in mind?</p>
      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">Let's build something that works for your business.</p>
      <a href="#contact" onClick={() => setOpen(false)} className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">Let's Talk <Arrow /></a>
    </div>
  );

  return (
    <div id="top" className="min-h-screen bg-background font-sans text-foreground">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[220px] flex-col border-r border-sidebar-border bg-sidebar p-5 lg:flex lg:w-[240px]">
        <Logo />
        <p className="mb-2 mt-10 px-3.5 text-[11px] font-bold uppercase tracking-widest text-muted-foreground/70">Menu</p>
        <nav className="space-y-1"><NavLinks /></nav>
        <SideCta />
      </aside>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-foreground/30 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <aside className="absolute inset-y-0 left-0 flex w-[270px] flex-col bg-sidebar p-5 animate-fade-up">
            <div className="flex items-center justify-between"><Logo /><button aria-label="Close menu" onClick={() => setOpen(false)} className="text-muted-foreground"><X /></button></div>
            <nav className="mt-8 space-y-1"><NavLinks onClick={() => setOpen(false)} /></nav>
            <SideCta />
          </aside>
        </div>
      )}

      <div className="lg:pl-[240px]">
        <main className="mx-auto max-w-6xl space-y-24 px-5 pb-12 pt-8 md:space-y-28 md:px-10">
          {/* HERO */}
          <section className="card-soft relative grid items-center gap-10 overflow-hidden p-7 sm:p-10 md:p-12 lg:grid-cols-[1.05fr_1fr]">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative animate-fade-up">
              <Eyebrow>Web development & digital services</Eyebrow>
              <h1 className="mt-5 text-[2.1rem] font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.3rem]">
                Professional websites that <span className="text-primary">grow your business</span> online.
              </h1>
              <p className="mt-5 max-w-md text-base text-muted-foreground sm:text-lg">
                We design and build fast, responsive, SEO-ready websites — with the integrations, hosting and support your business needs.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Btn href="#pricing">View Plans <Arrow /></Btn>
                <Btn href="#services" variant="outline">Explore Services</Btn>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground">
                {["Mobile responsive", "SEO ready", "Ongoing support"].map((x) => (
                  <li key={x} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" strokeWidth={3} />{x}</li>
                ))}
              </ul>
            </div>
            <div className="relative animate-fade-up [animation-delay:150ms]">
              <div className="absolute inset-6 rounded-[2rem] bg-gradient-soft" />
              <img src={hero} width={1024} height={864} alt="Laptop showing a modern business website with floating analytics cards" className="relative w-full animate-float" />
              <div className="card-soft absolute -bottom-2 left-2 flex items-center gap-3 px-4 py-3 sm:left-6">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-primary-foreground"><Rocket className="h-4 w-4" /></span>
                <span><span className="block text-xs text-muted-foreground">Starting from</span><span className="block font-extrabold">₹7,999</span></span>
              </div>
            </div>
          </section>

          {/* SERVICES */}
          <section id="services" className="scroll-mt-24">
            <SectionHead eyebrow="What we do" title="Services built for your business" text="Everything you need to get online, get found and keep growing." />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <div key={s.t} className="card-soft card-hover group flex flex-col p-7">
                  <IconTile icon={s.i} />
                  <h3 className="mt-5 text-lg font-bold">{s.t}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                    <span className="text-xs font-semibold text-accent-foreground">{s.info}</span>
                    <ArrowRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* PRICING */}
          <section id="pricing" className="scroll-mt-24">
            <SectionHead center eyebrow="Simple & Transparent" title="Choose the right plan" text="Simple pricing designed to give you exactly what your business needs." />
            <div className="grid items-stretch gap-6 lg:grid-cols-3">
              {plans.map((p) => (
                <div key={p.name} className={`card-soft card-hover group relative flex flex-col p-8 ${p.popular ? "border-2 border-primary/50 shadow-glow lg:-translate-y-4 lg:hover:-translate-y-6" : ""}`}>
                  {p.popular && <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-primary px-4 py-1 text-xs font-bold text-primary-foreground shadow-glow">★ Most Popular</span>}
                  <div className="flex items-center gap-3">
                    <IconTile icon={p.icon} tone={p.popular ? "gradient" : "secondary"} />
                    <h3 className="text-xl font-extrabold">{p.name}</h3>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{p.sub}</p>
                  <div className="mt-6 rounded-2xl bg-muted px-5 py-4">
                    {p.price ? (
                      <p className="text-4xl font-extrabold tracking-tight">{p.price}</p>
                    ) : (
                      <p className="text-2xl font-extrabold tracking-tight text-primary">Price on request</p>
                    )}
                    <p className="mt-1 text-xs font-medium text-muted-foreground">{p.price ? "One-time project price" : "Get a quote tailored to you"}</p>
                  </div>
                  <ul className="mt-6 flex-1 space-y-3">
                    {p.f.map((f, i) => (
                      <li key={f} className={`flex items-start gap-3 text-sm ${i === 0 && p.name !== "Starter" ? "font-semibold" : ""}`}>
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-secondary text-primary"><Check className="h-3 w-3" strokeWidth={3} /></span>{f}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className={`group/btn mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${p.popular ? "bg-primary text-primary-foreground hover:opacity-90" : "border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"}`}>
                    {p.cta} <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              ))}
            </div>

            <div className="card-soft mt-12 overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="p-5 text-base font-extrabold">Compare plans</th>
                    {["Starter", "Growth", "Premium"].map((h) => <th key={h} className={`w-28 p-5 text-center font-bold ${h === "Growth" ? "bg-secondary/60 text-primary" : ""}`}>{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {compare.map(([f, ...v]) => (
                    <tr key={f} className="border-b border-border transition-colors last:border-0 hover:bg-muted/50">
                      <td className="px-5 py-3.5 font-medium">{f}</td>
                      {v.map((ok, i) => (
                        <td key={i} className={`px-5 py-3.5 text-center ${i === 1 ? "bg-secondary/60" : ""}`}>
                          {ok ? <Check className="mx-auto h-4 w-4 text-primary" strokeWidth={3} /> : <span className="text-muted-foreground/50">—</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-5 text-center text-sm text-muted-foreground">Need something specific? <a href="#contact" className="font-semibold text-primary hover:underline">Custom features are available on any plan →</a></p>
          </section>

          {/* WHY US */}
          <section id="why" className="scroll-mt-24">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <SectionHead eyebrow="Why choose us" title="A partner focused on your business" text="We keep things simple, honest and built around what actually helps you get customers." />
                <Btn href="#contact">Talk to us <Arrow /></Btn>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {why.map((w) => (
                  <div key={w.t} className="card-soft card-hover group p-6">
                    <IconTile icon={w.i} />
                    <h3 className="mt-4 font-bold">{w.t}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{w.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WORK */}
          <section id="work" className="scroll-mt-24">
            <SectionHead eyebrow="Our work" title="Projects" text="Selected work will be showcased here." />
            <div className="card-soft grid items-center gap-8 overflow-hidden p-8 md:grid-cols-2 md:p-10">
              <div className="grid aspect-[16/10] place-items-center rounded-2xl border-2 border-dashed border-border bg-gradient-soft">
                <div className="text-center text-muted-foreground">
                  <ImageIcon className="mx-auto h-10 w-10 text-primary/60" />
                  <p className="mt-3 text-sm font-semibold">Project preview coming soon</p>
                </div>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent-foreground">Portfolio</span>
                <h3 className="mt-3 text-2xl font-extrabold tracking-tight">Your project could be featured here</h3>
                <p className="mt-3 text-muted-foreground">We're curating our portfolio. Want to see examples relevant to your industry? Ask us and we'll share them directly.</p>
                <div className="mt-6"><Btn href="#contact" variant="outline">Request examples <Arrow /></Btn></div>
              </div>
            </div>
          </section>

          {/* PROCESS */}
          <section className="scroll-mt-24">
            <SectionHead center eyebrow="How it works" title="From idea to launch in six steps" />
            <ol className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {steps.map((s, i) => (
                <li key={s.t} className="card-soft card-hover group relative p-6">
                  <div className="flex items-center justify-between">
                    <IconTile icon={s.i} tone={i === steps.length - 1 ? "gradient" : "secondary"} />
                    <span className="text-4xl font-extrabold text-primary/15">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{s.t}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
                  <div className="mt-5 h-1 overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-gradient-primary transition-all duration-500" style={{ width: `${((i + 1) / steps.length) * 100}%` }} />
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* FAQ */}
          <section className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHead eyebrow="FAQ" title="Questions, answered" text="Can't find what you're looking for? Just reach out." />
            <Accordion type="single" collapsible className="card-soft px-6">
              {faqs.map(([q, a]) => (
                <AccordionItem key={q} value={q}>
                  <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline">{q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* CTA */}
          <section id="contact" className="relative scroll-mt-24 overflow-hidden rounded-[2rem] bg-gradient-primary p-8 text-primary-foreground shadow-glow sm:p-12 md:p-14">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary-foreground/10" />
            <div className="pointer-events-none absolute -bottom-24 right-40 h-56 w-56 rotate-12 rounded-[3rem] bg-primary-foreground/10" />
            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Ready to build your website?</h2>
                <p className="mt-3 max-w-md opacity-90">Tell us about your business. We'll recommend the right plan and give you a clear quote — no obligation.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Btn href="mailto:hello@brightline.studio" variant="light">Let's Work Together <Arrow /></Btn>
                  <a href="tel:+919876543210" className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary-foreground/30 px-6 py-3 text-sm font-semibold transition hover:bg-primary-foreground/10"><Phone className="h-4 w-4" /> Call us</a>
                </div>
              </div>
              <ul className="space-y-3 rounded-2xl bg-primary-foreground/10 p-6">
                <p className="text-xs font-bold uppercase tracking-widest opacity-80">What you get</p>
                {["A professional, responsive website", "SEO foundations to get found", "Integrations like WhatsApp & Maps", "Support after your site goes live"].map((x) => (
                  <li key={x} className="flex items-center gap-3 text-sm font-medium"><span className="grid h-5 w-5 place-items-center rounded-full bg-primary-foreground text-primary"><Check className="h-3 w-3" strokeWidth={3} /></span>{x}</li>
                ))}
                <p className="flex items-center gap-2 pt-2 text-xs opacity-80"><Clock className="h-3.5 w-3.5" /> We usually reply within one business day.</p>
              </ul>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="mx-auto max-w-6xl px-5 pb-8 md:px-10">
          <div className="card-soft grid gap-10 p-8 sm:grid-cols-2 md:p-10 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
            <div>
              <Logo />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">Professional websites and digital solutions built for modern businesses.</p>
              <Btn href="#contact" className="mt-6 px-5 py-2.5">Start a Project <Arrow /></Btn>
            </div>
            <div>
              <p className="text-sm font-bold">Navigation</p>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                {nav.map((l) => <li key={l.label}><a href={l.href} className="transition hover:text-primary">{l.label}</a></li>)}
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold">Services</p>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                {services.map((s) => <li key={s.t}><a href="#services" className="transition hover:text-primary">{s.t}</a></li>)}
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold">Contact</p>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li><a href="mailto:hello@brightline.studio" className="flex items-center gap-2 transition hover:text-primary"><Mail className="h-4 w-4 text-primary" /> hello@brightline.studio</a></li>
                <li><a href="tel:+919876543210" className="flex items-center gap-2 transition hover:text-primary"><Phone className="h-4 w-4 text-primary" /> +91 98765 43210</a></li>
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Kolkata, India</li>
                <li className="flex items-center gap-2"><Puzzle className="h-4 w-4 text-primary" /> Custom projects welcome</li>
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
