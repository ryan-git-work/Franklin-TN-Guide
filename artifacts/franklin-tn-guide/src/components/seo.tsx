import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  type?: 'website' | 'article';
  schema?: Record<string, any>;
}

export function SEO({ title, description, canonicalUrl, type = 'website', schema }: SEOProps) {
  const siteUrl = 'https://franklintnguide.com';
  const fullCanonical = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content="Franklin TN Guide" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <link rel="canonical" href={fullCanonical} />

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
