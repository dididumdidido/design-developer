/**
 * All site copy and image slots live here.
 * To swap a placeholder for a real transparent PNG:
 *   1. Drop the file in /public/images (e.g. /public/images/clock.png)
 *   2. Set `src: "/images/clock.png"` on the matching entry below.
 */

export type ImageSlot = {
  label: string; // shown on the placeholder until `src` is set
  src?: string;
  alt?: string;
};

export const site = {
  name: "Design Developer",
  url: "https://design-developer.com",
  email: "contact@design-developer.com",
  ctaLabel: "Book a Strategy Call",
  ctaHref: "#book",
  /** Paste your Calendly or GoHighLevel booking URL to replace the calendar placeholder. */
  calendarEmbedUrl: "",
};

export const nav = [
  { label: "Digital Employees", href: "#levels" },
  { label: "Marketing", href: "#team" },
  { label: "Agency", href: "#agency" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
];

export const hero = {
  eyebrow: "AI Digital Employees",
  title: "Hire a team that never clocks out.",
  subtitle:
    "Custom AI digital employees, marketing, and agency services that run your business's busywork, so you can lead.",
  status: "Your digital team is online",
  image: { label: "3D glass & chrome hero object – Digital team core" } as ImageSlot,
};

export const levelsIntro = {
  eyebrow: "The Framework",
  title: "Levels of a Digital Employee",
  subtitle: "Not a chatbot. A teammate that levels up, from answering leads to owning outcomes.",
};

export const levels: { title: string; description: string; image: ImageSlot }[] = [
  {
    title: "Respond",
    description: "Answers every lead instantly, day or night, before they call your competitor.",
    image: { label: "3D glass chat bubble – Respond" },
  },
  {
    title: "Research",
    description: "Finds, reads, and summarizes the information you need in minutes, not afternoons.",
    image: { label: "3D glass magnifier – Research" },
  },
  {
    title: "Create",
    description: "Writes on-brand content, emails, and ad copy that sounds like you.",
    image: { label: "3D glass pen nib – Create" },
  },
  {
    title: "Execute",
    description: "Completes real tasks inside the tools you already use: CRM, inbox, calendar, Slack.",
    image: { label: "3D glass lightning bolt – Execute" },
  },
  {
    title: "Schedule",
    description: "Runs recurring work on its own, on time, without being asked.",
    image: { label: "3D glass clock – Schedule" },
  },
  {
    title: "Own",
    description: "Takes responsibility for a goal, not just a task, and drives it to done.",
    image: { label: "3D glass target – Own" },
  },
  {
    title: "Improve",
    description: "Measures its own results and gets better every week.",
    image: { label: "3D glass rising chart – Improve" },
  },
];

export const teamIntro = {
  eyebrow: "Meet Your Digital Team",
  title: "Roles you can hire today.",
  subtitle: "Each digital employee is built for your business, trained on your voice, and plugged into your tools.",
};

export const team = [
  {
    icon: "Search",
    role: "SEO Manager",
    description: "Publishes optimized content and tracks rankings so you get found on Google and in AI search.",
  },
  {
    icon: "Megaphone",
    role: "Marketing Manager",
    description: "Plans campaigns, coordinates channels, and reports on what's actually driving revenue.",
  },
  {
    icon: "Zap",
    role: "Lead Response Specialist",
    description: "Texts new leads in seconds with a lead score and next step, so no inquiry goes cold.",
  },
  {
    icon: "PenLine",
    role: "Content Creator",
    description: "Turns your ideas into posts, emails, and scripts on a consistent publishing rhythm.",
  },
  {
    icon: "Workflow",
    role: "Operations Manager",
    description: "Keeps processes moving, follows up on open loops, and flags issues before they grow.",
  },
  {
    icon: "CalendarCheck",
    role: "Executive Assistant",
    description: "Manages your inbox, calendar, and daily briefing so you start every day focused.",
  },
] as const;

export const agencyIntro = {
  eyebrow: "Agency Services",
  title: "Human strategy. Built to convert.",
  subtitle: "When you need more than a digital employee, our agency builds the engine around it.",
};

export const services = [
  {
    icon: "MonitorSmartphone",
    title: "Websites & Apps",
    description: "Fast, beautiful sites and custom apps designed to turn visitors into booked clients.",
    image: { label: "3D glass device – Websites & Apps" } as ImageSlot,
  },
  {
    icon: "Target",
    title: "Paid Ads & Funnels",
    description: "Meta and Google campaigns paired with funnels engineered by a 2x Two Comma Club winner.",
    image: { label: "3D glass funnel – Paid Ads & Funnels" } as ImageSlot,
  },
  {
    icon: "LineChart",
    title: "SEO & Content",
    description: "Search-optimized content that compounds month after month and keeps you visible.",
    image: { label: "3D glass graph – SEO & Content" } as ImageSlot,
  },
] as const;

export const resultsIntro = {
  eyebrow: "Results",
  title: "Proven where it counts.",
  subtitle: "Real-world marketing results and the discipline to deliver them.",
};

export const stats = [
  { value: "10+", label: "Years in wellness marketing" },
  { value: "2x", label: "ClickFunnels Two Comma Club" },
  { value: "USAF", label: "Air Force Reservist" },
];

export const caseStudy = {
  eyebrow: "Case Study",
  client: "Client name",
  title: "Case study headline goes here",
  summary: "One or two sentences on the challenge, what we built, and the outcome.",
  metrics: [
    { value: "00%", label: "Metric one" },
    { value: "00x", label: "Metric two" },
    { value: "00", label: "Metric three" },
  ],
  image: { label: "Case study visual – screenshot or 3D object" } as ImageSlot,
};

export const about = {
  eyebrow: "About",
  title: "Built by an operator, not a theorist.",
  paragraphs: [
    "I'm Adina Call, founder of Design Developer. I started building websites, scaled into Facebook and Google ads, and earned two ClickFunnels Two Comma Club awards along the way.",
    "After a decade in wellness marketing, running my own clinic, and serving as an Air Force Reservist in logistics, I know what it takes to keep a business moving. Today I build AI digital employees that carry that load, and I run them in my own businesses first.",
  ],
  signature: "Adina Call, Founder",
  status: "Taking new strategy calls",
  image: { label: "Founder photo – Adina Call (transparent PNG)" } as ImageSlot,
};

export const finalCta = {
  eyebrow: "Get Started",
  title: "Ready to build your digital team?",
  subtitle: "Book a free strategy call. We'll map the busywork, then show you which digital employees to hire first.",
};

export const footer = {
  tagline: "AI digital employees, marketing, and agency services for business owners.",
  columns: [
    {
      title: "Digital Employees",
      links: [
        { label: "Levels", href: "#levels" },
        { label: "Meet the Team", href: "#team" },
      ],
    },
    {
      title: "Agency",
      links: [
        { label: "Websites & Apps", href: "#agency" },
        { label: "Paid Ads & Funnels", href: "#agency" },
        { label: "SEO & Content", href: "#agency" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Results", href: "#results" },
        { label: "About", href: "#about" },
        { label: "Book a Call", href: "#book" },
      ],
    },
  ],
};
