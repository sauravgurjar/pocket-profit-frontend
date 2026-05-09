import { cn } from "../../utils/cn";

export default function Select({ className, ...props }) {
  return (
    <select
      className={cn(
        "w-full rounded-xl border border-slate-900/10 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white",
        className,
      )}
      {...props}
    />
  );
}

