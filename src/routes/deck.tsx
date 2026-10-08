import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  Building2,
  CalendarCheck,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Database,
  ExternalLink,
  GraduationCap,
  HelpCircle,
  Layers,
  LayoutGrid,
  Mail,
  Maximize2,
  Minimize2,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
  StickyNote,
  Target,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

import brndGuruLogo from "@/assets/brndguru-logo.png.asset.json";

export const Route = createFileRoute("/deck")({
  head: () => ({
    meta: [
      { title: "AI GTM Rev Engine™ Sales Deck — BRND GURU" },
      {
        name: "description",
        content:
          "Interactive sales presentation for the BRND GURU AI GTM Email Rev Engine. Internal sales tool.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "AI GTM Rev Engine™ Sales Deck — BRND GURU" },
      {
        property: "og:description",
        content:
          "Interactive sales presentation for the BRND GURU AI GTM Email Rev Engine. White & Orange Theme.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: DeckPage,
});

interface SlideData {
  id: number;
  category: string;
  kicker: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  notes: string;
  content: ReactNode;
}

const slides: SlideData[] = [
  // Slide 1: Cover
  {
    id: 1,
    category: "OFFER",
    kicker: "AI GTM Agency Accelerator — Done-With-You & Done-For-You",
    title: "Launch Your AI-Powered GTM Engine in 14 Days.",
    titleHighlight: "Scale It For 90 Days.",
    subtitle:
      "Hands-on implementation, training, automation, and 24/7 cold email execution — for $347/month.",
    notes:
      "Welcome the prospect. Introduce the core value proposition: we build an automated 24/7 outbound machine with them in 14 days, then spend the next 90 days scaling it, tuning AI prompts, and training their team to run it independently.",
    content: (
      <div className="flex flex-1 flex-col justify-center">
        <div className="max-w-4xl">
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 font-display text-sm font-bold text-primary shadow-sm">
              <Zap className="size-4 text-primary" />
              14-Day Launch Sprint
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-5 py-2.5 font-display text-sm font-semibold text-zinc-700">
              <Sparkles className="size-4 text-amber-500" />
              90-Day Hands-on Scale
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-5 py-2.5 font-display text-sm font-semibold text-zinc-700">
              <Mail className="size-4 text-primary" />
              24/7 Outbound Automation
            </span>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-sm backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">Lead Fuel</p>
              <p className="mt-2 font-display text-2xl font-extrabold text-zinc-900">8M+ Leads</p>
              <p className="mt-1 text-xs text-zinc-500">Verified B2B & agency data included from day 1.</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-sm backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">Outbound Credits</p>
              <p className="mt-2 font-display text-2xl font-extrabold text-zinc-900">20K Credits</p>
              <p className="mt-1 text-xs text-zinc-500">Provided directly from our side via ManyReach.</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-sm backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">Flat Investment</p>
              <p className="mt-2 font-display text-2xl font-extrabold text-zinc-900">$347 / mo</p>
              <p className="mt-1 text-xs text-zinc-500">No bloated $5k retainers. Total ownership.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 2: The Core Problem
  {
    id: 2,
    category: "MARKET PROBLEM",
    kicker: "The Cold Outbound Dilemma",
    title: "Why Traditional Agency Outreach",
    titleHighlight: "Fails to Scale",
    subtitle:
      "Most agencies waste thousands on fragmented tools, burned domains, and slow manual processes.",
    notes:
      "Point out the contrast: cold email works, but piecemeal execution fails. Agencies hire expensive SDRs ($4k/mo) or pay $3k–$5k retainers to agencies that hide data and lock them out.",
    content: (
      <div className="mt-6 grid flex-1 grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col justify-between rounded-2xl border border-red-200 bg-red-50/40 p-8 shadow-sm">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-100/60 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-red-700">
              The Broken Old Way
            </div>
            <h3 className="mt-4 font-display text-xl font-bold text-zinc-900">
              Fragmented Tools & Burning Cash
            </h3>
            <ul className="mt-6 space-y-3.5 text-sm text-zinc-600">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">
                  ✕
                </span>
                <span>Scattered VAs and manual list scraping with 30%+ bounce rates.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">
                  ✕
                </span>
                <span>Burned primary domains due to poor DNS & warmup protocols.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">
                  ✕
                </span>
                <span>24–48 hour delay answering replies — losing prospects to competitors.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">
                  ✕
                </span>
                <span>Paying $3,000–$5,000/month retainers with zero collateral ownership.</span>
              </li>
            </ul>
          </div>
          <p className="mt-6 text-xs text-red-700 font-medium">Outcome: High costs, zero predictability, wasted pipeline.</p>
        </div>

        <div className="flex flex-col justify-between rounded-2xl border border-primary/30 bg-primary/5 p-8 shadow-sm">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              The AI Rev Engine Way
            </div>
            <h3 className="mt-4 font-display text-xl font-bold text-zinc-900">
              Unified, Autonomous & High-Speed
            </h3>
            <ul className="mt-6 space-y-3.5 text-sm text-zinc-700">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                  ✓
                </span>
                <span>Verified 8M+ B2B data with AI waterfall enrichment.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                  ✓
                </span>
                <span>Multi-inbox infrastructure with automated SPF/DKIM/DMARC health checks.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                  ✓
                </span>
                <span>AI reply agents responding in minutes and routing directly to calendar.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                  ✓
                </span>
                <span>Transparent $347/month — your team owns 100% of workflows & assets.</span>
              </li>
            </ul>
          </div>
          <p className="mt-6 text-xs text-primary font-bold">Outcome: Predictable booked calls on your calendar every week.</p>
        </div>
      </div>
    ),
  },

  // Slide 3: 4-Step Ecosystem
  {
    id: 3,
    category: "ECOSYSTEM",
    kicker: "System Architecture",
    title: "How The Engine Operates 24/7",
    titleHighlight: "From Lead to Meeting",
    subtitle: "A synchronized 4-stage pipeline that runs continuously in the background.",
    notes:
      "Walk the client through the four core stages. Stage 1 fuels the system with curated data; Stage 2 enriches and qualifies prospects; Stage 3 sends multi-inbox sequences 24/7; Stage 4 handles responses immediately and drops qualified appointments on the calendar.",
    content: (
      <div className="mt-6 grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            num: "01",
            title: "LEAD DATA",
            subtitle: "Fuel The System",
            icon: Database,
            items: ["8M+ B2B Leads", "50K Agency Owners", "USA Business Data", "Cleaned & Verified"],
          },
          {
            num: "02",
            title: "AI INTELLIGENCE",
            subtitle: "Enrich & Qualify",
            icon: BrainCircuit,
            items: ["Deep Lead Research", "Data Waterfall Enrichment", "ICP Qualification", "Dynamic Personalization"],
          },
          {
            num: "03",
            title: "EMAIL EXECUTION",
            subtitle: "24/7 Outreach",
            icon: Mail,
            items: ["Multi-Inbox Outreach", "Smart Follow-Ups", "20K ManyReach Credits", "Rotational Warming"],
          },
          {
            num: "04",
            title: "REPLY → MEETING",
            subtitle: "Book The Calls",
            icon: CalendarCheck,
            items: ["AI Reply Agent", "Intent Classification", "Objection Handling", "Calendar Auto-Routing"],
          },
        ].map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-primary/40"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-black text-primary">{step.num}</span>
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-zinc-900">{step.title}</h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">{step.subtitle}</p>
                <ul className="mt-6 space-y-2.5 text-xs text-zinc-600">
                  {step.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 border-t border-zinc-100 pt-3 text-[11px] font-medium text-zinc-400">
                Automated Stage
              </div>
            </div>
          );
        })}
      </div>
    ),
  },

  // Slide 4: Included Assets
  {
    id: 4,
    category: "INCLUSIONS",
    kicker: "Immediate Value",
    title: "Everything Included",
    titleHighlight: "From Day 1",
    subtitle: "No hidden list purchases. You get full access to our proprietary data assets and credits.",
    notes:
      "Emphasize the hard cost savings here: purchasing 8 million leads from Apollo or ZoomInfo costs thousands alone. We include the leads and 20,000 ManyReach sending credits directly in the program.",
    content: (
      <div className="mt-6 grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            icon: Database,
            title: "8M+ B2B Leads",
            badge: "Curated Asset",
            desc: "Large verified B2B lead asset curated for cold outbound campaign targeting across key industries.",
          },
          {
            icon: Building2,
            title: "50K Agency Owners",
            badge: "High Intent",
            desc: "Dedicated agency-owner lead asset ready for direct client outreach, joint ventures, and partnerships.",
          },
          {
            icon: Target,
            title: "USA Business Data",
            badge: "Targetable",
            desc: "Targetable US business data filtered by geography, revenue, employee count, and decision-maker roles.",
          },
          {
            icon: Mail,
            title: "20K Email Credits",
            badge: "ManyReach",
            desc: "Supplied directly from our side when ManyReach.com is used for outreach infrastructure.",
          },
        ].map((inc, i) => {
          const Icon = inc.icon;
          return (
            <div
              key={i}
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm transition hover:shadow-md"
            >
              <div>
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-6" />
                </div>
                <span className="mt-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  {inc.badge}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-zinc-900">{inc.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-zinc-500">{inc.desc}</p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                <Check className="size-4" />
                Included with $347/mo
              </div>
            </div>
          );
        })}
      </div>
    ),
  },

  // Slide 5: The AI Agent Workforce
  {
    id: 5,
    category: "AI WORKFORCE",
    kicker: "Agentic Technology",
    title: "Two Autonomous AI Agents",
    titleHighlight: "Built For Conversion",
    subtitle: "Custom-configured agents doing the heavy lifting of research and reply handling 24/7.",
    notes:
      "Explain the power of having specialized agents: one works top-of-funnel doing real-time research and personalization; the other works bottom-of-funnel categorizing replies and scheduling calls in minutes while prospects are hot.",
    content: (
      <div className="mt-6 grid flex-1 grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-gradient-to-br from-white to-orange-50/30 p-8 shadow-sm">
          <div>
            <div className="flex items-center justify-between">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Bot className="size-6" />
              </span>
              <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-bold text-zinc-700">
                Agent 01 · Inbound Top-of-Funnel
              </span>
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold text-zinc-900">
              AI Lead Scraping & Enrichment Agent
            </h3>
            <p className="mt-3 text-sm text-zinc-600">
              Automated prospect discovery and deep enrichment agent that researches targets before outreach.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3 rounded-xl border border-zinc-200/80 bg-white p-3.5 text-xs text-zinc-700">
                <CheckCircle2 className="size-4 shrink-0 text-primary" />
                <span>Deep website scraping, LinkedIn profile data, and tech stack detection.</span>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-zinc-200/80 bg-white p-3.5 text-xs text-zinc-700">
                <CheckCircle2 className="size-4 shrink-0 text-primary" />
                <span>Filters out invalid, non-ICP, or unresponsive accounts automatically.</span>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-zinc-200/80 bg-white p-3.5 text-xs text-zinc-700">
                <CheckCircle2 className="size-4 shrink-0 text-primary" />
                <span>Writes custom dynamic personalization hooks based on live company news.</span>
              </div>
            </div>
          </div>
          <p className="mt-6 text-xs font-semibold text-primary">Operates 24/7 without manual VA oversight.</p>
        </div>

        <div className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-gradient-to-br from-white to-amber-50/30 p-8 shadow-sm">
          <div>
            <div className="flex items-center justify-between">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600">
                <BrainCircuit className="size-6" />
              </span>
              <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-bold text-zinc-700">
                Agent 02 · Bottom-of-Funnel Closer
              </span>
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold text-zinc-900">
              AI Lead Reply & Triage Agent
            </h3>
            <p className="mt-3 text-sm text-zinc-600">
              AI-assisted response classification, objection handling, and automatic calendar routing.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3 rounded-xl border border-zinc-200/80 bg-white p-3.5 text-xs text-zinc-700">
                <CheckCircle2 className="size-4 shrink-0 text-amber-500" />
                <span>Instant sentiment analysis: classifies positive, objection, OOO, or unsubscribe.</span>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-zinc-200/80 bg-white p-3.5 text-xs text-zinc-700">
                <CheckCircle2 className="size-4 shrink-0 text-amber-500" />
                <span>Drafts contextual, objection-handling replies matching your tone of voice.</span>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-zinc-200/80 bg-white p-3.5 text-xs text-zinc-700">
                <CheckCircle2 className="size-4 shrink-0 text-amber-500" />
                <span>Pushes qualified calendar booking links directly into active prospect threads.</span>
              </div>
            </div>
          </div>
          <p className="mt-6 text-xs font-semibold text-amber-600">8x higher meeting booking rates due to rapid replies.</p>
        </div>
      </div>
    ),
  },

  // Slide 6: 6 Engine Pillars
  {
    id: 6,
    category: "PILLARS",
    kicker: "Complete Architecture",
    title: "The 6 Core Engine Pillars",
    titleHighlight: "Engineered For Longevity",
    subtitle: "A balanced framework covering positioning down to final team autonomy.",
    notes:
      "Review the six pillars briefly. Show that this is not just an email blast script, but a full GTM operating system that integrates with their CRM and trains their team.",
    content: (
      <div className="mt-6 grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            num: "01",
            icon: Target,
            title: "GTM Strategy & Offer Positioning",
            desc: "Define ICP, offer positioning, acquisition strategy, and campaign architecture tailored to your agency.",
          },
          {
            num: "02",
            icon: Layers,
            title: "AI Ecosystem Architecture",
            desc: "Map the tools, AI agents, data sources, and integrations required for a seamless growth pipeline.",
          },
          {
            num: "03",
            icon: Workflow,
            title: "Agentic Workflows",
            desc: "Design automated lead research, enrichment, qualification, dynamic personalization, and reply workflows.",
          },
          {
            num: "04",
            icon: Mail,
            title: "Email Automation (24/7)",
            desc: "Build a 24/7 email workflow. If ManyReach.com is used, 20K email credits are provided from our side.",
          },
          {
            num: "05",
            icon: ServerCog,
            title: "CRM & System Automations",
            desc: "Connect CRM, outreach, lead data, and AI workflows together to eliminate repetitive manual tasks.",
          },
          {
            num: "06",
            icon: GraduationCap,
            title: "Team Training & Handover",
            desc: "Teach your team exactly how the system works, how to operate it, and how to improve it long-term.",
          },
        ].map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.num}
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:border-primary/40"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-bold text-primary">{p.num}</span>
                  <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-4" />
                  </div>
                </div>
                <h4 className="mt-3 font-display text-base font-bold text-zinc-900">{p.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-zinc-500">{p.desc}</p>
              </div>
              <div className="mt-4 border-t border-zinc-100 pt-2 text-[10px] font-bold text-emerald-600">
                ✓ Fully Implemented
              </div>
            </div>
          );
        })}
      </div>
    ),
  },

  // Slide 7: 14-Day Launch Sprint
  {
    id: 7,
    category: "TIMELINE",
    kicker: "Speed to Execution",
    title: "From Zero to Live Outbound",
    titleHighlight: "in 14 Days Flat",
    subtitle: "We don't spend months theorizing. We get live market feedback in two weeks.",
    notes:
      "Emphasize speed: Week 1 is strategy and domain architecture; Week 2 is building workflows and pushing the launch button. Within 14 days, outbound is running.",
    content: (
      <div className="mt-8 flex flex-1 flex-col justify-center">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative rounded-2xl border border-primary/30 bg-primary/5 p-8 shadow-sm">
            <span className="inline-flex rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Week 1 · Days 1–7
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold text-zinc-900">
              GTM Foundation & Architecture
            </h3>
            <p className="mt-2 text-xs font-semibold text-primary">
              Focus: ICP + Offer + Strategy + Ecosystem Mapping
            </p>
            <p className="mt-4 text-sm text-zinc-600 leading-relaxed">
              Define the ideal client profile, craft high-converting offer positioning, set up secondary sending domains, and blueprint the automated pipeline.
            </p>
            <div className="mt-6 rounded-xl border border-primary/20 bg-white p-4">
              <p className="text-xs font-bold text-zinc-800">Key Deliverable:</p>
              <p className="text-xs text-primary font-medium">Clear GTM Blueprint & Domain Setup Complete</p>
            </div>
          </div>

          <div className="relative rounded-2xl border border-amber-300 bg-amber-50/40 p-8 shadow-sm">
            <span className="inline-flex rounded-full bg-amber-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Week 2 · Days 8–14
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold text-zinc-900">
              Build & Live Launch Sprint
            </h3>
            <p className="mt-2 text-xs font-semibold text-amber-600">
              Focus: AI Agents, Workflows, Automations & Live Sequences
            </p>
            <p className="mt-4 text-sm text-zinc-600 leading-relaxed">
              Configure sending inboxes, connect the AI scraping and reply agents, finalize email sequences, test deliverability, and launch live campaigns.
            </p>
            <div className="mt-6 rounded-xl border border-amber-200 bg-white p-4">
              <p className="text-xs font-bold text-zinc-800">Key Deliverable:</p>
              <p className="text-xs text-amber-600 font-medium">Live AI GTM System Actively Sending</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 8: 90-Day Roadmap
  {
    id: 8,
    category: "ROADMAP",
    kicker: "The 90-Day Journey",
    title: "Sprint to Launch,",
    titleHighlight: "Scale to Autonomy",
    subtitle: "The remaining 75+ days are dedicated to optimizing, testing, scaling, and training.",
    notes:
      "Most agency programs vanish right after launch. We stay by their side for 90 days: Month 1 optimizes, Month 2 scales volume, Month 3 trains their team so they achieve true independence.",
    content: (
      <div className="mt-6 grid flex-1 grid-cols-1 gap-4 md:grid-cols-3">
        {[
          {
            stage: "Stage 03",
            time: "Month 1 · Days 15–30",
            title: "Optimize While Running",
            focus: "Fix Bottlenecks, Test & Improve",
            desc: "Monitor real-time deliverability, A/B test subject lines and prompts, evaluate reply rates, and remove friction points.",
            deliv: "Optimized Live Workflow",
          },
          {
            stage: "Stage 04",
            time: "Month 2 · Days 31–60",
            title: "Scale The System",
            focus: "Enhance Agents, Volume & Prompts",
            desc: "Ramp sending volume safely across secondary inboxes, expand targeting into adjacent segments, and sync leads to CRM.",
            deliv: "High-Volume GTM Machine",
          },
          {
            stage: "Stage 05",
            time: "Month 3 · Days 61–90",
            title: "Train & Handover",
            focus: "Team Training, SOPs & Docs",
            desc: "Hand over complete operational SOPs, conduct live team training sessions, and equip your agency to run it forever.",
            deliv: "Autonomous In-House Team",
          },
        ].map((m, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">{m.stage}</span>
                <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-[11px] font-semibold text-zinc-600">
                  {m.time}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-zinc-900">{m.title}</h3>
              <p className="mt-1 text-xs font-medium text-amber-600">{m.focus}</p>
              <p className="mt-4 text-xs leading-relaxed text-zinc-500">{m.desc}</p>
            </div>
            <div className="mt-6 rounded-xl border border-zinc-100 bg-zinc-50 p-3 text-xs">
              <span className="font-semibold text-zinc-700">Outcome: </span>
              <span className="font-bold text-primary">{m.deliv}</span>
            </div>
          </div>
        ))}
      </div>
    ),
  },

  // Slide 9: Tech Stack
  {
    id: 9,
    category: "TECH STACK",
    kicker: "Best-in-Class Tools",
    title: "Enterprise Cold Outreach Stack",
    titleHighlight: "Connected via Webhooks & APIs",
    subtitle: "We orchestrate industry-leading infrastructure directly into your workflow.",
    notes:
      "Show how all top tools are connected. Clients don't have to glue tools together themselves; we connect everything seamlessly.",
    content: (
      <div className="mt-8 flex flex-1 flex-col justify-center">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {[
            { name: "ManyReach", role: "Sending & Rotational Inboxes", badge: "20K Credits" },
            { name: "Clay", role: "Waterfall Data Enrichment", badge: "Agentic" },
            { name: "OpenAI / Claude", role: "Contextual AI Reply & Triage", badge: "LLM" },
            { name: "GoHighLevel", role: "CRM & Automated Booking", badge: "CRM" },
            { name: "Make / Zapier", role: "Webhooks & Sync Automations", badge: "Integration" },
            { name: "Apollo / ListKit", role: "Lead Scraping & Filters", badge: "Database" },
          ].map((tool, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm transition hover:border-primary/50"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 font-display text-lg font-bold text-primary">
                {tool.name[0]}
              </div>
              <p className="mt-3 font-display text-sm font-bold text-zinc-900">{tool.name}</p>
              <p className="mt-1 text-[11px] text-zinc-500">{tool.role}</p>
              <span className="mt-3 inline-block rounded-full bg-zinc-100 px-2 py-0.5 text-[9px] font-bold text-zinc-600">
                {tool.badge}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-center text-xs text-zinc-600">
          <p className="font-semibold text-zinc-900">
            Full Ownership: All accounts, domains, and data feeds belong directly to your agency.
          </p>
          <p className="mt-1 text-zinc-500">
            No proprietary lock-in. If you ever leave, you keep 100% of the architecture and assets.
          </p>
        </div>
      </div>
    ),
  },

  // Slide 10: Scale Tiers & Meeting Velocity
  {
    id: 10,
    category: "SCALABILITY",
    kicker: "Predictable Pipeline",
    title: "Choose Your Scale &",
    titleHighlight: "Meeting Velocity",
    subtitle: "Cold email is predictable mathematics: Volume × Deliverability × Relevance = Booked Calls.",
    notes:
      "Explain the math of cold email. Higher volume yields more meetings. The $347/month management fee stays the same regardless of tier — only the direct infrastructure costs scale with volume.",
    content: (
      <div className="mt-6 flex flex-1 flex-col justify-center">
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-zinc-200 bg-zinc-50 text-[11px] font-bold uppercase tracking-wider text-zinc-500">
              <tr>
                <th className="px-5 py-3.5">Monthly Volume</th>
                <th className="px-5 py-3.5">Inboxes</th>
                <th className="px-5 py-3.5">Verified Leads</th>
                <th className="px-5 py-3.5 text-primary">Expected Meetings</th>
                <th className="px-5 py-3.5">Est. Tool / Infra Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 font-medium text-zinc-700">
              {[
                { vol: "25,000 / mo", inboxes: "25", leads: "15,000", meetings: "5–8 calls", infra: "$250–$450" },
                { vol: "50,000 / mo", inboxes: "50", leads: "30,000", meetings: "8–12 calls", infra: "$450–$850" },
                { vol: "100,000 / mo", inboxes: "100", leads: "60,000", meetings: "10–20 calls", infra: "$850–$1,450", highlight: true },
                { vol: "150,000 / mo", inboxes: "150", leads: "90,000", meetings: "20–35 calls", infra: "$1,200–$1,750" },
                { vol: "200,000 / mo", inboxes: "200", leads: "120,000", meetings: "35–50+ calls", infra: "$1,450–$2,000+" },
              ].map((row, i) => (
                <tr
                  key={i}
                  className={row.highlight ? "bg-primary/5 font-bold text-zinc-900" : "hover:bg-zinc-50/60"}
                >
                  <td className="px-5 py-3.5 font-display text-sm">{row.vol}</td>
                  <td className="px-5 py-3.5">{row.inboxes} inboxes</td>
                  <td className="px-5 py-3.5">{row.leads}</td>
                  <td className="px-5 py-3.5 font-bold text-primary">{row.meetings}</td>
                  <td className="px-5 py-3.5 text-zinc-500">{row.infra}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-center text-xs text-zinc-500">
          *Infra costs are paid directly to domain & software vendors with zero agency markup.
        </p>
      </div>
    ),
  },

  // Slide 11: Pass-Through Infrastructure
  {
    id: 11,
    category: "TRANSPARENCY",
    kicker: "Honest Economics",
    title: "Why Infrastructure Costs Are",
    titleHighlight: "Direct Pass-Through",
    subtitle: "We believe in 100% transparency. You only pay for what you actually use.",
    notes:
      "Emphasize the trust factor: traditional cold outreach agencies charge $5,000/mo, spend $400 on tools, and pocket $4,600 while keeping client accounts on their own domains. We separate management ($347/mo) from infrastructure so the client owns everything.",
    content: (
      <div className="mt-6 grid flex-1 grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col justify-between rounded-2xl border border-primary/30 bg-primary/5 p-8 shadow-sm">
          <div>
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              What You Pay Us: $347 / mo
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold text-zinc-900">
              Strategy, Execution & Training
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-zinc-700">
              <li className="flex items-center gap-2">
                <Check className="size-4 text-primary" />
                <span>14-Day Rapid Launch Sprint</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-4 text-primary" />
                <span>90-Day Optimization & Hands-on Implementation</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-4 text-primary" />
                <span>AI Scraping and Reply Agent Configuration</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-4 text-primary" />
                <span>Deliverability Monitoring & DNS Health</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-4 text-primary" />
                <span>Complete SOP Handover & In-House Team Training</span>
              </li>
            </ul>
          </div>
          <p className="mt-6 text-xs font-bold text-primary">Uncapped value with zero hidden retainers.</p>
        </div>

        <div className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
          <div>
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-zinc-700">
              What You Pay Vendors: $150–$1,450+
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold text-zinc-900">
              Direct Infrastructure Pass-Through
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-zinc-600">
              <li className="flex items-center gap-2">
                <Check className="size-4 text-zinc-400" />
                <span>Secondary Domains (Google Workspace / Outlook)</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-4 text-zinc-400" />
                <span>Sending software (ManyReach / Smartlead)</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-4 text-zinc-400" />
                <span>Email validation & verification API credits</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-4 text-zinc-400" />
                <span>CRM & Webhook triggers (GoHighLevel, Make)</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-4 text-zinc-400" />
                <span>Scale up or down on your own schedule</span>
              </li>
            </ul>
          </div>
          <p className="mt-6 text-xs text-zinc-500 font-medium">You hold the credit cards. You own the assets.</p>
        </div>
      </div>
    ),
  },

  // Slide 12: 12 Tangible Deliverables
  {
    id: 12,
    category: "DELIVERABLES",
    kicker: "Asset Inventory",
    title: "12 Tangible Deliverables",
    titleHighlight: "You Walk Away With",
    subtitle: "Complete intellectual property and operational systems transferred to your agency.",
    notes:
      "Rapidly read through the 12 deliverables. They aren't buying advice; they are buying an entire engine with documented SOPs, workflows, and trained staff.",
    content: (
      <div className="mt-6 grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {[
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
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:border-primary/50"
          >
            <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
              ✓
            </div>
            <span className="font-display text-xs font-bold text-zinc-800">{item}</span>
          </div>
        ))}
      </div>
    ),
  },

  // Slide 13: Guarantee
  {
    id: 13,
    category: "GUARANTEE",
    kicker: "Mutual Accountability",
    title: "Our Hands-On",
    titleHighlight: "Implementation Guarantee",
    subtitle: "We believe in skin in the game. We stay until the job is done.",
    notes:
      "Highlight our Implementation Commitment: If an agreed implementation component hasn't been delivered because of our side, we continue hands-on support at no additional management fee until it is complete. We don't walk away.",
    content: (
      <div className="mt-6 flex flex-1 flex-col items-center justify-center text-center">
        <div className="max-w-3xl rounded-3xl border-2 border-primary/30 bg-gradient-to-b from-primary/5 to-white p-10 shadow-lg">
          <div className="mx-auto flex size-20 items-center justify-center rounded-2xl bg-primary text-white shadow-md">
            <ShieldCheck className="size-10" />
          </div>
          <h3 className="mt-6 font-display text-2xl font-bold text-zinc-900 sm:text-3xl">
            The Implementation Commitment
          </h3>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
            “If an agreed implementation component has not been delivered because of our side,{" "}
            <span className="font-bold text-primary">
              we continue hands-on implementation support at no additional management fee
            </span>{" "}
            until that agreed component is completed.”
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-zinc-700">
            <span className="rounded-full border border-zinc-200 bg-white px-4 py-2">
              ✓ No Fine-Print Tricks
            </span>
            <span className="rounded-full border border-zinc-200 bg-white px-4 py-2">
              ✓ Clear Milestone Tracking
            </span>
            <span className="rounded-full border border-zinc-200 bg-white px-4 py-2">
              ✓ Mutual Partnership Focus
            </span>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 14: The Investment
  {
    id: 14,
    category: "INVESTMENT",
    kicker: "Unbeatable ROI",
    title: "Simple, Predictable",
    titleHighlight: "Investment Structure",
    subtitle: "A fraction of the cost of hiring an in-house SDR or paying an outbound agency.",
    notes:
      "Deliver the close: an internal SDR costs $4,000 to $6,000/month plus taxes and benefits. An agency charges $3,000 to $5,000/mo. Here, you get the entire engine, 8M+ leads, 20k credits, and 90 days of execution for $347/month.",
    content: (
      <div className="mt-6 flex flex-1 flex-col items-center justify-center">
        <div className="w-full max-w-xl rounded-3xl border-2 border-primary bg-white p-8 text-center shadow-xl">
          <span className="inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
            All-Inclusive Accelerator
          </span>
          <div className="mt-6">
            <span className="font-hero text-6xl font-black text-zinc-900">$347</span>
            <span className="text-lg font-bold text-zinc-500"> / month</span>
          </div>
          <p className="mt-2 text-xs font-semibold text-primary">
            14-Day Launch Sprint + 90-Day Implementation & Training
          </p>

          <div className="mt-8 space-y-3 text-left text-xs text-zinc-700">
            <div className="flex items-center gap-3 rounded-xl bg-zinc-50 p-3">
              <Check className="size-4 shrink-0 text-primary" />
              <span>
                <strong>14-Day Launch Sprint:</strong> ICP, copy, domains, and agents live in 2 weeks.
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-zinc-50 p-3">
              <Check className="size-4 shrink-0 text-primary" />
              <span>
                <strong>90 Days of Optimization:</strong> Weekly A/B testing and prompt tuning.
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-zinc-50 p-3">
              <Check className="size-4 shrink-0 text-primary" />
              <span>
                <strong>Data Assets:</strong> 8M+ B2B Leads, 50K Agency Owners, 20K ManyReach credits.
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-zinc-50 p-3">
              <Check className="size-4 shrink-0 text-primary" />
              <span>
                <strong>Team Handover:</strong> Full SOPs and live coaching for complete independence.
              </span>
            </div>
          </div>

          <a
            href="https://calendar.google.com"
            target="_blank"
            rel="noreferrer"
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 font-display text-sm font-bold text-white shadow-md transition hover:bg-primary/90"
          >
            <span>Book Implementation Call</span>
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    ),
  },

  // Slide 15: FAQs
  {
    id: 15,
    category: "FAQS",
    kicker: "Clarifications",
    title: "Frequently Asked",
    titleHighlight: "Questions Answered",
    subtitle: "Addressing common questions upfront to give complete clarity.",
    notes:
      "Walk through the common questions: why 14 days, why infra is separate, and what happens after 90 days. Conclude with total reassurance.",
    content: (
      <div className="mt-6 grid flex-1 grid-cols-1 gap-4 md:grid-cols-2">
        {[
          {
            q: "Why is the system launched in 14 days instead of 90 days?",
            a: "We do not wait 90 days to launch. Week 1 is GTM foundation; Week 2 is building and going live. The remaining 75+ days are dedicated to testing live market responses, fixing bottlenecks, and scaling.",
          },
          {
            q: "What lead assets and email credits are included?",
            a: "You receive access to an 8M+ B2B lead database, a dedicated 50K Agency Owners lead asset, USA business data, and 20,000 email credits from our side when ManyReach.com is used.",
          },
          {
            q: "Why are technology and infrastructure costs separate?",
            a: "Your $347/month covers our strategy, implementation, optimization, and training. Tool costs ($150–$1,450+) are separate so that YOU own 100% of your assets, domains, and data with zero markup.",
          },
          {
            q: "What happens after the 90-day program completes?",
            a: "By day 90, your team is fully trained and equipped with complete SOPs to run and scale the AI GTM engine independently. You retain full ownership of all assets, workflows, and tools.",
          },
        ].map((faq, idx) => (
          <div key={idx} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h4 className="font-display text-sm font-bold text-zinc-900">{faq.q}</h4>
            <p className="mt-3 text-xs leading-relaxed text-zinc-500">{faq.a}</p>
          </div>
        ))}
      </div>
    ),
  },

  // Slide 16: Next Steps / Close
  {
    id: 16,
    category: "NEXT STEPS",
    kicker: "Start Now",
    title: "Ready to Build Your",
    titleHighlight: "24/7 Outbound Machine?",
    subtitle: "Let's turn cold outreach into a reliable, automated client acquisition channel.",
    notes:
      "Close the presentation. Guide the client to book the onboarding call and get started on Day 1 of the 14-day sprint.",
    content: (
      <div className="mt-6 flex flex-1 flex-col items-center justify-center text-center">
        <div className="max-w-2xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <span className="font-display text-2xl font-black text-primary">01</span>
              <p className="mt-2 font-display text-sm font-bold text-zinc-900">Onboarding Call</p>
              <p className="mt-1 text-xs text-zinc-500">ICP deep dive & offer positioning questionnaire.</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <span className="font-display text-2xl font-black text-primary">02</span>
              <p className="mt-2 font-display text-sm font-bold text-zinc-900">14-Day Sprint</p>
              <p className="mt-1 text-xs text-zinc-500">Domains, inboxes, AI agents & sequences live.</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <span className="font-display text-2xl font-black text-primary">03</span>
              <p className="mt-2 font-display text-sm font-bold text-zinc-900">Scale & Train</p>
              <p className="mt-1 text-xs text-zinc-500">90 days of optimization and team handover.</p>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="https://calendar.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-display text-base font-bold text-white shadow-lg transition hover:scale-105 hover:bg-primary/90"
            >
              <span>Get Started with $347 / mo</span>
              <ArrowRight className="size-5" />
            </a>
            <p className="mt-3 text-xs text-zinc-400">
              Covered by our Hands-On Implementation Guarantee.
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

function DeckPage() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showGrid, setShowGrid] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const totalSlides = slides.length;
  const currentSlide = slides[currentSlideIndex];

  // Navigation handlers
  const nextSlide = () => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
    setShowGrid(false);
  };

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case " ":
        case "PageDown":
          e.preventDefault();
          nextSlide();
          break;
        case "ArrowLeft":
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          prevSlide();
          break;
        case "g":
        case "G":
          e.preventDefault();
          setShowGrid((prev) => !prev);
          break;
        case "n":
        case "N":
          e.preventDefault();
          setShowNotes((prev) => !prev);
          break;
        case "f":
        case "F":
          e.preventDefault();
          toggleFullscreen();
          break;
        case "Escape":
          setShowGrid(false);
          setShowNotes(false);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [totalSlides]);

  // Fullscreen change listener
  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  const progressPercentage = ((currentSlideIndex + 1) / totalSlides) * 100;

  return (
    <div className="fixed inset-0 select-none overflow-hidden bg-zinc-50 text-zinc-900 font-sans">
      {/* Top Progress Bar */}
      <div className="absolute inset-x-0 top-0 z-40 h-1.5 bg-zinc-200">
        <div
          className="h-full bg-gradient-to-r from-primary via-amber-500 to-primary transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Main Slide Canvas */}
      <div className="relative flex size-full flex-col justify-between p-6 md:p-12">
        {/* Background Subtle Grid & Orange Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-32 size-[500px] rounded-full bg-primary/10 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-32 size-[500px] rounded-full bg-amber-500/10 blur-[120px]"
        />

        {/* Slide Header */}
        <header className="relative z-10 flex shrink-0 items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={brndGuruLogo.url}
              alt="Brnd Guru logo"
              className="size-8 rounded-lg object-contain md:size-9"
            />
            <span className="font-display text-sm font-extrabold tracking-wider text-zinc-900 uppercase">
              BRND GURU
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">
              {currentSlide.category}
            </span>
          </div>
        </header>

        {/* Slide Body Content */}
        <main className="relative z-10 my-auto flex min-h-0 flex-1 flex-col justify-center py-4">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-widest text-primary">
              {currentSlide.kicker}
            </p>
            <h1 className="mt-2 font-hero text-2xl font-black tracking-tight text-zinc-900 sm:text-3xl md:text-5xl lg:text-5xl">
              {currentSlide.title}{" "}
              {currentSlide.titleHighlight && (
                <span className="bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent">
                  {currentSlide.titleHighlight}
                </span>
              )}
            </h1>
            {currentSlide.subtitle && (
              <p className="mt-2 max-w-3xl text-xs text-zinc-500 sm:text-sm md:text-base">
                {currentSlide.subtitle}
              </p>
            )}
          </div>

          {currentSlide.content}
        </main>

        {/* Slide Footer */}
        <footer className="relative z-10 flex shrink-0 items-center justify-between text-[11px] font-medium text-zinc-400">
          <span>brndguru.com</span>
          <span className="font-semibold text-zinc-600">100K GTM Email Rev Engine™</span>
          <span className="font-display font-bold text-zinc-800">
            {String(currentSlide.id).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
          </span>
        </footer>
      </div>

      {/* Floating Bottom Nav Pill */}
      <div className="absolute inset-x-0 bottom-5 z-40 flex justify-center">
        <div className="flex items-center gap-1.5 rounded-full border border-zinc-200/80 bg-white/95 px-3 py-1.5 shadow-lg backdrop-blur-md">
          {/* Previous Button */}
          <button
            type="button"
            onClick={prevSlide}
            disabled={currentSlideIndex === 0}
            aria-label="Previous slide"
            className="flex size-8 items-center justify-center rounded-full text-zinc-700 transition hover:bg-zinc-100 disabled:opacity-30 disabled:hover:bg-transparent"
          >
            <ChevronLeft className="size-4.5" />
          </button>

          {/* Slide Indicator */}
          <span className="min-w-14 text-center font-display text-xs font-bold text-zinc-800">
            {currentSlideIndex + 1} / {totalSlides}
          </span>

          {/* Next Button */}
          <button
            type="button"
            onClick={nextSlide}
            disabled={currentSlideIndex === totalSlides - 1}
            aria-label="Next slide"
            className="flex size-8 items-center justify-center rounded-full text-zinc-700 transition hover:bg-zinc-100 disabled:opacity-30 disabled:hover:bg-transparent"
          >
            <ChevronRight className="size-4.5" />
          </button>

          <span className="mx-1 h-4 w-px bg-zinc-200" />

          {/* Grid Overview Toggle (G) */}
          <button
            type="button"
            onClick={() => setShowGrid((prev) => !prev)}
            aria-label="Slide overview (G)"
            title="Slide overview (G)"
            className={`flex size-8 items-center justify-center rounded-full transition ${
              showGrid ? "bg-primary text-white" : "text-zinc-700 hover:bg-zinc-100"
            }`}
          >
            <LayoutGrid className="size-4" />
          </button>

          {/* Presenter Notes Toggle (N) */}
          <button
            type="button"
            onClick={() => setShowNotes((prev) => !prev)}
            aria-label="Presenter notes (N)"
            title="Presenter notes (N)"
            className={`flex size-8 items-center justify-center rounded-full transition ${
              showNotes ? "bg-primary text-white" : "text-zinc-700 hover:bg-zinc-100"
            }`}
          >
            <StickyNote className="size-4" />
          </button>

          {/* Fullscreen Toggle (F) */}
          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label="Present fullscreen (F)"
            title="Present fullscreen (F)"
            className="flex size-8 items-center justify-center rounded-full text-zinc-700 transition hover:bg-zinc-100"
          >
            {isFullscreen ? <Minimize2 className="size-4" /> : <Maximize2 className="size-4" />}
          </button>
        </div>
      </div>

      {/* Presenter Notes Drawer (N) */}
      {showNotes && (
        <aside
          role="complementary"
          aria-label="Presenter notes"
          className="absolute inset-x-4 bottom-20 z-50 mx-auto max-w-2xl rounded-2xl border border-primary/30 bg-white/98 p-5 shadow-2xl backdrop-blur-xl md:bottom-22"
        >
          <div className="flex items-center justify-between border-b border-zinc-100 pb-2.5">
            <div className="flex items-center gap-2">
              <StickyNote className="size-4 text-primary" />
              <span className="font-display text-xs font-bold uppercase tracking-wider text-primary">
                Presenter Notes · Slide {currentSlide.id}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setShowNotes(false)}
              aria-label="Close presenter notes"
              className="rounded-full p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700"
            >
              <X className="size-4" />
            </button>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-zinc-700 font-medium">
            {currentSlide.notes}
          </p>
        </aside>
      )}

      {/* Grid Overview Modal (G) */}
      {showGrid && (
        <div className="fixed inset-0 z-50 flex flex-col bg-zinc-900/80 p-6 backdrop-blur-md animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-4">
            <h2 className="font-display text-lg font-bold text-white">
              Slide Overview ({totalSlides} Slides)
            </h2>
            <button
              type="button"
              onClick={() => setShowGrid(false)}
              aria-label="Close slide overview"
              className="flex size-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X className="size-5" />
            </button>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-4 overflow-y-auto pr-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`flex flex-col justify-between rounded-xl border p-4 text-left transition ${
                  idx === currentSlideIndex
                    ? "border-primary bg-white ring-2 ring-primary"
                    : "border-zinc-700 bg-zinc-800 text-zinc-300 hover:border-primary/50 hover:bg-zinc-750"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-bold">
                    <span
                      className={idx === currentSlideIndex ? "text-primary" : "text-zinc-400"}
                    >
                      #{String(s.id).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] font-semibold text-zinc-400">
                      {s.category}
                    </span>
                  </div>
                  <p
                    className={`mt-2 font-display text-xs font-bold line-clamp-2 ${
                      idx === currentSlideIndex ? "text-zinc-900" : "text-white"
                    }`}
                  >
                    {s.title} {s.titleHighlight}
                  </p>
                </div>
                <p
                  className={`mt-3 text-[10px] line-clamp-1 ${
                    idx === currentSlideIndex ? "text-zinc-500" : "text-zinc-400"
                  }`}
                >
                  {s.kicker}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
