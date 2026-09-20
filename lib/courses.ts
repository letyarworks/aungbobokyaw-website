import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const COURSES_DIR = path.join(process.cwd(), "content/courses");

export type CourseMeta = {
  slug: string;
  title: string;
  level: string;
  duration: string;
  price: string;
  summary: string;
};

export type Course = CourseMeta & { html: string };

function readSlugs(): string[] {
  if (!fs.existsSync(COURSES_DIR)) return [];
  return fs
    .readdirSync(COURSES_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllCourses(): CourseMeta[] {
  return readSlugs().map((slug) => {
    const raw = fs.readFileSync(path.join(COURSES_DIR, `${slug}.md`), "utf8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title ?? slug,
      level: data.level ?? "All levels",
      duration: data.duration ?? "",
      price: data.price ?? "",
      summary: data.summary ?? "",
    };
  });
}

export function getCourse(slug: string): Course | undefined {
  const file = path.join(COURSES_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return undefined;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    level: data.level ?? "All levels",
    duration: data.duration ?? "",
    price: data.price ?? "",
    summary: data.summary ?? "",
    html: marked.parse(content, { async: false }) as string,
  };
}
