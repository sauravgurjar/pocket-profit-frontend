import { cn } from "../../utils/cn";

export default function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        "w-full rounded-xl border border-slate-900/10 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40",
        className,
      )}
      {...props}
    />
  );
}

