import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  ChevronDown,
  CircleCheck,
  Database,
  Globe2,
  Mail,
  Menu,
  MousePointer2,
  Play,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  X,
  Zap,
} from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";

const DEMO_URL = "https://listkit.chilipiper.com/round-robin/listkit-demo";
const LOGIN_URL = "https://next.listkit.io/login";
const REVIEW_URL = "https://www.g2.com/products/listkit/reviews";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "All In One Cold Email Platform for B2B Companies | ListKit" },
      {
        name: "description",
        content:
          "Launch high-volume cold email campaigns with leads, domains, inboxes, warmup, verification, AI scripts, and sending in one platform.",
      },
      { property: "og:title", content: "All In One Cold Email Platform | ListKit" },
      {
        property: "og:description",
        content: "The complete cold email stack for B2B companies, with everything included.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const volumes = [1000, 2000, 3000, 5000, 10000];
const pricing: Record<number, number> = { 1000: 597, 2000: 797, 3000: 997, 5000: 1497, 10000: 2497 };

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2 font-display text-2xl font-bold text-foreground" aria-label="ListKit home">
      <span className="grid h-7 w-6 grid-cols-3 gap-0.5" aria-hidden="true">
        {Array.from({ length: 9 }).map((_, i) => <span key={i} className="rounded-[1px] bg-primary" />)}
      </span>
      listkit
    </a>
  );
}

function ActionLink({ children, secondary = false, compact = false, href = DEMO_URL }: { children: ReactNode; secondary?: boolean; compact?: boolean; href?: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`${secondary ? "button-secondary" : "button-primary"} ${compact ? "button-compact" : ""}`}
    >
      {children}
    </a>
  );
}

function DirectCheckout() {
  return (
    <a href="#pricing" className="group mt-5 inline-flex flex-col items-center rounded-full border border-primary/25 bg-card px-8 py-3 text-sm font-semibold text-primary shadow-soft transition hover:-translate-y-0.5 hover:border-primary/50">
      <span className="flex items-center gap-1">Or Check Out Directly Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
      <span className="mt-0.5 text-[11px] font-normal text-muted-foreground">skip the demo call, just start now</span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a href="https://markets.businessinsider.com/news/currencies/iman-gadzhi-acquires-stake-in-45-million-ai-powered-cold-email-platform-listkit-1036485626" target="_blank" rel="noreferrer" className="block bg-announcement px-4 py-2 text-center text-xs font-semibold text-primary-foreground">
        🎉 Iman Gadzhi Acquires Stake in €45 Million AI-Powered Cold Email Platform ListKit
      </a>
      <header className="relative z-50 bg-background/90 backdrop-blur-md">
        <div className="page-container flex h-20 items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
            <a href="#how-it-works" className="nav-link">How It Works</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href={LOGIN_URL} target="_blank" rel="noreferrer" className="nav-link">Log In</a>
            <ActionLink compact>Book a Demo</ActionLink>
          </nav>
          <button type="button" className="icon-button md:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="absolute inset-x-0 top-full border-y border-border bg-background px-5 py-5 shadow-card md:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col gap-4">
              <a href="#how-it-works" onClick={() => setOpen(false)} className="nav-link">How It Works</a>
              <a href="#features" onClick={() => setOpen(false)} className="nav-link">Features</a>
              <a href="#pricing" onClick={() => setOpen(false)} className="nav-link">Pricing</a>
              <a href={LOGIN_URL} className="nav-link">Log In</a>
              <ActionLink compact>Book a Demo</ActionLink>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}

function ProductWindow({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`product-window ${compact ? "max-w-md" : ""}`}>
      <div className="flex h-9 items-center gap-1.5 border-b border-border bg-muted px-4">
        <span className="h-2 w-2 rounded-full bg-destructive/65" /><span className="h-2 w-2 rounded-full bg-warning" /><span className="h-2 w-2 rounded-full bg-success" />
      </div>
      <div className="grid min-h-72 grid-cols-[115px_1fr] sm:grid-cols-[155px_1fr]">
        <div className="border-r border-border bg-sidebar p-3">
          <div className="mb-5 flex items-center gap-1.5 font-display text-xs font-bold"><span className="grid h-4 w-3 grid-cols-2 gap-px">{Array.from({length:6}).map((_,i)=><i className="bg-primary" key={i}/>)}</span>listkit</div>
          {[Search, Database, BadgeCheck, Mail, BarChart3].map((Icon, i) => (
            <div key={i} className={`mb-2 flex items-center gap-2 rounded px-2 py-2 text-[9px] ${i === 3 ? "bg-primary-soft text-primary" : "text-muted-foreground"}`}><Icon className="h-3 w-3" /> {['Search','Campaigns','Verification','Email Engine','Analytics'][i]}</div>
          ))}
        </div>
        <div className="bg-card p-4 sm:p-6">
          <div className="mb-6 flex items-center justify-between"><div><div className="h-2 w-20 rounded bg-border"/><div className="mt-2 h-2 w-32 rounded bg-muted"/></div><div className="h-7 w-20 rounded bg-primary"/></div>
          <div className="grid grid-cols-3 gap-2"><StatMini value="8,420" label="Emails sent"/><StatMini value="98.2%" label="Delivered"/><StatMini value="231" label="Replies"/></div>
          <div className="mt-5 rounded border border-border p-4"><div className="mb-4 h-2 w-28 rounded bg-border"/><div className="flex h-20 items-end gap-1">{[30,48,40,65,52,80,72,93,69,88,100,82].map((h,i)=><span key={i} className="flex-1 rounded-t bg-primary/70" style={{height:`${h}%`}}/>)}</div></div>
        </div>
      </div>
    </div>
  );
}

