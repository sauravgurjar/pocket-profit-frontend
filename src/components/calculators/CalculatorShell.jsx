import Card from "../ui/Card";

export default function CalculatorShell({ id, title, subtitle, children, right }) {
  return (
    <section id={id} className="scroll-mt-24">
      <Card>
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-2 text-sm text-slate-600 dark:text-white/65">{subtitle}</p>
            ) : null}
            <div className="mt-5 space-y-4">{children}</div>
          </div>
          <div className="lg:col-span-7">{right}</div>
        </div>
      </Card>
    </section>
  );
}

