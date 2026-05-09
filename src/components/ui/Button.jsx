import { forwardRef } from "react";
import { cn } from "../../utils/cn";

const Button = forwardRef(function Button(
  { as: Comp = "button", className, variant = "primary", ...props },
  ref,
) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500/60 disabled:opacity-60 disabled:pointer-events-none";
  const variants = {
    primary:
      "bg-accent-500 text-ink-950 hover:bg-accent-400 shadow-glow dark:text-ink-950",
    secondary:
      "bg-slate-900/5 text-slate-900 hover:bg-slate-900/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15",
    ghost:
      "bg-transparent text-slate-900 hover:bg-slate-900/5 dark:text-white dark:hover:bg-white/10",
  };

  return (
    <Comp ref={ref} className={cn(base, variants[variant], className)} {...props} />
  );
});

export default Button;

