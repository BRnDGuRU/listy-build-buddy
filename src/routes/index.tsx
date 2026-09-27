import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  Check,
  ChevronDown,
  CircleCheck,
  Clock,
  Compass,
  Cpu,
  Database,
  FileSpreadsheet,
  Globe2,
  GraduationCap,
  Layers,
  Mail,
  Menu,
  MessageSquareText,
  Rocket,
  Search,
  ServerCog,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import brndGuruLogo from "@/assets/brndguru-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI GTM Agency Accelerator | BrndGuru" },
      {
        name: "description",
        content:
          "Launch your AI-powered GTM system in 14 days, then spend the next 90 days optimizing, automating, and scaling it with hands-on implementation, training, and support for $347/month.",
      },
      { property: "og:title", content: "AI GTM Agency Accelerator | BrndGuru" },
      {
        property: "og:description",
        content:
          "Launch Fast. Optimize. Scale. 14-day launch sprint + 90-day hands-on implementation with Shivanshu Kumar / BrndGuru.",
      },
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
  {
    icon: Database,
    title: "8M+ B2B Leads",
    badge: "Included",
    text: "Large verified B2B lead asset curated for cold outbound campaign targeting across key industries.",
  },
  {
    icon: BriefcaseBusiness,
    title: "50K Agency Owner Leads",
    badge: "Included",
    text: "Dedicated high-intent agency-owner lead asset ready for direct client outreach and partnerships.",
  },
  {
    icon: Building2,
    title: "USA Business Data",
    badge: "Included",
    text: "Targetable US business data filtered by geography, employee size, and decision-maker roles.",
  },
  {
    icon: Mail,
    title: "20K Email Credits",
    badge: "Included",
    text: "Supplied directly from our side when ManyReach.com is used for outreach infrastructure.",
  },
  {
    icon: Bot,
    title: "AI Lead Scraping Agent",
    badge: "Included",
    text: "Automated prospect discovery and deep enrichment agent to research targets before outreach.",
  },
  {
    icon: MessageSquareText,
    title: "AI Lead Reply Agent",
    badge: "Included",
    text: "AI-assisted response classification, objection handling, and automatic meeting link routing.",
  },
  {
    icon: Sparkles,
    title: "GTM Strategy & Scripting",
    badge: "Included",
    text: "ICP definition, positioning, offer angles, prompt engineering, and conversion-focused sequences.",
  },
  {
    icon: Settings2,
    title: "Campaign & Lead Management",
    badge: "Included",
    text: "Hands-on implementation, A/B testing, deliverability monitoring, and continuous optimization.",
  },
];

const ecosystemSteps = [
  {
    number: "01",
    title: "LEAD DATA",
    subtitle: "Fuel The System",
    items: ["8M+ B2B Leads", "50K Agency Owners", "USA Business Data"],
    icon: Database,
  },
  {
    number: "02",
    title: "AI INTELLIGENCE",
    subtitle: "Enrich & Qualify",
    items: ["Deep Lead Research", "Data Enrichment", "ICP Qualification", "Dynamic Personalization"],
    icon: BrainCircuit,
  },
  {
    number: "03",
    title: "EMAIL EXECUTION",
    subtitle: "24/7 Outreach",
    items: ["Multi-Inbox Outreach", "Smart Follow-Ups", "20K ManyReach Credits", "24/7 Automation"],
    icon: Mail,
  },
  {
    number: "04",
    title: "REPLY → MEETING",
    subtitle: "Book The Calls",
    items: ["AI Reply Agent", "Intent Classification", "Calendar Routing", "Appointment Workflow"],
    icon: CalendarCheck,
  },
];

const enginePillars = [
  {
    number: "01",
    icon: Target,
    title: "GTM Strategy & Offer Positioning",
    text: "Define ICP, offer positioning, acquisition strategy, and campaign architecture tailored to your agency.",
  },
  {
    number: "02",
    icon: Layers,
    title: "AI Ecosystem Architecture",
    text: "Map the tools, AI agents, data sources, and integrations required for a seamless growth pipeline.",
  },
  {
    number: "03",
    icon: Workflow,
    title: "Agentic Workflows",
    text: "Design automated lead research, enrichment, qualification, dynamic personalization, and reply workflows.",
  },
  {
    number: "04",
    icon: Mail,
    title: "Email Automation (24/7)",
    text: "Build a 24/7 email workflow. If ManyReach.com is used, 20K email credits are provided from our side.",
  },
  {
    number: "05",
    icon: ServerCog,
    title: "CRM & System Automations",
    text: "Connect CRM, outreach, lead data, and AI workflows together to eliminate repetitive manual tasks.",
  },
  {
    number: "06",
    icon: GraduationCap,
    title: "Team Training & Handover",
    text: "Teach your team exactly how the system works, how to operate it, and how to improve it long-term.",
  },
];

