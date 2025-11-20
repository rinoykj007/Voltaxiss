import React from "react";
import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  phone: string; // international format, no '+' or dashes, e.g. "966501234567"
  message?: string; // plain text message (will be URL-encoded)
  label?: string; // button label text
  className?: string; // optional custom classes
}

/**
 * WhatsAppButton
 *
 * A reusable button component that opens a WhatsApp chat with a specific phone number.
 * Uses wa.me short link which works on both desktop and mobile.
 *
 * @param phone - Phone number in international format without '+' or dashes (e.g., "966501234567")
 * @param message - Optional pre-filled message text
 * @param label - Button text label
 * @param className - Optional additional CSS classes
 */
export default function WhatsAppButton({
  phone,
  message = "",
  label = "Chat on WhatsApp",
  className = ""
}: WhatsAppButtonProps) {
  const encoded = encodeURIComponent(message);
  // Use wa.me short link (works both desktop & mobile)
  const waLink = `https://wa.me/${phone}${message ? `?text=${encoded}` : ""}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#25D366] text-gray-900 bg-white hover:bg-green-50 transition-colors shadow-sm hover:shadow-md ${className}`}
      aria-label="Open WhatsApp chat"
    >
      <FaWhatsapp size={20} className="text-[#25D366]" />
      <span>{label}</span>
    </a>
  );
}
