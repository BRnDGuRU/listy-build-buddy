import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  Check,
  ChevronDown,
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
  XCircle,
} from "lucide-react";
import { useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "100K GTM Email Guaranteed System | BrndGuru" },
      { name: "description", content: "A done-for-you outbound GTM system built to deliver 10 high-qualified V2P appointments in 90 days." },
      { property: "og:title", content: "100K GTM Email Guaranteed System | BrndGuru" },
      { property: "og:description", content: "We build and manage your outbound email engine. You get the meetings." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const inclusions = [
  { icon: Mail, title: "100K Email Infrastructure", text: "Up to 100,000 outbound emails every month through optimized infrastructure." },
  { icon: CalendarCheck, title: "100K Email Credits", text: "100,000 email credits supplied every month to power your outreach." },
  { icon: Bot, title: "AI Lead Scraping Agent", text: "Automatically discovers and extracts highly targeted prospects." },
  { icon: MessageSquareText, title: "AI Lead Reply Agent", text: "Captures, classifies, and helps respond to incoming replies." },
  { icon: Database, title: "8 Million B2B Leads", text: "Access to a database of 8 million B2B decision-makers." },
  { icon: BriefcaseBusiness, title: "Agency Owners Kit", text: "50,000+ agency-owner leads for high-value client outreach." },
  { icon: Building2, title: "USA Local Business Leads", text: "A targetable database of US local business owners." },
  { icon: ShieldCheck, title: "GTM Scripting", text: "Conversion-focused email scripts and follow-up sequences." },
  { icon: Settings2, title: "Campaign Management", text: "Setup, launch, monitoring, and ongoing optimization." },
  { icon: Users, title: "Lead Management", text: "Filtering, validation, segmentation, and lead feeding." },
  { icon: ServerCog, title: "Infrastructure Management", text: "Sender accounts, domains, warmup, and deliverability managed for you." },
];

const steps = [
  { number: "01", title: "Build the foundation", text: "We define your audience, configure domains and sender accounts, and prepare the full sending infrastructure." },
  { number: "02", title: "Launch the outreach", text: "We activate targeted campaigns using focused GTM scripts and automated follow-up sequences." },
  { number: "03", title: "Manage the engine", text: "We monitor deliverability, validate data, classify replies, and continually optimize performance." },
  { number: "04", title: "Book the meetings", text: "Qualified opportunities reach your calendar. You focus on showing up, selling, and closing." },
];

const faqs = [
  { question: "What does the 100K number mean?", answer: "The system is designed with capacity for up to 100,000 outbound emails each month, supported by 100,000 monthly email credits." },
  { question: "What result are you committing to?", answer: "The offer commits to 10 high-qualified V2P appointments within 90 days while we handle the GTM system." },
  { question: "What do I need to manage?", answer: "We handle the infrastructure, campaigns, leads, scripts, and reply workflow. Your role is to attend qualified meetings and close the right opportunities." },
  { question: "What is due on day one?", answer: "The day-one total is $2,149: $649 activation, $750 annual domains, and the first $750 infrastructure payment." },
  { question: "What does it cost after launch?", answer: "The management fee is $297 at day 30. From month two onward, the recurring total is $1,047 per month for infrastructure and management." },
];

function CtaButton({ children = "Book a Strategy Call", inverse = false }: { children?: ReactNode; inverse?: boolean }) {
  return (
    <Button asChild size="lg" variant={inverse ? "secondary" : "default"} className="h-12 rounded-md px-7 font-bold shadow-soft">
      <a href="#strategy-call">{children}<ArrowRight /></a>
    </Button>
  );
}

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#top" className={`flex items-center gap-2 font-display text-lg font-bold ${inverse ? "text-primary-foreground" : "text-foreground"}`} aria-label="BrndGuru home">
      <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground"><Mail className="h-5 w-5" /></span>
      BRND GURU
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
          <a className="nav-link" href="#system">The System</a>
          <a className="nav-link" href="#process">Process</a>
          <a className="nav-link" href="#investment">Investment</a>
          <a className="nav-link" href="#faq">FAQ</a>
          <CtaButton>Book a Call</CtaButton>
        </nav>
        <Button type="button" variant="outline" size="icon" className="md:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 py-5 md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-5">
            {[['The System', '#system'], ['Process', '#process'], ['Investment', '#investment'], ['FAQ', '#faq']].map(([label, href]) => <a key={href} className="nav-link" href={href} onClick={() => setOpen(false)}>{label}</a>)}
            <CtaButton>Book a Call</CtaButton>
          </div>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background py-16 sm:py-24 lg:py-28">
      <div className="page-container grid items-center gap-14 lg:grid-cols-[1.12fr_.88fr]">
        <div>
          <span className="eyebrow">Done-for-you outbound GTM system</span>
          <h1 className="mt-7 max-w-4xl font-display text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
            You don&apos;t need more software. <span className="text-primary">You need more meetings.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">The 100K GTM Email Guaranteed System builds, launches, and manages your outbound engine from first send to qualified appointment.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><CtaButton /><Button asChild size="lg" variant="outline" className="h-12 rounded-md px-7 font-bold"><a href="#system">See what&apos;s included</a></Button></div>
          <p className="font-script mt-7 text-2xl font-bold text-primary">We build. We manage. You close.</p>
        </div>
        <div className="dark-grid relative overflow-hidden rounded-lg p-7 text-primary-foreground shadow-card sm:p-10">
          <div className="flex items-start justify-between border-b border-ink-border pb-7"><div><p className="text-xs font-semibold uppercase text-ink-muted">The commitment</p><strong className="mt-2 block font-display text-7xl font-bold text-primary">10</strong></div><Target className="h-10 w-10 text-brand-light" /></div>
          <h2 className="mt-7 max-w-sm font-display text-3xl font-bold leading-tight">High-qualified V2P appointments in 90 days.</h2>
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-md bg-ink-border"><div className="bg-ink-card p-5"><span className="text-xs text-ink-muted">Monthly capacity</span><strong className="mt-2 block text-xl">100K emails</strong></div><div className="bg-ink-card p-5"><span className="text-xs text-ink-muted">Built for you</span><strong className="mt-2 block text-xl">End to end</strong></div></div>
        </div>
      </div>
    </section>
  );
}

