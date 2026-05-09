import { Helmet } from "react-helmet-async";

const origin = typeof window !== "undefined" ? window.location.origin : "";

export default function Seo({
  title,
  description,
  path = "/",
  image = "/og-cover.svg",
}) {
  const url = origin ? new URL(path, origin).toString() : path;
  const fullTitle = title ? `${title} — PocketProfit` : "PocketProfit";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
