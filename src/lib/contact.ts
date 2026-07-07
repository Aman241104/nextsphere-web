const WHATSAPP_COUNTRY_CODE = '91';
const WHATSAPP_LOCAL_NUMBER = '9909922265';

export const CONTACT = {
  phoneDisplay: '+91 99099 22265',
  phoneE164: `+${WHATSAPP_COUNTRY_CODE}${WHATSAPP_LOCAL_NUMBER}`,
  whatsappNumber: `${WHATSAPP_COUNTRY_CODE}${WHATSAPP_LOCAL_NUMBER}`,
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
