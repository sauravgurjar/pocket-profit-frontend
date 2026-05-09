import Seo from "../components/Seo";
import Card from "../components/ui/Card";
import SectionHeading from "../components/ui/SectionHeading";

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="PocketProfit privacy policy: data handling, cookies, ads, and affiliate disclosures."
        path="/privacy"
      />

      <SectionHeading
        kicker="Legal"
        title="Privacy Policy"
        subtitle="This is a starter template. Update it for your real product and legal requirements."
      />

      <Card className="mt-8 space-y-4 text-sm leading-relaxed text-slate-700 dark:text-white/70">
        <p>
          PocketProfit is a frontend-only demo. In a production app, we may collect basic analytics to improve
          performance and content quality.
        </p>
        <h2 className="text-base font-extrabold text-slate-900 dark:text-white">Cookies & ads</h2>
        <p>
          We may display ads (e.g., Google AdSense). Ad networks may use cookies to personalize ads. You can control
          cookies via browser settings.
        </p>
        <h2 className="text-base font-extrabold text-slate-900 dark:text-white">Affiliate links</h2>
        <p>
          Some links may be affiliate links, which can earn us a commission. This does not increase your cost.
        </p>
        <h2 className="text-base font-extrabold text-slate-900 dark:text-white">Contact</h2>
        <p>Questions? Reach us via the Contact page.</p>
      </Card>
    </>
  );
}

