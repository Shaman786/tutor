import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Phone, 
  MessageCircle, 
  Mail,
  MapPin,
  Clock,
  Shield,
  Heart,
  CheckCircle,
  AlertCircle,
  Info
} from "lucide-react"

export const metadata: Metadata = {
  title: 'Contact Us - Premium Hyderabad Escort Service | 24/7 Available',
  description: 'Contact our premium escort service in Hyderabad. Available 24/7 via phone and WhatsApp. Quick response, complete discretion, and professional booking service.',
  keywords: 'contact hyderabad escorts, book escort hyderabad, escort service phone number, whatsapp escort booking, hyderabad call girls contact',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 px-4 text-center bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl mb-8 text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
            Ready to experience premium companionship? We're available 24/7 to help you book 
            the perfect companion with complete discretion and professionalism.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +91 XXXXX XXXXX
            </Button>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Chat
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-pink-600 flex items-center">
                  <Phone className="mr-2 h-6 w-6" />
                  Phone Call
                </CardTitle>
                <CardDescription>Direct phone support available 24/7</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Call us directly for immediate assistance and booking. Our professional team is ready to help you.</p>
                <div className="space-y-2">
                  <p className="font-semibold">+91 XXXXX XXXXX</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Available 24 hours</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-600 flex items-center">
                  <MessageCircle className="mr-2 h-6 w-6" />
                  WhatsApp
                </CardTitle>
                <CardDescription>Quick and convenient messaging</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Chat with us on WhatsApp for quick responses and easy booking. Share your preferences easily.</p>
                <div className="space-y-2">
                  <p className="font-semibold">+91 XXXXX XXXXX</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Fast response guaranteed</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-purple-600 flex items-center">
                  <MapPin className="mr-2 h-6 w-6" />
                  Service Areas
                </CardTitle>
                <CardDescription>Available across Hyderabad</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">We provide services across all major areas of Hyderabad. No area restrictions.</p>
                <div className="space-y-2">
                  <p className="font-semibold">All Hyderabad Areas</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Outcall services available</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Booking Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-pink-100 dark:bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="font-semibold mb-2">1. Contact Us</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Call or message us via WhatsApp to start the booking process</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">2. Choose Model</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Select your preferred companion from our exclusive collection</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">3. Schedule Time</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Set your preferred time and location for the meeting</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">4. Enjoy Service</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Meet your chosen companion and enjoy the premium experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Important Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600 flex items-center">
                  <CheckCircle className="mr-2 h-6 w-6" />
                  What We Guarantee
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 text-green-500 mr-2" />
                    100% genuine and safe service
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 text-blue-500 mr-2" />
                    Punctual and reliable timing
                  </li>
                  <li className="flex items-center">
                    <Heart className="h-4 w-4 text-red-500 mr-2" />
                    Complete client satisfaction
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 text-purple-500 mr-2" />
                    Total privacy and discretion
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    No advance payment required
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600 flex items-center">
                  <AlertCircle className="mr-2 h-6 w-6" />
                  Booking Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <Info className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                    Advance booking recommended for better availability
                  </li>
                  <li className="flex items-start">
                    <Info className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                    Specify your preferences clearly during booking
                  </li>
                  <li className="flex items-start">
                    <Info className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                    Payment only after service delivery
                  </li>
                  <li className="flex items-start">
                    <Info className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                    Respect our models and maintain courtesy
                  </li>
                  <li className="flex items-start">
                    <Info className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                    All communications are kept strictly confidential
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas Detail */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <MapPin className="inline mr-2 h-8 w-8 text-pink-600" />
            Service Coverage
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            Our premium escort service covers all major areas of Hyderabad with no location restrictions
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-pink-600">Central Hyderabad</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span>Banjara Hills</span>
                  <span>Jubilee Hills</span>
                  <span>Somajiguda</span>
                  <span>Begumpet</span>
                  <span>Ameerpet</span>
                  <span>Punjagutta</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">IT Corridor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span>Gachibowli</span>
                  <span>Madhapur</span>
                  <span>Hitech City</span>
                  <span>Kondapur</span>
                  <span>HITEC City</span>
                  <span>Financial District</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Extended Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span>Secunderabad</span>
                  <span>Kukatpally</span>
                  <span>Miyapur</span>
                  <span>Uppal</span>
                  <span>LB Nagar</span>
                  <span>All Hyderabad</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Available 24/7</h2>
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8">
            <Clock className="h-16 w-16 text-pink-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Round the Clock Service</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              We understand that companionship needs can arise at any time. That's why our premium 
              escort service is available 24 hours a day, 7 days a week.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Whether it's a business event, social gathering, or private companionship - 
              we're here to provide exceptional service whenever you need it.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your Perfect Companion?
          </h2>
          <p className="text-xl mb-8">
            Contact us now for immediate booking or to discuss your preferences. 
            Our team is standing by to provide you with exceptional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-pink-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Call: +91 XXXXX XXXXX
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Now
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-90">
            Professional • Discreet • Available 24/7 • No Advance Payment
          </p>
        </div>
      </section>
    </div>
  )
}