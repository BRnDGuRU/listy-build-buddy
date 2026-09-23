import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  Check,
  CircleCheck,
  Database,
  Globe2,
  Mail,
  Menu,
  MessageSquareText,
  Rocket,
  ServerCog,
  Settings2,
  ShieldCheck,
  Target,
  Users,
  X,
} from "lucide-react";
import { useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "100K GTM Email Guaranteed System" },
      {
        name: "description",
        content:
          "A complete done-for-you outbound GTM system built to deliver 10 high-qualified V2P appointments in 90 days.",
      },
      { property: "og:title", content: "100K GTM Email Guaranteed System" },
      {
        property: "og:description",
        content: "We build and manage your outbound email engine. You get the meetings.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const inclusions = [
  { icon: Mail, title: "100K Email Infrastructure", text: "Up to 100,000 outbound emails sent every month through premium, optimized infrastructure." },
  { icon: CalendarCheck, title: "Email Credits", text: "100,000 email credits provided every month to power your outreach." },
  { icon: Bot, title: "AI Lead Scraping Agent", text: "Automatically discovers and extracts highly targeted prospects." },
  { icon: MessageSquareText, title: "AI Lead Reply Agent", text: "Captures, classifies, and helps respond to incoming replies." },
  { icon: Users, title: "8 Million B2B Leads", text: "Access to a massive database of 8 million B2B decision-makers." },
  { icon: BriefcaseBusiness, title: "Agency Owners Kit", text: "50,000+ agency-owner leads to target and close high-value clients." },
  { icon: Building2, title: "USA Local Business Owners Leads", text: "A targetable database of US local business owners." },
  { icon: ShieldCheck, title: "GTM Scripting", text: "We create high-converting email scripts and follow-up sequences." },
  { icon: Settings2, title: "Campaign Management", text: "We set up, launch, monitor, and optimize campaigns for maximum results." },
  { icon: CircleCheck, title: "Lead Management", text: "Filtering, validation, segmentation, and feeding the right leads." },
  { icon: ServerCog, title: "Infrastructure Management", text: "We manage sender accounts, domains, warmup, and deliverability." },
];

const investments = [
  { icon: Rocket, title: "GTM Activation", cadence: "One-time", price: "$649", text: "One-time setup, system buildout, and activation." },
  { icon: Globe2, title: "Annual Domains", cadence: "Per year", price: "$750", text: "Premium domains for your email infrastructure." },
  { icon: Mail, title: "Running Infrastructure", cadence: "Per month", price: "$750", text: "Leads, validation, email senders, and credits." },
  { icon: Settings2, title: "Management Fee", cadence: "Per month", price: "$297", text: "We manage, optimize, and scale the entire system." },
];

const steps = [
  { number: "01", title: "Build", text: "We define the target, build the infrastructure, configure domains, and prepare your campaigns." },
  { number: "02", title: "Launch", text: "We activate targeted outreach with proven GTM scripting and automated follow-up sequences." },
  { number: "03", title: "Manage", text: "We monitor deliverability, classify replies, validate leads, and optimize performance." },
  { number: "04", title: "Book", text: "Qualified opportunities reach your calendar. Your only job is to show up and close." },
];

