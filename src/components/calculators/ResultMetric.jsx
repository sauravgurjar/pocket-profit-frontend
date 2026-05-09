import { cn } from "../../utils/cn";

export default function ResultMetric({ label, value, className }) {
  return (
    <div className={cn("rounded-2xl bg-white/60 p-4 dark:bg-white/5", className)}>
      <div className="text-xs font-semibold text-slate-600 dark:text-white/60">{label}</div>
      <div className="mt-1 text-lg font-extrabold text-slate-900 dark:text-white">{value}</div>
    </div>
  );
}

