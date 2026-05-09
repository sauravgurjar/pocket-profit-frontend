import { Quote } from "lucide-react";
import FadeIn from "../motion/FadeIn";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section className="mt-14">
      <SectionHeading
        kicker="Trust"
        title="Trusted by everyday earners"
        subtitle="Built for clarity—so you feel confident about money decisions."
      />
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {testimonials.map((t, idx) => (
          <FadeIn key={t.name} delay={idx * 0.06}>
            <Card className="h-full">
              <Quote className="h-4 w-4 text-accent-500" />
              <p className="mt-3 text-sm text-slate-600 dark:text-white/70">{t.quote}</p>
              <div className="mt-5 text-sm font-extrabold text-slate-900 dark:text-white">
                {t.name}
              </div>
              <div className="text-xs text-slate-500 dark:text-white/50">{t.role}</div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

