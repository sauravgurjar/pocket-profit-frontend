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
    title: "SIP vs Lumpsum: Which Investment Strategy Builds More Wealth?",
    excerpt:
      "Confused between SIP and lumpsum investing? Learn the pros, risks, returns, and best strategy for different market conditions in India.",
    category: "Investing",
    date: "2026-02-12",
    readTime: "7 min",
    image: investing,
    tags: ["SIP", "Mutual Funds", "Investment"],
  },
  {
    id: "pp-002",
    slug: "50-30-20-rule-india",
    title: "The 50/30/20 Budget Rule Explained for Indian Salaries",
    excerpt:
      "A realistic budgeting framework for Indians dealing with rent, EMIs, savings goals, and rising monthly expenses.",
    category: "Budgeting",
    date: "2026-03-01",
    readTime: "6 min",
    image: budgeting,
    tags: ["Budgeting", "Savings", "Personal Finance"],
  },
  {
    id: "pp-003",
    slug: "best-credit-card-for-first-job",
    title: "Best Credit Cards for Beginners in India (2026 Guide)",
    excerpt:
      "Choose your first credit card smartly with low fees, cashback rewards, and simple tips to build a strong CIBIL score.",
    category: "Credit Cards",
    date: "2026-01-08",
    readTime: "8 min",
    image: creditcards,
    tags: ["Credit Card", "Cashback", "CIBIL"],
  },
  {
    id: "pp-004",
    slug: "tax-saving-checklist-80c-80d",
    title: "Complete Tax Saving Checklist for Salaried Employees",
    excerpt:
      "Save more tax legally using 80C, 80D, HRA, NPS, and smart deductions before the financial year ends.",
    category: "Tax Saving",
    date: "2026-03-15",
    readTime: "9 min",
    image: taxsaving,
    tags: ["Tax", "80C", "ITR Filing"],
  },
  {
    id: "pp-005",
    slug: "side-hustles-that-actually-scale",
    title: "Top Side Hustles in India That Can Grow Into Full-Time Income",
    excerpt:
      "Explore scalable side hustle ideas like freelancing, digital products, AI services, and content businesses without huge investment.",
    category: "Side Hustles",
    date: "2026-02-26",
    readTime: "7 min",
    image: sidehustle,
    tags: ["Freelancing", "Income", "Business"],
  },
  {
    id: "pp-006",
    slug: "ai-personal-finance-workflow",
    title: "How to Use AI to Manage Your Personal Finances Smarter",
    excerpt:
      "Use AI tools for budgeting, expense tracking, saving goals, investing insights, and weekly money planning in just 10 minutes.",
    category: "AI Finance Tips",
    date: "2026-04-03",
    readTime: "6 min",
    image: aifinance,
    tags: ["AI", "Finance", "Productivity"],
  },
];

export const trendingSlugs = [
  "tax-saving-checklist-80c-80d",
  "sip-vs-lumpsum-which-is-better",
  "ai-personal-finance-workflow",
];