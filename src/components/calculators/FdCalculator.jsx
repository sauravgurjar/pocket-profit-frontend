import { useMemo, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import Input from "../ui/Input";
import Select from "../ui/Select";
import CalculatorShell from "./CalculatorShell";
import ResultMetric from "./ResultMetric";
import { fdMaturity, formatINR } from "../../utils/finance";

const compounds = [
  { v: 1, label: "Yearly" },
  { v: 4, label: "Quarterly" },
  { v: 12, label: "Monthly" },
];

export default function FdCalculator() {
  const [principal, setPrincipal] = useState(200000);
  const [rate, setRate] = useState(7.25);
  const [years, setYears] = useState(3);
  const [n, setN] = useState(4);

  const maturity = useMemo(
    () => fdMaturity({ principal: +principal, annualRate: +rate, years: +years, compoundsPerYear: +n }),
    [principal, rate, years, n],
  );
  const interest = Math.max(0, Math.round(maturity - +principal));

  const data = useMemo(() => {
    const rows = [];
    for (let y = 1; y <= +years; y++) {
      rows.push({
        year: `Y${y}`,
        value: Math.round(fdMaturity({ principal: +principal, annualRate: +rate, years: y, compoundsPerYear: +n })),
      });
    }
    return rows;
  }, [principal, rate, years, n]);

  return (
    <CalculatorShell
      id="fd"
      title="FD Calculator"
      subtitle="Estimate maturity value with compound interest."
      right={
        <div className="h-[280px] rounded-2xl border border-slate-900/10 bg-white/50 p-4 dark:border-white/10 dark:bg-white/5">
          <div className="mb-3 text-sm font-extrabold text-slate-900 dark:text-white">Maturity curve</div>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.25} />
              <XAxis dataKey="year" tick={{ fill: "#94a3b8", fontSize: 12 }} />
              <YAxis tick={{ fill: "#94a3b8", fontSize: 12 }} />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="#22c55e" fill="#22c55e" fillOpacity={0.18} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      }
    >
      <div className="grid gap-3 sm:grid-cols-4">
        <div>
          <div className="text-xs font-semibold text-slate-600 dark:text-white/60">Principal (₹)</div>
          <Input type="number" min="0" value={principal} onChange={(e) => setPrincipal(e.target.value)} />
        </div>
        <div>
          <div className="text-xs font-semibold text-slate-600 dark:text-white/60">Rate (% p.a.)</div>
          <Input type="number" min="0" step="0.05" value={rate} onChange={(e) => setRate(e.target.value)} />
        </div>
        <div>
          <div className="text-xs font-semibold text-slate-600 dark:text-white/60">Years</div>
          <Input type="number" min="0" value={years} onChange={(e) => setYears(e.target.value)} />
        </div>
        <div>
          <div className="text-xs font-semibold text-slate-600 dark:text-white/60">Compounding</div>
          <Select value={n} onChange={(e) => setN(e.target.value)}>
            {compounds.map((c) => (
              <option key={c.v} value={c.v}>
                {c.label}
              </option>
            ))}
          </Select>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <ResultMetric label="Principal" value={formatINR(+principal)} />
        <ResultMetric label="Interest" value={formatINR(interest)} />
        <ResultMetric
          label="Maturity Value"
          value={formatINR(Math.round(maturity))}
          className="ring-1 ring-accent-500/20"
        />
      </div>
    </CalculatorShell>
  );
}

