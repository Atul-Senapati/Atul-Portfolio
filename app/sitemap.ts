import type { MetadataRoute } from "next";

const SITE_URL = "https://atul-portfolio-red.vercel.app";

const routes = ["", "/resume", "/barbershop", "/bike-gear", "/bot", "/cine-lab"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