function StatMini({ value, label }: { value: string; label: string }) {
  return <div className="rounded border border-border p-2"><div className="text-[10px] font-bold sm:text-sm">{value}</div><div className="mt-1 text-[7px] text-muted-foreground sm:text-[9px]">{label}</div></div>;
}

function Hero() {
  return (
    <section id="top" className="hero-surface overflow-hidden pb-20 pt-16 sm:pt-20">
      <div className="page-container text-center">
        <div className="eyebrow">All in one Cold Email Platform for B2B Companies</div>
        <h1 className="mx-auto mt-5 max-w-5xl font-display text-5xl font-bold leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
          Send <span className="text-primary">1,000</span> cold emails<br className="hidden sm:block" /> per day, <span className="text-primary">immediately.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          With ListKit, you can set up high volume cold email campaigns in one platform, automatically: domains, inboxes, warmup, leads, verification, AI scripts, and sending, with <span className="underline decoration-primary decoration-2 underline-offset-4">everything included in your subscription price.</span> No paying extra for domains, or inboxes, or anything — it&apos;s included in the price.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3"><ActionLink>Book a Demo</ActionLink><ActionLink secondary href="#pricing">Explore Plans</ActionLink></div>
        <p className="mx-auto mt-4 max-w-2xl text-xs text-muted-foreground">When you sign up, the domains &amp; inboxes are set up automatically. You don&apos;t need to know any tech at all.</p>
        <DirectCheckout />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-semibold text-foreground">
          <span>977M+ triple-verified contacts</span><span className="text-primary">•</span><span>98% Deliverability</span><span className="text-primary">•</span><span className="flex items-center gap-1"><span className="g2-badge">G</span>{Array.from({length:5}).map((_,i)=><Star key={i} className="h-3.5 w-3 fill-current"/>)} Top Rated – 4.8/5</span>
        </div>
      </div>
    </section>
  );
}

function DemoSection() {
  return (
    <section className="section-space bg-background">
      <div className="page-container text-center">
        <h2 className="section-title mx-auto max-w-3xl">Watch this demo video of how the setup process works. Then, get started yourself.</h2>
        <div className="relative mx-auto mt-10 max-w-5xl">
          <ProductWindow />
          <button type="button" className="play-button" aria-label="Play product demo"><Play className="h-8 w-8 fill-current" /></button>
        </div>
        <div className="mt-9 flex flex-wrap justify-center gap-3"><ActionLink>Book a Demo</ActionLink><ActionLink secondary href="#pricing">Explore Plans</ActionLink></div>
      </div>
    </section>
  );
}

