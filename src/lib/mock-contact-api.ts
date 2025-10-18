import { validateContactForm } from './validate';
import { checkRateLimit } from './rate-limit';
import { logInfo, logError } from './log';

export async function handleContactSubmission(data: any): Promise<{ ok: boolean; error?: string }> {
  try {
    const ip = '127.0.0.1';

    if (!checkRateLimit(ip)) {
      return {
        ok: false,
        error: 'Too many requests. Try again later.',
      };
    }

    const validation = validateContactForm(data);
    if (!validation.ok) {
      return validation;
    }

    if (data.company && data.company.trim() !== '') {
      return { ok: true };
    }

    logInfo('Contact form submitted', { route: 'contact', ipRedacted: true });

    await new Promise(resolve => setTimeout(resolve, 500));

    console.log('=== CONTACT FORM SUBMISSION ===');
    console.log('Name:', data.name);
    console.log('Email:', data.email);
    console.log('Phone:', data.phone || 'Not provided');
    console.log('Message:', data.message);
    console.log('===============================');

    return { ok: true };
  } catch (error) {
    logError(error as Error, { route: 'contact' });
    return { ok: false, error: 'Failed to send message. Please try again.' };
  }
}