function OutcomeStrip() {
  return <section className="border-y border-border bg-soft"><div className="page-container grid gap-px bg-border sm:grid-cols-3">{[["100K", "monthly email capacity"], ["10", "qualified appointments"], ["90 days", "result commitment"]].map(([value, label]) => <div key={label} className="bg-soft px-6 py-7 text-center"><strong className="font-display text-3xl text-primary">{value}</strong><span className="mt-1 block text-xs font-semibold uppercase text-muted-foreground">{label}</span></div>)}</div></section>;
}

function ProblemSection() {
  return (
    <section className="section-space bg-background">
      <div className="page-container grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div><span className="eyebrow">The real problem</span><h2 className="section-title mt-5">Your offer isn&apos;t stalled. Your outbound system is.</h2></div>
        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {["Inconsistent prospecting", "Fragile email infrastructure", "Generic scripts and targeting", "Replies slipping through the cracks"].map((item) => <div key={item} className="flex min-h-32 items-start gap-4 bg-card p-6"><XCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><p className="font-semibold leading-relaxed">{item}</p></div>)}
        </div>
      </div>
    </section>
  );
}

function IncludedSection() {
  return (
    <section id="system" className="section-space dark-grid text-primary-foreground">
      <div className="page-container">
        <div className="max-w-3xl"><span className="eyebrow eyebrow-dark">Everything included</span><h2 className="section-title mt-5">One engine. Every moving part managed.</h2><p className="mt-5 max-w-2xl leading-relaxed text-ink-muted">Data, infrastructure, campaigns, replies, and optimization work as one managed growth system—not another collection of tools for your team to operate.</p></div>
        <div className="mt-12 grid border-l border-t border-ink-border sm:grid-cols-2 lg:grid-cols-3">
          {inclusions.map((item) => <article key={item.title} className="border-b border-r border-ink-border bg-ink/80 p-6 transition-colors hover:bg-ink-card"><item.icon className="h-6 w-6 text-brand-light" /><h3 className="mt-8 font-display text-base font-bold">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.text}</p></article>)}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="section-space bg-background">
      <div className="page-container"><div className="grid gap-8 lg:grid-cols-2"><div><span className="eyebrow">Our end-to-end process</span><h2 className="section-title mt-5">From cold list to qualified meeting.</h2></div><p className="max-w-xl self-end leading-relaxed text-muted-foreground">We own the operational work between your offer and your next sales conversation, so your team stays focused on revenue.</p></div><div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">{steps.map((step) => <article key={step.number} className="bg-card p-7"><span className="text-sm font-bold text-primary">{step.number}</span><h3 className="mt-12 font-display text-xl font-bold">{step.title}</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{step.text}</p></article>)}</div></div>
    </section>
  );
}

