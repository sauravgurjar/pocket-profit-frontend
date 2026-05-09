import { useMemo, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import Input from "../ui/Input";
import CalculatorShell from "./CalculatorShell";
import ResultMetric from "./ResultMetric";
import { emiPayment, formatINR } from "../../utils/finance";

export default function EmiCalculator() {
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(11);
  const [months, setMonths] = useState(60);

  const emi = useMemo(
    () => emiPayment({ principal: +principal, annualRate: +rate, months: +months }),
    [principal, rate, months],
  );
  const total = Math.round(emi * +months);
  const interest = Math.max(0, total - +principal);

  const chart = [
    { name: "Principal", value: +principal },
    { name: "Interest", value: interest },
  ];

  return (
    <CalculatorShell
      id="emi"
      title="EMI Calculator"
      subtitle="Calculate monthly EMI and interest. Assumes fixed interest rate."
      right={
        <div className="h-[280px] rounded-2xl border border-slate-900/10 bg-white/50 p-4 dark:border-white/10 dark:bg-white/5">
          <div className="mb-3 text-sm font-extrabold text-slate-900 dark:text-white">Breakdown</div>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={chart} dataKey="value" innerRadius={55} outerRadius={95} paddingAngle={2}>
                <Cell fill="#22c55e" />
                <Cell fill="#64748b" />
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      }
    >
      <div className="grid gap-3 sm:grid-cols-3">
        <div>
          <div className="text-xs font-semibold text-slate-600 dark:text-white/60">Loan Amount (₹)</div>
          <Input type="number" min="0" value={principal} onChange={(e) => setPrincipal(e.target.value)} />
        </div>
        <div>
          <div className="text-xs font-semibold text-slate-600 dark:text-white/60">Interest (% p.a.)</div>
          <Input type="number" min="0" step="0.1" value={rate} onChange={(e) => setRate(e.target.value)} />
        </div>
        <div>
          <div className="text-xs font-semibold text-slate-600 dark:text-white/60">Tenure (months)</div>
          <Input type="number" min="1" value={months} onChange={(e) => setMonths(e.target.value)} />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <ResultMetric label="Monthly EMI" value={formatINR(Math.round(emi))} className="ring-1 ring-accent-500/20" />
        <ResultMetric label="Total Interest" value={formatINR(Math.round(interest))} />
        <ResultMetric label="Total Payment" value={formatINR(Math.round(total))} />
      </div>
    </CalculatorShell>
  );
}

