import { Link } from "react-router-dom";
import { Calculator, Landmark, Percent, Wallet } from "lucide-react";
import FadeIn from "../motion/FadeIn";
import Card from "../ui/Card";
import SectionHeading from "../ui/SectionHeading";

const features = [
  { title: "SIP Calculator", icon: Landmark, desc: "Estimate growth with monthly investing.", to: "/calculators#sip" },
  { title: "EMI Calculator", icon: Percent, desc: "Plan loans with clear monthly EMIs.", to: "/calculators#emi" },
  { title: "Tax Calculator", icon: Wallet, desc: "Quick tax estimate with assumptions.", to: "/calculators#tax" },
  { title: "Budget Planner", icon: Calculator, desc: "Set realistic monthly targets.", to: "/calculators#savings" },
];

export default function FeatureCards() {
  return (
    <section className="mt-14">
      <SectionHeading
        kicker="Popular tools"
        title="Calculator suite built for real life"
        subtitle="Fast, mobile-friendly, and designed for Indian middle-class goals: savings, loans, and investing."
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, idx) => (
          <FadeIn key={f.title} delay={idx * 0.05}>
            <Link to={f.to} className="block">
              <Card className="h-full transition hover:-translate-y-0.5 hover:border-accent-500/30">
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-accent-500/15 text-accent-600 dark:text-accent-300">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-slate-900 dark:text-white">
                      {f.title}
                    </div>
                    <div className="mt-1 text-sm text-slate-600 dark:text-white/65">
                      {f.desc}
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

