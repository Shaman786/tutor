import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Gallery from "@/components/ui/gallery"
import { getFeaturedImages } from "@/data/gallery"
import { Phone, MessageCircle, Star, Shield, Clock, Heart } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const featuredImages = getFeaturedImages(8)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Premium Hyderabad Escort Service
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
            Experience the finest companionship with our high-profile, VIP escort services in Hyderabad. 
            Professional, discreet, and unforgettable moments await you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
            <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="flex flex-col items-center p-4">
              <Shield className="h-8 w-8 text-green-600 mb-2" />
              <span className="text-sm font-medium">100% Safe</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <Clock className="h-8 w-8 text-blue-600 mb-2" />
              <span className="text-sm font-medium">24/7 Available</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <Heart className="h-8 w-8 text-red-600 mb-2" />
              <span className="text-sm font-medium">VIP Service</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <Star className="h-8 w-8 text-yellow-600 mb-2" />
              <span className="text-sm font-medium">Top Rated</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Our Service</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                Sex is not merely a term; it encompasses a range of emotions and stimuli that contribute to relaxation and help alleviate stress. 
                Everyone has desires that must be fulfilled, and we love to explore more in the happiest moments.
              </p>
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                Hyderabad is the best place for exploring your desires, as it is the perfect destination for business and an information technology hub. 
                We provide the best companions that will be remembered for life.
              </p>
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                Our high-profile escort service will put a full stop to your desires, as it is a place of heaven that needs to be explored. 
                The smile of our girls is enough to arouse and tingle hearts to spend precious moments.
              </p>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center"><Star className="h-4 w-4 text-yellow-500 mr-2" />High-profile handpicked girls</li>
                    <li className="flex items-center"><Shield className="h-4 w-4 text-green-500 mr-2" />100% Safe and discreet</li>
                    <li className="flex items-center"><Clock className="h-4 w-4 text-blue-500 mr-2" />Punctual and reliable service</li>
                    <li className="flex items-center"><Heart className="h-4 w-4 text-red-500 mr-2" />Customer satisfaction priority</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Beautiful Models</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            Meet our carefully selected, high-profile escorts who are ready to provide you with an unforgettable experience
          </p>
          <Gallery images={featuredImages} columns={4} className="mb-8" />
          <div className="text-center">
            <Link href="/services">
              <Button size="lg" className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700">
                View All Models
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Premium Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-pink-600">VIP Escort Service</CardTitle>
                <CardDescription>High-class companions for elite clientele</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Our VIP escort service provides the most sophisticated and elegant companions in Hyderabad. Perfect for business events, social gatherings, or private companionship.</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-purple-600">Independent Models</CardTitle>
                <CardDescription>Professional and experienced companions</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Our independent models are carefully selected professionals who know how to provide exceptional companionship and make every moment memorable.</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-pink-600">Premium Experience</CardTitle>
                <CardDescription>Luxury companionship services</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Experience luxury like never before with our premium companions who are trained to provide the highest level of service and satisfaction.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for an Unforgettable Experience?
          </h2>
          <p className="text-xl mb-8">
            Contact us now to book your perfect companion. Available 24/7 across all areas of Hyderabad including Banjara Hills, Gachibowli, Madhapur, and Hitech City.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-pink-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +91 XXXXX XXXXX
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Chat
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
