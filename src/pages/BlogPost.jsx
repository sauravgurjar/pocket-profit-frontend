import { Link, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import AdSlot from "../components/monetize/AdSlot";
import { getBlogBySlug } from "../services/blogService";

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" });
  } catch {
    return iso;
  }
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogBySlug(slug);

  if (!post) {
    return (
      <Card>
        <h1 className="text-xl font-extrabold tracking-tight">Article not found</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-white/65">
          Try browsing all finance guides.
        </p>
        <Link className="mt-4 inline-block text-sm font-bold text-accent-600 dark:text-accent-400" to="/blog">
          Back to Blog
        </Link>
      </Card>
    );
  }

  return (
    <>
      <Seo title={post.title} description={post.excerpt} path={`/blog/${post.slug}`} image={post.image} />

      <article className="mx-auto max-w-3xl">
        <Link to="/blog" className="text-sm font-bold text-accent-600 dark:text-accent-400">
          ← Back to Blog
        </Link>

        <header className="mt-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{post.category}</Badge>
            <span className="text-xs font-semibold text-slate-500 dark:text-white/45">
              {formatDate(post.date)} • {post.readTime}
            </span>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {post.title}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-white/70">
            {post.excerpt}
          </p>
        </header>

        <img
          src={post.image}
          alt={post.title}
          className="mt-8 w-full rounded-2xl border border-slate-900/10 dark:border-white/10"
          loading="lazy"
        />

        <div className="mt-8 space-y-5 text-sm leading-relaxed text-slate-700 dark:text-white/70">
          <p>
            This is an example article template designed for SEO and readability. Replace this content with
            real, researched finance writing (and add schema markup if needed).
          </p>
          <h2 className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
            Quick takeaways
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Prefer consistent investing habits over perfect timing.</li>
            <li>Use calculators to sanity-check assumptions before committing.</li>
            <li>Track one metric weekly: savings rate or total invested.</li>
          </ul>
          <AdSlot label="In-article Ad Slot" className="mt-6" />
          <h2 className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
            Next step
          </h2>
          <p>
            Use the calculators to model your SIP, EMI, FD, or savings goal—then revisit the guide to tweak
            assumptions. Small improvements compound.
          </p>
        </div>
      </article>
    </>
  );
}

