import Seo from "../components/Seo";
import SectionHeading from "../components/ui/SectionHeading";
import AdSlot from "../components/monetize/AdSlot";
import CreditCardCard from "../components/creditcards/CreditCardCard";
import { creditCards } from "../data/creditCards";
import FadeIn from "../components/motion/FadeIn";
import Card from "../components/ui/Card";

export default function CreditCards() {
  return (
    <>
      <Seo
        title="Credit Card Comparison"
        description="Compare credit cards by annual fees, rewards, cashback, travel, and shopping benefits. Monetization-ready affiliate CTAs included."
        path="/credit-cards"
      />

      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <SectionHeading
            kicker="Compare"
            title="Credit card comparison"
            subtitle="Premium comparison cards with clear benefits. Always verify details on the issuer’s website."
          />

          <div className="mt-8 grid gap-4">
            {creditCards.map((c, idx) => (
              <FadeIn key={c.id} delay={idx * 0.05}>
                <CreditCardCard card={c} />
              </FadeIn>
            ))}
          </div>

          <div className="mt-6">
            <AdSlot label="In-content Ad Slot" />
          </div>
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 space-y-4">
            <AdSlot label="Sticky Sidebar Ad" />
            <Card>
              <div className="text-sm font-extrabold text-slate-900 dark:text-white">
                How to choose
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-white/65">
                <li>Pick one primary benefit: cashback, travel, or rewards.</li>
                <li>Always pay total due—avoid interest charges.</li>
                <li>Keep utilization low to support your credit score.</li>
              </ul>
            </Card>
            <AdSlot label="Affiliate Banner Placeholder" />
          </div>
        </aside>
      </div>
    </>
  );
}

