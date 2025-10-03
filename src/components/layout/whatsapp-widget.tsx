"use client"

import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function WhatsAppWidget() {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = "+919999999999" // Replace with actual number
    const message = encodeURIComponent("Hi, I'm interested in your escort services. Please provide more details.")
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        size="lg"
        className="rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="h-6 w-6 mr-2" />
        WhatsApp
      </Button>
    </div>
  )
}