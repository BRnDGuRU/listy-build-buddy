import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Bot,
  BriefcaseBusiness,
  Building2,
  Calendar,
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
  Star,
  Target,
  TrendingUp,
  Users,
  X,
  XCircle,
  Zap,
} from "lucide-react";
import { useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import brndGuruLogo from "@/assets/brndguru-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BRND GURU — 100K Email GTM Engine™ | Done-For-You B2B Infrastructure" },
      { name: "description", content: "We build your 100K outbound email GTM engine and run it every day. Lead intelligence, deliverability, AI replies, and revenue reporting — 10 qualified B2B appointments every quarter or we keep working for free." },
      { property: "og:title", content: "BRND GURU — 100K Email GTM Engine™" },
      { property: "og:description", content: "Your complete outbound email GTM engine, built and run for you every day. 10 qualified B2B appointments every quarter — or we keep working for free." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const inclusions = [
  { icon: Mail, title: "100K Email Infrastructure", text: "Up to 100,000 outbound emails every month through dedicated, multi-domain infrastructure." },
  { icon: CalendarCheck, title: "100K Email Credits", text: "100,000 verified email credits supplied every month to power your outreach campaigns." },
  { icon: Bot, title: "AI Lead Scraping Agent", text: "Autonomous agent discovers, enriches, and validates highly targeted decision-makers." },
  { icon: MessageSquareText, title: "AI Lead Reply Agent", text: "Classifies incoming replies instantly and routes qualified interest to your calendar." },
  { icon: Database, title: "8 Million B2B Leads", text: "Instant access to a curated database of 8M+ verified executive contacts." },
  { icon: BriefcaseBusiness, title: "Agency Owners Kit", text: "50,000+ pre-verified agency-owner leads for high-ticket outbound campaigns." },
  { icon: Building2, title: "USA Local Business Leads", text: "Targetable database of high-intent US local service business owners." },
  { icon: ShieldCheck, title: "GTM Scripting & Angles", text: "Conversion-engineered cold email copy, value offers, and multi-touch sequences." },
  { icon: Settings2, title: "Full Campaign Management", text: "End-to-end setup, daily monitoring, A/B testing, and weekly performance optimization." },
  { icon: Users, title: "Lead Cleaning & Enrichment", text: "Zero bounce rate filtering, syntax validation, and ICP segmentation." },
  { icon: ServerCog, title: "Deliverability Engine", text: "Continuous inbox warmup, SPF/DKIM/DMARC records, sender rotation, and spam defense." },
];

const steps = [
  { number: "01", title: "Build the Foundation", text: "We define your ICP, secure pristine domains, configure secondary inboxes, and warm up sending capacity." },
  { number: "02", title: "Launch Outreach", text: "We activate targeted campaigns using high-converting GTM scripts and automated multi-channel sequences." },
  { number: "03", title: "AI Reply Optimization", text: "Our AI agents and operators classify replies in real-time, handle objections, and nurture positive interest." },
  { number: "04", title: "Book Appointments", text: "Qualified opportunities land directly on your calendar. You show up, run the call, and close deals." },
];

const enginePillars = [
  { number: "01", icon: ServerCog, title: "Sending Infrastructure", text: "Domains, inboxes, DNS records, warmup, rotation, and sending capacity configured and operated as one unified engine." },
  { number: "02", icon: Target, title: "Targeted Lead Supply", text: "Prospects sourced, filtered, verified, and enriched around the high-value buyers your offer is specifically built to serve." },
  { number: "03", icon: Sparkles, title: "Campaign Intelligence", text: "GTM scripts, value angles, testing variations, and deliverability dials continuously refined using live market response data." },
  { number: "04", icon: MessageSquareText, title: "Reply to Meeting", text: "Replies classified instantly and managed so qualified conversations turn into booked appointments without friction." },
];

const roadmap = [
  { phase: "Days 1–15", title: "Strategy & Setup", text: "Define ICP, prepare verified lead segments, secure domains, configure inboxes, and write the initial campaign angles." },
  { phase: "Days 16–30", title: "Warmup & Launch", text: "Complete infrastructure deliverability checks, warm sending domains, validate contact data, and launch initial cohorts." },
  { phase: "Days 31–60", title: "Optimize & Iterate", text: "Review reply rates and deliverability, refine messaging angles, dial in targeting, and scale high-performing segments." },
  { phase: "Days 61–90", title: "Scale Pipeline", text: "Operate at peak sending capacity while routing consistent, qualified decision-makers straight to your sales team." },
];

const faqs = [
  { question: "What does the 100K number mean?", answer: "The system is engineered with capacity for up to 100,000 outbound emails each month across dedicated inboxes, backed by 100,000 monthly email credits." },
  { question: "What result do you commit to?", answer: "We commit to generating 10 high-qualified B2B appointments within 90 days, or we continue running and optimizing the engine for free until we deliver." },
  { question: "What does my team need to manage?", answer: "Nothing on the outbound side. We manage the infrastructure, prospect data, copy, warmup, sending, and reply routing. You only focus on attending calls and closing." },
  { question: "What is due on day one?", answer: "The day-one investment is $2,149: $649 one-time activation, $750 annual domains setup, and your first month of running infrastructure ($750)." },
  { question: "What does it cost after launch?", answer: "The $297/month management fee begins at day 30. From month two onward, your recurring investment is $1,047 per month covering all infrastructure and active management." },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Top Banner Marquee */}
      <div className="relative overflow-hidden border-b border-ember/15 bg-ember/[0.06] py-2">
        <div className="animate-marquee flex w-max items-center">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex items-center gap-2.5 px-8 whitespace-nowrap">
              <Zap className="size-3.5 shrink-0 text-ember" />
              <span className="font-display text-[11px] font-bold tracking-[0.16em] text-mist uppercase">
                Early-Bird Pricing Ends Soon:
              </span>
              <span className="font-display text-[11px] font-black tracking-[0.12em] text-ember-bright tabular-nums">
                LIMITED SPOTS AVAILABLE
              </span>
              <span className="text-ember/40">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-50 border-b border-line/50 bg-ink/75 backdrop-blur-xl transition-all duration-300">
        <div className="page-container flex h-16 items-center justify-between gap-4">
          <a href="#top" className="flex shrink-0 items-center gap-2.5" aria-label="Brnd Guru home">
            <img src={brndGuruLogo.url} alt="Brnd Guru logo" className="size-8 object-contain" />
            <span className="flex flex-col leading-none">
              <span className="font-display text-sm font-bold tracking-wide text-mist">BRND GURU</span>
              <span className="mt-1 text-[9px] font-semibold tracking-[0.24em] text-ember uppercase">
                GTM Infrastructure
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {[
              ["Why GTM Engine", "#why"],
              ["How It Works", "#how"],
              ["What's Included", "#included"],
              ["Results", "#results"],
              ["Pricing", "#pricing"],
              ["FAQ", "#faq"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="group relative rounded-lg px-3.5 py-2 font-display text-[13px] font-semibold tracking-wide whitespace-nowrap text-mist-dim transition-colors hover:text-mist"
              >
                {label}
                <span className="absolute right-3.5 bottom-1 left-3.5 h-px scale-x-0 bg-ember transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <a
              href="#pricing"
              className="group hidden sm:inline-flex items-center justify-center gap-2 rounded-xl font-display text-[11px] font-bold uppercase tracking-wide whitespace-nowrap px-4 py-2 text-ink glow-ember btn-sheen bg-gradient-to-r from-ember to-ember-bright transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0"
            >
              Book Your Strategy Call
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="border-line bg-panel/80 text-mist hover:bg-panel lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </Button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-line bg-ink/95 px-5 py-5 backdrop-blur-2xl lg:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col gap-4">
              {[
                ["Why GTM Engine", "#why"],
                ["How It Works", "#how"],
                ["What's Included", "#included"],
                ["Results", "#results"],
                ["Pricing", "#pricing"],
                ["FAQ", "#faq"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="font-display text-sm font-semibold text-mist-dim hover:text-mist"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              ))}
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl py-3 font-display text-xs font-bold uppercase tracking-wide text-ink glow-ember bg-gradient-to-r from-ember to-ember-bright"
              >
                Book Your Strategy Call <ArrowRight className="size-4" />
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24">
      {/* Glow Mesh Gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 480px at 15% -5%, rgba(192, 132, 252, 0.12), transparent 60%), radial-gradient(800px 420px at 85% 0%, rgba(56, 189, 248, 0.10), transparent 60%), radial-gradient(700px 500px at 50% 45%, rgba(255, 85, 0, 0.08), transparent 65%)",
        }}
      />
      {/* Grid Pattern Backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
          backgroundSize: "76px 76px",
          maskImage: "radial-gradient(ellipse 90% 65% at 50% 0%, black 25%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 65% at 50% 0%, black 25%, transparent 80%)",
        }}
      />

      <div className="page-container relative flex flex-col items-center text-center">
        {/* Eyebrow Pill */}
        <div>
          <span className="glass-soft inline-flex max-w-full items-center gap-2 rounded-full border-ember/25 px-4 py-2 text-center font-display text-[10px] sm:text-xs md:text-[13px] font-bold tracking-[0.16em] text-mist uppercase">
            <Rocket className="size-4 shrink-0 text-ember" />
            You Don&apos;t Need More Software. You Need More Meetings.
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="font-hero mt-7 max-w-[68rem] text-[2.35rem] leading-[1.14] font-black tracking-tight text-mist sm:text-[3.25rem] sm:leading-[1.08] md:text-6xl lg:text-7xl">
          We Build Your{" "}
          <span className="inline rounded-xl bg-gradient-to-r from-ember to-ember-bright box-decoration-clone px-2.5 py-0.5 text-ink sm:rounded-2xl sm:px-3.5 sm:py-1 md:px-4 md:py-1.5 font-black">
            100K Email GTM Engine
          </span>{" "}
          And Run It Every Day — So You Stop Losing Pipeline to{" "}
          <span className="text-gradient-ember font-black">Guesswork.</span>
        </h1>

        {/* Subhead */}
        <p className="mt-6 max-w-2xl text-base leading-[1.75] text-mist-dim md:text-lg">
          One partner builds your complete outbound email infrastructure — targeting, lead supply, campaigns, AI reply workflows, and revenue reporting —{" "}
          <span className="font-medium text-mist">then runs it for you, every single day.</span>
        </p>

        {/* Commitment Banner Card */}
        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-success/25 bg-success/5 px-5 py-3.5 backdrop-blur-sm">
          <CircleCheck className="size-5 shrink-0 text-success" />
          <p className="text-left text-sm md:text-base">
            <span className="font-display font-bold text-mist">10 Qualified B2B Appointments Every Quarter</span>
            <span className="block text-xs text-mist-dim md:text-sm">Or we keep working on the engine until we deliver.</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#pricing"
            className="group inline-flex items-center justify-center gap-2.5 rounded-xl px-7 py-3.5 font-display text-sm md:text-base font-bold uppercase tracking-wide transition-all duration-300 text-ink glow-ember btn-sheen bg-gradient-to-r from-ember to-ember-bright hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0"
          >
            <Calendar className="size-4" />
            Book Your Strategy Call
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#how"
            className="group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-display text-sm md:text-base font-semibold tracking-wide transition-all duration-300 glass-soft text-mist hover:-translate-y-0.5 hover:border-white/20 hover:bg-panel active:translate-y-0"
          >
            See How We Run It
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Trust Badges */}
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {["Setup in 7–14 Days", "Done-for-you execution", "No long-term lock-in", "Cancel anytime"].map((badge) => (
            <li key={badge} className="flex items-center gap-1.5 text-xs text-mist-dim sm:text-sm">
              <CircleCheck className="size-3.5 text-success" />
              {badge}
            </li>
          ))}
        </ul>

        {/* Command Center Floating Live Preview */}
        <div className="mt-12 w-full max-w-5xl animate-float">
          <div className="glass overflow-hidden rounded-2xl shadow-card text-left">
            {/* Window Header */}
            <div className="flex items-center justify-between border-b border-line bg-panel px-4 py-3">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-danger/60" />
                <span className="size-2.5 rounded-full bg-ember/60" />
                <span className="size-2.5 rounded-full bg-success/60" />
              </div>
              <div className="glass-soft mx-auto flex max-w-xs sm:max-w-md flex-1 items-center justify-center gap-2 rounded-lg px-3 py-1 text-center">
                <span className="truncate text-[11px] tracking-wide text-mist-dim font-mono">
                  emailengine.brndguru.com/command-center
                </span>
              </div>
              <span className="flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-widest text-success uppercase">
                <span className="size-1.5 animate-pulse rounded-full bg-success" />
                Live
              </span>
            </div>

            <div className="border-b border-line px-5 py-3">
              <p className="font-display text-xs font-semibold tracking-[0.2em] text-mist-dim uppercase">
                BRND GURU 100K Email Engine — Command Center
              </p>
            </div>

            {/* Dashboard Content */}
            <div className="p-4 md:p-6">
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                <div className="glass-soft rounded-xl p-4">
                  <p className="text-[11px] tracking-wide text-mist-dim">Dedicated Inboxes</p>
                  <div className="mt-1.5 flex items-baseline gap-2">
                    <span className="font-display text-2xl font-bold text-infra">50</span>
                    <span className="text-[11px] font-semibold text-success">+100%</span>
                  </div>
                  <p className="mt-0.5 text-[10px] text-mist-dim/70">Warmed & Rotated</p>
                </div>

                <div className="glass-soft rounded-xl p-4">
                  <p className="text-[11px] tracking-wide text-mist-dim">Outbound Sent / Mo</p>
                  <div className="mt-1.5 flex items-baseline gap-2">
                    <span className="font-display text-2xl font-bold text-ai-bright">100,000</span>
                    <span className="text-[11px] font-semibold text-success">99.4% Deliv.</span>
                  </div>
                  <p className="mt-0.5 text-[10px] text-mist-dim/70">High Inbox Placement</p>
                </div>

                <div className="glass-soft rounded-xl p-4">
                  <p className="text-[11px] tracking-wide text-mist-dim">Positive Replies</p>
                  <div className="mt-1.5 flex items-baseline gap-2">
                    <span className="font-display text-2xl font-bold text-ember">1,420</span>
                    <span className="text-[11px] font-semibold text-success">+19%</span>
                  </div>
                  <p className="mt-0.5 text-[10px] text-mist-dim/70">AI Classified & Handled</p>
                </div>

                <div className="glass-soft rounded-xl p-4">
                  <p className="text-[11px] tracking-wide text-mist-dim">Meetings Booked</p>
                  <div className="mt-1.5 flex items-baseline gap-2">
                    <span className="font-display text-2xl font-bold text-success">38</span>
                    <span className="text-[11px] font-semibold text-success">+15%</span>
                  </div>
                  <p className="mt-0.5 text-[10px] text-mist-dim/70">Qualified V2P Decision Makers</p>
                </div>
              </div>

              {/* Status bar */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line bg-panel/60 px-4 py-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4 text-ai-bright" />
                  <span className="text-xs font-semibold text-mist">AI Reply Agent & Delivery Daemon</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-success animate-pulse" />
                  <span className="text-xs font-semibold text-success">Engine Status: Active & Sending</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OutcomeStrip() {
  return (
    <section className="relative border-y border-line bg-panel py-6">
      <div className="page-container grid grid-cols-1 gap-6 sm:grid-cols-3">
        {[
          ["100,000", "Monthly Outbound Sending Capacity"],
          ["10 Guaranteed", "Qualified B2B Appointments / Qtr"],
          ["7–14 Days", "From Onboarding to Live Sending"],
        ].map(([value, label]) => (
          <div key={label} className="text-center">
            <strong className="font-display text-3xl font-bold text-gradient-ember md:text-4xl">{value}</strong>
            <span className="mt-1 block font-display text-xs font-semibold tracking-wider text-mist-dim uppercase">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function SocialProofStrip() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-ink py-10">
      <div className="page-container flex flex-col items-center gap-5 text-center">
        <p className="font-display text-lg font-bold text-mist md:text-xl">Built for B2B teams that live on qualified pipeline</p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-mist-dim sm:text-sm">
          <span className="flex items-center gap-1.5">
            <Star className="size-4 fill-ember text-ember" />
            4.9/5 Client Satisfaction
          </span>
          <span className="flex items-center gap-1.5">
            <BadgeCheck className="size-4 text-success" />
            10 Appointments / Quarter Guarantee
          </span>
          <a href="#how" className="flex items-center gap-1 text-mist transition-colors hover:text-ember">
            Explore System Architecture <ArrowRight className="size-3.5" />
          </a>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
          {["B2B SaaS", "Professional Services", "Consulting Firms", "Agencies", "Fractional Executives", "Enterprise Tech"].map((industry) => (
            <span
              key={industry}
              className="rounded-full border border-line/70 bg-panel/60 px-4 py-1.5 font-display text-xs font-semibold text-mist/80"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section id="why" className="section-space relative bg-ink">
      <div className="page-container grid gap-12 lg:grid-cols-[.85fr_1.15fr] items-center">
        <div>
          <span className="eyebrow">The Outbound Dilemma</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-mist mt-5">
            Your offer isn&apos;t the problem. Your outbound system is.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mist-dim">
            Most companies juggle 5+ separate software subscriptions, manual prospect scraping, burned domains, and delayed reply handling. The result is erratic pipeline and wasted budget.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Fragmented software tools without an operator",
            "Burned domain reputations & spam folder traps",
            "Generic templates that get ignored by decision-makers",
            "High-intent replies slipping through the cracks",
          ].map((item) => (
            <div key={item} className="glass-soft rounded-xl p-6 flex flex-col justify-between border border-line">
              <XCircle className="size-6 text-danger shrink-0 mb-4" />
              <p className="font-semibold text-mist leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IncludedSection() {
  return (
    <section id="included" className="section-space relative dark-grid">
      <div className="page-container">
        <div className="max-w-3xl">
          <span className="eyebrow">Everything Included</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-mist mt-5">
            One engine. Every moving piece managed end-to-end.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mist-dim">
            Data, infrastructure, campaigns, AI reply agents, and deliverability dials operate as one managed growth system.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {inclusions.map((item) => (
            <article
              key={item.title}
              className="glass rounded-xl p-6 transition-all duration-300 hover:border-ember/40 hover:-translate-y-1"
            >
              <item.icon className="size-6 text-ember" />
              <h3 className="mt-6 font-display text-base font-bold text-mist">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-dim">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnginePillarsSection() {
  return (
    <section id="how" className="section-space relative bg-ink">
      <div className="page-container">
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] items-end">
          <div>
            <span className="eyebrow">Four Pillars. One Goal.</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-mist mt-5">
              A dependable pipeline of high-intent sales conversations.
            </h2>
          </div>
          <p className="text-mist-dim text-base leading-relaxed">
            Every layer powers the next: pristine infrastructure protects deliverability, verified data sharpens targeting, engineered scripts drive replies, and AI response routing books meetings.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {enginePillars.map((pillar) => (
            <article key={pillar.number} className="glass rounded-2xl p-7 sm:p-9 border border-line">
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-bold text-ember">{pillar.number}</span>
                <pillar.icon className="size-6 text-ember" />
              </div>
              <h3 className="mt-8 font-display text-2xl font-bold text-mist">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist-dim">{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="section-space relative dark-grid">
      <div className="page-container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">The 4-Step Process</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-mist mt-5">
            From cold list to booked appointment.
          </h2>
          <p className="mt-4 text-mist-dim text-base">
            We handle the technical and operational heavy lifting so your sales team stays focused on closing.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-4">
          {steps.map((step) => (
            <article key={step.number} className="glass-soft rounded-2xl p-6 border border-line flex flex-col justify-between">
              <span className="font-display text-base font-bold text-ember">{step.number}</span>
              <div className="mt-8">
                <h3 className="font-display text-xl font-bold text-mist">{step.title}</h3>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-mist-dim">{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommitmentSection() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-r from-ember/90 to-ember-bright text-ink">
      <div className="page-container grid items-center gap-10 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <p className="font-display text-xs font-black uppercase tracking-[0.2em] text-ink/80">
            Our Performance Guarantee
          </p>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl lg:text-6xl font-black leading-tight text-ink">
            10 High-Qualified B2B Appointments in 90 Days.
          </h2>
          <p className="mt-4 text-base font-medium text-ink/90">
            We build and run the entire outbound engine. If we don&apos;t hit the target, we keep working for free.
          </p>
        </div>
        <ul className="space-y-4 border-t border-ink/20 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          {[
            "We engineer and operate the entire system",
            "You receive qualified decision-maker calls",
            "You show up, present your offer, and close",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 font-display font-bold text-base text-ink">
              <Check className="size-5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function RoadmapSection() {
  return (
    <section className="section-space relative bg-ink">
      <div className="page-container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">The 90-Day Trajectory</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-mist mt-5">
            From zero to an autonomous meeting pipeline.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {roadmap.map((item) => (
            <article key={item.phase} className="glass rounded-2xl p-7 border border-line">
              <span className="font-display text-xs font-bold uppercase text-ember">{item.phase}</span>
              <h3 className="mt-5 font-display text-xl font-bold text-mist">{item.title}</h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-mist-dim">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function InvestmentSection() {
  return (
    <section id="pricing" className="section-space relative dark-grid">
      <div className="page-container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Transparent Pricing</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-mist mt-5">
            Built once. Managed every single month.
          </h2>
          <p className="mt-4 text-mist-dim text-base">
            All costs and deliverability resources are clear from day one.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-2xl border border-line bg-panel lg:grid-cols-[1.2fr_.8fr]">
          <div className="divide-y divide-line p-6 sm:p-9">
            {[
              [Rocket, "GTM Engine Activation", "One-time setup & strategy", "$649"],
              [Globe2, "Dedicated Domains & DNS", "Annual infrastructure", "$750"],
              [Mail, "Running Infrastructure & Credits", "Monthly high-volume sending", "$750"],
              [Settings2, "Daily Management & Optimization", "Monthly managed service", "$297"],
            ].map(([Icon, title, cadence, price]) => {
              const ItemIcon = Icon as typeof Rocket;
              return (
                <div key={String(title)} className="flex items-center gap-4 py-5 first:pt-0 last:pb-0">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-ember/10 text-ember">
                    <ItemIcon className="size-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <strong className="block font-display text-base font-bold text-mist">{String(title)}</strong>
                    <span className="text-xs text-mist-dim">{String(cadence)}</span>
                  </div>
                  <strong className="font-display text-xl font-bold text-ember">{String(price)}</strong>
                </div>
              );
            })}
          </div>

          <div className="border-t border-line bg-ink-elevated p-7 sm:p-10 lg:border-l lg:border-t-0 flex flex-col justify-between">
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-wider text-mist-dim">
                Day-One Investment
              </p>
              <strong className="mt-2 block font-display text-5xl font-black text-mist">$2,149</strong>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-mist-dim">
                Activation, annual domains, and your first month of running sending infrastructure.
              </p>

              <div className="my-6 border-t border-line" />

              <p className="font-display text-xs font-bold uppercase tracking-wider text-mist-dim">
                Month Two Onward
              </p>
              <strong className="mt-2 block font-display text-3xl font-black text-gradient-ember">
                $1,047 / month
              </strong>
              <p className="mt-2 text-xs text-mist-dim">
                Includes full infrastructure + management.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#top"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl py-3.5 font-display text-sm font-bold uppercase tracking-wide text-ink glow-ember btn-sheen bg-gradient-to-r from-ember to-ember-bright"
              >
                Book Your Strategy Call <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-3xl rounded-xl border border-line bg-panel/60 p-4 text-center text-xs sm:text-sm text-mist-dim">
          <CircleCheck className="mr-2 inline size-4 text-success" />
          The $297 management fee begins at day 30. Backed by our 90-day 10-appointment guarantee.
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="section-space relative bg-ink">
      <div className="page-container grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
        <div>
          <span className="eyebrow">Common Questions</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-mist mt-5">
            Everything you need to know.
          </h2>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {faqs.map((item) => (
            <details key={item.question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold text-mist">
                <span>{item.question}</span>
                <ChevronDown className="size-5 shrink-0 text-ember transition-transform group-open:rotate-180" />
              </summary>
              <p className="max-w-2xl pt-4 text-sm leading-relaxed text-mist-dim">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24 dark-grid">
      <div className="page-container text-center">
        <CalendarCheck className="mx-auto size-12 text-ember" />
        <p className="font-display mt-6 text-sm font-bold uppercase tracking-[0.2em] text-ember">
          Your Pipeline, Engineered for Certainty
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl sm:text-6xl font-black text-mist leading-tight">
          Stop managing tools. Start taking qualified meetings.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-mist-dim">
          Book a 30-minute strategy call to review how the 100K GTM Email Engine connects to your target audience.
        </p>
        <div className="mt-8">
          <a
            href="#top"
            className="inline-flex items-center justify-center gap-2.5 rounded-xl px-8 py-4 font-display text-sm md:text-base font-bold uppercase tracking-wide text-ink glow-ember btn-sheen bg-gradient-to-r from-ember to-ember-bright hover:-translate-y-0.5"
          >
            <Calendar className="size-4" />
            Book Your Strategy Call
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line bg-ink py-10 text-mist">
      <div className="page-container flex flex-col justify-between gap-7 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={brndGuruLogo.url} alt="Brnd Guru logo" className="size-7 object-contain" />
            <span className="font-display text-sm font-bold tracking-wide text-mist">BRND GURU</span>
          </div>
          <p className="mt-2 text-xs text-mist-dim">
            © 2026 BRND GURU. All rights reserved. GTM Infrastructure & Outbound Systems.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-xs font-display font-semibold text-mist-dim">
          <a href="#why" className="hover:text-mist">Why GTM Engine</a>
          <a href="#how" className="hover:text-mist">How It Works</a>
          <a href="#pricing" className="hover:text-mist">Pricing</a>
          <a href="#faq" className="hover:text-mist">FAQ</a>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-ink text-mist font-body">
      <Header />
      <Hero />
      <OutcomeStrip />
      <SocialProofStrip />
      <ProblemSection />
      <IncludedSection />
      <EnginePillarsSection />
      <ProcessSection />
      <CommitmentSection />
      <RoadmapSection />
      <InvestmentSection />
      <FaqSection />
      <FinalCta />
      <Footer />
    </main>
  );
}