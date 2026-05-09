import { useEffect } from "react";
import Card from "../ui/Card";

export default function AdSlot({
  label = "Sponsored",
  className = "",
  adSlot = "1234567890",
}) {
  useEffect(() => {
    try {
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <Card className={className}>
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm font-bold text-slate-900 dark:text-white">
          {label}
        </div>

        <span className="rounded-full border border-slate-900/10 bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-white/70">
          Ads
        </span>
      </div>

      <ins
        className="adsbygoogle block"
        style={{ display: "block" }}
        data-ad-client="ca-pub-2046999803654855"
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </Card>
  );
}