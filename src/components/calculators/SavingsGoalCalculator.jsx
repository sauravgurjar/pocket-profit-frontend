import { useMemo, useState } from "react";
import Input from "../ui/Input";
import CalculatorShell from "./CalculatorShell";
import ResultMetric from "./ResultMetric";
import { formatINR } from "../../utils/finance";

function requiredMonthly({ target, years, annualRate, initial = 0 }) {
  const m = Math.max(1, Math.round(years * 12));
  const i = Math.max(0, annualRate / 100 / 12);
  const targetLeft = Math.max(0, target - initial * Math.pow(1 + i, m));
  if (i === 0) return targetLeft / m;
  return targetLeft / (((Math.pow(1 + i, m) - 1) / i) * (1 + i));
}

export default function SavingsGoalCalculator() {
  const [target, setTarget] = useState(1000000);
  const [years, setYears] = useState(5);
  const [rate, setRate] = useState(10);
  const [initial, setInitial] = useState(50000);

  const monthly = useMemo(
    () => requiredMonthly({ target: +target, years: +years, annualRate: +rate, initial: +initial }),
    [target, years, rate, initial],
  );

  return (
    <CalculatorShell
      id="savings"
      title="Savings Goal Calculator"
      subtitle="Estimate monthly savings required to reach your target."
      right={
        <div className="grid gap-3 sm:grid-cols-2">
          <ResultMetric label="Target" value={formatINR(+target)} />
          <ResultMetric label="Time" value={`${years} years`} />
          <ResultMetric label="Expected return" value={`${rate}% p.a.`} />
          <ResultMetric label="Required monthly" value={formatINR(Math.round(monthly))} className="ring-1 ring-accent-500/20" />
        </div>
      }
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <div className="text-xs font-semibold text-slate-600 dark:text-white/60">Target amount (₹)</div>
          <Input type="number" min="0" value={target} onChange={(e) => setTarget(e.target.value)} />
        </div>
        <div>
          <div className="text-xs font-semibold text-slate-600 dark:text-white/60">Time (years)</div>
          <Input type="number" min="1" value={years} onChange={(e) => setYears(e.target.value)} />
        </div>
        <div>
          <div className="text-xs font-semibold text-slate-600 dark:text-white/60">Expected return (% p.a.)</div>
          <Input type="number" min="0" step="0.1" value={rate} onChange={(e) => setRate(e.target.value)} />
        </div>
        <div>
          <div className="text-xs font-semibold text-slate-600 dark:text-white/60">Current savings (₹)</div>
          <Input type="number" min="0" value={initial} onChange={(e) => setInitial(e.target.value)} />
        </div>
      </div>
    </CalculatorShell>
  );
}

