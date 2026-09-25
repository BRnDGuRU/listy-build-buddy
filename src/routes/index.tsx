import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
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
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
  XCircle,
} from "lucide-react";
import { useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import brndGuruLogo from "@/assets/brndguru-logo.png.asset.json";

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

const enginePillars = [
  { number: "01", icon: ServerCog, title: "Sending infrastructure", text: "Domains, inboxes, DNS records, warmup, rotation, and sending capacity are configured and managed as one system." },
  { number: "02", icon: Target, title: "Targeted lead supply", text: "Prospects are sourced, filtered, validated, and segmented around the buyers your offer is built to serve." },
  { number: "03", icon: Sparkles, title: "Campaign intelligence", text: "GTM scripts, follow-up sequences, testing, and campaign decisions are continuously refined around live response data." },
  { number: "04", icon: MessageSquareText, title: "Reply to meeting", text: "Replies are classified and managed so qualified conversations move toward a booked appointment without getting lost." },
];

const roadmap = [
  { phase: "Days 1–15", title: "Strategy and setup", text: "Define the ICP, prepare lead segments, secure domains, configure inboxes, and shape the first campaign angles." },
  { phase: "Days 16–30", title: "Warmup and launch", text: "Complete infrastructure checks, warm the sending environment, validate prospect data, and launch controlled campaigns." },
  { phase: "Days 31–60", title: "Optimize the engine", text: "Review replies and deliverability, refine scripts, adjust targeting, and scale the strongest-performing segments." },
  { phase: "Days 61–90", title: "Scale qualified conversations", text: "Keep the system running at capacity while routing qualified interest toward your calendar and sales process." },
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
    <a href="#top" className={`flex items-center gap-2.5 ${inverse ? "text-primary-foreground" : "text-foreground"}`} aria-label="BrndGuru home">
      <img src={brndGuruLogo.url} alt="" className="h-10 w-10 object-contain" />
      <span className="flex flex-col">
        <span className="font-display text-sm font-bold sm:text-base">BRND GURU</span>
        <span className="mt-0.5 text-[9px] font-bold uppercase text-primary">GTM Infrastructure</span>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="border-b border-ink-border bg-ink-card px-4 py-2.5 text-center text-[10px] font-bold uppercase text-primary-foreground sm:text-xs">
        <span className="text-primary">⚡</span> Early-bird pricing ends soon <span className="ml-2 text-brand-light">Limited onboarding spots</span>
      </div>
      <header className="sticky top-0 z-50 border-b border-ink-border bg-ink/95 backdrop-blur-md">
        <div className="page-container flex h-18 items-center justify-between">
        <Logo inverse />
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          <a className="text-sm font-semibold text-ink-muted hover:text-primary-foreground" href="#system">Why GTM Email</a>
          <a className="text-sm font-semibold text-ink-muted hover:text-primary-foreground" href="#process">How It Works</a>
          <a className="text-sm font-semibold text-ink-muted hover:text-primary-foreground" href="#system">What&apos;s Included</a>
          <a className="text-sm font-semibold text-ink-muted hover:text-primary-foreground" href="#investment">Pricing</a>
          <a className="text-sm font-semibold text-ink-muted hover:text-primary-foreground" href="#faq">FAQ</a>
          <CtaButton>Book a Call</CtaButton>
        </nav>
        <Button type="button" variant="outline" size="icon" className="border-ink-border bg-ink-card text-primary-foreground hover:bg-ink-elevated hover:text-primary-foreground lg:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="border-t border-ink-border bg-ink px-5 py-5 lg:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-5">
            {[['Why GTM Email', '#system'], ['How It Works', '#process'], ["What's Included", '#system'], ['Pricing', '#investment'], ['FAQ', '#faq']].map(([label, href]) => <a key={label} className="text-sm font-semibold text-ink-muted hover:text-primary-foreground" href={href} onClick={() => setOpen(false)}>{label}</a>)}
            <CtaButton>Book a Call</CtaButton>
          </div>
        </nav>
      )}
      </header>
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="dark-grid relative overflow-hidden border-b border-ink-border py-12 text-primary-foreground sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,color-mix(in_oklab,var(--primary)_10%,transparent),transparent_42%)]" />
      <div className="page-container relative flex flex-col items-center text-center">
        <span className="eyebrow eyebrow-dark"><Rocket className="h-3.5 w-3.5" /> You don&apos;t need more software. You need more meetings.</span>
        <h1 className="font-hero mt-7 max-w-5xl text-[clamp(2.7rem,7vw,6rem)] font-black leading-[1.08]">
          We Build Your <span className="inline-block rounded-md bg-primary px-2.5 py-1 text-primary-foreground sm:px-4">100K Email GTM</span>{" "}
          <span className="inline-block rounded-md bg-primary px-2.5 py-1 text-primary-foreground sm:px-4">Engine</span> And Run It Every Day—So You Stop Losing Pipeline to <span className="text-brand-light">Guesswork.</span>
        </h1>
        <p className="mt-7 max-w-3xl text-base leading-relaxed text-ink-muted sm:text-lg">
          One partner builds your complete outbound email infrastructure—targeting, lead supply, campaigns, AI-assisted replies, and optimization—<strong className="text-primary-foreground">then runs it for you, every single day.</strong>
        </p>
        <div className="mt-8 flex max-w-xl items-start gap-3 rounded-md border border-success/40 bg-ink-card/90 px-5 py-4 text-left shadow-soft">
          <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-success" />
          <div>
            <strong className="block text-sm sm:text-base">10 High-Qualified V2P Appointments in 90 Days</strong>
            <span className="mt-1 block text-xs text-ink-muted sm:text-sm">We handle the complete engine while you focus on selling and closing.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function OutcomeStrip() {
  return <section className="border-y border-border bg-soft"><div className="page-container grid gap-px bg-border sm:grid-cols-3">{[["100K", "monthly email capacity"], ["10", "qualified appointments"], ["90 days", "result commitment"]].map(([value, label]) => <div key={label} className="bg-soft px-6 py-7 text-center"><strong className="font-display text-3xl text-primary">{value}</strong><span className="mt-1 block text-xs font-semibold uppercase text-muted-foreground">{label}</span></div>)}</div></section>;
}

