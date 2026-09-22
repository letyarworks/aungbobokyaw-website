import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { getAllCourses } from "@/lib/courses";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://aungbobokyaw.com";

  const staticRoutes = ["", "/about", "/blog", "/training", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const postRoutes = getAllPosts().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: p.date ? new Date(p.date) : new Date(),
  }));

  const courseRoutes = getAllCourses().map((c) => ({
    url: `${base}/training/${c.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...postRoutes, ...courseRoutes];
}
