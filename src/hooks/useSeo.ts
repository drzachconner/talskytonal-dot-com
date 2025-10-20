import { useEffect } from 'react';
import { SITE } from '../data/site';

interface SeoProps {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  maxSnippet?: number;
  noSnippet?: boolean;
  robots?: string;
}

export function useSeo({ title, description, canonical, ogImage, maxSnippet, noSnippet, robots }: SeoProps) {
  useEffect(() => {
    const fullTitle = title === SITE.name ? title : `${title} | ${SITE.name}`;
    document.title = fullTitle;

    const metaDescription = description || SITE.description;
    let metaTag = document.querySelector('meta[name="description"]');
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('name', 'description');
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', metaDescription);

    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = `https://${SITE.domain}${canonical}`;
    }

    const ogTitleTag = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitleTag.setAttribute('property', 'og:title');
    ogTitleTag.setAttribute('content', fullTitle);
    if (!ogTitleTag.parentNode) document.head.appendChild(ogTitleTag);

    const ogDescTag = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescTag.setAttribute('property', 'og:description');
    ogDescTag.setAttribute('content', metaDescription);
    if (!ogDescTag.parentNode) document.head.appendChild(ogDescTag);

    if (ogImage) {
      const ogImageTag = document.querySelector('meta[property="og:image"]') || document.createElement('meta');
      ogImageTag.setAttribute('property', 'og:image');
      ogImageTag.setAttribute('content', `https://${SITE.domain}${ogImage}`);
      if (!ogImageTag.parentNode) document.head.appendChild(ogImageTag);
    }

    const twitterCardTag = document.querySelector('meta[name="twitter:card"]') || document.createElement('meta');
    twitterCardTag.setAttribute('name', 'twitter:card');
    twitterCardTag.setAttribute('content', 'summary_large_image');
    if (!twitterCardTag.parentNode) document.head.appendChild(twitterCardTag);

    let robotsTag = document.querySelector('meta[name="robots"]');
    if (robots || maxSnippet || noSnippet) {
      if (!robotsTag) {
        robotsTag = document.createElement('meta');
        robotsTag.setAttribute('name', 'robots');
        document.head.appendChild(robotsTag);
      }

      const robotsDirectives = [];
      if (robots) {
        robotsDirectives.push(robots);
      }
      if (maxSnippet) {
        robotsDirectives.push(`max-snippet:${maxSnippet}`);
      }
      if (noSnippet) {
        robotsDirectives.push('nosnippet');
      }

      robotsTag.setAttribute('content', robotsDirectives.join(', '));
    }
  }, [title, description, canonical, ogImage, maxSnippet, noSnippet, robots]);
}
