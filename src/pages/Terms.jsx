import Seo from "../components/Seo";
import Card from "../components/ui/Card";
import SectionHeading from "../components/ui/SectionHeading";

export default function Terms() {
  return (
    <>
      <Seo
        title="Terms & Conditions"
        description="PocketProfit terms: content disclaimer, affiliate disclosure, and user responsibilities."
        path="/terms"
      />

      <SectionHeading
        kicker="Legal"
        title="Terms & Conditions"
        subtitle="This is a starter template. Please consult legal counsel for production use."
      />

      <Card className="mt-8 space-y-4 text-sm leading-relaxed text-slate-700 dark:text-white/70">
        <h2 className="text-base font-extrabold text-slate-900 dark:text-white">Educational content</h2>
        <p>
          PocketProfit provides educational tools and content. We do not guarantee accuracy, completeness, or
          suitability for your personal circumstances.
        </p>
        <h2 className="text-base font-extrabold text-slate-900 dark:text-white">No financial advice</h2>
        <p>
          Nothing on PocketProfit constitutes financial, legal, or tax advice. You are responsible for your decisions.
        </p>
        <h2 className="text-base font-extrabold text-slate-900 dark:text-white">Affiliate disclosure</h2>
        <p>
          PocketProfit may receive compensation through affiliate links and sponsored placements. Such content should
          be clearly marked.
        </p>
        <h2 className="text-base font-extrabold text-slate-900 dark:text-white">Limitation of liability</h2>
        <p>Use the site at your own risk. PocketProfit is not liable for losses arising from use of the site.</p>
      </Card>
    </>
  );
}

