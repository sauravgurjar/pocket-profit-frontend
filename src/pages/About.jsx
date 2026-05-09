import Seo from "../components/Seo";
import Card from "../components/ui/Card";
import SectionHeading from "../components/ui/SectionHeading";
import FadeIn from "../components/motion/FadeIn";

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="PocketProfit is a modern fintech-style website for Indian users: calculators, finance guides, and comparisons built for clarity and trust."
        path="/about"
      />

      <SectionHeading
        kicker="Company"
        title="About PocketProfit"
        subtitle="A premium, SEO-ready frontend that feels like an AI-powered finance assistant."
      />

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {[
          {
            t: "Mission",
            b: "Make personal finance simpler for Indian households with clean tools and practical education.",
          },
          {
            t: "Principles",
            b: "Clarity over jargon, trust over hype, and experience over clutter.",
          },
          {
            t: "Monetization",
            b: "Ads, affiliate links, and sponsored placements—always clearly disclosed.",
          },
        ].map((x, idx) => (
          <FadeIn key={x.t} delay={idx * 0.05}>
            <Card className="h-full">
              <h2 className="text-base font-extrabold text-slate-900 dark:text-white">{x.t}</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-white/65">{x.b}</p>
            </Card>
          </FadeIn>
        ))}
      </div>

      <div className="mt-6">
        <Card>
          <h2 className="text-base font-extrabold text-slate-900 dark:text-white">Disclaimer</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-white/65">
            PocketProfit content is educational and not financial advice. Always verify product terms and consult
            qualified professionals for decisions.
          </p>
        </Card>
      </div>
    </>
  );
}