const roadmap = [
  {
    period: "Days 1–7 (Week 1)",
    stage: "01",
    title: "GTM Foundation",
    focus: "ICP + Offer + GTM Strategy + Ecosystem Mapping",
    deliverable: "Clear GTM Blueprint",
    text: "Define the ICP, craft the core offer positioning, map all required data and tool integrations, and design the campaign architecture.",
  },
  {
    period: "Days 8–14 (Week 2)",
    stage: "02",
    title: "Build & Launch Sprint",
    focus: "Build Agents, Workflows, Automations & Integrations",
    deliverable: "Live AI GTM System",
    text: "Configure the sending infrastructure, deploy the AI scraping and reply agents, set up email sequences, and launch live campaigns.",
  },
  {
    period: "Days 15–30 (Month 1)",
    stage: "03",
    title: "Optimize While Running",
    focus: "Launch Workflows, Identify Bottlenecks, Test & Improve",
    deliverable: "Optimized Live Workflow",
    text: "Monitor real-time deliverability, test subject lines and prompts, evaluate reply rates, and eliminate any pipeline friction.",
  },
  {
    period: "Days 31–60 (Month 2)",
    stage: "04",
    title: "Scale The System",
    focus: "Enhance Agents, Automation, Targeting & Prompts",
    deliverable: "More Efficient GTM Machine",
    text: "Scale outreach volume safely, refine AI prompt nuances, expand into adjacent high-intent segments, and streamline CRM syncing.",
  },
  {
    period: "Days 61–90 (Month 3)",
    stage: "05",
    title: "Train & Handoff",
    focus: "Team Training, SOPs, Documentation & Optimization",
    deliverable: "Team Can Run It Autonomously",
    text: "Deliver complete SOPs, conduct hands-on training sessions with your team, and establish a framework for ongoing growth.",
  },
];

const variableFactors = [
  { name: "Outreach Volume", desc: "Scale from 5k to 100k+ emails per month based on target goals" },
  { name: "Number of Prospects", desc: "Total market size and list expansion requirements" },
  { name: "Target Market", desc: "Enterprise, mid-market, SMB, or niche B2B segments" },
  { name: "Email Senders & Inboxes", desc: "Number of warmed sender accounts allocated" },
  { name: "Domains Setup", desc: "Dedicated secondary domains configured with SPF/DKIM/DMARC" },
  { name: "Email Validation", desc: "Triple-layer zero-bounce scrubbing and verification" },
  { name: "Enrichment Requirements", desc: "Custom data points (tech stack, hiring triggers, revenue)" },
  { name: "Automation & Tool Usage", desc: "API usage for CRM sync, webhook triggers, and AI agents" },
  { name: "Campaign Complexity", desc: "Multi-touch branch logic, personalized video/assets, and routing" },
];

const outcomes = [
  "Complete GTM Strategy",
  "AI Ecosystem Architecture",
  "Agentic Email Workflow",
  "Lead Research & Enrichment",
  "Automated Outreach System",
  "AI Reply Management",
  "Follow-Up Automation",
  "CRM / Pipeline Automation",
  "Full SOPs & Documentation",
  "Team Training & Handover",
  "Optimization Framework",
  "Scalable 24/7 GTM Machine",
];

const volumeTiers = [
  { volume: "10,000", inboxes: 10, estInfra: "$150–$250", label: "10k / mo" },
  { volume: "25,000", inboxes: 25, estInfra: "$250–$450", label: "25k / mo" },
  { volume: "50,000", inboxes: 50, estInfra: "$450–$850", label: "50k / mo" },
  { volume: "100,000", inboxes: 100, estInfra: "$850–$1,450", label: "100k / mo" },
  { volume: "200,000+", inboxes: 200, estInfra: "$1,450–$2,000+", label: "200k+ / mo" },
];

const faqs = [
  {
    question: "What is the AI GTM Agency Accelerator?",
    answer:
      "The Accelerator is a 90-day hands-on program led by Shivanshu Kumar / BrndGuru. We launch your complete AI-powered GTM engine in a 14-day sprint, then spend the next 90 days optimizing, automating, scaling, and training your team to operate it for just $347/month.",
  },
  {
    question: "Why is the system launched in 14 days instead of 90 days?",
    answer:
      "We do not wait 90 days to launch. Week 1 is GTM foundation and strategy; Week 2 is building and going live. The remaining 75+ days are dedicated to testing live responses, fixing bottlenecks, scaling volume, automating workflows, and training your team.",
  },
  {
    question: "What lead assets and email credits are included?",
    answer:
      "You receive access to an 8M+ B2B lead database, a dedicated 50K Agency Owners lead asset, USA business data, and 20,000 email credits from our side when ManyReach.com is used.",
  },
  {
    question: "Why are technology and infrastructure costs separate ($150–$2,000+)?",
    answer:
      "Your $347/month covers our strategy, implementation, optimization, and training. Technology and sending infrastructure are separate and variable because every agency has different outreach volumes, domain requirements, and enrichment needs. You only pay for the exact infrastructure you actually need.",
  },
  {
    question: "What is the Implementation Commitment?",
    answer:
      "If an agreed implementation component has not been delivered because of our side, we continue hands-on implementation support at no additional management fee until that agreed component is completed (subject to required client access, timely feedback, and required third-party tools/accounts being available).",
  },
  {
    question: "What happens after the 90-day program completes?",
    answer:
      "By day 90, your team is fully trained and equipped with complete SOPs and documentation to run and scale the AI GTM engine independently. You retain full ownership of all assets, workflows, and infrastructure.",
  },
];

