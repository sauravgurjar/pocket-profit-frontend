import { useState } from "react";
import FadeIn from "../motion/FadeIn";
import Card from "../ui/Card";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="mt-14">
      <FadeIn>
        <Card className="relative overflow-hidden">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl" />
          <div className="relative grid items-center gap-6 lg:grid-cols-2">
            <div>
              <div className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Weekly money insights (no spam)
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-white/65">
                Get practical tips on budgeting, investing, tax planning, and credit cards—written for India.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!email) return;
                setDone(true);
              }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
              <Button type="submit" className="sm:w-44">
                {done ? "You're in!" : "Subscribe"}
              </Button>
            </form>
          </div>
          <p className="relative mt-3 text-xs text-slate-500 dark:text-white/45">
            Monetization-ready: place newsletter ads or affiliate offers here.
          </p>
        </Card>
      </FadeIn>
    </section>
  );
}

