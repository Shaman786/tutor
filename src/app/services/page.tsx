import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Gallery from "@/components/ui/gallery"
import { galleryImages, getImagesByCategory } from "@/data/gallery"
import { Phone, MessageCircle, Star, Users, Heart, Crown, Sparkles, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: 'Services - hyderabadescort Premium Escort Services | VIP Call Girls & High Profile Models',
  description: 'Discover hyderabadescort exclusive escort services in Hyderabad. Bold, edgy, and irresistibly sexy women. VIP call girls, independent models, housewives, college girls. 24/7 available.',
  keywords: 'hyderabadescort, hyderabad escort service, vip call girls, independent models, premium escorts, high profile escorts, hyderabad escorts',
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

      {/* TYPES OF MODELS */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">TYPES OF MODELS</h2>
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 mb-12">
            <p className="mb-6">
              Our high-profile escort service in Hyderabad has different types of models who are handpicked and know how to make you land in joy and heaven, forgetting everything.
            </p>
            <p className="mb-6">
              Our special category of models includes housewives, air hostesses, and college girls who are in high demand in escort services.
            </p>
            <p className="mb-6">
              Men who like mature women must stop at our escort service, as it is the destination of your heart's desire.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-pink-600 flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  College Girls
                </CardTitle>
                <CardDescription>Jovial and high-profile students</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">College girls who are jovial will attract anyone, and our high-profile escort service in Hyderabad carefully picked up independent girls who are into high profiles in colleges and are working with us to enjoy giving company to clients and will make them feel relaxed like a girlfriend in college.</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-purple-600 flex items-center">
                  <Crown className="mr-2 h-5 w-5" />
                  Air Hostesses
                </CardTitle>
                <CardDescription>Professional aviation models</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Air hostesses who are models are our specialty. They not only spend time with you but also know the technique of teasing and make you go crazy for them, as we trained them by spending a lot of money to make the clients happy.</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-pink-600 flex items-center">
                  <Heart className="mr-2 h-5 w-5" />
                  Housewives (MILFs)
                </CardTitle>
                <CardDescription>Experienced mature women</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Our selection of housewives is the best in escort services, as we selected the most experienced women who have the best curvy figures and will make you tempted to the maximum, as their touch is enough to ignite fire in the body.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 mb-12">
            <p className="mb-6">
              Housewives' demand will be more, and our Hyderabad escort service is the only escort that handpicked the correct traditional housewives who transform themselves into hot and sexy wild modern women in bed that you cannot imagine, as we train them perfectly how to go deep inside your heart and quench your kinky thoughts about cheating milfs.
            </p>
            <p className="mb-6">
              They are the perfect MILFs who want men's attention every second and seduce you to the maximum, which will make you a repeated client for our escort service.
            </p>
            <p className="mb-6">
              Our Hyderabad Escort Service also has the best Russian models, who are very jovial and bold and will quench your thirst for meeting a foreigner, and you can take their services from our Escort Service in Hyderabad itself.
            </p>
            <p className="mb-6">
              Our high-profile escort service in Hyderabad had a wide range of models who are very bold and brave to do everything that will make you relaxed with their sensual moves in dance and massage and arouse you to make you enjoy the company.
            </p>
            <p className="mb-6">
              We had VIP and Premium for the customers who are willing to pay a high price for dating, as they are from a high class and are rare in Hyderabad Escort Service history.
            </p>
            <p className="mb-6">
              We carefully picked every high-class model and became a brand name for Hyderabad city as the best escort service that gives satisfaction to clients by knowing their inner desires.
            </p>
          </div>
        </div>
      </section>

      {/* WHY OUR HYDERABAD ESCORT SERVICE */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">WHY OUR HYDERABAD ESCORT SERVICE</h2>
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 mb-16">
            <p className="mb-6">
              Our high-profile escort service in Hyderabad had the best girls from various countries who know how to handle the best moments by not only giving time to give company to you but also making you feel relaxed with various massages that are very important to stimulate sexual hormones.
            </p>
            <p className="mb-6">
              We give priority to customer satisfaction over anything else, and our high-profile girls are very jovial and can mingle with anyone; that is the specialty of our escort service in Hyderabad.
            </p>
            <p className="mb-6">
              We value time and will arrange a meeting with the girls as per the scheduled time without any delay.
            </p>
            <p className="mb-6">
              Our Hyderabad Escort Services is a genuine service that values customers and their beliefs.
            </p>
            <p className="mb-6 font-semibold">
              We don't charge anything in advance, and only at the time of delivery can customers pay the money that will be disclosed in the interaction.
            </p>
          </div>
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

      {/* SUPPORT Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">SUPPORT</h2>
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 mb-12">
            <p className="mb-6">
              Our Hyderabad escort service will provide support to every customer from the beginning of interaction till the ending, and you have the option to select a girl of your choice for your company.
            </p>
            <p className="mb-6">
              We expect the same from customers when dealing with our models and respect the privacy along with dealing smoothly.
            </p>
            <p className="mb-6">
              Our high-profile independent women are the best asset to our escort service, as they are working-class women who want to enjoy some time by giving company to the client.
            </p>
            <p className="mb-6">
              So, we expect the same respect from the customer to the models, and enjoy your thrilling experience that is waiting for you in Hyderabad.
            </p>
            <p className="mb-6">
              We deliver the model safely to the place where the client wants to meet, and we pick up the model again after enjoying precious moments.
            </p>
            <p className="mb-6">
              Our escort service in Hyderabad respects the client's happiness, and we work to the maximum to provide it in every possible way.
            </p>
            <p className="mb-6">
              Our escort service will provide the services in Banjara Hills, Kondapur, Gachibowli, Madhapur, and Hitech City, which are completely occupied by the IT sector, where the demand is greater.
            </p>
            <p className="mb-6">
              Our escort service in Hyderabad specializes in providing services in every area of Hyderabad and is not area restricted.
            </p>
            <p className="mb-6">
              Stop once, and take our service to make yourself relaxed; that will make you forget stress in this competitive world.
            </p>
            <p className="mb-6">
              We are proud to say that our escort service in Hyderabad is the best destination for making everyone enjoy the special moments by providing the best service in the form of models who are well trained and the most attractive on earth.
            </p>
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