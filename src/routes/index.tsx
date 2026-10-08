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
  Globe2,
  GraduationCap,
  Layers,
  Mail,
  Menu,
  MessageSquareText,
  Play,
  Rocket,
  Search,
  ServerCog,
  Settings2,
  ShieldCheck,
  Sparkles,
  Star,
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
  { volume: "25,000", inboxes: 25, leads: "15,000", meetings: "5–8", estInfra: "$250–$450", label: "25k / mo" },
  { volume: "50,000", inboxes: 50, leads: "30,000", meetings: "8–12", estInfra: "$450–$850", label: "50k / mo" },
  { volume: "100,000", inboxes: 100, leads: "60,000", meetings: "10–20", estInfra: "$850–$1,450", label: "100k / mo" },
  { volume: "150,000", inboxes: 150, leads: "90,000", meetings: "20–35", estInfra: "$1,200–$1,750", label: "150k / mo" },
  { volume: "200,000", inboxes: 200, leads: "120,000", meetings: "35–50+", estInfra: "$1,450–$2,000+", label: "200k / mo" },
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
      className="h-12 rounded-full px-8 font-display font-bold shadow-soft transition-all duration-300 hover:-translate-y-0.5"
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
    <div className="sticky top-0 z-50 w-full transition-colors duration-200">
      {/* ListKit-style Top Announcement Bar */}
      <a
        href="#strategy-call"
        className="block w-full bg-primary px-4 py-2 text-center text-[12px] font-semibold leading-snug tracking-[-0.2px] text-primary-foreground transition-colors hover:bg-primary/90 sm:text-[13px]"
      >
        <span aria-hidden="true" className="mr-1.5">🚀</span>
        <strong>14-Day AI GTM Launch Sprint</strong> • 90-Day Hands-on Implementation &amp; Optimization for just <strong>$347/month</strong> →
      </a>

      <header className="border-b border-border/80 bg-background/90 backdrop-blur-xl transition-all duration-300">
        <div className="page-container flex h-[66px] items-center justify-between gap-6 py-2">
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
              className="hidden rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-soft transition-transform duration-200 hover:scale-[1.03] sm:inline-flex sm:text-sm"
            >
              <a href="#strategy-call">Book a Strategy Call →</a>
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
                  className="w-full rounded-full bg-primary font-semibold text-primary-foreground shadow-soft"
                >
                  <a href="#strategy-call" onClick={() => setOpen(false)}>
                    Book a Strategy Call →
                  </a>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </header>
    </div>
  );
}

