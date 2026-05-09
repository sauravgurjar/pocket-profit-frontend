import { Link } from "react-router-dom";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const groups = [
  {
    title: "Tools",
    links: [
      { to: "/calculators", label: "Finance Calculators" },
      { to: "/credit-cards", label: "Credit Card Comparison" },
      { to: "/blog", label: "Finance Guides" },
    ],
  },
  {
    title: "Learn",
    links: [
      { to: "/blog?category=Investing", label: "Investing Basics" },
      { to: "/blog?category=Tax%20Saving", label: "Tax Saving" },
      { to: "/blog?category=Budgeting", label: "Budgeting" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/contact", label: "Contact" },
      { to: "/privacy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms & Conditions" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-900/10 bg-white/60 dark:border-white/10 dark:bg-ink-900/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent-500 text-ink-950 shadow-glow">
              P
            </span>
            PocketProfit
          </div>
          <p className="mt-4 max-w-md text-sm text-slate-600 dark:text-white/65">
            Premium calculators, finance guides, and comparisons designed for Indian
            users who want to save more, invest smarter, and build long-term wealth.
          </p>
          <div className="mt-5 flex items-center gap-2 text-slate-600 dark:text-white/65">
            <a className="rounded-lg p-2 hover:bg-slate-900/5 dark:hover:bg-white/10" href="#">
              <Twitter className="h-4 w-4" />
            </a>
            <a className="rounded-lg p-2 hover:bg-slate-900/5 dark:hover:bg-white/10" href="#">
              <Linkedin className="h-4 w-4" />
            </a>
            <a className="rounded-lg p-2 hover:bg-slate-900/5 dark:hover:bg-white/10" href="#">
              <Instagram className="h-4 w-4" />
            </a>
            <a className="rounded-lg p-2 hover:bg-slate-900/5 dark:hover:bg-white/10" href="#">
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>

        {groups.map((g) => (
          <div key={g.title}>
            <div className="text-sm font-bold text-slate-900 dark:text-white">{g.title}</div>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-white/65">
              {g.links.map((l) => (
                <li key={l.to}>
                  <Link className="hover:text-slate-900 dark:hover:text-white" to={l.to}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-900/10 px-4 py-6 text-center text-xs text-slate-500 dark:border-white/10 dark:text-white/45">
        © {new Date().getFullYear()} PocketProfit. Educational content only — not financial advice.
      </div>
    </footer>
  );
}

