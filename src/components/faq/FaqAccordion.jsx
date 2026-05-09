import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../ui/Card";

export default function FaqAccordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="space-y-3">
      {items.map((it, idx) => {
        const active = idx === open;
        return (
          <Card key={it.q} className="p-0">
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpen(active ? -1 : idx)}
            >
              <div className="text-sm font-extrabold text-slate-900 dark:text-white">
                {it.q}
              </div>
              <ChevronDown
                className={`h-4 w-4 text-slate-500 transition dark:text-white/60 ${
                  active ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {active && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-sm text-slate-600 dark:text-white/65">
                    {it.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        );
      })}
    </div>
  );
}

