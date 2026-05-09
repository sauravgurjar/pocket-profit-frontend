import FadeIn from "../motion/FadeIn";
import SectionHeading from "../ui/SectionHeading";
import BlogCard from "../blog/BlogCard";
import { blogs } from "../../data/blogs";

export default function LatestBlogs() {
  const latest = [...blogs].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 3);
  return (
    <section className="mt-14">
      <SectionHeading
        kicker="Guides"
        title="Latest finance blogs"
        subtitle="Skimmable, practical reads—built for busy professionals and families."
      />
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {latest.map((p, idx) => (
          <FadeIn key={p.id} delay={idx * 0.07}>
            <BlogCard post={p} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

