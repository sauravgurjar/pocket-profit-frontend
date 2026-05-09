import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import AdSlot from "../components/monetize/AdSlot";
import FadeIn from "../components/motion/FadeIn";
import SipCalculator from "../components/calculators/SipCalculator";
import EmiCalculator from "../components/calculators/EmiCalculator";
import FdCalculator from "../components/calculators/FdCalculator";
import TaxCalculator from "../components/calculators/TaxCalculator";
import SavingsGoalCalculator from "../components/calculators/SavingsGoalCalculator";

const quickLinks = [
  { hash: "#sip", label: "SIP" },
  { hash: "#emi", label: "EMI" },
  { hash: "#fd", label: "FD" },
  { hash: "#tax", label: "Tax" },
  { hash: "#savings", label: "Savings Goal" },
];

export default function Calculators() {
  return (
    <>
      <Seo
        title="Finance Calculators"
        description="Use fast calculators for SIP, EMI, FD, tax estimate, and savings goals. Built for Indian users with a premium fintech UI."
        path="/calculators"
      />

      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <SectionHeading
            kicker="Tools"
            title="Finance calculators"
            subtitle="Quick, mobile-friendly tools to plan investments, loans, deposits, and savings goals."
          />

          <div className="mt-6 flex flex-wrap gap-2">
            {quickLinks.map((l) => (
              <Button key={l.hash} variant="secondary" as="a" href={l.hash} className="py-2">
                {l.label}
              </Button>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            <FadeIn>
              <SipCalculator />
            </FadeIn>
            <FadeIn>
              <EmiCalculator />
            </FadeIn>
            <FadeIn>
              <FdCalculator />
            </FadeIn>
            <FadeIn>
              <TaxCalculator />
            </FadeIn>
            <FadeIn>
              <SavingsGoalCalculator />
            </FadeIn>
          </div>
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 space-y-4">
            <AdSlot label="Sticky Sidebar Ad" />
            <Card>
              <div className="text-sm font-extrabold text-slate-900 dark:text-white">
                Affiliate Picks
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-white/65">
                Add curated credit cards, insurance, or investment products here (clearly marked).
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button as={Link} to="/credit-cards">
                  Compare Cards
                </Button>
                <Button variant="secondary" as={Link} to="/blog">
                  Read Guides
                </Button>
              </div>
            </Card>
            <AdSlot label="Affiliate Banner Placeholder" />
          </div>
        </aside>
      </div>
    </>
  );
}

