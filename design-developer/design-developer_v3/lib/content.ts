/**
 * ALL SITE COPY LIVES HERE.
 *
 * Rule from the audit: nothing placeholder-looking goes live.
 * Every optional block below renders ONLY when you fill it in:
 *   - site.calendarEmbedUrl   → shows the booking calendar (until then, buttons open an email)
 *   - offer.goLiveDays        → adds "live in N days" to the hero and How it works
 *   - offer.priceAnchor       → price guide in the FAQ and comparison table
 *   - testimonials            → shows the client quotes band
 *   - caseStudy               → shows the case study card
 *   - awardsPhotos            → shows the Two Comma Club award photos in About
 */

export type Photo = { src: string; alt: string; width: number; height: number };

export const site = {
  name: "Design Developer",
  url: "https://www.design-developer.com",
  email: "contact@design-developer.com",
  ctaLabel: "Book a Strategy Call",
  /** Paste your Calendly or GoHighLevel booking URL here, e.g. "https://calendly.com/you/strategy-call". */
  calendarEmbedUrl: "https://calendly.com/contact-adinacall/30min",
};

/** Where every booking button goes: the calendar if connected, otherwise a pre-filled email. */
export const bookingHref = site.calendarEmbedUrl
  ? "#calendar"
  : `mailto:${site.email}?subject=${encodeURIComponent("Strategy call request")}&body=${encodeURIComponent(
      "Hi Adina, I'd like to book a strategy call. The busywork I want off my plate first is: "
    )}`;

export const offer = {
  /** e.g. 14 → "live in 14 days". Leave null to hide. */
  goLiveDays: null as number | null,
  /** Price anchor shown in the FAQ and comparison table. Leave empty to hide. */
  priceAnchor: "About one month of a top employee's salary",
  /** How long until clients see results. */
  resultsTimeline: "90 days",
};

export const seo = {
  title: "Design Developer | AI Digital Employees for Wellness Clinics",
  description:
    "AI digital employees for wellness clinics: they answer every new lead in seconds, follow up, and keep your inbox and calendar moving. Built by Adina Call, who ran her own clinic.",
};

export const founderPhoto: Photo = {
  src: "/images/adina-call.jpg",
  alt: "Adina Call, founder of Design Developer, smiling",
  width: 690,
  height: 660,
};

export const heroPhoto: Photo = {
  src: "/images/adina-desk.jpg",
  alt: "Adina Call smiling at her kitchen counter with her laptop",
  width: 1024,
  height: 681,
};

export const aboutPhoto: Photo = {
  src: "/images/adina-office.jpg",
  alt: "Adina Call in her office, with her Two Comma Club award on the desk behind her",
  width: 1024,
  height: 1539,
};

export const problemPhoto: Photo = {
  src: "/images/adina-phone.jpg",
  alt: "Adina Call laughing while checking her phone",
  width: 1024,
  height: 1539,
};

export const bookingPhoto: Photo = {
  src: "/images/adina-couch.jpg",
  alt: "Adina Call relaxing on the couch with her French bulldog, her laptop beside her",
  width: 1024,
  height: 681,
};

/** "How I live" row in About. Leave empty to hide. */
export const lifestyle = {
  caption: "Wellness isn't just my market. It's how I live.",
  photos: [
    { src: "/images/adina-ice-bath.jpg", alt: "Adina Call laughing in an ice bath", width: 1024, height: 1539 },
    { src: "/images/adina-sauna.jpg", alt: "Adina Call laughing in a sauna", width: 1024, height: 1539 },
    { src: "/images/adina-gym.jpg", alt: "Adina Call smiling at a squat rack in her home gym", width: 1024, height: 1539 },
  ] as Photo[],
};

