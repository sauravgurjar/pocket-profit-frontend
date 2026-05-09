import { useState } from "react";
import Seo from "../components/Seo";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Seo
        title="Contact"
        description="Contact PocketProfit for partnerships, suggestions, or support."
        path="/contact"
      />

      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionHeading
            kicker="Support"
            title="Contact us"
            subtitle="Have feedback, partnership ideas, or content requests? Send a message."
          />
          <Card className="mt-8">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-4"
            >
              <div>
                <div className="text-xs font-semibold text-slate-600 dark:text-white/60">Name</div>
                <Input required placeholder="Your name" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-600 dark:text-white/60">Email</div>
                <Input required type="email" placeholder="you@example.com" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-600 dark:text-white/60">Message</div>
                <textarea
                  required
                  rows={5}
                  placeholder="How can we help?"
                  className="w-full rounded-xl border border-slate-900/10 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40"
                />
              </div>
              <div className="flex items-center justify-between gap-3">
                <Button type="submit">{sent ? "Sent (demo)" : "Send message"}</Button>
                <span className="text-xs text-slate-500 dark:text-white/45">
                  Frontend-only demo form (no backend).
                </span>
              </div>
            </form>
          </Card>
        </div>

        <div className="lg:col-span-6">
          <Card>
            <h2 className="text-base font-extrabold text-slate-900 dark:text-white">Business</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-white/65">
              For affiliate partnerships and brand placements, use the form and include “Partnership” in your message.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/60 p-4 dark:bg-white/5">
                <div className="text-xs font-semibold text-slate-600 dark:text-white/60">Email</div>
                <div className="mt-1 text-sm font-bold text-slate-900 dark:text-white">
                  hello@pocketprofit.example
                </div>
              </div>
              <div className="rounded-2xl bg-white/60 p-4 dark:bg-white/5">
                <div className="text-xs font-semibold text-slate-600 dark:text-white/60">Location</div>
                <div className="mt-1 text-sm font-bold text-slate-900 dark:text-white">
                  India (Remote)
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