function CapabilityStrip() {
  return (
    <section aria-label="Core capabilities" className="overflow-hidden border-b border-border bg-background py-5">
      <div className="page-container flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-bold uppercase text-muted-foreground sm:justify-between">
        {["Lead intelligence", "Email infrastructure", "GTM scripting", "Reply management", "Campaign optimization"].map((item) => <span key={item} className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-primary" />{item}</span>)}
      </div>
    </section>
  );
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

function PipelineSection() {
  return (
    <section className="section-space bg-soft">
      <div className="page-container">
        <div className="mx-auto max-w-3xl text-center"><span className="eyebrow">Your pipeline, end to end</span><h2 className="section-title mt-5">One connected path from market to meeting.</h2><p className="mt-5 leading-relaxed text-muted-foreground">Instead of piecing together software, data, domains, copy, and operators, you get one managed system with a single outcome.</p></div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-5">
          {["Define the ICP", "Build lead segments", "Launch campaigns", "Manage replies", "Book meetings"].map((item, index) => <div key={item} className="relative bg-card p-6"><span className="text-xs font-bold text-primary">0{index + 1}</span><p className="mt-8 font-display font-bold">{item}</p>{index < 4 && <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 rounded-full bg-primary p-1 text-primary-foreground md:block" />}</div>)}
        </div>
      </div>
    </section>
  );
}

function EnginePillarsSection() {
  return (
    <section className="section-space bg-background">
      <div className="page-container">
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]"><div><span className="eyebrow">Four parts. One job.</span><h2 className="section-title mt-5">Build a dependable source of qualified conversations.</h2></div><p className="max-w-xl self-end leading-relaxed text-muted-foreground">Every layer supports the next. Better infrastructure protects deliverability. Better data sharpens targeting. Better campaigns create replies. Better reply handling creates meetings.</p></div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
          {enginePillars.map((pillar) => <article key={pillar.number} className="bg-card p-7 sm:p-9"><div className="flex items-center justify-between"><span className="text-sm font-bold text-primary">{pillar.number}</span><pillar.icon className="h-6 w-6 text-primary" /></div><h3 className="mt-12 font-display text-2xl font-bold">{pillar.title}</h3><p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">{pillar.text}</p></article>)}
        </div>
      </div>
    </section>
  );
}

function OldWaySection() {
  return (
    <section className="section-space dark-grid text-primary-foreground">
      <div className="page-container">
        <div className="max-w-3xl"><span className="eyebrow eyebrow-dark">A better operating model</span><h2 className="section-title mt-5">The old way creates more work. The engine creates momentum.</h2></div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="border border-ink-border bg-ink-card p-7 sm:p-9"><p className="text-xs font-bold uppercase text-ink-muted">Disconnected outbound</p><h3 className="mt-4 font-display text-2xl font-bold">Tools without an operator</h3><ul className="mt-8 space-y-4 text-sm text-ink-muted">{["Separate vendors for data, inboxes, and campaigns", "Your team troubleshoots deliverability", "Generic lists and one-size-fits-all scripts", "Replies depend on manual follow-up"].map((item) => <li key={item} className="flex gap-3"><XCircle className="h-5 w-5 shrink-0 text-ink-muted" />{item}</li>)}</ul></article>
          <article className="border border-primary bg-ink-elevated p-7 sm:p-9"><p className="text-xs font-bold uppercase text-brand-light">100K GTM Email Engine</p><h3 className="mt-4 font-display text-2xl font-bold">One managed growth system</h3><ul className="mt-8 space-y-4 text-sm text-ink-muted">{["Infrastructure, lead supply, scripts, and operations aligned", "Deliverability and sending capacity actively managed", "Targeting shaped around your ideal customer profile", "Replies organized around the next sales action"].map((item) => <li key={item} className="flex gap-3"><CircleCheck className="h-5 w-5 shrink-0 text-brand-light" />{item}</li>)}</ul></article>
        </div>
      </div>
    </section>
  );
}

function InfrastructureSection() {
  return (
    <section className="section-space bg-background">
      <div className="page-container grid items-center gap-14 lg:grid-cols-2">
        <div><span className="eyebrow">Built beneath every send</span><h2 className="section-title mt-5">Infrastructure that can carry the campaign.</h2><p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">High-volume outbound only works when the foundation is managed with the same care as the message. We prepare and operate the sending environment before asking it to scale.</p><div className="mt-8"><CtaButton>Discuss Your Infrastructure</CtaButton></div></div>
        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">{["Domain setup", "Sender accounts", "Inbox warmup", "Deliverability checks", "Sending rotation", "Ongoing monitoring"].map((item, index) => <div key={item} className="bg-soft p-6"><span className="text-xs font-bold text-primary">0{index + 1}</span><p className="mt-7 font-semibold">{item}</p></div>)}</div>
      </div>
    </section>
  );
}

function AiWorkflowSection() {
  return (
    <section className="section-space bg-soft">
      <div className="page-container grid gap-14 lg:grid-cols-[.9fr_1.1fr]">
        <div><span className="eyebrow">AI-assisted operations</span><h2 className="section-title mt-5">Find the right prospects. Understand every reply.</h2><p className="mt-5 leading-relaxed text-muted-foreground">The scraping and reply agents support the repetitive work around prospect discovery and response classification, while the campaign remains focused on qualified business conversations.</p></div>
        <div className="space-y-3">{[[Target,"Discover","Identify prospects that match the campaign audience."],[Database,"Prepare","Extract, validate, and organize lead data for outreach."],[Mail,"Engage","Run structured email sequences and follow-ups."],[MessageSquareText,"Classify","Separate interest, questions, objections, and non-opportunities."],[CalendarCheck,"Route","Move qualified responses toward the appointment workflow."]].map(([Icon,label,text], index) => { const ItemIcon = Icon as typeof Target; return <div key={String(label)} className="flex items-start gap-5 border border-border bg-card p-5"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary-soft text-primary"><ItemIcon className="h-5 w-5" /></span><div><p className="text-xs font-bold text-primary">0{index + 1}</p><h3 className="mt-1 font-bold">{String(label)}</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{String(text)}</p></div></div>})}</div>
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

function RoadmapSection() {
  return (
    <section className="section-space bg-background">
      <div className="page-container"><div className="mx-auto max-w-3xl text-center"><span className="eyebrow">The first 90 days</span><h2 className="section-title mt-5">From foundation to a running GTM engine.</h2></div><div className="mt-14 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">{roadmap.map((item) => <article key={item.phase} className="border-b border-r border-border p-7"><span className="text-xs font-bold uppercase text-primary">{item.phase}</span><h3 className="mt-8 font-display text-xl font-bold">{item.title}</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.text}</p></article>)}</div></div>
    </section>
  );
}

function ValueSection() {
  return (
    <section className="section-space dark-grid text-primary-foreground">
      <div className="page-container grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
        <div><span className="eyebrow eyebrow-dark">Think beyond cost per email</span><h2 className="section-title mt-5">What is a predictable meeting engine worth to your business?</h2><p className="mt-5 max-w-2xl leading-relaxed text-ink-muted">The useful question is not how cheaply an email can be sent. It is what consistent access to the right buyers can create when your team has a strong offer and a sales process ready to convert demand.</p></div>
        <div className="border border-ink-border bg-ink-card p-7 sm:p-9"><TrendingUp className="h-8 w-8 text-brand-light" /><p className="mt-8 text-xs font-bold uppercase text-ink-muted">Evaluate the engine against</p><ul className="mt-6 space-y-4">{["Your average client value", "Your current cost to create a sales opportunity", "The time your team spends managing outbound", "The pipeline value of 10 qualified appointments"].map((item) => <li key={item} className="flex gap-3 text-sm"><Check className="h-5 w-5 shrink-0 text-brand-light" />{item}</li>)}</ul></div>
      </div>
    </section>
  );
}

function FitSection() {
  return (
    <section className="section-space bg-background">
      <div className="page-container grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><span className="eyebrow">Built for the right offer</span><h2 className="section-title mt-5">This engine is not for everyone.</h2><p className="mt-5 leading-relaxed text-muted-foreground">It is designed for businesses prepared to turn qualified conversations into revenue—not teams looking for another passive software subscription.</p></div><div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">{["You sell a clear B2B offer", "Your team can take sales calls", "You know the buyers you want to reach", "You want outbound managed end to end"].map((item) => <div key={item} className="flex min-h-32 items-start gap-4 bg-soft p-6"><CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><p className="font-semibold leading-relaxed">{item}</p></div>)}</div></div>
    </section>
  );
}

function IncludedRecapSection() {
  return (
    <section className="section-space bg-soft">
      <div className="page-container"><div className="grid gap-8 lg:grid-cols-2"><div><span className="eyebrow">The complete system</span><h2 className="section-title mt-5">Everything required to operate at scale.</h2></div><p className="max-w-xl self-end leading-relaxed text-muted-foreground">The offer combines infrastructure, data, automation, creative strategy, and ongoing management under one engagement.</p></div><div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{inclusions.map((item) => <div key={item.title} className="flex items-center gap-3 border border-border bg-card p-4"><Check className="h-5 w-5 shrink-0 text-primary" /><span className="text-sm font-semibold">{item.title}</span></div>)}</div><div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-border pt-8 sm:flex-row sm:items-center"><p className="max-w-2xl font-display text-xl font-bold">Ready to see whether the 100K GTM Email Engine fits your offer?</p><CtaButton>Book a Strategy Call</CtaButton></div></div>
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
  return <footer className="border-t border-ink-border bg-ink py-10 text-primary-foreground"><div className="page-container flex flex-col justify-between gap-7 sm:flex-row sm:items-center"><div><Logo inverse /><p className="mt-3 text-sm text-ink-muted">We build brands. We build systems. We build growth.</p></div><div className="flex flex-wrap gap-6 text-sm text-ink-muted"><a href="#system">The System</a><a href="#process">Process</a><a href="#investment">Investment</a><a href="#faq">FAQ</a><a href="#strategy-call" className="inline-flex items-center gap-1 text-brand-light">Book a call <ArrowUpRight className="h-4 w-4" /></a></div></div></footer>;
}

function HomePage() {
  return <main className="min-h-screen overflow-x-hidden"><Header /><Hero /><OutcomeStrip /><CapabilityStrip /><ProblemSection /><PipelineSection /><IncludedSection /><EnginePillarsSection /><OldWaySection /><InfrastructureSection /><AiWorkflowSection /><ProcessSection /><CommitmentSection /><RoadmapSection /><ValueSection /><InvestmentSection /><FitSection /><IncludedRecapSection /><FaqSection /><FinalCta /><Footer /></main>;
}