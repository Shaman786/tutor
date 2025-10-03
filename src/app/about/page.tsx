import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Gallery from "@/components/ui/gallery"
import { getFeaturedImages } from "@/data/gallery"
import { 
  Phone, 
  MessageCircle, 
  Star, 
  Shield, 
  Clock, 
  Heart, 
  Users, 
  Award, 
  CheckCircle,
  MapPin,
  Sparkles
} from "lucide-react"

export const metadata: Metadata = {
  title: 'About Us - Premium Hyderabad Escort Service | Professional & Discreet',
  description: 'Learn about our premium escort service in Hyderabad. We provide VIP companionship with handpicked models, complete discretion, and 24/7 availability across all areas.',
  keywords: 'about hyderabad escorts, premium escort service, vip companionship, professional escorts, hyderabad escort agency',
}

export default function AboutPage() {
  const featuredImages = getFeaturedImages(6)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 px-4 text-center bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            About Our Premium Service
          </h1>
          <p className="text-xl mb-8 text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
            We are Hyderabad's most trusted and professional escort service, dedicated to providing 
            exceptional companionship experiences with complete discretion and satisfaction.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                Our Hyderabad Escort Service knows the importance of companionship, and we will satisfy your desires 
                with carefully picked and trained models who have defined a new way of relaxation in Hyderabad's escort service.
              </p>
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                We believe that client satisfaction is more important to us than anything, and we categorize our services 
                based on client needs and inner desires that cannot be expressed openly.
              </p>
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                We do more than provide companionship; we aim for clients to fully relax and feel that our elite escorts 
                are devoted to their complete satisfaction and enjoyment.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {featuredImages.slice(0, 4).map((image, index) => (
                <div key={index} className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-pink-600 flex items-center">
                  <Shield className="mr-2 h-6 w-6" />
                  Complete Discretion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Your privacy is our top priority. We maintain complete confidentiality and discretion in all our services. 
                Strict action will be taken as per company policy to protect client privacy.</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-purple-600 flex items-center">
                  <Heart className="mr-2 h-6 w-6" />
                  Client Satisfaction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>We prioritize customer satisfaction over everything else. Our goal is to exceed expectations and 
                ensure every client leaves with unforgettable memories and complete satisfaction.</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-pink-600 flex items-center">
                  <Star className="mr-2 h-6 w-6" />
                  Premium Quality
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Every model is handpicked and trained to provide exceptional companionship. We maintain the highest 
                standards of beauty, intelligence, and professionalism in our selection process.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Makes Us Different</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Our Unique Approach</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">No Advance Payment</h4>
                    <p className="text-gray-600 dark:text-gray-400">We don't charge anything in advance. Payment is only required at the time of service delivery.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Punctual Service</h4>
                    <p className="text-gray-600 dark:text-gray-400">We value your time and arrange meetings as per scheduled time without any delays.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-purple-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Diverse Selection</h4>
                    <p className="text-gray-600 dark:text-gray-400">From college girls to experienced housewives, air hostesses to international models - we have it all.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-yellow-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Genuine Service</h4>
                    <p className="text-gray-600 dark:text-gray-400">Our escort service is completely genuine and values customers and their preferences above everything else.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Our Service Standards</h3>
              <div className="space-y-4">
                <div className="p-4 bg-pink-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-pink-600 mb-2">Professional Training</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">All our models are professionally trained to handle clients with care and provide exceptional experiences.</p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-purple-600 mb-2">Health & Hygiene</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">We maintain the highest standards of health and hygiene for the safety and comfort of our clients.</p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-2">24/7 Availability</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Our services are available round the clock across all areas of Hyderabad for your convenience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <MapPin className="inline mr-2 h-8 w-8 text-pink-600" />
            Our Service Areas
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            We provide our premium escort services across all major areas of Hyderabad. Our service is not area-restricted 
            and covers the entire Hyderabad region for your convenience.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Banjara Hills', 'Gachibowli', 'Madhapur', 'Hitech City', 'Kondapur', 'Jubilee Hills',
              'HITEC City', 'Begumpet', 'Somajiguda', 'Ameerpet', 'Secunderabad', 'Kukatpally',
              'Miyapur', 'Uppal', 'LB Nagar', 'Dilsukhnagar', 'Kompally', 'All Hyderabad'
            ].map((area, index) => (
              <div key={index} className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm text-center text-sm font-medium">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Commitment to You</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-4xl mx-auto">
            We are committed to providing you with the finest companionship experience in Hyderabad. 
            Our reputation is built on trust, quality, and complete customer satisfaction.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-pink-100 dark:bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="font-semibold mb-2">100% Safe</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Complete safety and security guaranteed</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">24/7 Available</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Round the clock service availability</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Premium Quality</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Highest quality companionship services</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Client Focused</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Your satisfaction is our priority</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
              <Phone className="mr-2 h-5 w-5" />
              Contact Us Now
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Chat
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}