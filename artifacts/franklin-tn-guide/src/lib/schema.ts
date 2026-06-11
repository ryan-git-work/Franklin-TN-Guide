const siteUrl = 'https://franklintnguide.com';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Franklin TN Guide',
  url: siteUrl,
  logo: `${siteUrl}/images/hero-franklin.png`,
  description: 'Your comprehensive relocation guide to Franklin, Tennessee , neighborhoods, schools, cost of living, and lifestyle.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'ryan@locheventures.com',
    contactType: 'General Inquiries',
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Franklin TN Guide',
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export function makeBreadcrumbSchema(items: { name: string; path?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path ? `${siteUrl}${item.path}` : siteUrl,
    })),
  };
}
