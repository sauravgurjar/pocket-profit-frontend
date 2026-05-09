import FadeIn from "../motion/FadeIn";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import { tips } from "../../data/tips";

export default function MoneyTips() {
  return (
    <section className="mt-14">
      <SectionHeading
        kicker="Habits"
        title="Money-saving tips you can start today"
        subtitle="Simple changes that compound—without extreme budgeting."
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tips.map((t, idx) => (
          <FadeIn key={t.title} delay={idx * 0.05}>
            <Card className="h-full">
              <div className="text-sm font-extrabold text-slate-900 dark:text-white">{t.title}</div>
              <p className="mt-2 text-sm text-slate-600 dark:text-white/65">{t.body}</p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

