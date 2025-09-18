"use client";

import React from "react";
import { MessageCircle, Send, Phone } from "lucide-react";

interface ContactInfo {
  whatsapp?: string | null;
  telegram?: string | null;
  phone: string;
  preferredContact?: string;
}

interface Service {
  id: number;
  name: string;
  category: string;
  contact: ContactInfo;
}

interface ContactButtonsProps {
  service: Service;
  className?: string;
}

// WhatsApp and Telegram URL generators
const generateWhatsAppURL = (phone: string, message: string): string => {
  const cleanPhone = phone.startsWith("91")
    ? phone
    : phone.replace(/^\+91\s*/, "91").replace(/\s+/g, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
};

const generateTelegramURL = (username: string, message?: string): string => {
  const baseUrl = `https://t.me/${username}`;
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  return baseUrl;
};

// Generate contextual message based on service
const generateContactMessage = (service: Service): string => {
  return `Hi! I'm interested in ${service.name} services. Could you please provide more information about ${service.category} and pricing? Thank you!`;
};

const ContactButtons: React.FC<ContactButtonsProps> = ({
  service,
  className = "",
}) => {
  const message = generateContactMessage(service);

  const handleWhatsAppClick = () => {
    if (service.contact.whatsapp) {
      const url = generateWhatsAppURL(service.contact.whatsapp, message);
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handleTelegramClick = () => {
    if (service.contact.telegram) {
      const url = generateTelegramURL(service.contact.telegram, message);
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${service.contact.phone}`;
  };

  // If neither WhatsApp nor Telegram is available, show phone only
  if (!service.contact.whatsapp && !service.contact.telegram) {
    return (
      <div className={`flex gap-2 ${className}`}>
        <button
          onClick={handlePhoneClick}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          title="Call Now"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">Call Now</span>
        </button>
      </div>
    );
  }

  // Render contact buttons based on availability
  return (
    <div className={`flex gap-2 ${className}`}>
      {/* WhatsApp Button */}
      {service.contact.whatsapp && (
        <button
          onClick={handleWhatsAppClick}
          className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
          title="Contact via WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </button>
      )}

      {/* Telegram Button */}
      {service.contact.telegram && (
        <button
          onClick={handleTelegramClick}
          className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
          title="Contact via Telegram"
        >
          <Send className="w-4 h-4" />
          <span className="hidden sm:inline">Telegram</span>
        </button>
      )}

      {/* Phone Button (Always available as fallback) */}
      <button
        onClick={handlePhoneClick}
        className="p-2 border border-border rounded-lg hover:bg-muted transition-colors"
        title={`Call ${service.contact.phone}`}
      >
        <Phone className="w-4 h-4 text-muted-foreground" />
      </button>
    </div>
  );
};

// Compact version for smaller spaces
export const CompactContactButtons: React.FC<ContactButtonsProps> = ({
  service,
  className = "",
}) => {
  const message = generateContactMessage(service);

  const handleWhatsAppClick = () => {
    if (service.contact.whatsapp) {
      const url = generateWhatsAppURL(service.contact.whatsapp, message);
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handleTelegramClick = () => {
    if (service.contact.telegram) {
      const url = generateTelegramURL(service.contact.telegram, message);
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${service.contact.phone}`;
  };

  const preferredContact = service.contact.preferredContact;

  return (
    <div className={`flex gap-1 ${className}`}>
      {/* Show preferred contact first */}
      {preferredContact === "whatsapp" && service.contact.whatsapp && (
        <button
          onClick={handleWhatsAppClick}
          className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          title="WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
        </button>
      )}

      {preferredContact === "telegram" && service.contact.telegram && (
        <button
          onClick={handleTelegramClick}
          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          title="Telegram"
        >
          <Send className="w-4 h-4" />
        </button>
      )}

      {/* Show secondary contact if available */}
      {preferredContact === "whatsapp" && service.contact.telegram && (
        <button
          onClick={handleTelegramClick}
          className="p-2 bg-blue-500/80 text-white rounded-lg hover:bg-blue-600 transition-colors"
          title="Telegram"
        >
          <Send className="w-3 h-3" />
        </button>
      )}

      {preferredContact === "telegram" && service.contact.whatsapp && (
        <button
          onClick={handleWhatsAppClick}
          className="p-2 bg-green-600/80 text-white rounded-lg hover:bg-green-700 transition-colors"
          title="WhatsApp"
        >
          <MessageCircle className="w-3 h-3" />
        </button>
      )}

      {/* Phone button (always available) */}
      <button
        onClick={handlePhoneClick}
        className="p-2 border border-border rounded-lg hover:bg-muted transition-colors"
        title="Call"
      >
        <Phone className="w-4 h-4 text-muted-foreground" />
      </button>
    </div>
  );
};

// Contact info display component
export const ContactInfo: React.FC<{
  service: Service;
  className?: string;
}> = ({ service, className = "" }) => {
  return (
    <div className={`text-sm text-muted-foreground ${className}`}>
      <div className="flex items-center gap-2 mb-1">
        <Phone className="w-3 h-3" />
        <span>{service.contact.phone}</span>
      </div>

      {service.contact.whatsapp && (
        <div className="flex items-center gap-2 mb-1">
          <MessageCircle className="w-3 h-3 text-green-600" />
          <span>WhatsApp Available</span>
        </div>
      )}

      {service.contact.telegram && (
        <div className="flex items-center gap-2 mb-1">
          <Send className="w-3 h-3 text-blue-500" />
          <span>@{service.contact.telegram}</span>
        </div>
      )}
    </div>
  );
};

export default ContactButtons;
