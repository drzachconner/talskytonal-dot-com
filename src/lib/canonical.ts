import { SITE } from '../data/site';

export function buildCanonical(path: string): string {
  let cleanPath = path;

  if (!cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath;
  }

  if (cleanPath !== '/' && cleanPath.endsWith('/')) {
    cleanPath = cleanPath.slice(0, -1);
  }

  return `https://${SITE.domain}${cleanPath}`;
}

export function enforceCanonical(currentUrl: string): string | null {
  try {
    const url = new URL(currentUrl);
    const hostname = url.hostname;
    const pathname = url.pathname;

    const shouldRedirect = hostname !== SITE.domain;

    if (shouldRedirect) {
      return buildCanonical(pathname);
    }

    return null;
  } catch {
    return null;
  }
}
