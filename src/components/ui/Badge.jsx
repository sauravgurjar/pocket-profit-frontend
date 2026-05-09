import { cn } from "../../utils/cn";

export default function Badge({ className, children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-slate-900/10 bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-white/80",
        className,
      )}
    >
      {children}
    </span>
  );
}

