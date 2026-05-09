import { useMemo, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import Input from "../ui/Input";
import CalculatorShell from "./CalculatorShell";
import ResultMetric from "./ResultMetric";
import { formatINR, sipFutureValue } from "../../utils/finance";

export default function SipCalculator() {
  const [monthly, setMonthly] = useState(5000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(7);

  const fv = useMemo(
    () => sipFutureValue({ monthly: +monthly, annualRate: +rate, years: +years }),
    [monthly, rate, years],
  );
  const invested = Math.round(+monthly * (+years * 12));
  const gain = Math.max(0, Math.round(fv - invested));

  const data = useMemo(() => {
    const rows = [];
    for (let y = 1; y <= +years; y++) {
      const value = sipFutureValue({ monthly: +monthly, annualRate: +rate, years: y });
      rows.push({ year: `Y${y}`, invested: +monthly * 12 * y, value: Math.round(value) });
    }
    return rows;
  }, [monthly, rate, years]);

  return (
    <CalculatorShell
      id="sip"
      title="SIP Calculator"
      subtitle="Estimate the future value of monthly investing. Assumes constant return."
      right={
        <div className="h-[280px] rounded-2xl border border-slate-900/10 bg-white/50 p-4 dark:border-white/10 dark:bg-white/5">
          <div className="mb-3 text-sm font-extrabold text-slate-900 dark:text-white">Growth</div>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.25} />
              <XAxis dataKey="year" tick={{ fill: "#94a3b8", fontSize: 12 }} />
              <YAxis tick={{ fill: "#94a3b8", fontSize: 12 }} />
              <Tooltip />
              <Line type="monotone" dataKey="invested" stroke="#64748b" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={2.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      }
    >
      <div className="grid gap-3 sm:grid-cols-3">
        <div>
          <div className="text-xs font-semibold text-slate-600 dark:text-white/60">Monthly SIP (₹)</div>
          <Input type="number" min="0" value={monthly} onChange={(e) => setMonthly(e.target.value)} />
        </div>
        <div>
          <div className="text-xs font-semibold text-slate-600 dark:text-white/60">Return (% p.a.)</div>
          <Input type="number" min="0" step="0.1" value={rate} onChange={(e) => setRate(e.target.value)} />
        </div>
        <div>
          <div className="text-xs font-semibold text-slate-600 dark:text-white/60">Years</div>
          <Input type="number" min="0" value={years} onChange={(e) => setYears(e.target.value)} />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <ResultMetric label="Invested" value={formatINR(invested)} />
        <ResultMetric label="Estimated Returns" value={formatINR(gain)} />
        <ResultMetric label="Future Value" value={formatINR(Math.round(fv))} className="ring-1 ring-accent-500/20" />
      </div>
    </CalculatorShell>
  );
}