function CtaButton({
  children = "Book Strategy Call",
  inverse = false,
}: {
  children?: ReactNode;
  inverse?: boolean;
}) {
  return (
    <Button
      asChild
      size="lg"
      variant={inverse ? "secondary" : "default"}
      className="h-12 rounded-xl px-7 font-display font-bold shadow-soft transition-all duration-300 hover:-translate-y-0.5"
    >
      <a href="#strategy-call">
        {children}
        <ArrowRight className="size-4" />
      </a>
    </Button>
  );
}

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <a
      href="#top"
      className={`flex items-center gap-2.5 ${inverse ? "text-primary-foreground" : "text-foreground"}`}
      aria-label="Brnd Guru home"
    >
      <img
        src={brndGuruLogo.url}
        alt="Brnd Guru logo"
        className="size-8 shrink-0 rounded-lg object-contain md:size-9"
        width="36"
        height="36"
      />
      <div className="min-w-0 leading-none">
        <p className="truncate font-display text-sm font-extrabold leading-tight tracking-tight sm:text-base md:text-lg">
          Brnd Guru <span className={`hidden sm:inline ${inverse ? "text-brand-light" : "text-primary"}`}>AI GTM</span>
        </p>
        <p className={`hidden truncate text-[9px] tracking-wide ${inverse ? "text-ink-muted" : "text-muted-foreground"} sm:block`}>
          Agency Accelerator
        </p>
      </div>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-xl transition-all duration-300">
      <div className="page-container flex items-center justify-between gap-4 py-3 md:py-3.5">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          <a className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground" href="#ecosystem">
            Ecosystem
          </a>
          <a className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground" href="#included">
            Included Assets
          </a>
          <a className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground" href="#roadmap">
            90-Day Blueprint
          </a>
          <a className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground" href="#variable-costs">
            Infrastructure
          </a>
          <a className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground" href="#investment">
            Investment
          </a>
          <a className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground" href="#faq">
            FAQ
          </a>
        </nav>
        <div className="flex shrink-0 items-center gap-3">
          <Button
            asChild
            size="sm"
            className="hidden rounded-full bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground shadow-soft transition-transform duration-200 hover:scale-[1.03] sm:inline-flex sm:text-sm"
          >
            <a href="#strategy-call">Apply for Accelerator →</a>
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="size-9 rounded-lg border-border bg-card text-foreground hover:bg-muted hover:text-foreground lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </div>
      {open && (
        <nav
          className="animate-in fade-in slide-in-from-top-2 border-t border-border bg-background/95 px-5 py-5 duration-200 backdrop-blur-xl lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-4">
            {[
              ["Ecosystem", "#ecosystem"],
              ["Included Assets", "#included"],
              ["90-Day Blueprint", "#roadmap"],
              ["Infrastructure", "#variable-costs"],
              ["Investment", "#investment"],
              ["FAQ", "#faq"],
            ].map(([label, href]) => (
              <a
                key={label}
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                href={href}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
            <div className="pt-2">
              <Button
                asChild
                size="lg"
                className="w-full rounded-xl bg-primary font-semibold text-primary-foreground shadow-soft"
              >
                <a href="#strategy-call" onClick={() => setOpen(false)}>
                  Apply for Accelerator →
                </a>
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
    <section
      id="top"
      className="relative overflow-hidden border-b border-border bg-background py-14 text-foreground sm:py-18 lg:py-24"
    >
      {/* Ambient Orange Radial & Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,color-mix(in_oklab,var(--primary)_14%,transparent),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklab,var(--border)_40%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--border)_40%,transparent)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="page-container relative flex flex-col items-center text-center">
        {/* Eyebrow Pill */}
        <Reveal>
          <span className="eyebrow">
            <Rocket className="h-3.5 w-3.5 text-primary" /> AI GTM Agency Accelerator • Launch Fast. Optimize. Scale.
          </span>
        </Reveal>

        {/* Main Headline */}
        <Reveal delay={100}>
          <h1 className="font-hero mt-7 max-w-6xl text-[clamp(2.5rem,6.5vw,5.2rem)] font-black leading-[1.08] tracking-tight text-foreground">
            Launch Your{" "}
            <span className="inline-block rounded-xl bg-primary px-3.5 py-1 text-primary-foreground shadow-soft sm:rounded-2xl sm:px-4">
              AI-Powered GTM System
            </span>{" "}
            In 14 Days. <br className="hidden sm:inline" />
            Then Optimize &amp; Scale It For{" "}
            <span className="font-bold text-primary">$347/Month.</span>
          </h1>
        </Reveal>

        {/* Subtitle */}
        <Reveal delay={200}>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
            Launch fast in a 14-day sprint, then spend the next 90 days optimizing, automating, and scaling your outbound
            engine with hands-on implementation, training, and support from Shivanshu Kumar.
          </p>
        </Reveal>

        {/* CTA Group */}
        <Reveal delay={250}>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <CtaButton>Apply for the Accelerator</CtaButton>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-xl border-border bg-card px-6 font-display font-semibold text-foreground shadow-sm transition-all duration-200 hover:border-primary/50 hover:bg-primary-soft/20 hover:text-primary"
            >
              <a href="#ecosystem">Explore The Ecosystem ↘</a>
            </Button>
          </div>
        </Reveal>

        {/* 4 Feature Badges (Glance Highlights) */}
        <div className="mt-14 grid w-full max-w-6xl gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
          {/* Badge 1: 14 DAYS */}
          <Reveal delay={100}>
            <div className="h-full rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-soft">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                  <Clock className="size-3 text-primary" /> Launch Sprint
                </span>
                <Rocket className="size-4 text-primary" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-foreground">14 DAYS</h3>
              <p className="mt-1 text-xs text-muted-foreground">Core AI GTM system designed, built, and launched LIVE.</p>
              <div className="mt-4 rounded-lg border border-border bg-soft p-2.5">
                <span className="block text-[10px] text-muted-foreground">Sprint Phase</span>
                <strong className="font-display text-xs font-semibold text-primary">Fast Time to Market</strong>
              </div>
            </div>
          </Reveal>

          {/* Badge 2: 90 DAYS */}
          <Reveal delay={200}>
            <div className="h-full rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-soft">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-2 py-0.5 text-[10px] font-semibold text-success">
                  <Activity className="size-3 text-success" /> Hands-On
                </span>
                <Settings2 className="size-4 text-primary" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-foreground">90 DAYS</h3>
              <p className="mt-1 text-xs text-muted-foreground">Ongoing optimization, prompt tuning, and team training.</p>
              <div className="mt-4 rounded-lg border border-border bg-soft p-2.5">
                <span className="block text-[10px] text-muted-foreground">Implementation</span>
                <strong className="font-display text-xs font-semibold text-success">Continuous Scaling</strong>
              </div>
            </div>
          </Reveal>

          {/* Badge 3: 24/7 AUTOMATION */}
          <Reveal delay={300}>
            <div className="h-full rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-soft">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                  <Bot className="size-3 text-primary" /> AI Agents
                </span>
                <Zap className="size-4 text-primary" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-foreground">24/7 AGENTS</h3>
              <p className="mt-1 text-xs text-muted-foreground">Autonomous scraping, research, and reply classification.</p>
              <div className="mt-4 rounded-lg border border-border bg-soft p-2.5">
                <span className="block text-[10px] text-muted-foreground">Credits Included</span>
                <strong className="font-display text-xs font-semibold text-brand-light">20K ManyReach Credits</strong>
              </div>
            </div>
          </Reveal>

          {/* Badge 4: $347 / MO */}
          <Reveal delay={400}>
            <div className="h-full rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-soft">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 rounded-full border border-border bg-muted px-2 py-0.5 text-[10px] font-semibold text-foreground">
                  <ShieldCheck className="size-3 text-primary" /> Fixed Retainer
                </span>
                <CircleCheck className="size-4 text-primary" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-foreground">$347 / MO</h3>
              <p className="mt-1 text-xs text-muted-foreground">90-day minimum implementation &amp; scaling commitment.</p>
              <div className="mt-4 rounded-lg border border-border bg-soft p-2.5">
                <span className="block text-[10px] text-muted-foreground">Lead Assets</span>
                <strong className="font-display text-xs font-semibold text-foreground">8M+ B2B / 50K Agency</strong>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Hero Mission Statement Callout */}
        <Reveal delay={450}>
          <div className="mt-8 max-w-4xl rounded-2xl border border-border bg-card/90 p-5 text-center shadow-sm backdrop-blur-sm sm:p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-primary font-display">
              BUILD IT → LAUNCH IT → OPTIMIZE IT → TRAIN YOUR TEAM
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
              The goal is not another collection of AI tools. The goal is a connected, revenue-producing GTM ecosystem your agency can understand, operate, and continuously scale.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function EcosystemSection() {
  return (
    <section id="ecosystem" className="border-b border-ink-border bg-ink py-16 text-primary-foreground md:py-24">
      <div className="page-container">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow eyebrow-dark">
              <Workflow className="size-3.5 text-primary" /> Core 4-Part Ecosystem
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              How The AI GTM Engine Works
            </h2>
            <p className="mt-4 text-base text-ink-muted sm:text-lg">
              A fully integrated outbound pipeline from initial lead sourcing to booked calendar appointments.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ecosystemSteps.map((step, idx) => (
            <Reveal key={step.number} delay={100 * (idx + 1)}>
              <div className="flex h-full flex-col justify-between rounded-3xl border border-ink-border bg-ink-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xs font-black uppercase tracking-wider text-primary">
                      {step.number}
                    </span>
                    <step.icon className="size-5 text-brand-light" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-primary-foreground">{step.title}</h3>
                  <span className="text-xs font-semibold text-brand-light">{step.subtitle}</span>
                  <div className="my-4 border-t border-ink-border" />
                  <ul className="space-y-2.5">
                    {step.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-ink-muted">
                        <Check className="size-3.5 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LiveCommandCenterSection() {
  return (
    <section className="relative scroll-mt-24 border-b border-ink-border bg-ink-card px-4 py-16 text-primary-foreground md:py-20">
      <div className="page-container">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow eyebrow-dark">
              <Activity className="size-3.5 text-primary" /> Real-Time Telemetry
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Live Command Center <br className="hidden sm:inline" />
              <span className="text-brand-light">Operating 24/7 For Your Agency</span>
            </h2>
            <p className="mt-4 text-base text-ink-muted sm:text-lg">
              Automated scraping, AI enrichment, deliverability monitoring, and reply routing unified into a single live dashboard.
            </p>
          </div>
        </Reveal>

        <Reveal scale delay={150}>
          <div className="mt-12 overflow-hidden rounded-3xl border border-ink-border bg-ink shadow-2xl backdrop-blur-xl">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink-border bg-ink-elevated px-5 py-3.5">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-destructive/80" />
                <span className="size-3 rounded-full bg-warning/80" />
                <span className="size-3 rounded-full bg-success/80" />
                <span className="ml-2 rounded-lg border border-ink-border bg-ink px-3 py-1 font-mono text-[11px] text-ink-muted">
                  gtm.brndguru.com/accelerator-telemetry
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-2.5 py-1 text-xs font-semibold text-success">
                  <span className="size-2 rounded-full bg-success animate-pulse" /> Live AI GTM Engine
                </span>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                <div className="rounded-2xl border border-ink-border bg-ink-elevated/70 p-4 transition-all hover:border-primary/40">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-ink-muted">Lead Asset Pool</span>
                    <Database className="size-4 text-primary" />
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-display text-2xl font-black text-primary-foreground sm:text-3xl">8M+</span>
                    <span className="text-xs font-bold text-success">+50K Agency</span>
                  </div>
                  <p className="mt-1 text-[11px] text-ink-muted">Verified Decision Makers</p>
                </div>

                <div className="rounded-2xl border border-ink-border bg-ink-elevated/70 p-4 transition-all hover:border-primary/40">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-ink-muted">Inbox Deliverability</span>
                    <ShieldCheck className="size-4 text-brand-light" />
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-display text-2xl font-black text-brand-light sm:text-3xl">99.4%</span>
                    <span className="text-xs font-bold text-success">Optimal</span>
                  </div>
                  <p className="mt-1 text-[11px] text-ink-muted">SPF/DKIM/DMARC active</p>
                </div>

                <div className="rounded-2xl border border-ink-border bg-ink-elevated/70 p-4 transition-all hover:border-primary/40">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-ink-muted">AI Replies Classified</span>
                    <Bot className="size-4 text-ai-bright" />
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-display text-2xl font-black text-primary-foreground sm:text-3xl">24/7</span>
                    <span className="text-xs font-bold text-success">Autonomous</span>
                  </div>
                  <p className="mt-1 text-[11px] text-ink-muted">Intent classification &amp; routing</p>
                </div>

                <div className="rounded-2xl border border-ink-border bg-ink-elevated/70 p-4 transition-all hover:border-primary/40">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-ink-muted">ManyReach Credits</span>
                    <Mail className="size-4 text-success" />
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-display text-2xl font-black text-success sm:text-3xl">20,000</span>
                    <span className="font-display text-xs font-bold text-success">Supplied</span>
                  </div>
                  <p className="mt-1 text-[11px] text-ink-muted">Included with ManyReach</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="rounded-2xl border border-ink-border bg-ink-elevated/50 p-5 lg:col-span-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-display text-xs font-bold uppercase tracking-wider text-primary-foreground">
                      Outreach Scaling &amp; Response Velocity
                    </p>
                    <div className="flex items-center gap-4 text-xs text-ink-muted">
                      <span className="flex items-center gap-1.5">
                        <span className="size-2 rounded-full bg-primary" /> Outreach Volume
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="size-2 rounded-full bg-success" /> Booked Appointments
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <svg viewBox="0 0 500 160" className="h-40 w-full">
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
                      <span>Day 1 (Foundation)</span>
                      <span>Day 14 (Launch)</span>
                      <span>Day 30 (Optimize)</span>
                      <span>Day 60 (Scale)</span>
                      <span>Day 90 (Handoff)</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-ink-border bg-ink-elevated/50 p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-display text-xs font-bold uppercase tracking-wider text-primary-foreground">
                      Live AI Agent Pipeline
                    </p>
                    <span className="size-2 rounded-full bg-success animate-pulse" />
                  </div>
                  <div className="mt-4 space-y-3">
                    <div className="rounded-xl border border-ink-border bg-ink p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-primary-foreground">AI Scraping Agent</span>
                        <span className="rounded bg-success/20 px-1.5 py-0.5 text-[9px] font-bold text-success">
                          ENRICHING
                        </span>
                      </div>
                      <p className="mt-1 line-clamp-1 text-xs text-ink-muted">
                        Scraping 500 agency owners with custom tech stack triggers.
                      </p>
                    </div>
                    <div className="rounded-xl border border-ink-border bg-ink p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-primary-foreground">AI Reply Agent</span>
                        <span className="rounded bg-primary/20 px-1.5 py-0.5 text-[9px] font-bold text-brand-light">
                          ROUTING
                        </span>
                      </div>
                      <p className="mt-1 line-clamp-1 text-xs text-ink-muted">
                        Qualified prospect requested demo link → Calendar booked.
                      </p>
                    </div>
                    <div className="rounded-xl border border-ink-border bg-ink p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-primary-foreground">CRM Sync Workflow</span>
                        <span className="rounded bg-ai/20 px-1.5 py-0.5 text-[9px] font-bold text-ai-bright">
                          AUTOMATED
                        </span>
                      </div>
                      <p className="mt-1 line-clamp-1 text-xs text-ink-muted">
                        Real-time deal stage created &amp; Slack alert dispatched.
                      </p>
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

function IncludedSection() {
  return (
    <section id="included" className="section-space bg-background">
      <div className="page-container">
        <Reveal>
          <div className="max-w-3xl">
            <span className="eyebrow">Everything Included</span>
            <h2 className="section-title mt-5">Core Assets &amp; Deliverables Provided</h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
              We supply the enterprise lead databases, AI agents, ManyReach credits, campaign scripting, and management needed to execute a world-class AI GTM system.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {inclusions.map((item, idx) => (
            <Reveal key={item.title} delay={50 * (idx + 1)}>
              <article className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-soft">
                <div>
                  <div className="flex items-center justify-between">
                    <item.icon className="h-6 w-6 text-primary" />
                    <span className="rounded-full border border-success/30 bg-success/10 px-2.5 py-0.5 text-[10px] font-bold text-success font-display">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-base font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnginePillarsSection() {
  return (
    <section className="section-space bg-soft">
      <div className="page-container">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <span className="eyebrow">What We Build</span>
              <h2 className="section-title mt-5">Six Pillars of Your AI GTM Machine</h2>
            </div>
            <p className="max-w-xl self-end leading-relaxed text-muted-foreground">
              Every layer of your outbound engine is architected to work in harmony—from foundational ICP strategy to autonomous reply classification and team training.
            </p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {enginePillars.map((pillar, idx) => (
            <Reveal key={pillar.number} delay={80 * (idx + 1)}>
              <article className="h-full rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-black uppercase tracking-wider text-primary">
                    {pillar.number}
                  </span>
                  <pillar.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-6 font-display text-lg font-bold">{pillar.title}</h3>
                <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">{pillar.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoadmapSection() {
  return (
    <section id="roadmap" className="section-space bg-background">
      <div className="page-container">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">90-Day AI GTM Blueprint</span>
            <h2 className="section-title mt-5">Launch In 14 Days. Scale For 90 Days.</h2>
            <p className="mt-4 text-muted-foreground">
              <strong className="text-foreground">Important:</strong> We do not wait 90 days to launch. The first 14 days are the launch sprint. The rest of the engagement is focused on making the live system better, more automated, and more scalable.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 space-y-4">
          {roadmap.map((item, idx) => (
            <Reveal key={item.stage} delay={100 * (idx + 1)}>
              <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-4 lg:w-1/4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft font-display text-sm font-bold text-primary">
                    {item.stage}
                  </span>
                  <div>
                    <span className="font-display text-xs font-bold text-primary">{item.period}</span>
                    <h3 className="font-display text-base font-bold text-foreground">{item.title}</h3>
                  </div>
                </div>

                <div className="lg:w-2/5">
                  <p className="text-xs font-semibold text-foreground">{item.focus}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.text}</p>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-border bg-soft px-4 py-3 lg:w-1/4">
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-muted-foreground font-display">
                      Phase Deliverable
                    </span>
                    <strong className="text-xs font-bold text-primary font-display">{item.deliverable}</strong>
                  </div>
                  <BadgeCheck className="size-5 text-primary" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function VariableCostsSection() {
  const [tierIndex, setTierIndex] = useState(2);
  const currentTier = volumeTiers[tierIndex];

  return (
    <section id="variable-costs" className="border-y border-ink-border bg-ink py-16 text-primary-foreground md:py-24">
      <div className="page-container">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow eyebrow-dark">
              <ServerCog className="size-3.5 text-primary" /> Client-Side Variable Infrastructure
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Transparent, Pay-For-What-You-Need Infrastructure
            </h2>
            <div className="mx-auto mt-6 inline-block rounded-2xl border border-primary/40 bg-primary/10 px-6 py-3">
              <span className="font-display text-2xl font-black text-primary sm:text-3xl">$150 – $2,000+</span>
              <span className="ml-2 text-xs font-medium text-ink-muted">Typical client-side infrastructure range</span>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-ink-muted sm:text-base">
              Your <strong className="text-primary-foreground">$347/month</strong> covers our strategy, implementation, optimization, and training. Technology and infrastructure costs are separate and variable because every agency has different outreach requirements.
            </p>
          </div>
        </Reveal>

        {/* Dynamic Volume Estimator */}
        <Reveal scale delay={150}>
          <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-ink-border bg-ink-card p-6 shadow-2xl sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <span className="font-display text-sm font-semibold text-ink-muted sm:text-base">
                Desired Monthly Outreach Scale
              </span>
              <span className="tabular-nums font-display text-xl font-bold text-primary sm:text-2xl">
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
              className="range-input mt-4"
              aria-label="Monthly outreach scale slider"
            />

            <div className="mt-3 flex justify-between font-display text-xs font-medium text-ink-muted">
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

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-ink-border pt-6 sm:grid-cols-3">
              <div className="rounded-xl border border-ink-border bg-ink-elevated p-4 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">Est. Inboxes Needed</p>
                <strong className="mt-1 block font-display text-2xl font-bold text-primary-foreground">
                  {currentTier.inboxes}
                </strong>
                <span className="text-[10px] text-ink-muted">Warmed &amp; Rotated</span>
              </div>
              <div className="rounded-xl border border-ink-border bg-ink-elevated p-4 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">Est. Variable Spend</p>
                <strong className="mt-1 block font-display text-2xl font-bold text-brand-light">
                  {currentTier.estInfra}
                </strong>
                <span className="text-[10px] text-ink-muted">Domains &amp; Inboxes</span>
              </div>
              <div className="col-span-2 rounded-xl border border-primary/40 bg-primary/10 p-4 text-center sm:col-span-1">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">BrndGuru Retainer</p>
                <strong className="mt-1 block font-display text-2xl font-bold text-primary">$347 / mo</strong>
                <span className="text-[10px] text-primary/80">Strategy &amp; Management</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 9 Cost Factors Grid */}
        <div className="mt-14">
          <Reveal>
            <h3 className="text-center font-display text-xl font-bold text-primary-foreground">
              9 Factors That Determine Your Variable Technology Spend
            </h3>
            <p className="mt-2 text-center text-xs text-ink-muted">
              Simple Rule: You only pay for the infrastructure your GTM system actually requires. We build and manage the system around it.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {variableFactors.map((factor, idx) => (
              <Reveal key={factor.name} delay={60 * (idx + 1)}>
                <div className="h-full rounded-2xl border border-ink-border bg-ink-card p-5 transition-all hover:border-primary/50">
                  <div className="flex items-center gap-2">
                    <CircleCheck className="size-4 text-primary" />
                    <strong className="font-display text-sm font-bold text-primary-foreground">{factor.name}</strong>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-ink-muted">{factor.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
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
            <span className="eyebrow">Program Investment</span>
            <h2 className="section-title mt-5">Transparent &amp; Predictable Pricing</h2>
            <p className="mt-4 text-muted-foreground">
              Launch fast in 14 days, then compound your momentum with 90 days of dedicated execution.
            </p>
          </div>
        </Reveal>

        <Reveal scale delay={150}>
          <div className="mt-12 grid overflow-hidden rounded-3xl border border-border bg-card shadow-card lg:grid-cols-[1.1fr_.9fr]">
            <div className="p-7 sm:p-10">
              <span className="font-display text-xs font-bold uppercase tracking-wider text-primary">
                Program Structure
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold text-foreground">
                AI GTM Agency Accelerator
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The first 14 days are focused on getting the core system operational. The following weeks are where the value compounds: we test live workflows, identify bottlenecks, improve agents and prompts, optimize targeting and messaging, automate repetitive tasks, document the system, and train your team.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 rounded-xl border border-border bg-soft p-4">
                  <Rocket className="mt-0.5 size-5 text-primary" />
                  <div>
                    <strong className="block font-display text-sm font-bold text-foreground">
                      14-Day Launch Sprint
                    </strong>
                    <span className="text-xs text-muted-foreground">
                      Core AI GTM system designed, built, and launched LIVE into the market.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-border bg-soft p-4">
                  <Activity className="mt-0.5 size-5 text-success" />
                  <div>
                    <strong className="block font-display text-sm font-bold text-foreground">
                      90-Day Implementation &amp; Scaling
                    </strong>
                    <span className="text-xs text-muted-foreground">
                      Continuous optimization, prompt refinement, automation, SOP documentation, and team training.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="dark-grid flex flex-col justify-between p-7 text-primary-foreground sm:p-10">
              <div>
                <span className="text-xs font-bold uppercase text-ink-muted">Fixed Service Retainer</span>
                <div className="mt-3 flex items-baseline gap-2">
                  <strong className="font-display text-4xl font-bold text-primary sm:text-5xl">$347</strong>
                  <span className="text-sm font-semibold text-ink-muted">/ month</span>
                </div>
                <p className="mt-2 text-xs font-semibold text-brand-light">90-Day Minimum Implementation Commitment</p>
                <div className="my-6 border-t border-ink-border" />
                <ul className="space-y-2.5 text-xs text-ink-muted">
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-primary" /> Covers Strategy, Implementation &amp; Training
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-primary" /> 8M+ B2B Leads + 50K Agency Leads Included
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-primary" /> 20K ManyReach Email Credits Included
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-primary" /> Full Team Training &amp; SOP Documentation
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <CtaButton>Apply for Accelerator</CtaButton>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Implementation Commitment Box */}
        <Reveal delay={250}>
          <div className="mt-8 rounded-2xl border border-primary/40 bg-card p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="size-6 text-primary" />
              <h3 className="font-display text-lg font-bold text-foreground">
                Our Implementation Commitment
              </h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              If an agreed implementation component has not been delivered because of our side, we continue hands-on implementation support at no additional management fee until that agreed component is completed, subject to required client access, timely feedback, and required third-party tools/accounts being available.
            </p>
          </div>
        </Reveal>

        {/* 12 Post-Program Outcomes */}
        <div className="mt-14">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">Program Deliverables</span>
              <h3 className="mt-2 font-display text-2xl font-bold text-foreground">
                12 Post-Program Outcomes You Walk Away With
              </h3>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((outcome, idx) => (
              <Reveal key={outcome} delay={40 * (idx + 1)}>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:border-primary/40">
                  <CircleCheck className="size-4 shrink-0 text-success" />
                  <span className="font-display text-xs font-bold text-foreground">{outcome}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
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
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2 className="section-title mt-5">Everything You Need To Know</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Have questions about the 14-day launch sprint, variable infrastructure, or 90-day implementation? Find answers below.
            </p>
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
            Launch Fast. Optimize. Scale.
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold leading-tight sm:text-5xl">
            Ready To Launch Your AI GTM Engine?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Book a 30-minute strategy call with Shivanshu Kumar to map out your ICP, architecture, and 14-day launch sprint.
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
          <p className="mt-3 text-xs text-ink-muted">AI GTM Agency Accelerator • Shivanshu Kumar / BrndGuru</p>
        </div>
        <div className="flex flex-wrap gap-6 text-xs text-ink-muted">
          <a href="#ecosystem" className="hover:text-primary-foreground">
            Ecosystem
          </a>
          <a href="#included" className="hover:text-primary-foreground">
            Included Assets
          </a>
          <a href="#roadmap" className="hover:text-primary-foreground">
            90-Day Blueprint
          </a>
          <a href="#variable-costs" className="hover:text-primary-foreground">
            Infrastructure
          </a>
          <a href="#investment" className="hover:text-primary-foreground">
            Investment
          </a>
          <a href="#faq" className="hover:text-primary-foreground">
            FAQ
          </a>
          <a href="#strategy-call" className="inline-flex items-center gap-1 text-brand-light">
            Book a call <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
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
      <EcosystemSection />
      <LiveCommandCenterSection />
      <IncludedSection />
      <EnginePillarsSection />
      <RoadmapSection />
      <VariableCostsSection />
      <InvestmentSection />
      <FaqSection />
      <FinalCta />
      <Footer />
    </main>
  );
}