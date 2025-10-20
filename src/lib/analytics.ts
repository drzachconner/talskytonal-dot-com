export function detectAISource(referrer: string, searchParams: URLSearchParams): string | null {
  const utmSource = searchParams.get('utm_source');

  if (utmSource) {
    const aiSources = ['chatgpt', 'perplexity', 'google_ai', 'claude', 'gemini', 'copilot'];
    if (aiSources.some(source => utmSource.toLowerCase().includes(source))) {
      return utmSource;
    }
  }

  const aiReferrers = [
    { pattern: 'openai.com', name: 'chatgpt' },
    { pattern: 'chat.openai.com', name: 'chatgpt' },
    { pattern: 'perplexity.ai', name: 'perplexity' },
    { pattern: 'claude.ai', name: 'claude' },
    { pattern: 'bard.google.com', name: 'google_bard' },
    { pattern: 'gemini.google.com', name: 'google_gemini' },
    { pattern: 'copilot.microsoft.com', name: 'microsoft_copilot' },
  ];

  for (const { pattern, name } of aiReferrers) {
    if (referrer.includes(pattern)) {
      return name;
    }
  }

  return null;
}

export function trackAITraffic() {
  if (typeof window === 'undefined') return;

  const referrer = document.referrer;
  const searchParams = new URLSearchParams(window.location.search);
  const aiSource = detectAISource(referrer, searchParams);

  if (aiSource && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'ai_traffic_detected', {
      ai_source_platform: aiSource,
      source_page_title: document.title,
      page_path: window.location.pathname,
      referrer: referrer,
    });

    sessionStorage.setItem('ai_source', aiSource);
  }
}

export function trackAIConversion(eventName: string, value?: number) {
  if (typeof window === 'undefined') return;

  const aiSource = sessionStorage.getItem('ai_source');

  if (aiSource && typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, {
      ai_source_platform: aiSource,
      value: value,
      currency: 'USD',
    });
  }
}

export function addAISourceToUrl(url: string, aiSource?: string): string {
  const source = aiSource || sessionStorage.getItem('ai_source');

  if (!source) return url;

  const urlObj = new URL(url, window.location.origin);
  urlObj.searchParams.set('utm_source', source);
  urlObj.searchParams.set('utm_medium', 'ai_overview');

  return urlObj.toString();
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
