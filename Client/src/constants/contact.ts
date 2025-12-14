// Contact information for Volt Axis Company

export const CONTACT_INFO = {
  // WhatsApp numbers
  whatsapp: {
    showroom: {
      number: "+966506045369",
      formatted: "966506045369", // without + for wa.me links
      label: "Showroom",
      description: "Contact our showroom for product inquiries",
    },
    trading: {
      number: "+966556905279",
      formatted: "966556905279", // without + for wa.me links
      label: "Trading",
      description: "Contact our trading department for business inquiries",
    },
  },

  // Email
  email: "info@voltaxistrading.com",

  // Company name
  companyName: "Volt Axis Company",

  // Default messages
  messages: {
    general:
      "Hello Volt Axis Company, I'm interested in your products and services.",
    support: "Hello, I need help navigating your website.",
    productInquiry: (productName: string) =>
      `Hello, I'm interested in ${productName}. Could you provide more information?`,
  },
} as const;

// Helper function to format WhatsApp link
export const getWhatsAppLink = (
  type: "showroom" | "trading",
  message?: string
) => {
  const contact = CONTACT_INFO.whatsapp[type];
  const encodedMessage = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${contact.formatted}${encodedMessage}`;
};
