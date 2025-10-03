import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Gallery from "@/components/ui/gallery"
import { galleryImages, getImagesByCategory } from "@/data/gallery"
import { Phone, MessageCircle, Star, Users, Heart, Crown, Sparkles, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: 'Premium Escort Services in Hyderabad | VIP Call Girls & High Profile Models',
  description: 'Discover our exclusive escort services in Hyderabad. VIP call girls, independent models, housewives, college girls, air hostesses. 24/7 available. Safe & discreet service.',
  keywords: 'hyderabad escort service, vip call girls, independent models, premium escorts, high profile escorts, hyderabad escorts',
}

export default function ServicesPage() {
  const vipImages = getImagesByCategory('vip')
  const eliteImages = getImagesByCategory('elite')
  const premiumImages = getImagesByCategory('premium')

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 px-4 text-center bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Our Premium Services
          </h1>
          <p className="text-xl mb-8 text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
            Experience the finest selection of high-profile escorts, VIP models, and premium companions in Hyderabad. 
            Each service is designed to exceed your expectations and provide unforgettable moments.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
              <TabsTrigger value="all">All Models</TabsTrigger>
              <TabsTrigger value="vip">VIP Service</TabsTrigger>
              <TabsTrigger value="elite">Elite Models</TabsTrigger>
              <TabsTrigger value="premium">Premium</TabsTrigger>
              <TabsTrigger value="independent">Independent</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Complete Gallery</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Browse through our complete selection of beautiful, professional escorts available in Hyderabad
                </p>
              </div>
              <Gallery images={galleryImages} columns={4} />
            </TabsContent>

            <TabsContent value="vip" className="mt-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 flex items-center">
                  <Crown className="mr-2 h-8 w-8 text-yellow-600" />
                  VIP Escort Service
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Our VIP escort service provides the most sophisticated and elegant companions. Perfect for high-profile clients seeking premium companionship.
                </p>
              </div>
              <Gallery images={vipImages} columns={3} className="mb-8" />
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">VIP Service Features:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center"><Star className="h-4 w-4 text-yellow-500 mr-2" />Elite-level companionship</li>
                    <li className="flex items-center"><Shield className="h-4 w-4 text-green-500 mr-2" />Maximum privacy and discretion</li>
                    <li className="flex items-center"><Crown className="h-4 w-4 text-purple-500 mr-2" />Premium location services</li>
                    <li className="flex items-center"><Sparkles className="h-4 w-4 text-pink-500 mr-2" />Luxury experience guaranteed</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="elite" className="mt-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Elite Models</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Our elite models are carefully selected for their beauty, intelligence, and professionalism. Experience companionship at its finest.
                </p>
              </div>
              <Gallery images={eliteImages} columns={3} />
            </TabsContent>

            <TabsContent value="premium" className="mt-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Premium Services</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Premium companionship services designed for discerning clients who appreciate quality and excellence.
                </p>
              </div>
              <Gallery images={premiumImages} columns={3} />
            </TabsContent>

            <TabsContent value="independent" className="mt-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Independent Models</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Professional independent escorts who offer personalized services with complete dedication to your satisfaction.
                </p>
              </div>
              <Gallery images={getImagesByCategory('independent')} columns={3} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Types of Models Available</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-pink-600 flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  College Girls
                </CardTitle>
                <CardDescription>Young, energetic and jovial companions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Our college girls are carefully selected independent women who are high-profile in their colleges. They bring youthful energy and will make you feel like you're with your college girlfriend.</p>
                <ul className="space-y-1 text-sm">
                  <li>• Jovial and attractive personalities</li>
                  <li>• Fresh and energetic companions</li>
                  <li>• Perfect for casual meetings</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-purple-600 flex items-center">
                  <Heart className="mr-2 h-5 w-5" />
                  Housewives (MILFs)
                </CardTitle>
                <CardDescription>Experienced and mature companions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Our selection of housewives are experienced women with curvy figures who transform into hot and sexy companions. They know exactly how to fulfill your desires about mature women.</p>
                <ul className="space-y-1 text-sm">
                  <li>• Experienced and skilled</li>
                  <li>• Perfect curvy figures</li>
                  <li>• Expert in companionship</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-pink-600 flex items-center">
                  <Crown className="mr-2 h-5 w-5" />
                  Air Hostesses
                </CardTitle>
                <CardDescription>Professional models with aviation background</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Our air hostess models are specially trained professionals who bring elegance and sophistication. They know advanced techniques and will make you go crazy for them.</p>
                <ul className="space-y-1 text-sm">
                  <li>• Professional and elegant</li>
                  <li>• Specially trained companions</li>
                  <li>• International standards</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Our Service */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Our Service?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Our Unique Advantages</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Star className="h-6 w-6 text-yellow-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Handpicked Models</h4>
                    <p className="text-gray-600 dark:text-gray-400">Every girl is carefully selected and trained to provide exceptional companionship services.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">100% Safe & Genuine</h4>
                    <p className="text-gray-600 dark:text-gray-400">We prioritize safety and genuineness. No advance payment required - pay only after service delivery.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Heart className="h-6 w-6 text-red-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Customer Satisfaction</h4>
                    <p className="text-gray-600 dark:text-gray-400">Our main motive is customer satisfaction. We go beyond expectations to ensure memorable experiences.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Service Areas</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We provide services across all major areas of Hyderabad:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="p-3 bg-pink-50 dark:bg-gray-800 rounded">Banjara Hills</div>
                <div className="p-3 bg-purple-50 dark:bg-gray-800 rounded">Gachibowli</div>
                <div className="p-3 bg-pink-50 dark:bg-gray-800 rounded">Madhapur</div>
                <div className="p-3 bg-purple-50 dark:bg-gray-800 rounded">Hitech City</div>
                <div className="p-3 bg-pink-50 dark:bg-gray-800 rounded">Kondapur</div>
                <div className="p-3 bg-purple-50 dark:bg-gray-800 rounded">All Hyderabad</div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                Our escort service is not area restricted and covers the entire Hyderabad region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Book Your Perfect Companion Now
          </h2>
          <p className="text-xl mb-8">
            Available 24/7 with complete privacy and discretion. Choose from our beautiful selection of models and enjoy an unforgettable experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-pink-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
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