function CtaButton({ children = "Book a Strategy Call", inverse = false }: { children?: ReactNode; inverse?: boolean }) {
  return (
    <Button asChild size="lg" variant={inverse ? "secondary" : "default"} className="h-12 rounded-xl px-7 font-bold shadow-soft">
      <a href="#strategy-call">{children}<ArrowRight /></a>
    </Button>
  );
}

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold text-foreground" aria-label="BrndGuru home">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground"><Mail className="h-5 w-5" /></span>
      BrndGuru
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="page-container flex h-18 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          <a className="nav-link" href="#included">What&apos;s Included</a>
          <a className="nav-link" href="#investment">Investment</a>
          <a className="nav-link" href="#process">How It Works</a>
          <CtaButton>Strategy Call</CtaButton>
        </nav>
        <Button type="button" variant="outline" size="icon" className="md:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 py-5 md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-5">
            <a className="nav-link" href="#included" onClick={() => setOpen(false)}>What&apos;s Included</a>
            <a className="nav-link" href="#investment" onClick={() => setOpen(false)}>Investment</a>
            <a className="nav-link" href="#process" onClick={() => setOpen(false)}>How It Works</a>
            <CtaButton>Strategy Call</CtaButton>
          </div>
        </nav>
      )}
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="mx-auto w-full max-w-lg overflow-hidden rounded-3xl bg-ink p-7 text-primary-foreground shadow-card sm:p-9" aria-label="Managed email engine overview">
      <div className="flex items-center justify-between border-b border-ink-border pb-5">
        <div><p className="text-xs font-semibold uppercase text-ink-muted">The full engine</p><p className="mt-1 font-display text-xl font-bold">Outbound operations</p></div>
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary"><Mail className="h-5 w-5" /></span>
      </div>
      <div className="mt-7 grid grid-cols-2 gap-3">
        {[
          { icon: Bot, label: "AI lead agent" },
          { icon: MessageSquareText, label: "Reply agent" },
          { icon: Database, label: "8M+ leads" },
          { icon: ServerCog, label: "Infrastructure" },
        ].map((item) => (
          <div key={item.label} className="rounded-xl border border-ink-border bg-ink-elevated p-4">
            <item.icon className="h-5 w-5 text-brand-light" />
            <span className="mt-8 block text-xs font-semibold uppercase text-ink-muted">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-xl bg-primary p-5"><span className="text-xs font-bold uppercase">Monthly capacity</span><strong className="mt-1 block font-display text-3xl">100,000 emails</strong></div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-surface py-16 sm:py-24">
      <div className="page-container grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
        <div>
          <span className="eyebrow">Done-for-you outbound GTM system</span>
          <h1 className="mt-7 max-w-3xl font-display text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
            100K GTM Email <span className="text-primary">Guaranteed System</span>
          </h1>
          <p className="mt-6 text-xl font-semibold sm:text-2xl">We build. We manage. <span className="text-primary">You get the meetings.</span></p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">A complete done-for-you outbound GTM engine that delivers more qualified appointments on autopilot.</p>
          <div className="mt-8"><CtaButton /></div>
          <div className="mt-10 grid max-w-2xl gap-5 border-t border-border pt-7 sm:grid-cols-3">
            <Proof icon={Target} title="10 appointments" text="High-qualified V2P in 90 days" />
            <Proof icon={ShieldCheck} title="Done for you" text="We build, manage, and optimize" />
            <Proof icon={CalendarCheck} title="Predictable pipeline" text="Consistent meetings and more closed deals" />
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function Proof({ icon: Icon, title, text }: { icon: typeof Target; title: string; text: string }) {
  return <div className="flex gap-3"><Icon className="mt-0.5 h-6 w-6 shrink-0 text-primary" /><div><strong className="block text-sm uppercase">{title}</strong><span className="mt-1 block text-xs leading-relaxed text-muted-foreground">{text}</span></div></div>;
}

function IncludedSection() {
  return (
    <section id="included" className="section-space bg-background">
      <div className="page-container">
        <div className="mx-auto max-w-3xl text-center"><span className="eyebrow">Your complete engine</span><h2 className="section-title mt-5">What&apos;s included in your system</h2><p className="mt-4 text-muted-foreground">Every part of outbound—from data and infrastructure to replies and optimization—managed under one roof.</p></div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {inclusions.map((item, index) => <article key={item.title} className={`rounded-2xl border border-border bg-card p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-soft ${index === 0 || index === 10 ? "lg:col-span-2" : ""}`}><span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary"><item.icon className="h-5 w-5" /></span><h3 className="mt-5 font-display text-base font-bold uppercase">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p></article>)}
        </div>
      </div>
    </section>
  );
}

function CommitmentSection() {
  return (
    <section className="bg-soft py-10">
      <div className="page-container">
        <div className="grid items-center gap-8 rounded-3xl bg-ink p-7 text-primary-foreground shadow-card sm:p-10 lg:grid-cols-[1fr_1.25fr]">
          <div className="flex items-center gap-6"><span className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-primary"><Target className="h-10 w-10" /></span><div><p className="text-sm font-semibold uppercase text-ink-muted">Our result commitment</p><h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">10 high-qualified V2P appointments <span className="text-brand-light">in 90 days</span></h2></div></div>
          <ul className="space-y-3 border-t border-ink-border pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">{["We handle the entire GTM system.", "You get qualified appointments.", "Your only job is to show up for the meetings."].map((item) => <li key={item} className="flex gap-3 text-sm sm:text-base"><Check className="h-5 w-5 shrink-0 text-brand-light" />{item}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

function InvestmentSection() {
  return (
    <section id="investment" className="section-space bg-background">
      <div className="page-container">
        <div className="text-center"><span className="eyebrow">Clear investment</span><h2 className="section-title mt-5">Built once. Managed every month.</h2></div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{investments.map((item) => <article key={item.title} className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft"><item.icon className="mx-auto h-8 w-8 text-primary" /><p className="mt-5 text-xs font-bold uppercase text-muted-foreground">{item.title} · {item.cadence}</p><strong className="mt-2 block font-display text-4xl text-primary">{item.price}</strong><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p></article>)}</div>
        <div className="mt-5 rounded-2xl bg-ink px-6 py-8 text-center text-primary-foreground"><p className="text-xs font-bold uppercase text-ink-muted">Total on day 1</p><p className="mt-2 font-display text-5xl font-bold">$2,149</p><p className="mt-2 text-sm text-ink-muted">One-time activation + first month&apos;s running infrastructure + annual domains</p></div>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="section-space bg-soft">
      <div className="page-container">
        <div className="text-center"><span className="eyebrow">Payment timeline</span><h2 className="section-title mt-5">Know exactly what happens when</h2></div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-5 lg:grid-cols-3">
          <TimelineCard label="Day 1" total="$2,149" items={["$649 GTM activation", "$750 annual domains", "$750 running infrastructure"]} />
          <TimelineCard label="Day 30" total="$297" items={["$297 management fee", "End of first month"]} />
          <TimelineCard label="Month 2+" total="$1,047 / month" items={["$750 running infrastructure", "$297 management fee"]} />
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ label, total, items }: { label: string; total: string; items: string[] }) {
  return <article className="rounded-2xl border border-border bg-card p-7 shadow-soft"><span className="inline-grid h-14 w-14 place-items-center rounded-xl bg-primary-soft font-display text-sm font-bold text-primary">{label}</span><ul className="mt-6 space-y-3">{items.map((item) => <li key={item} className="flex gap-2 text-sm"><CircleCheck className="h-4 w-4 shrink-0 text-primary" />{item}</li>)}</ul><div className="mt-7 border-t border-border pt-5"><span className="text-xs font-bold uppercase text-muted-foreground">Total</span><strong className="mt-1 block font-display text-2xl text-primary">{total}</strong></div></article>;
}

function ProcessSection() {
  return (
    <section id="process" className="section-space bg-background">
      <div className="page-container"><div className="mx-auto max-w-3xl text-center"><span className="eyebrow">How it works</span><h2 className="section-title mt-5">From cold list to qualified meeting</h2><p className="mt-4 text-muted-foreground">One managed system, built to keep your team focused on sales—not sending infrastructure.</p></div><div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-4">{steps.map((step) => <article key={step.number} className="bg-card p-7"><span className="font-display text-sm font-extrabold text-primary">{step.number}</span><h3 className="mt-10 font-display text-2xl font-bold">{step.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p></article>)}</div></div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="strategy-call" className="bg-primary py-20 text-primary-foreground">
      <div className="page-container text-center"><CalendarCheck className="mx-auto h-12 w-12" /><p className="mt-5 text-sm font-bold uppercase">Stop chasing. Start closing.</p><h2 className="mx-auto mt-3 max-w-4xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">Let&apos;s build your predictable pipeline.</h2><p className="mx-auto mt-5 max-w-xl text-primary-foreground/80">Book a 30-minute strategy call. No obligation—just a clear look at how the system can work for your offer.</p><div className="mt-8"><CtaButton inverse /></div></div>
    </section>
  );
}

function Footer() {
  return <footer className="bg-ink py-10 text-primary-foreground"><div className="page-container flex flex-col justify-between gap-6 sm:flex-row sm:items-center"><div><Logo /><p className="mt-2 text-sm text-ink-muted">Done-for-you outbound GTM systems.</p></div><div className="flex gap-6 text-sm text-ink-muted"><a href="#included">Included</a><a href="#investment">Investment</a><a href="#strategy-call">Strategy Call</a></div></div></footer>;
}

function HomePage() {
  return <main className="min-h-screen overflow-x-hidden"><Header /><Hero /><IncludedSection /><CommitmentSection /><InvestmentSection /><TimelineSection /><ProcessSection /><FinalCta /><Footer /></main>;
}