import { NavLink as RRNavLink } from "react-router-dom";
import { cn } from "../../utils/cn";

export default function NavLink({ to, children }) {
  return (
    <RRNavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-900/5 dark:text-white/75 dark:hover:bg-white/10",
          isActive && "text-slate-900 dark:text-white",
        )
      }
    >
      {children}
    </RRNavLink>
  );
}

