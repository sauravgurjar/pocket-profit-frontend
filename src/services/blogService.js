import { blogs } from "../data/blogs";

export function getBlogBySlug(slug) {
  return blogs.find((b) => b.slug === slug);
}

export function filterBlogs({ q, category }) {
  const query = (q || "").trim().toLowerCase();
  return blogs.filter((b) => {
    const matchesCategory = !category || b.category === category;
    const hay = `${b.title} ${b.excerpt} ${(b.tags || []).join(" ")}`.toLowerCase();
    const matchesQuery = !query || hay.includes(query);
    return matchesCategory && matchesQuery;
  });
}