export const nav = [
  { label: "Roles", href: "#roles" },
  { label: "Ways to work", href: "#paths" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  title: "Hire a team that never clocks out.",
  subtitle:
    "AI employees for wellness clinics: they answer every new lead in seconds, follow up, and keep your inbox and calendar moving. Built by someone who ran her own clinic.",
  secondaryCta: { label: "See the roles", href: "#roles" },
};

export const trust = [
  "2× ClickFunnels Two Comma Club",
  "10+ years in wellness marketing",
  "Air Force Reserve, logistics",
];

export const problem = {
  title: "The work that slips through the cracks.",
  lines: [
    "The lead that came in at 9 pm and booked with someone else.",
    "The inbox waiting for you at 6 am.",
    "The follow-ups nobody had time to send.",
  ],
  turn: "That's the work a digital employee takes.",
};

export const rolesIntro = {
  title: "Roles you can hire",
  subtitle: "Each one is built for your clinic, trained on your voice, and connected to the tools you already use.",
};

/** `sample` is an illustrative example of the kind of output each role produces. Swap in real (anonymized) output when you have it. */
export const roles = [
  {
    role: "Lead Response Specialist",
    does: "Texts new leads in seconds with a lead score and next step, so no inquiry goes cold.",
    sample: {
      kind: "Text to a new lead",
      body: "Hi Sarah, thanks for reaching out about the hormone consult! We have openings Thursday at 10 or 2. Which works better?",
    },
  },
  {
    role: "Executive Assistant",
    does: "Manages your inbox, calendar, and a daily briefing so you start every day focused.",
    sample: {
      kind: "7 am briefing",
      body: "6 consults today, 2 new leads overnight (both replied to), 1 invoice overdue. Your 3 pm moved to Friday.",
    },
  },
  {
    role: "SEO Manager",
    does: "Publishes optimized articles and tracks rankings so you get found on Google and in AI search.",
    sample: {
      kind: "Live now on cellregenwellness.com",
      body: "“Hyperbaric Oxygen Therapy in Hood River: What to Know” · “Neurofeedback and Brain Health: A Guide” · “Understanding Metabolic Health and Weight Loss”",
      real: true,
      link: "https://cellregenwellness.com",
    },
  },
  {
    role: "Content Creator",
    does: "Turns your ideas into posts, emails, and scripts on a consistent publishing rhythm.",
    sample: {
      kind: "Draft for your review",
      body: "3 Instagram captions and Tuesday's newsletter are ready, written from your voice notes.",
    },
  },
  {
    role: "Marketing Manager",
    does: "Plans campaigns, coordinates channels, and reports on what's actually driving bookings.",
    sample: {
      kind: "Monthly summary",
      body: "Most new patients came from Google this month. Suggest moving budget from the paused Meta ad.",
    },
  },
  {
    role: "Operations Manager",
    does: "Keeps processes moving, follows up on open loops, and flags issues before they grow.",
    sample: {
      kind: "Open-loop alert",
      body: "Two intake forms are incomplete for tomorrow's appointments. Reminders sent to both patients.",
    },
  },
];

export const levels = {
  title: "How a digital employee grows",
  subtitle: "Each one starts by answering leads and takes on more as it proves itself.",
  items: [
    { name: "Respond", line: "Answers leads instantly" },
    { name: "Research", line: "Finds and summarizes information" },
    { name: "Create", line: "Writes content and copy" },
    { name: "Execute", line: "Completes tasks in your tools" },
    { name: "Schedule", line: "Runs recurring work on its own" },
    { name: "Own", line: "Takes responsibility for a goal" },
    { name: "Improve", line: "Measures results and gets better" },
  ],
};

/** Two offers. Edit the bullets to match exactly what each path includes. */
export const paths = {
  title: "Two ways to work together",
  subtitle: "Learn to build your own digital employees, or have us build them for you.",
  options: [
    {
      name: "Do it yourself",
      for: "For driven owners who want to learn the skill.",
      points: [
        "Learn the same process I use to build digital employees",
        "Build your first digital employee for your own business",
        "Guidance from me as you build",
      ],
      cta: "Ask about DIY",
    },
    {
      name: "Done for you",
      for: "For owners who want it handled.",
      points: [
        "We evaluate your business and send a custom proposal",
        "We build, train and connect your digital employees",
        "You review their work weekly while they take on more",
      ],
      cta: "Book a Strategy Call",
      featured: true,
    },
  ],
};

export const howItWorks = {
  title: "How done for you works",
  steps: [
    {
      title: "Strategy call",
      body: "We evaluate your business, map the busywork eating your week, and send a custom proposal.",
    },
    {
      title: "We build and train it",
      body: "Your digital employee learns your voice, your services and the tools it will work in.",
    },
    {
      title: "It goes live",
      body: "It starts working, and you review its work weekly while it takes on more. Plan on about 90 days to see results.",
    },
  ],
};

export const compare = {
  title: "Why not ChatGPT or a VA?",
  columns: ["Design Developer", "A virtual assistant", "Going it alone with AI tools"],
  rows: [
    { label: "Cost", values: ["Custom proposal, about one month of a top hire's salary", "Ongoing hourly or monthly pay", "Subscriptions plus your time"] },
    { label: "Setup", values: ["Built for you", "You train them", "You build it"] },
    { label: "Works nights and weekends", values: ["Yes", "Usually not", "Only what you set up"] },
    { label: "Knows your clinic and voice", values: ["Trained on it", "Over time", "Each time you prompt it"] },
    { label: "Who fixes it when it breaks", values: ["We do", "You manage it", "You do"] },
  ],
};

/**
 * Real, named client quotes only (full name, business, city, photo).
 * Example: { quote: "…", name: "Jane Smith", business: "Glow Wellness", city: "Portland, OR", photo: { src: "/images/jane.jpg", alt: "Jane Smith", width: 400, height: 400 } }
 */
export const testimonials: {
  quote: string;
  name: string;
  /** Add business and city when you have them: they make the quote more believable. */
  business?: string;
  city?: string;
  photo?: Photo;
  stars?: number;
  /** Shown in small print under the quote. */
  disclaimer?: string;
}[] = [
  {
    quote:
      "Working with Adina transformed my business fundamentally. In less than 9 months, we grew from $18,000/month to $139,000/month. That's a 672% increase. Her process is systematic: she identifies what actually moves the needle, tests ruthlessly, and scales what works.",
    name: "Dr. Bryan Call",
    business: "Chiropractor & Clinic Owner (Adina's husband)",
    stars: 5,
    disclaimer: "Results not typical. Individual results will vary based on effort, experience, and market conditions.",
  },
  {
    quote:
      "Adina was wonderful to work with! She is very passionate about how my business could make money and has been thorough in her research. I'm extremely happy with my deliverables and her work!",
    name: "Momoko Fritz",
  },
];

/**
 * Real client results only. Never invent numbers.
 * Source: wellflowco.com/case-studies (Adina's agency work).
 */
export const resultsIntro = {
  title: "Results from practices I've built",
  subtitle: "Brands, websites and marketing I've built for wellness practices, including my own clinic. The same playbook now runs inside your digital employees.",
};

export const caseStudies: {
  client: string;
  business: string;
  website?: string;
  problem: string;
  built: string;
  results: string[];
  photo?: Photo;
}[] = [
  {
    client: "Cell Regen",
    business: "My own wellness clinic · Hood River, OR",
    website: "https://cellregenwellness.com",
    problem: "A new holistic clinic launching during COVID, when wellness was far less mainstream.",
    built: "The brand, website and organic social strategy, and now its first digital employee: an SEO Manager publishing articles.",
    results: ["1.5M+ views on one video", "10,000 new followers from a single viral video"],
  },
  {
    client: "NEU Wellness · Dr. Ali Hamtaee",
    business: "Two-location chiropractic practice · Florida",
    website: "https://neuwc.com",
    problem: "Built around personal injury and insurance collections, the practice wanted to return to its wellness roots.",
    built: "Brand relaunch, new wellness services, a social and content framework, and Facebook and Instagram lead generation.",
    results: ["175+ leads from Facebook and Instagram campaigns", "Moved from insurance collections to a cash-based wellness center"],
  },
  {
    client: "Dr. Bryan Call",
    business: "My husband's chiropractic and regenerative clinic",
    problem: "Needed a cash-based offer to fund medical staff and expand the practice.",
    built: "A new offer, an in-person event strategy, a dedicated Facebook ad, a sales page and a front-desk follow-up system.",
    results: ["Six-figure gross profit in 30 days", "$18K to $139K a month in under 9 months"],
  },
];

export const about = {
  title: "I run these in my own businesses first.",
  paragraphs: [
    "I'm Adina Call. I started building websites, scaled into Facebook and Google ads, and earned two ClickFunnels Two Comma Club awards along the way.",
    "After a decade in wellness marketing, running my own clinic, and serving as an Air Force Reservist in logistics, I know what it takes to keep a practice moving. Every digital employee I build for you, I've run in my own businesses first, starting with the SEO Manager that writes for my clinic, Cell Regen.",
  ],
  signature: "Adina Call, Founder",
};

/** Proof of the Two Comma Club awards, shown in About. Leave empty to hide. */
export const awardsPhotos: (Photo & { caption: string })[] = [
  {
    src: "/images/two-comma-club-stage.jpg",
    alt: "Adina Call on stage at Funnel Hacking Live holding a ClickFunnels Two Comma Club award",
    width: 1206,
    height: 773,
    caption: "On stage receiving a Two Comma Club award",
  },
  {
    src: "/images/award-plaque-desk.jpg",
    alt: "A ClickFunnels Two Comma Club award plaque on Adina's desk while she works on her laptop",
    width: 1024,
    height: 681,
    caption: "The plaque on my desk",
  },
];

export const faq = {
  title: "Questions before you book",
  /** Review these answers so they match how you actually work. */
  items: [
    {
      q: "What does it cost?",
      a: offer.priceAnchor
        ? "Pricing depends on an evaluation of your company and a custom proposal. As a guide, it's about what you'd pay a top employee for one month: roughly $8,300 for a $100K-a-year role. You'll have your proposal before anything is built."
        : "It depends on which roles you hire. You'll get a clear price on the strategy call, before anything is built.",
    },
    {
      q: "How long until it's live?",
      a: offer.goLiveDays
        ? `Most digital employees are live within ${offer.goLiveDays} days of the strategy call.`
        : "We'll give you a timeline on the call. Your first role is built and trained before it touches a single lead.",
    },
    {
      q: "When will I see results?",
      a: `Plan on about ${offer.resultsTimeline}. Your digital employee gets better every week as it learns your clinic, your patients and what works.`,
    },
    {
      q: "What data does it access, and who can see it?",
      a: "Only the tools you approve, such as your inbox, calendar or CRM. You keep ownership of your accounts and can remove access at any time.",
    },
    {
      q: "What if it makes a mistake?",
      a: "You review its work weekly, and anything sensitive can be set to wait for your approval. When something's off, we fix it.",
    },
    {
      q: "Is there a long-term contract?",
      a: "We'll walk through the terms on the call so you know exactly what you're agreeing to before you start.",
    },
  ],
};

export const finalCta = {
  title: "Ready to build your digital team?",
  subtitle: "Book a free strategy call. We'll map the busywork, then show you which digital employee to hire first.",
};

export const agencyLine = "Need the website, the ads or the funnel too? We build those as well.";

export const footer = {
  tagline: "AI digital employees for wellness clinics and the owners who run them.",
  links: [
    { label: "Roles", href: "/#roles" },
    { label: "Ways to work", href: "/#paths" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "About", href: "/#about" },
    { label: "FAQ", href: "/#faq" },
    { label: "Privacy", href: "/privacy" },
  ],
};
