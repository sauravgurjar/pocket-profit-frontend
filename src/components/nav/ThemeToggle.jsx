import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import Button from "../ui/Button";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const Icon = theme === "dark" ? Sun : Moon;
  return (
    <Button
      variant="ghost"
      onClick={toggle}
      aria-label="Toggle theme"
      className="px-3 py-2"
    >
      <Icon className="h-4 w-4" />
    </Button>
  );
}

