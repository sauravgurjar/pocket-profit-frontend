import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, TrendingUp } from "lucide-react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import Counter from "../motion/Counter";

const float = {
  animate: { y: [0, -10, 0] },
  transition: { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-900/10 bg-white/60 p-8 shadow-soft dark:border-white/10 dark:bg-ink-850/60 sm:p-12">
      <div className="absolute inset-0 bg-hero-grid opacity-80" aria-hidden="true" />
      <div className="relative grid items-center gap-10 lg:grid-cols-2">
        <div>
          <Badge className="mb-4">
            <Sparkles className="mr-2 h-3.5 w-3.5" /> Premium finance tools for India
          </Badge>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Smart Money Decisions Start Here
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-white/70 sm:text-base">
            PocketProfit helps you save more, invest smarter, and learn personal finance with
            fast calculators, clear guides, and unbiased comparisons.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button as={Link} to="/calculators">
              Explore Calculators
            </Button>
            <Button variant="secondary" as={Link} to="/blog">
              Read Finance Guides
            </Button>
          </div>
          <div className="mt-8 grid max-w-xl grid-cols-3 gap-4">
            {[
              { k: "Tools", v: <Counter to={5} /> },
              { k: "Guides", v: <Counter to={6} /> },
              { k: "Seconds", v: <Counter to={3} /> },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl bg-white/60 p-4 dark:bg-white/5">
                <div className="text-xs font-semibold text-slate-600 dark:text-white/60">{s.k}</div>
                <div className="mt-1 text-lg font-extrabold text-slate-900 dark:text-white">
                  {s.v}
                  <span className="text-sm font-bold text-slate-500 dark:text-white/50">+</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <motion.div
            {...float}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-glow"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-accent-500 text-ink-950">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-extrabold text-slate-900 dark:text-white">
                  Wealth Dashboard
                </div>
                <div className="text-xs text-slate-600 dark:text-white/60">
                  A clean overview of your progress
                </div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { label: "Monthly SIP", value: "₹5,000" },
                { label: "Goal", value: "₹10L" },
                { label: "Time", value: "7 years" },
                { label: "Est. value", value: "₹7.9L" },
              ].map((m) => (
                <div key={m.label} className="rounded-2xl bg-white/60 p-4 dark:bg-ink-900/50">
                  <div className="text-xs font-semibold text-slate-600 dark:text-white/60">
                    {m.label}
                  </div>
                  <div className="mt-1 text-lg font-extrabold text-slate-900 dark:text-white">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-accent-500/20 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
