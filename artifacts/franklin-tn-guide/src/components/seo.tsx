import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  type?: 'website' | 'article';
  schema?: Record<string, any>;
  ogImage?: string;
}

const siteUrl = 'https://franklintnguide.com';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Franklin TN Guide',
  url: siteUrl,
  logo: `${siteUrl}/images/hero-franklin.png`,
  description: 'Your comprehensive relocation guide to Franklin, Tennessee \u2014 neighborhoods, schools, cost of living, and lifestyle.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'ryan@locheventures.com',
    contactType: 'General Inquiries',
  },
};

const websiteSchema = {
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

function renderSchema(schema: Record<string, any>, key: string) {
  return (
    <script key={key} type="application/ld+json">{JSON.stringify(schema)}</script>
  );
}

export function SEO({ title, description, canonicalUrl, type = 'website', schema, ogImage }: SEOProps) {
  const fullCanonical = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const image = ogImage || 'https://franklintnguide.com/images/hero-franklin.png';

  const allSchemas: Record<string, any>[] = [organizationSchema, websiteSchema];
  if (schema) {
    if (Array.isArray(schema)) {
      allSchemas.push(...schema);
    } else {
      allSchemas.push(schema);
    }
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Franklin TN Guide" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={fullCanonical} />

      {allSchemas.map((s, i) => renderSchema(s, String(i)))}
    </Helmet>
  );
}
