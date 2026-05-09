import Badge from "./Badge";

export default function SectionHeading({ kicker, title, subtitle }) {
  return (
    <div className="max-w-2xl">
      {kicker ? <Badge className="mb-3">{kicker}</Badge> : null}
      <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-white/65">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