function CommitmentSection() {
  return (
    <section className="orange-grid py-20 text-primary-foreground">
      <div className="page-container grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
        <div><p className="text-sm font-bold uppercase">Our commitment</p><h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-6xl">10 high-qualified V2P appointments in 90 days.</h2></div>
        <ul className="space-y-4 border-t border-primary-foreground/30 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">{["We handle the entire GTM system.", "You get qualified appointments.", "You show up, sell, and close."].map((item) => <li key={item} className="flex gap-3 font-semibold"><Check className="h-5 w-5 shrink-0" />{item}</li>)}</ul>
      </div>
    </section>
  );
}

function InvestmentSection() {
  return (
    <section id="investment" className="section-space bg-soft">
      <div className="page-container">
        <div className="mx-auto max-w-3xl text-center"><span className="eyebrow">Simple investment</span><h2 className="section-title mt-5">Built once. Managed every month.</h2><p className="mt-4 text-muted-foreground">Every cost is visible before we start.</p></div>
        <div className="mt-12 grid overflow-hidden rounded-lg border border-border bg-card lg:grid-cols-[1.2fr_.8fr]">
          <div className="divide-y divide-border p-6 sm:p-9">{[[Rocket,"GTM activation","One-time","$649"],[Globe2,"Annual domains","Per year","$750"],[Mail,"Running infrastructure","Per month","$750"],[Settings2,"Management","Per month","$297"]].map(([Icon,title,cadence,price]) => { const ItemIcon = Icon as typeof Rocket; return <div key={String(title)} className="flex items-center gap-4 py-5 first:pt-0 last:pb-0"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary-soft text-primary"><ItemIcon className="h-5 w-5" /></span><div className="min-w-0 flex-1"><strong className="block">{String(title)}</strong><span className="text-xs text-muted-foreground">{String(cadence)}</span></div><strong className="text-xl text-primary">{String(price)}</strong></div>})}</div>
          <div className="dark-grid p-7 text-primary-foreground sm:p-10"><p className="text-xs font-bold uppercase text-ink-muted">Due on day one</p><strong className="mt-3 block font-display text-5xl">$2,149</strong><p className="mt-5 text-sm leading-relaxed text-ink-muted">Activation, annual domains, and your first month of running infrastructure.</p><div className="my-8 border-t border-ink-border" /><p className="text-xs font-bold uppercase text-ink-muted">Month two onward</p><strong className="mt-3 block font-display text-3xl text-brand-light">$1,047 / month</strong><p className="mt-8"><CtaButton>Start with a Strategy Call</CtaButton></p></div>
        </div>
        <div className="mx-auto mt-6 max-w-3xl rounded-md border border-border bg-background p-5 text-center text-sm text-muted-foreground"><CircleCheck className="mr-2 inline h-4 w-4 text-primary" />The $297 management fee begins at day 30.</div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="section-space bg-background">
      <div className="page-container grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><span className="eyebrow">Common questions</span><h2 className="section-title mt-5">Everything you need to know.</h2></div><div className="divide-y divide-border border-y border-border">{faqs.map((item) => <details key={item.question} className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold"><span>{item.question}</span><ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" /></summary><p className="max-w-2xl pt-4 text-sm leading-relaxed text-muted-foreground">{item.answer}</p></details>)}</div></div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="strategy-call" className="dark-grid py-24 text-primary-foreground"><div className="page-container text-center"><CalendarCheck className="mx-auto h-11 w-11 text-brand-light" /><p className="font-script mt-6 text-3xl font-bold text-brand-light">Your pipeline, properly built.</p><h2 className="mx-auto mt-4 max-w-4xl font-display text-4xl font-bold leading-tight sm:text-6xl">Stop managing tools. Start taking meetings.</h2><p className="mx-auto mt-6 max-w-xl text-ink-muted">Book a 30-minute strategy call for a clear look at how the 100K GTM system can work for your offer.</p><div className="mt-9"><CtaButton>Book Your Strategy Call</CtaButton></div></div></section>
  );
}

function Footer() {
  return <footer className="border-t border-ink-border bg-ink py-10 text-primary-foreground"><div className="page-container flex flex-col justify-between gap-7 sm:flex-row sm:items-center"><div><Logo inverse /><p className="mt-3 text-sm text-ink-muted">We build brands. We build systems. We build growth.</p></div><div className="flex flex-wrap gap-6 text-sm text-ink-muted"><a href="#system">The System</a><a href="#process">Process</a><a href="#investment">Investment</a><a href="#faq">FAQ</a></div></div></footer>;
}

function HomePage() {
  return <main className="min-h-screen overflow-x-hidden"><Header /><Hero /><OutcomeStrip /><ProblemSection /><IncludedSection /><ProcessSection /><CommitmentSection /><InvestmentSection /><FaqSection /><FinalCta /><Footer /></main>;
}