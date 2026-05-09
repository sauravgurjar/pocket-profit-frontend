export function clampNumber(n, min, max) {
  if (!Number.isFinite(n)) return min;
  return Math.min(max, Math.max(min, n));
}

export function sipFutureValue({ monthly, annualRate, years }) {
  const m = Math.max(0, Math.round(years * 12));
  const i = Math.max(0, annualRate / 100 / 12);
  if (m === 0) return 0;
  if (i === 0) return monthly * m;
  return monthly * (((Math.pow(1 + i, m) - 1) / i) * (1 + i));
}

export function emiPayment({ principal, annualRate, months }) {
  const n = Math.max(1, Math.round(months));
  const i = Math.max(0, annualRate / 100 / 12);
  if (i === 0) return principal / n;
  const pow = Math.pow(1 + i, n);
  return (principal * i * pow) / (pow - 1);
}

export function fdMaturity({ principal, annualRate, years, compoundsPerYear = 4 }) {
  const r = Math.max(0, annualRate / 100);
  const n = Math.max(1, Math.round(compoundsPerYear));
  const t = Math.max(0, years);
  return principal * Math.pow(1 + r / n, n * t);
}

export function formatINR(value) {
  try {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  } catch {
    return `₹${Math.round(value)}`;
  }
}

