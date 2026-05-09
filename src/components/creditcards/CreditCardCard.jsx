import { Check } from "lucide-react";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

export default function CreditCardCard({ card }) {
  return (
    <Card className="h-full">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white">
            {card.name}
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {card.bestFor.map((b) => (
              <Badge key={b}>{b}</Badge>
            ))}
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs font-semibold text-slate-500 dark:text-white/45">Annual fee</div>
          <div className="text-lg font-extrabold text-slate-900 dark:text-white">
            {card.annualFee ? `₹${card.annualFee}` : "₹0"}
          </div>
        </div>
      </div>

      <ul className="mt-5 space-y-3 text-sm text-slate-700 dark:text-white/70">
        {[
          ["Rewards", card.rewards],
          ["Cashback", card.cashback],
          ["Best for travel", card.travel],
          ["Best for shopping", card.shopping],
        ].map(([k, v]) => (
          <li key={k} className="flex gap-3">
            <Check className="mt-0.5 h-4 w-4 text-accent-500" />
            <span>
              <span className="font-bold text-slate-900 dark:text-white">{k}: </span>
              {v}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        <Button as="a" href="#" className="w-full sm:w-auto">
          {card.affiliateCta}
        </Button>
        <Button variant="secondary" as="a" href="#" className="w-full sm:w-auto">
          View Benefits
        </Button>
      </div>
      <p className="mt-3 text-xs text-slate-500 dark:text-white/45">
        Affiliate disclosure: links may earn a commission at no extra cost to you.
      </p>
    </Card>
  );
}

