import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <div className="grid min-h-[50vh] place-items-center">
      <motion.div
        aria-label="Loading"
        className="h-10 w-10 rounded-full border-2 border-white/20 border-t-accent-500 dark:border-white/10"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
      />
    </div>
  );
}