function PricingSection() {
  const [volume, setVolume] = useState(1000);
  return (
    <section id="pricing" className="section-space bg-ink text-primary-foreground">
      <div className="page-container">
        <div className="text-center"><span className="eyebrow eyebrow-dark">PRICING</span><h2 className="section-title mt-5 text-primary-foreground">Simple pricing. Everything included.</h2><p className="mx-auto mt-4 max-w-2xl text-ink-muted">Pick your sending volume, and pay one price for the full cold email stack.</p></div>
        <div className="mx-auto mt-12 grid max-w-5xl overflow-hidden rounded-lg border border-ink-border bg-ink-card lg:grid-cols-[.9fr_1.1fr]">
          <div className="p-7 sm:p-10">
            <p className="text-sm font-semibold text-brand-light">Full Cold Email Stack</p>
            <div className="mt-4 flex items-end gap-2"><span className="font-display text-6xl font-bold">${pricing[volume].toLocaleString()}</span><span className="mb-2 text-ink-muted">/month</span></div>
            <p className="mt-3 text-ink-muted">Send {volume.toLocaleString()} cold emails per day</p>
            <p className="mt-8 text-xs font-semibold uppercase text-ink-muted">Select your daily volume</p>
            <div className="mt-3 grid grid-cols-5 gap-1 rounded-md bg-ink p-1.5">
              {volumes.map((item) => <button type="button" key={item} onClick={() => setVolume(item)} className={`volume-button ${volume === item ? "volume-button-active" : ""}`}>{item / 1000}k</button>)}
            </div>
            <p className="mt-7 text-sm leading-relaxed text-ink-muted">Domains are free. You pick the names you like, we register them and cover the cost for as long as you&apos;re subscribed.</p>
            <div className="mt-8"><ActionLink>Book a Demo</ActionLink></div>
            <p className="mt-4 flex items-center gap-2 text-xs text-ink-muted"><CircleCheck className="h-4 w-4 text-brand-light" /> Cancel anytime</p>
          </div>
          <div className="border-t border-ink-border bg-ink-elevated p-7 sm:p-10 lg:border-l lg:border-t-0">
            <span className="rounded-full bg-success px-3 py-1 text-xs font-bold text-success-foreground">Best Value</span>
            <h3 className="mt-5 font-display text-2xl font-bold">Everything you need</h3>
            <ul className="mt-6 space-y-4 text-sm text-ink-muted">
              {["Triple-Verified leads with AI Search","Email Engine with inbox warmup included","Domains & inboxes configured exclusively for outreach","AI Script Writing Agent trained on proven templates","1-on-1 concierge onboarding call","Slack community + weekly live calls","Cold email mastery course included","Domains included free"].map((item)=><li key={item} className="flex gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-light"/><span>{item}</span></li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const industries = ["Marketing & Advertising", "Construction & Trades", "Finance & Advisory", "Staffing & Services", "B2B SaaS & AI", "Real Estate"];

function ResultsSection() {
  const [industry, setIndustry] = useState(industries[0]);
  return (
    <section className="section-space bg-soft">
      <div className="page-container">
        <div className="text-center"><span className="eyebrow">PROVEN OUTCOMES</span><h2 className="section-title mt-5">Real cold email results for B2B companies</h2><p className="mt-4 text-muted-foreground">Browse our case studies across dozens of industries &amp; services.</p></div>
        <div className="mt-10 flex flex-wrap justify-center gap-2">{industries.map((item,i)=><button type="button" key={item} onClick={()=>setIndustry(item)} className={`filter-button ${industry===item?'filter-button-active':''}`}>{item}<span>{[13,8,8,7,6,4][i]}</span></button>)}</div>
        <div className="mx-auto mt-8 grid max-w-5xl gap-5 md:grid-cols-3">
          {[{k:"42",l:"positive replies",q:"in 21 days"},{k:"19",l:"qualified meetings",q:"from one campaign"},{k:"$86k",l:"pipeline generated",q:"using ListKit"}].map((item,i)=><article key={item.k} className="result-card"><div className="flex items-center justify-between"><span className="text-xs font-semibold text-primary">{industry}</span><ArrowRight className="h-4 w-4 text-primary"/></div><div className="mt-10 font-display text-5xl font-bold">{item.k}</div><p className="mt-2 font-semibold">{item.l}</p><p className="mt-1 text-sm text-muted-foreground">{item.q}</p><div className={`result-line result-line-${i+1}`} /></article>)}
        </div>
      </div>
    </section>
  );
}

function RoiSection() {
  const [volume, setVolume] = useState(1000);
  const [ltv, setLtv] = useState(10000);
  const [closeRate, setCloseRate] = useState(20);
  const output = useMemo(() => {
    const replies = Math.round(volume * 22 * 0.01);
    const positive = Math.round(replies * 0.05);
    const meetings = Math.max(1, Math.round(positive * 0.4));
    const deals = meetings * (closeRate / 100);
    const revenue = Math.round(deals * ltv);
    const cost = pricing[volume];
    return { replies, positive, meetings, deals: Math.round(deals * 10) / 10, revenue, cost, roi: Math.round(((revenue - cost) / cost) * 100) };
  }, [volume, ltv, closeRate]);
  return (
    <section className="section-space bg-background">
      <div className="page-container">
        <div className="text-center"><span className="eyebrow">ROI CALCULATOR</span><h2 className="section-title mt-5">Calculate your ROI</h2><p className="mt-4 text-muted-foreground">Plug in your numbers. See what high-volume cold email can do for your business.</p></div>
        <div className="mx-auto mt-10 grid max-w-6xl overflow-hidden rounded-lg border border-border shadow-card lg:grid-cols-2">
          <div className="bg-card p-7 sm:p-10">
            <h3 className="font-display text-xl font-bold">Your numbers</h3>
            <label className="input-label">Emails per day <span>{volume.toLocaleString()}/day</span></label>
            <div className="mt-3 grid grid-cols-5 gap-1 rounded-md bg-muted p-1.5">{volumes.map(item=><button type="button" key={item} onClick={()=>setVolume(item)} className={`light-volume-button ${volume===item?'light-volume-button-active':''}`}>{item/1000}k</button>)}</div>
            <label className="input-label" htmlFor="ltv">Average client LTV <span>${ltv.toLocaleString()}</span></label>
            <input id="ltv" type="range" min="500" max="50000" step="500" value={ltv} onChange={(e)=>setLtv(Number(e.target.value))} className="range-input" />
            <div className="range-labels"><span>$500</span><span>$50,000</span></div>
            <label className="input-label" htmlFor="close">Close rate from meetings <span>{closeRate}%</span></label>
            <input id="close" type="range" min="5" max="50" step="1" value={closeRate} onChange={(e)=>setCloseRate(Number(e.target.value))} className="range-input" />
            <div className="range-labels"><span>5%</span><span>50%</span></div>
            <div className="mt-7 rounded-md bg-primary-soft p-4 text-xs leading-relaxed text-muted-foreground"><strong className="text-foreground">Conservative assumption</strong><br/>1% reply rate · 5% positive · 40% book a meeting · 22 sending days/mo</div>
          </div>
          <div className="bg-ink p-7 text-primary-foreground sm:p-10">
            <h3 className="font-display text-xl font-bold">Projected monthly results</h3>
            <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-md bg-ink-border">
              {[['Total Replies',output.replies],['Positive replies',output.positive],['Meetings booked',output.meetings],['Deals closed',output.deals]].map(([label,value])=><div key={String(label)} className="bg-ink-card p-4"><div className="font-display text-2xl font-bold">{value}</div><div className="mt-1 text-xs text-ink-muted">{label}</div></div>)}
            </div>
            <div className="mt-7 space-y-4"><RoiRow label="Projected revenue" value={`$${output.revenue.toLocaleString()}`} accent/><RoiRow label="ListKit Cost" value={`$${output.cost.toLocaleString()}/mo`}/><RoiRow label="ROI" value={`${output.roi.toLocaleString()}%`} accent/></div>
            <div className="mt-8"><ActionLink>Book a Demo</ActionLink></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoiRow({label,value,accent=false}:{label:string;value:string;accent?:boolean}) { return <div className="flex items-end justify-between border-b border-ink-border pb-3"><span className="text-sm text-ink-muted">{label}</span><strong className={`font-display text-2xl ${accent?'text-brand-light':''}`}>{value}</strong></div>; }

const reviews = [
  { title:"Super smooth onboarding and support", text:"I really like how easy and straightforward everything is with ListKit. The campaigns are set up for me, I can edit scripts directly, and the support is next level.", initials:"DM", name:"Danny M.", role:"Founder · Marketing and Advertising" },
  { title:"Extremely reliable campaigns", text:"Deliverability has remained consistent, inbox placement and rotation hold up across campaigns, and the interface is intuitive with logical workflows.", initials:"DD", name:"Danielle D.", role:"Director of Operations · Consulting" },
  { title:"Essential tool for small teams", text:"ListKit has quickly become a favorite in the B2B lead generation space, especially for teams that want to avoid the busy work of data cleaning.", initials:"VR", name:"Venkat R.", role:"Associate Manager · Staffing" },
];

function ReviewsSection() {
  return <section className="section-space bg-soft"><div className="page-container"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><span className="eyebrow">CUSTOMER STORIES</span><h2 className="section-title mt-5">What Our Customers Say</h2></div><a href={REVIEW_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-semibold text-primary">See all reviews on G2 <ArrowRight className="h-4 w-4"/></a></div><div className="mt-10 grid gap-5 lg:grid-cols-3">{reviews.map(review=><article className="review-card" key={review.name}><div className="flex gap-1 text-warning">{Array.from({length:5}).map((_,i)=><Star key={i} className="h-4 w-4 fill-current"/>)}</div><h3 className="mt-6 font-display text-lg font-bold">{review.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{review.text}</p><div className="mt-8 flex items-center gap-3"><span className="avatar">{review.initials}</span><div><strong className="text-sm">{review.name}</strong><p className="text-xs text-muted-foreground">{review.role}</p></div></div></article>)}</div></div></section>;
}

const steps = [
  {icon:MousePointer2,title:"Pick your target audience",text:"Tell us who you want to reach. Our AI finds Triple-Verified leads that match your ideal customer profile."},
  {icon:Sparkles,title:"Our AI crafts the emails",text:"Get personalized cold email scripts based on top-performing templates, customized for your business."},
  {icon:Zap,title:"Hit start. Send 1,000 per day",text:"Inboxes, domains, warm-up and deliverability are pre-configured. You never touch the technical stuff."},
];

function ProcessSection() {
  return <section id="how-it-works" className="section-space bg-background"><div className="page-container"><div className="mx-auto max-w-3xl text-center"><span className="eyebrow">HOW IT WORKS</span><h2 className="section-title mt-5">You don&apos;t need to be a cold email expert. That&apos;s our job.</h2><p className="mt-5 text-muted-foreground">Domains, inbox warmup, sending limits, deliverability, and verification: we&apos;ve pre-configured all of it.</p></div><div className="relative mt-14 grid gap-5 md:grid-cols-3">{steps.map((step,i)=><article className="step-card" key={step.title}><span className="step-number">0{i+1}</span><step.icon className="mt-10 h-8 w-8 text-primary"/><h3 className="mt-5 font-display text-xl font-bold">{step.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p></article>)}</div><div className="mt-10 text-center"><ActionLink>Book a Demo</ActionLink></div></div></section>;
}

function ComparisonSection() {
  const oldItems=[["Apollo / Clay / ZoomInfo","$149–$500/mo"],["NeverBounce / ZeroBounce","$50–$200/mo"],["Instantly / Smartlead","$97/mo"],["Managed inboxes","$250/mo"],["Domain purchases","$150+/yr"],["Cold email copywriter","$250/mo"]];
  const newItems=["Triple-Verified leads","Email sending platform","Managed inboxes","AI Script Writing Agent","Cold email mastery course","Domains included free"];
  return <section className="section-space bg-ink text-primary-foreground"><div className="page-container"><div className="mx-auto max-w-3xl text-center"><span className="eyebrow eyebrow-dark">THE REAL COST</span><h2 className="section-title mt-5 text-primary-foreground">They told you cold email costs $47/mo. They lied.</h2><p className="mt-5 leading-relaxed text-ink-muted">Most platforms sell you one piece of the stack and leave you to figure out leads, verification, domains, inboxes, warm-up, sending, and copy.</p></div><div className="mx-auto mt-12 grid max-w-5xl gap-5 lg:grid-cols-2"><article className="comparison-card"><h3 className="font-display text-xl font-bold">Old Way: six tools and weeks of setup</h3><div className="mt-6 space-y-1">{oldItems.map(([name,price])=><div className="comparison-row" key={name}><span>{name}</span><strong>{price}</strong></div>)}</div><div className="mt-6 flex items-end justify-between border-t border-ink-border pt-6"><span className="text-sm text-ink-muted">Total cost of “cheap” cold email</span><strong className="font-display text-3xl">$1,041+/mo</strong></div></article><article className="comparison-card comparison-card-brand"><h3 className="font-display text-xl font-bold">The ListKit Way: everything included</h3><div className="mt-6 space-y-1">{newItems.map(name=><div className="comparison-row" key={name}><span className="flex items-center gap-2"><Check className="h-4 w-4 text-success"/>{name}</span><strong className="text-brand-light">Included</strong></div>)}</div><div className="mt-6 flex items-end justify-between border-t border-ink-border pt-6"><span className="text-sm text-ink-muted">Full stack, one bill</span><strong className="font-display text-3xl">$597/mo</strong></div></article></div></div></section>;
}

const features = [
  { icon:Database, title:"B2B Database + AI Search", text:"Describe your ideal customer in plain English and build a targeted list in under five minutes. Every exported contact is Triple-Verified.", points:["977M+ B2B contacts with Intent Signals","AI Search in plain English","Only verified, deliverable emails"] },
  { icon:ShieldCheck, title:"Triple-Verification Engine", text:"Pick your daily volume and ListKit handles the technical setup required to send safely, without putting your main domain at risk.", points:["Inboxes configured and warmed","98% deliverability","Expert sending limits baked in"] },
  { icon:Mail, title:"Email Engine", text:"Connect your inboxes, import contacts, generate a three-step sequence, and launch with every important setting pre-configured.", points:["Multi-step automatic follow-ups","Master Inbox for positive replies","Built-in deliverability protection"] },
  { icon:Sparkles, title:"AI Script Writing Agent", text:"Generate personalized email copy trained on hundreds of winning campaigns, complete with follow-ups and A/B testing.", points:["Three-step sequences generated","Personalized to your offer and industry","Edit freely, or launch as-is"] },
];

function FeaturesSection() {
  return <section id="features" className="section-space bg-background"><div className="page-container"><div className="mx-auto max-w-3xl text-center"><span className="eyebrow">EVERYTHING IN ONE PLACE</span><h2 className="section-title mt-5">The All In One<br/>Cold Email Platform</h2><p className="mt-5 text-muted-foreground">Most platforms give you one tool and call it a stack. Here&apos;s what ListKit actually includes.</p></div><div className="mt-16 space-y-20">{features.map((feature,i)=><article key={feature.title} className="grid items-center gap-10 lg:grid-cols-2"><div className={i%2?'lg:order-2':''}><span className="feature-number">0{i+1}</span><feature.icon className="mt-6 h-9 w-9 text-primary"/><h3 className="mt-5 font-display text-3xl font-bold">{feature.title}</h3><p className="mt-4 leading-relaxed text-muted-foreground">{feature.text}</p><ul className="mt-6 space-y-3">{feature.points.map(point=><li className="flex gap-3 text-sm font-medium" key={point}><CircleCheck className="h-5 w-5 shrink-0 text-primary"/>{point}</li>)}</ul></div><div className={i%2?'lg:order-1':''}><ProductWindow compact/></div></article>)}</div></div></section>;
}

function FinalCta() {
  return <section className="overflow-hidden bg-primary py-20 text-primary-foreground"><div className="page-container relative text-center"><Globe2 className="mx-auto h-12 w-12 opacity-80"/><h2 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-bold leading-tight sm:text-5xl">Your next client is already in our database.</h2><p className="mx-auto mt-5 max-w-2xl text-primary-foreground/75">Launch your first high-volume cold email campaign without stitching together six different tools.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><a href={DEMO_URL} className="button-inverse">Book a Demo <ArrowRight className="h-4 w-4"/></a><a href="#pricing" className="button-outline-inverse">Explore Plans</a></div></div></section>;
}

function Footer() {
  return <footer className="bg-ink py-12 text-primary-foreground"><div className="page-container flex flex-col gap-8"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center"><div><Logo/><p className="mt-3 max-w-sm text-sm text-ink-muted">The all-in-one cold email platform for B2B companies.</p></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink-muted"><a href="#features">Features</a><a href="#pricing">Pricing</a><a href="https://docs.listkit.io/en/">Help Center</a><a href={LOGIN_URL}>Log In</a></div></div><div className="flex flex-col justify-between gap-4 border-t border-ink-border pt-6 text-xs text-ink-muted sm:flex-row"><span>© 2026 ListKit. All rights reserved.</span><div className="flex gap-5"><a href="https://www.listkit.io/privacy">Privacy Policy</a><a href="https://www.listkit.io/terms">Terms</a></div></div></div></footer>;
}

function HomePage() {
  return <main className="min-h-screen overflow-x-hidden"><Header/><Hero/><DemoSection/><PricingSection/><ResultsSection/><RoiSection/><ReviewsSection/><ProcessSection/><ComparisonSection/><FeaturesSection/><FinalCta/><Footer/></main>;
}