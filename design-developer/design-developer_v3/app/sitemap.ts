import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.design-developer.com/", lastModified: new Date() },
    { url: "https://www.design-developer.com/privacy", lastModified: new Date() },
  ];
}
