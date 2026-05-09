import { Search } from "lucide-react";
import Input from "../ui/Input";

export default function BlogSearch({ value, onChange }) {
  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 dark:text-white/35" />
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search guides (SIP, tax, credit cards...)"
        className="pl-11"
      />
    </div>
  );
}

