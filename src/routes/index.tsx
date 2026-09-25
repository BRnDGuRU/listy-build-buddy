import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Building2,
  Calendar,
  CalendarCheck,
  Check,
  ChevronDown,
  CircleCheck,
  Cpu,
  Database,
  Globe2,
  Layers,
  Mail,
  Menu,
  MessageSquareText,
  Quote,
  Rocket,
  Send,
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
import { useEffect, useRef, useState, type ReactNode } from "react";

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

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-[2.5px] bg-transparent">
      <div
        className="h-full origin-left bg-gradient-to-r from-primary via-amber-500 to-brand-light shadow-[0_0_10px_rgba(255,107,0,0.8)] transition-all duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
  scale = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  scale?: boolean;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${scale ? "reveal-scale" : "reveal"} ${isVisible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

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

const volumeTiers = [
  { volume: "25,000", inboxes: 25, leads: "15,000", meetings: "5–8", label: "25k / mo" },
  { volume: "50,000", inboxes: 50, leads: "30,000", meetings: "8–12", label: "50k / mo" },
  { volume: "100,000", inboxes: 100, leads: "60,000", meetings: "10–20", label: "100k / mo" },
  { volume: "150,000", inboxes: 150, leads: "90,000", meetings: "20–35", label: "150k / mo" },
  { volume: "200,000", inboxes: 200, leads: "120,000", meetings: "35–50+", label: "200k / mo" },
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
    <Button asChild size="lg" variant={inverse ? "secondary" : "default"} className="h-12 rounded-xl px-7 font-display font-bold shadow-soft transition-all duration-300 hover:-translate-y-0.5">
      <a href="#strategy-call">{children}<ArrowRight className="size-4" /></a>
    </Button>
  );
}

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#top" className={`flex items-center gap-2.5 ${inverse ? "text-primary-foreground" : "text-foreground"}`} aria-label="Brnd Guru home">
      <img src={brndGuruLogo.url} alt="Brnd Guru logo" className="size-8 shrink-0 rounded-lg object-contain md:size-9" width="36" height="36" />
      <div className="min-w-0 leading-none">
        <p className="truncate font-display text-sm font-extrabold leading-tight tracking-tight sm:text-base md:text-lg">
          Brnd Guru <span className="hidden text-brand-light sm:inline">100K GTM</span>
        </p>
        <p className="hidden truncate text-[9px] tracking-wide text-ink-muted sm:block">The Outbound Engine for B2B</p>
      </div>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-ink-border bg-ink/85 backdrop-blur-xl transition-all duration-300">
      <div className="page-container flex items-center justify-between gap-4 py-3 md:py-3.5">
        <Logo inverse />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          <a className="text-sm font-semibold text-ink-muted hover:text-primary-foreground transition-colors" href="#system">The System</a>
          <a className="text-sm font-semibold text-ink-muted hover:text-primary-foreground transition-colors" href="#calculator">ROI Calculator</a>
          <a className="text-sm font-semibold text-ink-muted hover:text-primary-foreground transition-colors" href="#process">Process</a>
          <a className="text-sm font-semibold text-ink-muted hover:text-primary-foreground transition-colors" href="#investment">Pricing</a>
          <a className="text-sm font-semibold text-ink-muted hover:text-primary-foreground transition-colors" href="#faq">FAQ</a>
        </nav>
        <div className="flex shrink-0 items-center gap-3">
          <Button asChild size="sm" className="hidden sm:inline-flex rounded-full bg-primary px-5 py-2 text-xs sm:text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-200 hover:scale-[1.03]">
            <a href="#strategy-call">Book a Call →</a>
          </Button>
          <Button type="button" variant="outline" size="icon" className="size-9 rounded-lg border-ink-border bg-ink-card text-primary-foreground hover:bg-ink-elevated hover:text-primary-foreground lg:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation">
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-ink-border bg-ink/95 backdrop-blur-xl px-5 py-5 lg:hidden animate-in fade-in slide-in-from-top-2 duration-200" aria-label="Mobile navigation">
          <div className="flex flex-col gap-4">
            {[['The System', '#system'], ['ROI Calculator', '#calculator'], ['Process', '#process'], ['Pricing', '#investment'], ['FAQ', '#faq']].map(([label, href]) => (
              <a key={label} className="text-sm font-semibold text-ink-muted hover:text-primary-foreground transition-colors" href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
            <div className="pt-2">
              <Button asChild size="lg" className="w-full rounded-xl bg-primary font-semibold text-primary-foreground shadow-soft">
                <a href="#strategy-call" onClick={() => setOpen(false)}>Book a Call →</a>
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="dark-grid relative overflow-hidden border-b border-ink-border py-12 text-primary-foreground sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,color-mix(in_oklab,var(--primary)_12%,transparent),transparent_48%)]" />
      <div className="page-container relative flex flex-col items-center text-center">
        {/* Eyebrow Pill */}
        <Reveal>
          <span className="eyebrow eyebrow-dark">
            <Rocket className="h-3.5 w-3.5 text-primary" /> You Don&apos;t Need More Software. You Need More Meetings.
          </span>
        </Reveal>
        
        {/* Main Headline */}
        <Reveal delay={100}>
          <h1 className="font-hero mt-7 max-w-6xl text-[clamp(2.7rem,7vw,6rem)] font-black leading-[1.08]">
            We Build Your <span className="inline-block rounded-xl sm:rounded-2xl bg-primary px-3 py-1 text-primary-foreground sm:px-4">100K Email GTM</span>{" "}
            <span className="inline-block rounded-xl sm:rounded-2xl bg-primary px-3 py-1 text-primary-foreground sm:px-4">Engine</span> And Run It Every Day—So You Stop Losing Pipeline to <span className="text-brand-light">Guesswork.</span>
          </h1>
        </Reveal>

        {/* Subtitle */}
        <Reveal delay={200}>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink-muted sm:text-lg lg:text-xl">
            One partner builds your complete outbound email infrastructure—targeting, lead supply, campaigns, AI-assisted replies, and optimization—<strong className="text-primary-foreground font-semibold">then runs it for you, every single day.</strong>
          </p>
        </Reveal>

        {/* CTA Group */}
        <Reveal delay={250}>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <CtaButton>Book Your Strategy Call</CtaButton>
            <Button asChild variant="outline" size="lg" className="h-12 rounded-xl border-ink-border bg-ink-card px-6 font-display font-semibold text-primary-foreground hover:bg-ink-elevated hover:text-primary-foreground">
              <a href="#calculator">See How It Works ↘</a>
            </Button>
          </div>
        </Reveal>

        {/* Receptionist-Style Live Engine Feature Cards */}
        <div className="mt-14 grid w-full max-w-6xl gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: 100K Outbound Sending */}
          <Reveal delay={100}>
            <div className="h-full rounded-2xl border border-ink-border bg-ink-card/90 p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-2 py-0.5 text-[10px] font-semibold text-success">
                  <span className="size-1.5 rounded-full bg-success animate-pulse" /> Live Sending
                </span>
                <Mail className="size-4 text-primary" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-primary-foreground">100K Outbound / Mo</h3>
              <p className="mt-1 text-xs text-ink-muted">50 inboxes warmed and rotated with zero spam friction.</p>
              <div className="mt-4 rounded-lg border border-ink-border bg-ink-elevated p-2.5">
                <span className="text-[10px] text-ink-muted block">Current Status</span>
                <strong className="text-xs font-semibold text-brand-light font-display">99.4% Inbox Placement</strong>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Books Appointments Mid-Campaign */}
          <Reveal delay={200}>
            <div className="h-full rounded-2xl border border-ink-border bg-ink-card/90 p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-brand-light font-display">
                  Automated
                </span>
                <CalendarCheck className="size-4 text-primary" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-primary-foreground">Books Qualified Calls</h3>
              <p className="mt-1 text-xs text-ink-muted">Synced live to your calendar. You just show up and sell.</p>
              <div className="mt-4 rounded-lg border border-ink-border bg-ink-elevated p-2.5">
                <span className="text-[10px] text-ink-muted block">Next Booking</span>
                <strong className="text-xs font-semibold text-success font-display">Thu · 2:00 PM (VP Growth)</strong>
              </div>
            </div>
          </Reveal>

          {/* Card 3: 24/7 AI Reply Agent */}
          <Reveal delay={300}>
            <div className="h-full rounded-2xl border border-ink-border bg-ink-card/90 p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-ai/30 bg-ai/10 px-2 py-0.5 text-[10px] font-semibold text-ai-bright font-display">
                  AI Powered
                </span>
                <Bot className="size-4 text-primary" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-primary-foreground">AI Reply Agent</h3>
              <p className="mt-1 text-xs text-ink-muted">Answers questions, handles objections, and routes intent.</p>
              <div className="mt-4 rounded-lg border border-ink-border bg-ink-elevated p-2.5">
                <span className="text-[10px] text-ink-muted italic">&ldquo;Interested! What are next steps?&rdquo;</span>
                <span className="mt-1 text-[10px] font-semibold text-primary block">→ Sent 15-min calendar link</span>
              </div>
            </div>
          </Reveal>

          {/* Card 4: 8M+ Verified Decision Makers */}
          <Reveal delay={400}>
            <div className="h-full rounded-2xl border border-ink-border bg-ink-card/90 p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-infra/30 bg-infra/10 px-2 py-0.5 text-[10px] font-semibold text-infra font-display">
                  Verified
                </span>
                <Database className="size-4 text-primary" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-primary-foreground">Triple-Verified Leads</h3>
              <p className="mt-1 text-xs text-ink-muted">Targeted B2B lists enriched with validated emails.</p>
              <div className="mt-4 rounded-lg border border-ink-border bg-ink-elevated p-2.5">
                <span className="text-[10px] text-ink-muted block">Target Decision-Makers</span>
                <strong className="text-xs font-semibold text-primary-foreground font-display">8M+ V2P Decision Makers</strong>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Guarantee Callout Strip (Receptionist Style) */}
        <Reveal delay={450}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 rounded-2xl border border-ink-border bg-ink-card/60 px-6 py-4 backdrop-blur-sm text-xs sm:text-sm text-ink-muted">
            <div className="flex items-center gap-2">
              <Zap className="size-4 text-primary" />
              <strong className="text-primary-foreground font-display">Live in 7–14 Days</strong>
            </div>
            <span className="text-ink-border hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <CircleCheck className="size-4 text-success" />
              <strong className="text-primary-foreground font-display">10 Guaranteed Appointments</strong>
            </div>
            <span className="text-ink-border hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-brand-light" />
              <strong className="text-primary-foreground font-display">100% Done-For-You</strong>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function VolumeSliderSection() {
  const [tierIndex, setTierIndex] = useState(2);
  const currentTier = volumeTiers[tierIndex];

  return (
    <section id="calculator" className="border-b border-ink-border bg-ink-card py-12 text-primary-foreground sm:py-16">
      <div className="page-container max-w-4xl">
        <Reveal>
          <div className="text-center">
            <span className="eyebrow eyebrow-dark">Interactive Pipeline Calculator</span>
            <h2 className="font-display mt-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              See What Managed Outbound Volume Delivers
            </h2>
            <p className="mt-2 text-sm sm:text-base text-ink-muted">
              Drag the slider to adjust monthly sending volume and view real-time engine capacity.
            </p>
          </div>
        </Reveal>

        {/* Slider Card */}
        <Reveal scale delay={150}>
          <div className="mt-8 rounded-2xl border border-ink-border bg-ink p-6 sm:p-8 shadow-card">
            <div className="flex items-center justify-between gap-4">
              <span className="font-display text-sm sm:text-base font-semibold text-ink-muted">Monthly Sending Volume</span>
              <span className="font-display text-xl sm:text-2xl font-bold text-primary tabular-nums">
                {currentTier.volume} <span className="text-xs font-normal text-ink-muted">emails/mo</span>
              </span>
            </div>

            <input
              type="range"
              min="0"
              max="4"
              step="1"
              value={tierIndex}
              onChange={(e) => setTierIndex(Number(e.target.value))}
              className="range-input"
              aria-label="Monthly sending volume slider"
            />

            <div className="mt-3 flex justify-between text-xs font-display font-medium text-ink-muted">
              {volumeTiers.map((t, idx) => (
                <button
                  key={t.label}
                  type="button"
                  onClick={() => setTierIndex(idx)}
                  className={`cursor-pointer transition-colors ${idx === tierIndex ? "font-bold text-primary" : "hover:text-primary-foreground"}`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Dynamic Metrics Row */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-ink-border pt-6 sm:grid-cols-4">
              <div className="rounded-xl border border-ink-border bg-ink-elevated p-4 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">Dedicated Inboxes</p>
                <strong className="mt-1 block font-display text-2xl font-bold text-primary-foreground">{currentTier.inboxes}</strong>
                <span className="text-[10px] text-ink-muted">Warmed & Rotated</span>
              </div>
              <div className="rounded-xl border border-ink-border bg-ink-elevated p-4 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">Verified Prospects</p>
                <strong className="mt-1 block font-display text-2xl font-bold text-brand-light">{currentTier.leads}</strong>
                <span className="text-[10px] text-ink-muted">Zero-Bounce Target</span>
              </div>
              <div className="rounded-xl border border-ink-border bg-ink-elevated p-4 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">Est. Booked Calls</p>
                <strong className="mt-1 block font-display text-2xl font-bold text-success">{currentTier.meetings}</strong>
                <span className="text-[10px] text-ink-muted">Per Quarter</span>
              </div>
              <div className="rounded-xl border border-ink-border bg-ink-elevated p-4 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">Management</p>
                <strong className="mt-1 block font-display text-2xl font-bold text-primary">100%</strong>
                <span className="text-[10px] text-ink-muted">Fully Done For You</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function LiveCommandCenterSection() {
  return (
    <section className="relative scroll-mt-24 border-b border-ink-border bg-ink px-4 py-16 md:py-20 text-primary-foreground">
      <div className="page-container">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow eyebrow-dark">
              <Activity className="size-3.5 text-primary" /> Real-Time Telemetry
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Live Command Center <br className="hidden sm:inline" />
              <span className="text-brand-light">Operating 24/7 For Your Pipeline</span>
            </h2>
            <p className="mt-4 text-base text-ink-muted sm:text-lg">
              Every inbox, reply, and calendar booking is tracked in real-time. Here is how your outbound engine operates daily.
            </p>
          </div>
        </Reveal>

        <Reveal scale delay={150}>
          <div className="mt-12 overflow-hidden rounded-3xl border border-ink-border bg-ink-card/90 shadow-2xl backdrop-blur-xl animate-float">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink-border bg-ink-elevated px-5 py-3.5">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-destructive/80" />
                <span className="size-3 rounded-full bg-warning/80" />
                <span className="size-3 rounded-full bg-success/80" />
                <span className="ml-2 rounded-lg border border-ink-border bg-ink px-3 py-1 font-mono text-[11px] text-ink-muted">
                  gtm.brndguru.com/command-center
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-2.5 py-1 text-xs font-semibold text-success">
                  <span className="size-2 rounded-full bg-success animate-pulse" /> Live Outbound Engine
                </span>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                <div className="rounded-2xl border border-ink-border bg-ink-elevated/70 p-4 transition-all hover:border-primary/40">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-ink-muted">Outbound Sent</span>
                    <Mail className="size-4 text-primary" />
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-display text-2xl font-black text-primary-foreground sm:text-3xl">84,290</span>
                    <span className="text-xs font-bold text-success">+14%</span>
                  </div>
                  <p className="mt-1 text-[11px] text-ink-muted">50 inboxes active</p>
                </div>

                <div className="rounded-2xl border border-ink-border bg-ink-elevated/70 p-4 transition-all hover:border-primary/40">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-ink-muted">Inbox Placement</span>
                    <ShieldCheck className="size-4 text-brand-light" />
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-display text-2xl font-black text-brand-light sm:text-3xl">99.4%</span>
                    <span className="text-xs font-bold text-success">Optimal</span>
                  </div>
                  <p className="mt-1 text-[11px] text-ink-muted">Zero spam friction</p>
                </div>

                <div className="rounded-2xl border border-ink-border bg-ink-elevated/70 p-4 transition-all hover:border-primary/40">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-ink-muted">Replies Classified</span>
                    <Bot className="size-4 text-ai-bright" />
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-display text-2xl font-black text-primary-foreground sm:text-3xl">1,420</span>
                    <span className="text-xs font-bold text-success">+22%</span>
                  </div>
                  <p className="mt-1 text-[11px] text-ink-muted">AI agent handled</p>
                </div>

                <div className="rounded-2xl border border-ink-border bg-ink-elevated/70 p-4 transition-all hover:border-primary/40">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-ink-muted">Meetings Booked</span>
                    <CalendarCheck className="size-4 text-success" />
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-display text-2xl font-black text-success sm:text-3xl">38</span>
                    <span className="text-xs font-bold text-success font-display">Target Exceeded</span>
                  </div>
                  <p className="mt-1 text-[11px] text-ink-muted">100% qualified V2P</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="rounded-2xl border border-ink-border bg-ink-elevated/50 p-5 lg:col-span-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-display text-xs font-bold uppercase tracking-wider text-primary-foreground">
                      Deliverability & Meeting Trajectory
                    </p>
                    <div className="flex items-center gap-4 text-xs text-ink-muted">
                      <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-primary" /> Outbound Volume</span>
                      <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-success" /> Booked Calls</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <svg viewBox="0 0 500 160" className="w-full h-40">
                      <defs>
                        <linearGradient id="primaryGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <line x1="0" y1="35" x2="500" y2="35" stroke="var(--color-ink-border)" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="0" y1="80" x2="500" y2="80" stroke="var(--color-ink-border)" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="0" y1="125" x2="500" y2="125" stroke="var(--color-ink-border)" strokeWidth="1" strokeDasharray="3 3" />
                      <path d="M0,140 L70,120 L140,110 L210,85 L280,70 L350,50 L420,40 L500,25 L500,160 L0,160 Z" fill="url(#primaryGradient)" />
                      <polyline points="0,140 70,120 140,110 210,85 280,70 350,50 420,40 500,25" fill="none" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" />
                      <polyline points="0,150 70,142 140,135 210,120 280,105 350,85 420,65 500,45" fill="none" stroke="var(--color-success)" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    <div className="flex justify-between text-[10px] text-ink-muted">
                      <span>Week 1</span>
                      <span>Week 2</span>
                      <span>Week 4</span>
                      <span>Week 6</span>
                      <span>Week 8</span>
                      <span>Week 10</span>
                      <span>Week 12</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-ink-border bg-ink-elevated/50 p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-display text-xs font-bold uppercase tracking-wider text-primary-foreground">Live Reply Stream</p>
                    <span className="size-2 rounded-full bg-success animate-pulse" />
                  </div>
                  <div className="mt-4 space-y-3">
                    <div className="rounded-xl border border-ink-border bg-ink-card p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-primary-foreground">VP Growth @ SaaS</span>
                        <span className="rounded bg-success/20 px-1.5 py-0.5 text-[9px] font-bold text-success">BOOKED</span>
                      </div>
                      <p className="mt-1 text-xs text-ink-muted line-clamp-1">&ldquo;Let&apos;s do Thursday 2pm. Looking forward to it.&rdquo;</p>
                    </div>
                    <div className="rounded-xl border border-ink-border bg-ink-card p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-primary-foreground">CEO @ B2B Agency</span>
                        <span className="rounded bg-primary/20 px-1.5 py-0.5 text-[9px] font-bold text-brand-light">INTERESTED</span>
                      </div>
                      <p className="mt-1 text-xs text-ink-muted line-clamp-1">&ldquo;Send over your calendar link and case studies.&rdquo;</p>
                    </div>
                    <div className="rounded-xl border border-ink-border bg-ink-card p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-primary-foreground">Head of Sales @ Tech</span>
                        <span className="rounded bg-ai/20 px-1.5 py-0.5 text-[9px] font-bold text-ai-bright">AI ROUTED</span>
                      </div>
                      <p className="mt-1 text-xs text-ink-muted line-clamp-1">&ldquo;Replied within 90s — qualifying pipeline intent.&rdquo;</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function OutcomeStrip() {
  return (
    <section className="border-y border-border bg-soft">
      <div className="page-container grid gap-px bg-border sm:grid-cols-3">
        {[
          ["100K", "monthly email capacity"],
          ["10", "guaranteed qualified appointments"],
          ["90 days", "result commitment"],
        ].map(([value, label]) => (
          <div key={label} className="bg-soft px-6 py-7 text-center transition-colors hover:bg-card">
            <strong className="font-display text-3xl font-bold text-primary">{value}</strong>
            <span className="mt-1 block text-xs font-semibold uppercase text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function CapabilityStrip() {
  const capabilities = [
    "Lead Intelligence",
    "Email Infrastructure",
    "GTM Scripting",
    "Reply Management",
    "Campaign Optimization",
    "Multi-Inbox Warmup",
    "AI Scraping Agent",
    "AI Reply Agent",
  ];

  return (
    <section aria-label="Core capabilities" className="overflow-hidden border-b border-border bg-background py-4">
      <div className="animate-marquee flex gap-8 items-center">
        {[...capabilities, ...capabilities].map((item, i) => (
          <span key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-muted-foreground whitespace-nowrap">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="section-space bg-background">
      <div className="page-container grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <Reveal>
          <div>
            <span className="eyebrow">The real problem</span>
            <h2 className="section-title mt-5">Your offer isn&apos;t stalled. Your outbound system is.</h2>
          </div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {["Inconsistent prospecting", "Fragile email infrastructure", "Generic scripts and targeting", "Replies slipping through the cracks"].map((item, idx) => (
            <Reveal key={item} delay={80 * (idx + 1)}>
              <div className="flex min-h-28 items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="font-semibold leading-relaxed">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function IncludedSection() {
  return (
    <section id="system" className="section-space dark-grid text-primary-foreground">
      <div className="page-container">
        <Reveal>
          <div className="max-w-3xl">
            <span className="eyebrow eyebrow-dark">Everything included</span>
            <h2 className="section-title mt-5">One engine. Every moving part managed.</h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink-muted">
              Data, infrastructure, campaigns, replies, and optimization work as one managed growth system—not another collection of tools for your team to operate.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {inclusions.map((item, idx) => (
            <Reveal key={item.title} delay={50 * (idx + 1)}>
              <article className="h-full rounded-xl border border-ink-border bg-ink/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-ink-card hover:border-primary/50">
                <item.icon className="h-6 w-6 text-brand-light" />
                <h3 className="mt-6 font-display text-base font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PipelineSection() {
  return (
    <section className="section-space bg-soft">
      <div className="page-container">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Your pipeline, end to end</span>
            <h2 className="section-title mt-5">One connected path from market to meeting.</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Instead of piecing together software, data, domains, copy, and operators, you get one managed system with a single outcome.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {["Define the ICP", "Build lead segments", "Launch campaigns", "Manage replies", "Book meetings"].map((item, index) => (
            <Reveal key={item} delay={80 * (index + 1)}>
              <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-soft min-h-[140px]">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-black uppercase tracking-wider text-primary">
                    0{index + 1}
                  </span>
                  {index < 4 ? (
                    <ArrowRight className="size-4 text-muted-foreground/50 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-primary" />
                  ) : (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-success">
                      <span className="size-1.5 rounded-full bg-success animate-pulse" /> Result
                    </span>
                  )}
                </div>
                <p className="mt-6 font-display text-base font-bold text-foreground leading-snug">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnginePillarsSection() {
  return (
    <section className="section-space bg-background">
      <div className="page-container">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <span className="eyebrow">Four parts. One job.</span>
              <h2 className="section-title mt-5">Build a dependable source of qualified conversations.</h2>
            </div>
            <p className="max-w-xl self-end leading-relaxed text-muted-foreground">
              Every layer supports the next. Better infrastructure protects deliverability. Better data sharpens targeting. Better campaigns create replies. Better reply handling creates meetings.
            </p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {enginePillars.map((pillar, idx) => (
            <Reveal key={pillar.number} delay={100 * (idx + 1)}>
              <article className="h-full rounded-2xl border border-border bg-card p-7 sm:p-9 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-primary">{pillar.number}</span>
                  <pillar.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-8 font-display text-2xl font-bold">{pillar.title}</h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const techIntegrations = [
  {
    category: "Lead Data & Enrichment",
    description: "Waterfall-enriched prospect intelligence and triple verification.",
    tools: [
      { name: "Clay", role: "Waterfall Data Enrichment", badge: "Enrichment" },
      { name: "Apollo.io", role: "8M+ Verified B2B Database", badge: "Lead Sourcing" },
      { name: "ZoomInfo", role: "Direct Dials & Mobile Numbers", badge: "Intelligence" },
      { name: "MillionVerifier", role: "Zero-Bounce Email Scrubbing", badge: "Verification" },
    ],
  },
  {
    category: "Sending & Deliverability",
    description: "Multi-domain infrastructure isolated from your primary brand domain.",
    tools: [
      { name: "Smartlead.ai", role: "Automated Warmup & Inbox Rotation", badge: "Deliverability" },
      { name: "Instantly.ai", role: "Distributed Inboxes & Scale", badge: "Sending" },
      { name: "Google Workspace", role: "Dedicated Secondary Domains", badge: "Infrastructure" },
      { name: "Microsoft 365", role: "Enterprise MX & SPF/DKIM/DMARC", badge: "Security" },
    ],
  },
  {
    category: "CRM & Calendar Sync",
    description: "Automatic meeting creation and pipeline reporting directly to your team.",
    tools: [
      { name: "HubSpot", role: "Real-Time Contact & Deal Sync", badge: "CRM" },
      { name: "Salesforce", role: "Opportunity Pipeline Tracking", badge: "Enterprise" },
      { name: "Calendly", role: "Instant Frictionless Scheduling", badge: "Booking" },
      { name: "Slack", role: "Live New Meeting Notifications", badge: "Alerts" },
    ],
  },
];

function TechStackSection() {
  return (
    <section className="section-space dark-grid text-primary-foreground">
      <div className="page-container">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow eyebrow-dark">
              <Layers className="size-3.5 text-primary" /> Integrated Ecosystem
            </span>
            <h2 className="section-title mt-5">
              Built On The World&apos;s Best <br className="hidden sm:inline" />
              <span className="text-brand-light">Deliverability &amp; Data Infrastructure</span>
            </h2>
            <p className="mt-4 text-ink-muted">
              We configure, manage, and monitor the top-tier outbound tech stack so your team never has to deal with configuration overhead.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {techIntegrations.map((group, idx) => (
            <Reveal key={group.category} delay={100 * (idx + 1)}>
              <div className="h-full rounded-3xl border border-ink-border bg-ink-card/90 p-7 shadow-soft flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-light font-display">
                    {group.category}
                  </span>
                  <p className="mt-1 text-xs text-ink-muted">{group.description}</p>
                  <div className="mt-6 space-y-3">
                    {group.tools.map((tool) => (
                      <div key={tool.name} className="flex items-center justify-between rounded-xl border border-ink-border bg-ink-elevated p-3.5 transition-all hover:border-primary/50">
                        <div>
                          <strong className="block text-sm font-bold text-primary-foreground font-display">{tool.name}</strong>
                          <span className="text-[11px] text-ink-muted">{tool.role}</span>
                        </div>
                        <span className="rounded-md border border-ink-border bg-ink px-2 py-0.5 text-[10px] font-semibold text-primary font-display">
                          {tool.badge}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function OldWaySection() {
  return (
    <section className="section-space dark-grid text-primary-foreground">
      <div className="page-container">
        <Reveal>
          <div className="max-w-3xl">
            <span className="eyebrow eyebrow-dark">A better operating model</span>
            <h2 className="section-title mt-5">The old way creates more work. The engine creates momentum.</h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal delay={100}>
            <article className="h-full rounded-2xl border border-ink-border bg-ink-card p-7 sm:p-9">
              <p className="text-xs font-bold uppercase text-ink-muted">Disconnected outbound</p>
              <h3 className="mt-4 font-display text-2xl font-bold">Tools without an operator</h3>
              <ul className="mt-8 space-y-4 text-sm text-ink-muted">
                {["Separate vendors for data, inboxes, and campaigns", "Your team troubleshoots deliverability", "Generic lists and one-size-fits-all scripts", "Replies depend on manual follow-up"].map((item) => (
                  <li key={item} className="flex gap-3"><XCircle className="h-5 w-5 shrink-0 text-ink-muted" />{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
          <Reveal delay={200}>
            <article className="h-full rounded-2xl border border-primary bg-ink-elevated p-7 sm:p-9 shadow-soft">
              <p className="text-xs font-bold uppercase text-brand-light">100K GTM Email Engine</p>
              <h3 className="mt-4 font-display text-2xl font-bold">One managed growth system</h3>
              <ul className="mt-8 space-y-4 text-sm text-ink-muted">
                {["Infrastructure, lead supply, scripts, and operations aligned", "Deliverability and sending capacity actively managed", "Targeting shaped around your ideal customer profile", "Replies organized around the next sales action"].map((item) => (
                  <li key={item} className="flex gap-3"><CircleCheck className="h-5 w-5 shrink-0 text-brand-light" />{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfrastructureSection() {
  return (
    <section className="section-space bg-background">
      <div className="page-container grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div>
            <span className="eyebrow">Built beneath every send</span>
            <h2 className="section-title mt-5">Infrastructure that can carry the campaign.</h2>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
              High-volume outbound only works when the foundation is managed with the same care as the message. We prepare and operate the sending environment before asking it to scale.
            </p>
            <div className="mt-8"><CtaButton>Discuss Your Infrastructure</CtaButton></div>
          </div>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          {["Domain setup", "Sender accounts", "Inbox warmup", "Deliverability checks", "Sending rotation", "Ongoing monitoring"].map((item, index) => (
            <Reveal key={item} delay={60 * (index + 1)}>
              <div className="rounded-xl border border-border bg-soft p-5 transition-transform hover:-translate-y-0.5">
                <span className="text-xs font-bold text-primary">0{index + 1}</span>
                <p className="mt-4 font-semibold">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AiWorkflowSection() {
  return (
    <section className="section-space bg-soft">
      <div className="page-container grid gap-14 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal>
          <div>
            <span className="eyebrow">AI-assisted operations</span>
            <h2 className="section-title mt-5">Find the right prospects. Understand every reply.</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              The scraping and reply agents support the repetitive work around prospect discovery and response classification, while the campaign remains focused on qualified business conversations.
            </p>
          </div>
        </Reveal>
        <div className="space-y-3">
          {[
            [Target, "Discover", "Identify prospects that match the campaign audience."],
            [Database, "Prepare", "Extract, validate, and organize lead data for outreach."],
            [Mail, "Engage", "Run structured email sequences and follow-ups."],
            [MessageSquareText, "Classify", "Separate interest, questions, objections, and non-opportunities."],
            [CalendarCheck, "Route", "Move qualified responses toward the appointment workflow."],
          ].map(([Icon, label, text], index) => {
            const ItemIcon = Icon as typeof Target;
            return (
              <Reveal key={String(label)} delay={70 * (index + 1)}>
                <div className="flex items-start gap-5 rounded-xl border border-border bg-card p-5 shadow-sm transition-transform hover:-translate-y-0.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
                    <ItemIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-primary">0{index + 1}</p>
                    <h3 className="mt-1 font-bold">{String(label)}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{String(text)}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="section-space bg-background">
      <div className="page-container">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <span className="eyebrow">Our end-to-end process</span>
              <h2 className="section-title mt-5">From cold list to qualified meeting.</h2>
            </div>
            <p className="max-w-xl self-end leading-relaxed text-muted-foreground">
              We own the operational work between your offer and your next sales conversation, so your team stays focused on revenue.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {steps.map((step, idx) => (
            <Reveal key={step.number} delay={100 * (idx + 1)}>
              <article className="h-full rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <span className="text-sm font-bold text-primary">{step.number}</span>
                <h3 className="mt-8 font-display text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommitmentSection() {
  return (
    <section className="orange-grid py-20 text-primary-foreground">
      <div className="page-container grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
        <Reveal>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/80">Our commitment</p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight sm:text-5xl">
              10 high-qualified V2P appointments in 90 days.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <ul className="space-y-4 border-t border-primary-foreground/30 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            {["We handle the entire GTM system.", "You get qualified appointments.", "You show up, sell, and close."].map((item) => (
              <li key={item} className="flex gap-3 font-semibold"><Check className="h-5 w-5 shrink-0" />{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Austin O.",
    role: "Founder & CEO",
    company: "CloudScale SaaS",
    metric: "+$142,000 Pipeline Added",
    rating: 5,
    quote: "We went from 3 cold calls a week to 38 qualified enterprise demos in our very first month. The AI reply agent booked meetings directly into our calendar while our team was asleep. This engine paid for itself 10x over.",
  },
  {
    name: "Marcus T.",
    role: "Head of Growth",
    company: "Apex Media Agency",
    metric: "99.4% Deliverability Rate",
    rating: 5,
    quote: "Setting up 50 domains, DNS records, and warming schedules used to be an operational nightmare. Brnd Guru launched our entire 100K engine in 9 days and we hit our 10-meeting commitment in the first 3 weeks.",
  },
  {
    name: "Sarah K.",
    role: "VP of Revenue",
    company: "Nexus Technologies",
    metric: "14 Qualified Meetings / Mo",
    rating: 5,
    quote: "The quality of the triple-verified lead list is night and day compared to standard databases. Zero spam complaints, high-level C-suite replies, and 4 closed enterprise contracts in our first quarter.",
  },
];

function TestimonialsSection() {
  return (
    <section className="section-space bg-soft">
      <div className="page-container">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-bold text-foreground shadow-sm">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-3.5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="ml-1">4.9 / 5 Client Rating</span>
            </div>
            <h2 className="section-title mt-5">Loved By B2B Founders &amp; Sales Leaders</h2>
            <p className="mt-4 text-muted-foreground">
              See how high-growth teams scale their pipeline with the 100K Email GTM Engine.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <Reveal key={t.name} delay={120 * (idx + 1)}>
              <div className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-7 sm:p-8 shadow-card transition-all duration-300 hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-500">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="size-3.5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <span className="rounded-full border border-success/30 bg-success/10 px-2.5 py-0.5 text-[11px] font-bold text-success font-display">
                      {t.metric}
                    </span>
                  </div>
                  <p className="mt-5 text-sm sm:text-base leading-relaxed text-foreground font-sans">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-6 border-t border-border pt-4">
                  <strong className="block font-display text-base font-bold text-foreground">{t.name}</strong>
                  <span className="text-xs text-muted-foreground">{t.role} · {t.company}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoadmapSection() {
  return (
    <section className="section-space bg-background">
      <div className="page-container">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">The first 90 days</span>
            <h2 className="section-title mt-5">From foundation to a running GTM engine.</h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {roadmap.map((item, idx) => (
            <Reveal key={item.phase} delay={100 * (idx + 1)}>
              <article className="h-full rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <span className="text-xs font-bold uppercase text-primary">{item.phase}</span>
                <h3 className="mt-5 font-display text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function InvestmentSection() {
  return (
    <section id="investment" className="section-space bg-soft">
      <div className="page-container">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Simple investment</span>
            <h2 className="section-title mt-5">Built once. Managed every month.</h2>
            <p className="mt-4 text-muted-foreground">Every cost is visible before we start.</p>
          </div>
        </Reveal>
        <Reveal scale delay={150}>
          <div className="mt-12 grid overflow-hidden rounded-2xl border border-border bg-card shadow-card lg:grid-cols-[1.2fr_.8fr]">
            <div className="divide-y divide-border p-6 sm:p-9">
              {[
                [Rocket, "GTM activation", "One-time", "$649"],
                [Globe2, "Annual domains", "Per year", "$750"],
                [Mail, "Running infrastructure", "Per month", "$750"],
                [Settings2, "Management", "Per month", "$297"],
              ].map(([Icon, title, cadence, price]) => {
                const ItemIcon = Icon as typeof Rocket;
                return (
                  <div key={String(title)} className="flex items-center gap-4 py-5 first:pt-0 last:pb-0">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                      <ItemIcon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <strong className="block font-display">{String(title)}</strong>
                      <span className="text-xs text-muted-foreground">{String(cadence)}</span>
                    </div>
                    <strong className="text-xl font-display text-primary">{String(price)}</strong>
                  </div>
                );
              })}
            </div>
            <div className="dark-grid p-7 text-primary-foreground sm:p-10 flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold uppercase text-ink-muted">Due on day one</p>
                <strong className="mt-3 block font-display text-4xl sm:text-5xl font-bold">$2,149</strong>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  Activation, annual domains, and your first month of running infrastructure.
                </p>
                <div className="my-6 border-t border-ink-border" />
                <p className="text-xs font-bold uppercase text-ink-muted">Month two onward</p>
                <strong className="mt-2 block font-display text-3xl font-bold text-brand-light">$1,047 / month</strong>
              </div>
              <div className="mt-8">
                <CtaButton>Start with a Strategy Call</CtaButton>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={250}>
          <div className="mx-auto mt-6 max-w-3xl rounded-xl border border-border bg-background p-4 text-center text-xs sm:text-sm text-muted-foreground">
            <CircleCheck className="mr-2 inline h-4 w-4 text-primary" />
            The $297 management fee begins at day 30.
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="section-space bg-background">
      <div className="page-container grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <Reveal>
          <div>
            <span className="eyebrow">Common questions</span>
            <h2 className="section-title mt-5">Everything you need to know.</h2>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((item) => (
              <details key={item.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold">
                  <span>{item.question}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" />
                </summary>
                <p className="max-w-2xl pt-4 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="strategy-call" className="dark-grid py-20 text-primary-foreground">
      <div className="page-container text-center">
        <Reveal>
          <CalendarCheck className="mx-auto h-11 w-11 text-brand-light" />
          <p className="mt-6 font-display text-xs font-bold uppercase tracking-widest text-brand-light">
            Your pipeline, properly built.
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl sm:text-5xl font-bold leading-tight">
            Stop managing tools. Start taking meetings.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-ink-muted text-sm sm:text-base">
            Book a 30-minute strategy call for a clear look at how the 100K GTM system can work for your offer.
          </p>
          <div className="mt-8">
            <CtaButton>Book Your Strategy Call</CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink-border bg-ink py-10 text-primary-foreground">
      <div className="page-container flex flex-col justify-between gap-7 sm:flex-row sm:items-center">
        <div>
          <Logo inverse />
          <p className="mt-3 text-xs text-ink-muted">We build brands. We build systems. We build growth.</p>
        </div>
        <div className="flex flex-wrap gap-6 text-xs text-ink-muted">
          <a href="#system" className="hover:text-primary-foreground">The System</a>
          <a href="#calculator" className="hover:text-primary-foreground">ROI Calculator</a>
          <a href="#process" className="hover:text-primary-foreground">Process</a>
          <a href="#investment" className="hover:text-primary-foreground">Investment</a>
          <a href="#faq" className="hover:text-primary-foreground">FAQ</a>
          <a href="#strategy-call" className="inline-flex items-center gap-1 text-brand-light">Book a call <ArrowUpRight className="h-3.5 w-3.5" /></a>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Header />
      <Hero />
      <LiveCommandCenterSection />
      <VolumeSliderSection />
      <OutcomeStrip />
      <CapabilityStrip />
      <ProblemSection />
      <PipelineSection />
      <IncludedSection />
      <EnginePillarsSection />
      <TechStackSection />
      <OldWaySection />
      <InfrastructureSection />
      <AiWorkflowSection />
      <ProcessSection />
      <CommitmentSection />
      <TestimonialsSection />
      <RoadmapSection />
      <InvestmentSection />
      <FaqSection />
      <FinalCta />
      <Footer />
    </main>
  );
}