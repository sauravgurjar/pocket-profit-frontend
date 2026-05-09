import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Card from "../ui/Card";
import Badge from "../ui/Badge";

export default function BlogCard({ post }) {
  return (
    <Card className="group overflow-hidden p-0">
      <img
        src={post.image}
        alt={post.title}
        loading="lazy"
        className="h-40 w-full object-cover transition group-hover:scale-[1.02]"
      />
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{post.category}</Badge>
          <span className="text-xs font-semibold text-slate-500 dark:text-white/45">
            {post.readTime}
          </span>
        </div>
        <h3 className="mt-3 line-clamp-2 text-base font-extrabold tracking-tight text-slate-900 dark:text-white">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-slate-600 dark:text-white/65">
          {post.excerpt}
        </p>
        <Link
          to={`/blog/${post.slug}`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-accent-600 hover:text-accent-500 dark:text-accent-400"
        >
          Read article <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Card>
  );
}

