import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/work", "/services", "/about", "/process", "/contact", ...projects.map((p) => `/work/${p.slug}`)];
  return pages.map((path) => ({ url: `${SITE}${path}` }));
}
