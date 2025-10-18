export interface Breadcrumb {
  name: string;
  url: string;
}

export function breadcrumbJsonLd(crumbs: Breadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": crumbs.map((c, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": c.name,
      "item": c.url,
    })),
  };
}
