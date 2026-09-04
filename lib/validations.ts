export interface ValidationErrors {
  [key: string]: string;
}

export function validateLeadForm(data: {
  full_name?: string;
  whatsapp?: string;
  business_name?: string;
  country?: string;
}): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!data.full_name || data.full_name.trim().length < 2) {
    errors.full_name = 'Full name is required (minimum 2 characters)';
  }

  if (!data.whatsapp || !data.whatsapp.trim()) {
    errors.whatsapp = 'WhatsApp number is required';
  } else {
    const digits = data.whatsapp.replace(/\D/g, '');
    if (digits.length < 10) {
      errors.whatsapp = 'Please enter a valid WhatsApp number with country code';
    }
    if (!data.whatsapp.trim().startsWith('+')) {
      errors.whatsapp = 'WhatsApp number must start with + (country code)';
    }
  }

  if (!data.business_name || data.business_name.trim().length < 1) {
    errors.business_name = 'Business name is required';
  }

  if (!data.country || data.country.trim().length < 1) {
    errors.country = 'Please select a country';
  }

  return errors;
}

export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/<[^>]*>/g, '')
    .replace(/[<>]/g, '');
}
