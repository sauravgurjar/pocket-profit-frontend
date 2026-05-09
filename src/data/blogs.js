import investing from "../assets/blog/investing.svg";
import budgeting from "../assets/blog/budgeting.svg";
import creditcards from "../assets/blog/creditcards.svg";
import taxsaving from "../assets/blog/taxsaving.svg";
import sidehustle from "../assets/blog/sidehustle.svg";
import aifinance from "../assets/blog/aifinance.svg";

export const BLOG_CATEGORIES = [
  "Investing",
  "Budgeting",
  "Credit Cards",
  "Tax Saving",
  "Side Hustles",
  "AI Finance Tips",
];

export const blogs = [
  {
    id: "pp-001",
    slug: "sip-vs-lumpsum-which-is-better",
    title: "SIP vs Lumpsum: What Works Better for Indian Investors?",
    excerpt:
      "A practical breakdown with simple examples so you can pick the right approach for your goals and risk comfort.",
    category: "Investing",
    date: "2026-02-12",
    readTime: "6 min",
    image: investing,
    tags: ["SIP", "Mutual Funds", "Beginner"],
  },
  {
    id: "pp-002",
    slug: "50-30-20-rule-india",
    title: "The 50/30/20 Rule (India Edition): Make It Actually Work",
    excerpt:
      "Turn budgeting theory into a realistic monthly plan—even with rent, EMIs, and family responsibilities.",
    category: "Budgeting",
    date: "2026-03-01",
    readTime: "5 min",
    image: budgeting,
    tags: ["Budget", "Saving", "Money Habits"],
  },
  {
    id: "pp-003",
    slug: "best-credit-card-for-first-job",
    title: "Best Credit Card for Your First Job: Rewards Without Traps",
    excerpt:
      "How to choose annual fees, rewards, and cashback with a simple checklist and common mistakes to avoid.",
    category: "Credit Cards",
    date: "2026-01-08",
    readTime: "7 min",
    image: creditcards,
    tags: ["Rewards", "Cashback", "CIBIL"],
  },
  {
    id: "pp-004",
    slug: "tax-saving-checklist-80c-80d",
    title: "Tax Saving Checklist: 80C, 80D, HRA, and the Easy Wins",
    excerpt:
      "A clean step-by-step checklist to reduce tax legally, without confusing jargon or last-minute panic.",
    category: "Tax Saving",
    date: "2026-03-15",
    readTime: "8 min",
    image: taxsaving,
    tags: ["80C", "80D", "ITR"],
  },
  {
    id: "pp-005",
    slug: "side-hustles-that-actually-scale",
    title: "Side Hustles That Actually Scale (Without Burnout)",
    excerpt:
      "Practical, low-risk ideas with a simple time-vs-income model and ways to avoid common pitfalls.",
    category: "Side Hustles",
    date: "2026-02-26",
    readTime: "6 min",
    image: sidehustle,
    tags: ["Freelance", "Skills", "Income"],
  },
  {
    id: "pp-006",
    slug: "ai-personal-finance-workflow",
    title: "AI Finance Tips: A Simple Weekly Workflow to Stay on Track",
    excerpt:
      "Use AI like a coach: spending review prompts, goal tracking, and budget nudges that take 10 minutes.",
    category: "AI Finance Tips",
    date: "2026-04-03",
    readTime: "5 min",
    image: aifinance,
    tags: ["AI", "Workflow", "Habits"],
  },
];

export const trendingSlugs = [
  "tax-saving-checklist-80c-80d",
  "sip-vs-lumpsum-which-is-better",
  "ai-personal-finance-workflow",
];

