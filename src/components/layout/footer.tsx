import Link from 'next/link'
import { Heart, Phone, MessageCircle, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-pink-600" />
              <span className="text-xl font-bold">hyderabadescort</span>
            </div>
            <p className="text-gray-400">
              Bold, edgy, and irresistibly sexy women for those unforgettable moments of passion and confidence. Premium escort services in Hyderabad.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/rates" className="text-gray-400 hover:text-white transition-colors">
                Rates
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <nav className="flex flex-col space-y-2">
              <span className="text-gray-400">VIP Escort Service</span>
              <span className="text-gray-400">Independent Models</span>
              <span className="text-gray-400">College Girls</span>
              <span className="text-gray-400">Housewives (MILFs)</span>
              <span className="text-gray-400">Air Hostesses</span>
              <span className="text-gray-400">Premium Companions</span>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-pink-600" />
                <span className="text-gray-400">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-green-600" />
                <span className="text-gray-400">WhatsApp Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-purple-600" />
                <span className="text-gray-400">Hyderabad, Telangana</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-600" />
                <span className="text-gray-400">24/7 Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2 text-sm text-gray-400">
            <span>Banjara Hills</span>
            <span>Gachibowli</span>
            <span>Madhapur</span>
            <span>Hitech City</span>
            <span>Kondapur</span>
            <span>Jubilee Hills</span>
            <span>HITEC City</span>
            <span>Begumpet</span>
            <span>Somajiguda</span>
            <span>Ameerpet</span>
            <span>Secunderabad</span>
            <span>All Hyderabad</span>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} hyderabadescort. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Professional • Discreet • Available 24/7
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}