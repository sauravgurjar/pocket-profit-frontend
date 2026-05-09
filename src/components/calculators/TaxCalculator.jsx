import { useMemo, useState } from "react";
import Input from "../ui/Input";
import Select from "../ui/Select";
import CalculatorShell from "./CalculatorShell";
import ResultMetric from "./ResultMetric";
import Card from "../ui/Card";
import { formatINR } from "../../utils/finance";

const regimes = [
  { v: "new", label: "New regime (illustrative)" },
  { v: "old", label: "Old regime (illustrative)" },
];

function computeTax(income, deductions, regime) {
  const taxable = Math.max(0, income - (regime === "old" ? deductions : 0));
  const slabs =
    regime === "new"
      ? [
          [0, 300000, 0],
          [300000, 600000, 0.05],
          [600000, 900000, 0.1],
          [900000, 1200000, 0.15],
          [1200000, 1500000, 0.2],
          [1500000, Infinity, 0.3],
        ]
      : [
          [0, 250000, 0],
          [250000, 500000, 0.05],
          [500000, 1000000, 0.2],
          [1000000, Infinity, 0.3],
        ];

  let tax = 0;
  for (const [a, b, r] of slabs) {
    const chunk = Math.min(taxable, b) - a;
    if (chunk > 0) tax += chunk * r;
  }
  const cess = tax * 0.04;
  return { taxable, tax: Math.round(tax), cess: Math.round(cess), total: Math.round(tax + cess) };
}

export default function TaxCalculator() {
  const [income, setIncome] = useState(1200000);
  const [deductions, setDeductions] = useState(150000);
  const [regime, setRegime] = useState("new");

  const result = useMemo(
    () => computeTax(+income, +deductions, regime),
    [income, deductions, regime],
  );

  return (
    <CalculatorShell
      id="tax"
      title="Tax Calculator"
      subtitle="Approximate tax estimate for awareness. Update slab rules for production."
      right={
        <div className="grid gap-3 sm:grid-cols-2">
          <ResultMetric label="Taxable income" value={formatINR(result.taxable)} />
          <ResultMetric label="Income tax" value={formatINR(result.tax)} />
          <ResultMetric label="Cess (4%)" value={formatINR(result.cess)} />
          <ResultMetric label="Total tax" value={formatINR(result.total)} className="ring-1 ring-accent-500/20" />
          <Card className="sm:col-span-2">
            <div className="text-xs font-semibold text-slate-500 dark:text-white/45">
              Disclaimer
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-white/65">
              This is a simplified estimate for education. Real tax depends on current rules, exemptions,
              surcharges, and your specific situation.
            </p>
          </Card>
        </div>
      }
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <div className="text-xs font-semibold text-slate-600 dark:text-white/60">Annual income (₹)</div>
          <Input type="number" min="0" value={income} onChange={(e) => setIncome(e.target.value)} />
        </div>
        <div>
          <div className="text-xs font-semibold text-slate-600 dark:text-white/60">Regime</div>
          <Select value={regime} onChange={(e) => setRegime(e.target.value)}>
            {regimes.map((r) => (
              <option key={r.v} value={r.v}>
                {r.label}
              </option>
            ))}
          </Select>
        </div>
        <div className="sm:col-span-2">
          <div className="text-xs font-semibold text-slate-600 dark:text-white/60">
            Deductions (₹) — only for old regime
          </div>
          <Input
            type="number"
            min="0"
            value={deductions}
            onChange={(e) => setDeductions(e.target.value)}
          />
        </div>
      </div>
    </CalculatorShell>
  );
}

