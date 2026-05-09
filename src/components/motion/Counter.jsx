import { useEffect, useState } from "react";
import { animate } from "framer-motion";

export default function Counter({ to, duration = 1.1, className }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [to, duration]);

  return <span className={className}>{value.toLocaleString("en-IN")}</span>;
}
