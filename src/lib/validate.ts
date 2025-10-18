const MAX_MESSAGE_LENGTH = 2000;
const MAX_NAME_LENGTH = 120;

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  company?: string;
}

export interface ValidationResult {
  ok: boolean;
  error?: string;
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  if (data.company && data.company.trim() !== '') {
    return { ok: true };
  }

  if (!data.name || !data.email || !data.message) {
    return { ok: false, error: 'Name, email, and message are required.' };
  }

  if (data.name.length > MAX_NAME_LENGTH) {
    return { ok: false, error: `Name must be ${MAX_NAME_LENGTH} characters or less.` };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return { ok: false, error: 'Invalid email address.' };
  }

  if (data.message.length < 10 || data.message.length > MAX_MESSAGE_LENGTH) {
    return { ok: false, error: `Message must be 10-${MAX_MESSAGE_LENGTH} characters.` };
  }

  return { ok: true };
}
