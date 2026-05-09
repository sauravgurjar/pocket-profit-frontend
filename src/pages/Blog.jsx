import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import SectionHeading from "../components/ui/SectionHeading";
import Select from "../components/ui/Select";
import BlogSearch from "../components/blog/BlogSearch";
import BlogCard from "../components/blog/BlogCard";
import AdSlot from "../components/monetize/AdSlot";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import { BLOG_CATEGORIES, trendingSlugs } from "../data/blogs";
import { filterBlogs } from "../services/blogService";
import { useQueryParams } from "../hooks/useQueryParams";
import FadeIn from "../components/motion/FadeIn";

export default function Blog() {
  const params = useQueryParams();
  const initialCategory = params.get("category") || "";
  const [q, setQ] = useState("");
  const [category, setCategory] = useState(initialCategory);

  const filtered = useMemo(() => filterBlogs({ q, category }), [q, category]);
  const trending = useMemo(
    () => filtered.filter((b) => trendingSlugs.includes(b.slug)).slice(0, 5),
    [filtered],
  );

  return (
    <>
      <Seo
        title="Finance Blog"
        description="SEO-friendly finance guides for India: investing, budgeting, credit cards, tax saving, side hustles, and AI finance tips."
        path="/blog"
      />

      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <SectionHeading
            kicker="PocketProfit Blog"
            title="Finance guides for busy Indians"
            subtitle="Short, actionable reads designed to improve saving habits, investment decisions, and credit health."
          />

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="sm:col-span-2">
              <BlogSearch value={q} onChange={setQ} />
            </div>
            <Select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">All categories</option>
              {BLOG_CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </Select>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {filtered.map((p, idx) => (
              <FadeIn key={p.id} delay={Math.min(0.2, idx * 0.03)}>
                <BlogCard post={p} />
              </FadeIn>
            ))}
          </div>
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 space-y-4">
            <AdSlot label="Sticky Sidebar Ad" />
            <Card>
              <div className="flex items-center justify-between">
                <div className="text-sm font-extrabold text-slate-900 dark:text-white">
                  Trending
                </div>
                <Badge>Popular</Badge>
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                {trending.map((p) => (
                  <li key={p.slug}>
                    <Link
                      to={`/blog/${p.slug}`}
                      className="font-semibold text-slate-700 hover:text-slate-900 dark:text-white/75 dark:hover:text-white"
                    >
                      {p.title}
                    </Link>
                    <div className="mt-1 text-xs text-slate-500 dark:text-white/45">
                      {p.category} • {p.readTime}
                    </div>
                  </li>
                ))}
                {!trending.length ? (
                  <li className="text-sm text-slate-600 dark:text-white/65">
                    Search to see trending picks.
                  </li>
                ) : null}
              </ul>
            </Card>
            <AdSlot label="Affiliate Banner Placeholder" />
          </div>
        </aside>
      </div>
    </>
  );
}

