import { cn } from "../../utils/cn";

export default function Card({ className, children }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-900/10 bg-white/70 p-6 shadow-soft backdrop-blur dark:border-white/10 dark:bg-ink-850/70",
        className,
      )}
    >
      {children}
    </div>
  );
}

