import { contact } from "@/data/contact";

export function getWhatsAppUrl(message = contact.whatsappMessage) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getMailtoUrl() {
  return `mailto:${contact.email}`;
}
