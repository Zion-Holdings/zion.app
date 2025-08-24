export interface SitemapRoute {
  url: string;
  path: string;
  label: string;
  lastModified: Date;
  changeFrequency: string;
  priority: number;
}

export const completeSitemap: SitemapRoute[] = [
  {
    url: "/",
    path: "/",
    label: "Home",
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  },
  {
    url: "/contact",
    path: "/contact",
    label: "Contact",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: "/services",
    path: "/services",
    label: "Services",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "/about",
    path: "/about",
    label: "About",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
];