function Hero() {
  const rotatingWords = ["14 Days", "24/7 Speed", "90-Day Scale"];
  const [rotIndex, setRotIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"scraping" | "replies" | "infra">("scraping");

  useEffect(() => {
    const interval = setInterval(() => {
      setRotIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[radial-gradient(45%_60%_at_2%_50%,rgba(255,107,0,0.13),transparent_70%),radial-gradient(42%_58%_at_98%_52%,rgba(255,107,0,0.11),transparent_70%)] px-5 pb-16 pt-12 text-foreground sm:px-8 md:py-20"
    >
      <div className="relative z-10 mx-auto flex max-w-[1040px] flex-col items-center gap-10 sm:gap-12">
        {/* Top Header Group (ListKit Style) */}
        <div className="flex w-full flex-col items-center gap-6">
          <div className="flex w-full flex-col items-center gap-4">
            {/* Clean Pill Eyebrow */}
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-center text-[13px] font-semibold tracking-[-0.15px] text-primary sm:text-sm">
                <Sparkles className="size-3.5 text-primary" /> AI GTM Agency Accelerator • Launch Fast. Optimize. Scale.
              </span>
            </Reveal>

            {/* Giant Clean Headline with Animated Rotator */}
            <Reveal delay={100}>
              <h1
                id="hero-heading"
                className="text-balance text-center text-[34px] font-bold leading-[1.04] tracking-[-0.05em] text-foreground sm:text-[52px] md:text-[72px]"
              >
                <span className="block">
                  Launch your <span className="text-primary">AI GTM System</span> in{" "}
                  <span className="relative inline-block align-baseline font-[inherit] leading-[inherit] tabular-nums text-primary">
                    <span className="invisible px-1">{rotatingWords[rotIndex]}</span>
                    <span
                      key={rotatingWords[rotIndex]}
                      className="animate-rotnum-in absolute inset-0 text-center font-bold text-primary underline decoration-primary decoration-[3.5px] underline-offset-8"
                    >
                      {rotatingWords[rotIndex]}
                    </span>
                  </span>
                  , <span className="text-primary">immediately.</span>
                </span>
              </h1>
            </Reveal>
          </div>

          {/* Clean Subtitle Paragraph (ListKit Style with Underline & Highlight Box) */}
          <Reveal delay={200}>
            <p className="max-w-3xl text-center text-base font-medium leading-[1.38] tracking-[-0.025em] text-muted-foreground sm:text-xl md:text-2xl">
              With BrndGuru, you launch high-volume AI cold email systems in 14 days: domains, inboxes, warmup, 8M+ leads, verification, AI scraping &amp; reply agents, and 20K ManyReach credits.{" "}
              <span className="underline decoration-primary decoration-[3px] underline-offset-4 font-semibold text-foreground">
                No paying thousands for disconnected agencies or tools
              </span>{" "}
              — it&apos;s all built, managed, and scaled for just $347/month.{" "}
              <span className="box-decoration-clone rounded-[6px] bg-primary/15 px-2 py-0.5 text-foreground font-semibold">
                The only hands-on AI GTM accelerator that does this.
              </span>
            </p>
          </Reveal>

          {/* Dual Pill CTA Buttons & Fast Direct Apply (ListKit Style) */}
          <Reveal delay={250}>
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#strategy-call"
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-primary bg-primary px-8 py-4 text-base font-semibold leading-none tracking-[-0.03em] text-primary-foreground shadow-[0_4px_16px_-2px_rgba(255,107,0,0.4)] transition-all duration-150 hover:bg-primary/90 hover:scale-[1.02] sm:text-lg"
                >
                  Book a Strategy Call <ArrowRight className="size-4" />
                </a>
                <a
                  href="#roadmap"
                  className="inline-flex cursor-pointer items-center justify-center rounded-full border border-border bg-card px-8 py-4 text-base font-semibold leading-none tracking-[-0.03em] text-foreground shadow-sm transition-colors duration-150 hover:border-primary/40 hover:bg-muted sm:text-lg"
                >
                  Explore 90-Day Blueprint
                </a>
              </div>

              <p className="text-center text-[14px] font-medium tracking-[-0.02em] text-muted-foreground sm:text-[15px]">
                When you sign up, the strategy, scraping agents &amp; inboxes are launched in 14 days. Zero tech headache.
              </p>

              <a
                href="#investment"
                className="mt-1 inline-flex cursor-pointer flex-col items-center gap-1 rounded-full border border-primary/30 bg-card px-7 py-3 text-center shadow-[0_4px_14px_-2px_rgba(255,107,0,0.15)] transition-all duration-150 hover:bg-primary-soft/30 hover:border-primary/60"
              >
                <span className="inline-flex items-center gap-2 text-[16px] font-bold tracking-[-0.03em] text-primary sm:text-[17px]">
                  Or Apply Directly For The Accelerator Now <ArrowRight className="size-4" />
                </span>
                <span className="text-[12px] font-medium tracking-[-0.02em] text-muted-foreground sm:text-[13px]">
                  skip the discovery call, start your 14-day launch sprint
                </span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Social Proof Trust Bar (ListKit Style) */}
        <Reveal delay={300}>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-semibold tracking-[-0.02em] text-foreground sm:text-sm">
            <span>8M+ triple-verified leads</span>
            <span aria-hidden="true" className="text-muted-foreground font-normal">•</span>
            <span>50K Agency Owners</span>
            <span aria-hidden="true" className="text-muted-foreground font-normal">•</span>
            <span>20K ManyReach Credits</span>
            <span aria-hidden="true" className="text-muted-foreground font-normal">•</span>
            <span>99.4% Deliverability</span>
            <span aria-hidden="true" className="text-muted-foreground font-normal">•</span>
            <div className="inline-flex items-center gap-1.5">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-3.5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="font-bold">Top Rated GTM Engine – 4.9/5</span>
            </div>
          </div>
        </Reveal>

        {/* ListKit-Style Interactive Showcase Window */}
        <Reveal scale delay={350} className="w-full">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
            {/* Window Titlebar with Tab Switchers */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/50 px-5 py-3.5">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-destructive/80" />
                <span className="size-3 rounded-full bg-warning/80" />
                <span className="size-3 rounded-full bg-success/80" />
                <span className="ml-2 rounded-lg border border-border bg-background px-3 py-1 font-mono text-[11px] text-muted-foreground">
                  gtm.brndguru.com/ai-engine
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-2.5 py-1 text-xs font-semibold text-success">
                  <span className="size-2 rounded-full bg-success animate-pulse" /> Live AI Engine
                </span>
              </div>
            </div>

            {/* Interactive Tab Controls */}
            <div className="grid grid-cols-3 border-b border-border bg-card text-center text-xs font-bold sm:text-sm">
              <button
                type="button"
                onClick={() => setActiveTab("scraping")}
                className={`flex items-center justify-center gap-2 border-b-2 py-3.5 transition-all ${
                  activeTab === "scraping"
                    ? "border-primary bg-primary-soft/30 text-primary font-bold"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <Bot className="size-4 text-primary" />
                <span className="hidden sm:inline">01</span> AI Lead Scraping
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("replies")}
                className={`flex items-center justify-center gap-2 border-b-2 py-3.5 transition-all ${
                  activeTab === "replies"
                    ? "border-primary bg-primary-soft/30 text-primary font-bold"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <MessageSquareText className="size-4 text-primary" />
                <span className="hidden sm:inline">02</span> AI Reply Agent
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("infra")}
                className={`flex items-center justify-center gap-2 border-b-2 py-3.5 transition-all ${
                  activeTab === "infra"
                    ? "border-primary bg-primary-soft/30 text-primary font-bold"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <ShieldCheck className="size-4 text-primary" />
                <span className="hidden sm:inline">03</span> Deliverability &amp; Inboxes
              </button>
            </div>

            {/* Tab 1: AI Scraping & Lead Enrichment */}
            {activeTab === "scraping" && (
              <div className="p-6 sm:p-8 animate-in fade-in duration-300">
                <div className="grid gap-6 lg:grid-cols-3">
                  <div className="lg:col-span-2 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-display">
                        Active Lead Extraction Feed (8M+ Database)
                      </span>
                      <span className="rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary font-display">
                        Auto-Enriching
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {[
                        {
                          name: "Alex Vance",
                          title: "CEO & Founder",
                          company: "ScaleGrowth Media (US)",
                          email: "alex@scalegrowth.io",
                          tech: "HubSpot • Shopify • ManyReach",
                          badge: "Triple-Verified",
                        },
                        {
                          name: "Elena Rostova",
                          title: "Head of Marketing",
                          company: "Apex Tech Agency (US)",
                          email: "elena@apextech.com",
                          tech: "Salesforce • Klaviyo • Stripe",
                          badge: "50K Agency List",
                        },
                        {
                          name: "David Sterling",
                          title: "Managing Director",
                          company: "Sterling B2B Partners",
                          email: "david@sterlingb2b.com",
                          tech: "ActiveCampaign • Apollo",
                          badge: "Triple-Verified",
                        },
                      ].map((lead) => (
                        <div
                          key={lead.email}
                          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-border bg-soft p-3.5 transition-all hover:border-primary/40 hover:bg-card"
                        >
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <strong className="text-sm font-bold text-foreground font-display">{lead.name}</strong>
                              <span className="text-xs text-muted-foreground">· {lead.title}</span>
                            </div>
                            <p className="text-xs text-muted-foreground truncate">{lead.company} · {lead.email}</p>
                            <span className="mt-1 inline-block text-[10px] text-primary font-medium font-mono">{lead.tech}</span>
                          </div>
                          <span className="shrink-0 rounded-full border border-success/30 bg-success/10 px-2.5 py-0.5 text-[11px] font-bold text-success">
                            ✓ {lead.badge}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border bg-soft p-5 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-display">
                        Asset Summary
                      </span>
                      <strong className="mt-2 block font-display text-3xl font-black text-primary">8M+ Leads</strong>
                      <p className="mt-1 text-xs text-muted-foreground">Pre-filtered by role, revenue, industry, and tech stack.</p>
                      
                      <div className="mt-4 space-y-2 border-t border-border pt-3 text-xs">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Agency Owners Asset:</span>
                          <strong className="text-foreground">50,000 Leads</strong>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">USA Business Data:</span>
                          <strong className="text-foreground">Included</strong>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Zero-Bounce Target:</span>
                          <strong className="text-success">&lt; 1.5% Bounce</strong>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 rounded-xl border border-primary/30 bg-primary/10 p-3 text-center">
                      <span className="text-[11px] font-bold text-primary">All Lead Assets Supplied From Day 1</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: AI Reply Agent */}
            {activeTab === "replies" && (
              <div className="p-6 sm:p-8 animate-in fade-in duration-300">
                <div className="grid gap-6 lg:grid-cols-3">
                  <div className="lg:col-span-2 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-display">
                        Incoming Prospect Stream &amp; Automated Classification
                      </span>
                      <span className="size-2 rounded-full bg-success animate-pulse" />
                    </div>

                    <div className="space-y-3">
                      <div className="rounded-xl border border-border bg-soft p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-foreground">Marcus Chen · VP Growth</span>
                          <span className="rounded bg-success/20 px-2 py-0.5 text-[10px] font-bold text-success font-display">
                            BOOKED DEMO
                          </span>
                        </div>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                          &ldquo;We need to scale outreach to 50k emails next month. Let&apos;s do Thursday at 2:00 PM.&rdquo;
                        </p>
                        <div className="mt-2.5 flex items-center gap-2 text-[11px] font-semibold text-primary">
                          <Check className="size-3.5" /> AI Reply Agent synced calendar invite &amp; updated CRM deal stage.
                        </div>
                      </div>

                      <div className="rounded-xl border border-border bg-soft p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-foreground">Sarah Jenkins · Founder</span>
                          <span className="rounded bg-primary/20 px-2 py-0.5 text-[10px] font-bold text-primary font-display">
                            INTERESTED
                          </span>
                        </div>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                          &ldquo;Can you share how your ManyReach integration and scraping workflows work?&rdquo;
                        </p>
                        <div className="mt-2.5 flex items-center gap-2 text-[11px] font-semibold text-primary">
                          <Bot className="size-3.5" /> AI Reply Agent drafted contextual case study response in 45 seconds.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border bg-soft p-5 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-display">
                        Agent Performance
                      </span>
                      <strong className="mt-2 block font-display text-3xl font-black text-primary">24/7</strong>
                      <p className="mt-1 text-xs text-muted-foreground">Instant classification, objection handling &amp; routing.</p>
                      
                      <div className="mt-4 space-y-2 border-t border-border pt-3 text-xs">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Avg Response Time:</span>
                          <strong className="text-foreground">&lt; 90 Seconds</strong>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Classification Accuracy:</span>
                          <strong className="text-success">98.8%</strong>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Appointment Workflow:</span>
                          <strong className="text-foreground">Synced Live</strong>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 rounded-xl border border-success/30 bg-success/10 p-3 text-center">
                      <span className="text-[11px] font-bold text-success">Zero Leads Lost in Inboxes</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Sending Infrastructure & Inboxes */}
            {activeTab === "infra" && (
              <div className="p-6 sm:p-8 animate-in fade-in duration-300">
                <div className="grid gap-6 lg:grid-cols-3">
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-display">
                        Multi-Domain Inbox Warmup &amp; Rotation Pool
                      </span>
                      <span className="rounded-md border border-success/30 bg-success/10 px-2 py-0.5 text-[10px] font-bold text-success font-display">
                        99.4% Inbox Rate
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {["domain-alpha.com", "reach-engine.co", "agency-gtm.net", "get-scale.io", "outbound-flow.com", "brnd-pipeline.org"].map((domain, i) => (
                        <div key={domain} className="rounded-xl border border-border bg-soft p-3 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[11px] font-semibold text-foreground truncate">{domain}</span>
                            <span className="size-1.5 rounded-full bg-success" />
                          </div>
                          <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
                            <span>Inboxes: 2/2</span>
                            <span className="text-success font-bold">100% Score</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-xl border border-border bg-soft p-3.5 text-xs text-muted-foreground flex items-center gap-3">
                      <ShieldCheck className="size-5 text-primary shrink-0" />
                      <span>SPF, DKIM, DMARC, MX, and Custom Tracking Domains configured automatically on secondary domains.</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border bg-soft p-5 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-display">
                        Included Credits
                      </span>
                      <strong className="mt-2 block font-display text-3xl font-black text-primary">20,000</strong>
                      <p className="mt-1 text-xs text-muted-foreground">ManyReach.com email credits provided from our side.</p>
                      
                      <div className="mt-4 space-y-2 border-t border-border pt-3 text-xs">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Domain Protection:</span>
                          <strong className="text-foreground">Full Isolation</strong>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Sending Warmup:</span>
                          <strong className="text-success">Automated Gradual</strong>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Rotation Logic:</span>
                          <strong className="text-foreground">24/7 Smart Cycle</strong>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 rounded-xl border border-primary/30 bg-primary/10 p-3 text-center">
                      <span className="text-[11px] font-bold text-primary">Zero Spam Friction Guaranteed</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
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

const techIntegrations = [
  {
    category: "Lead Data & AI Enrichment",
    description: "Multi-source prospect intelligence, 8M+ database, and zero-bounce scrubbing.",
    tools: [
      { name: "8M+ B2B Database", role: "Verified Decision Makers", badge: "Lead Asset" },
      { name: "50K Agency Owners", role: "Dedicated Prospect Pool", badge: "Included" },
      { name: "Clay & Apollo", role: "Waterfall Data Enrichment", badge: "Enrichment" },
      { name: "AI Scraping Agent", role: "Custom Trigger Research", badge: "Autonomous" },
    ],
  },
  {
    category: "Sending & Deliverability",
    description: "Multi-domain infrastructure isolated from your primary brand domain.",
    tools: [
      { name: "ManyReach.com", role: "20K Email Credits Provided", badge: "Credits Included" },
      { name: "Smartlead / Instantly", role: "Warmup & Inbox Rotation", badge: "Deliverability" },
      { name: "Google & Microsoft", role: "Secondary Sending Inboxes", badge: "Infrastructure" },
      { name: "DNS Architecture", role: "SPF / DKIM / DMARC / MX", badge: "Security" },
    ],
  },
  {
    category: "AI Replies & CRM Sync",
    description: "Automatic meeting creation and pipeline reporting directly to your team.",
    tools: [
      { name: "AI Reply Agent", role: "Intent Classification & Routing", badge: "24/7 Handling" },
      { name: "HubSpot / Salesforce", role: "Deal Stage & Pipeline Sync", badge: "CRM" },
      { name: "Calendly / Cal.com", role: "Frictionless Meeting Booking", badge: "Calendar" },
      { name: "Slack / Webhooks", role: "Real-Time Booked Demo Alerts", badge: "Telemetry" },
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
              <Layers className="size-3.5 text-primary" /> Connected Architecture
            </span>
            <h2 className="section-title mt-5">
              Built On Modern AI &amp; Outbound Infrastructure
            </h2>
            <p className="mt-4 text-ink-muted">
              We configure, connect, and manage the full technology stack so your agency never has to deal with configuration overhead.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {techIntegrations.map((group, idx) => (
            <Reveal key={group.category} delay={100 * (idx + 1)}>
              <div className="flex h-full flex-col justify-between rounded-3xl border border-ink-border bg-ink-card/90 p-7 shadow-soft">
                <div>
                  <span className="font-display text-xs font-bold uppercase tracking-wider text-brand-light">
                    {group.category}
                  </span>
                  <p className="mt-1 text-xs text-ink-muted">{group.description}</p>
                  <div className="mt-6 space-y-3">
                    {group.tools.map((tool) => (
                      <div
                        key={tool.name}
                        className="flex items-center justify-between rounded-xl border border-ink-border bg-ink-elevated p-3.5 transition-all hover:border-primary/50"
                      >
                        <div>
                          <strong className="block font-display text-sm font-bold text-primary-foreground">
                            {tool.name}
                          </strong>
                          <span className="text-[11px] text-ink-muted">{tool.role}</span>
                        </div>
                        <span className="rounded-md border border-ink-border bg-ink px-2 py-0.5 font-display text-[10px] font-semibold text-primary">
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
    <section className="section-space bg-background">
      <div className="page-container">
        <Reveal>
          <div className="max-w-3xl">
            <span className="eyebrow">A Better Operating Model</span>
            <h2 className="section-title mt-5">The Old Way vs. The AI GTM Accelerator</h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal delay={100}>
            <article className="h-full rounded-2xl border border-border bg-soft p-7 sm:p-9">
              <p className="font-display text-xs font-bold uppercase text-muted-foreground">The Old Fragmented Way</p>
              <h3 className="mt-4 font-display text-2xl font-bold text-foreground">Tools Without An Operator</h3>
              <ul className="mt-8 space-y-4 text-sm text-muted-foreground">
                {[
                  "Paying separate monthly subscriptions for data, inboxes, warmup, and AI tools",
                  "Your team spends hours troubleshooting deliverability and DNS records",
                  "Generic cold email templates with low reply and meeting conversion rates",
                  "Replies sit unclassified in inboxes while opportunities slip away",
                  "Expensive agency retainers ($3,000–$5,000/mo) with zero internal team training",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <X className="h-5 w-5 shrink-0 text-destructive" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
          <Reveal delay={200}>
            <article className="h-full rounded-2xl border border-primary/40 bg-card p-7 shadow-soft sm:p-9">
              <p className="font-display text-xs font-bold uppercase text-primary">The Accelerator Model</p>
              <h3 className="mt-4 font-display text-2xl font-bold text-foreground">One Unified GTM System ($347/mo)</h3>
              <ul className="mt-8 space-y-4 text-sm text-foreground">
                {[
                  "14-Day Launch Sprint: core AI GTM engine live and sending into the market",
                  "8M+ B2B Leads, 50K Agency Leads & 20K ManyReach email credits included",
                  "24/7 AI Scraping Agent & AI Reply Agent handle research and calendar routing",
                  "90 days of hands-on optimization, prompt refinement, and continuous scaling",
                  "Full SOP documentation and team handover so your team owns the asset forever",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check className="h-5 w-5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
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

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-ink-border pt-6 sm:grid-cols-4">
              <div className="rounded-xl border border-ink-border bg-ink-elevated p-4 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">Dedicated Inboxes</p>
                <strong className="mt-1 block font-display text-2xl font-bold text-primary-foreground">
                  {currentTier.inboxes}
                </strong>
                <span className="text-[10px] text-ink-muted">Warmed &amp; Rotated</span>
              </div>
              <div className="rounded-xl border border-ink-border bg-ink-elevated p-4 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">Verified Prospects</p>
                <strong className="mt-1 block font-display text-2xl font-bold text-brand-light">
                  {currentTier.leads}
                </strong>
                <span className="text-[10px] text-ink-muted">Zero-Bounce Target</span>
              </div>
              <div className="rounded-xl border border-ink-border bg-ink-elevated p-4 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">Est. Booked Calls</p>
                <strong className="mt-1 block font-display text-2xl font-bold text-success">
                  {currentTier.meetings}
                </strong>
                <span className="text-[10px] font-semibold text-success">Per Month</span>
              </div>
              <div className="rounded-xl border border-ink-border bg-ink-elevated p-4 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">Management</p>
                <strong className="mt-1 block font-display text-2xl font-bold text-primary">
                  100%
                </strong>
                <span className="text-[10px] text-ink-muted">Fully Done For You</span>
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

const testimonials = [
  {
    name: "Austin O.",
    role: "Founder & CEO",
    company: "CloudScale SaaS",
    metric: "+$142,000 Pipeline Added",
    rating: 5,
    quote:
      "We launched our complete AI GTM system in 12 days. The AI reply agent and 50 inboxes booked 38 qualified demos in our very first month while our team stayed 100% focused on closing.",
  },
  {
    name: "Marcus T.",
    role: "Head of Growth",
    company: "Apex Media Agency",
    metric: "99.4% Deliverability Rate",
    rating: 5,
    quote:
      "Setting up secondary domains, warmup schedules, and Clay enrichment used to take us weeks. Shivanshu and the BrndGuru team had our engine live in under two weeks at a fraction of traditional agency costs.",
  },
  {
    name: "Sarah K.",
    role: "VP of Revenue",
    company: "Nexus Technologies",
    metric: "18 Qualified Meetings / Mo",
    rating: 5,
    quote:
      "The 8M+ verified lead database combined with ManyReach automation gave us predictable meetings every single week. Best $347/month investment our agency has ever made.",
  },
];

function TestimonialsSection() {
  return (
    <section className="section-space bg-background">
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
            <h2 className="section-title mt-5">Loved By Agency Founders &amp; B2B Leaders</h2>
            <p className="mt-4 text-muted-foreground">
              See how fast-growing agencies launch and scale their outbound pipeline with the AI GTM Accelerator.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <Reveal key={t.name} delay={120 * (idx + 1)}>
              <div className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 sm:p-8">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-500">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="size-3.5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <span className="font-display rounded-full border border-success/30 bg-success/10 px-2.5 py-0.5 text-[11px] font-bold text-success">
                      {t.metric}
                    </span>
                  </div>
                  <p className="font-sans mt-5 text-sm leading-relaxed text-foreground sm:text-base">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-6 border-t border-border pt-4">
                  <strong className="block font-display text-base font-bold text-foreground">{t.name}</strong>
                  <span className="text-xs text-muted-foreground">
                    {t.role} · {t.company}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="section-space bg-soft">
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
            Stop Chasing. Start Closing.
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold leading-tight sm:text-5xl">
            Let&apos;s Build Your Predictable Pipeline.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Book a 30-minute strategy call with Shivanshu Kumar to map out your ICP, AI ecosystem architecture, and 14-day launch sprint.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <CtaButton>Book Your Strategy Call</CtaButton>
            <div className="flex items-center gap-4 text-xs text-ink-muted">
              <span className="flex items-center gap-1.5"><Check className="size-3.5 text-primary" /> 30 Min Strategy Call</span>
              <span className="text-ink-border">•</span>
              <span className="flex items-center gap-1.5"><Check className="size-3.5 text-primary" /> No Obligation</span>
            </div>
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
          <a href="/deck" className="hover:text-primary-foreground">
            Sales Deck
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
      <IncludedSection />
      <EnginePillarsSection />
      <TechStackSection />
      <OldWaySection />
      <RoadmapSection />
      <VariableCostsSection />
      <InvestmentSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCta />
      <Footer />
    </main>
  );
}