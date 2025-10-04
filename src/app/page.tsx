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
            hyderabadescort - Premium Escort Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
            Bold, edgy, and irresistibly sexy women for those unforgettable moments of passion and confidence. 
            Experience premium escort services in Hyderabad with complete discretion.
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

      {/* HOME Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">HOME</h2>
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
            <p className="mb-6">
              Sex is not merely a term; it encompasses a range of emotions and stimuli that contribute to relaxation and help alleviate stress.
            </p>
            <p className="mb-6">
              Everyone will have dark desires that must be secretly fulfilled, as we love to explore more and more in the happiest moment of sex.
            </p>
            <p className="mb-6">
              Hyderabad is the best place for exploring your dark desires, as it is the best destination for business and an information technology hub where we give the best girls to give company that will be remembered in life.
            </p>
            <p className="mb-6">
              Everyone needs a place to feel relieved, and due to work stress, many cannot open up with their partner in the bedroom, as many are reserved.
            </p>
            <p className="mb-6">
              Many want to spend some time with partners but are unable to. To go deep inside the heart of guys and to know their kinky desires is a difficult task, but our high-profile escort service will put a full stop to the desires, as it is a place of heaven that needs to be explored.
            </p>
            <p className="mb-6">
              The smile of a girl is enough to arouse a guy and tingle his heart to spend some precious moments with a girl who is very jovial but doesn't know how to proceed further.
            </p>
            <p className="mb-6">
              Our high-profile escort services will be like a bridge between your sexual hormones and the heart that will satisfy your inner desire of dating a girl with a complete happy ending.
            </p>
            <p className="mb-6">
              Our Hyderabad escort services will not only make a guy date a girl but also train every handpicked girl how to arouse sensual hormones in the body.
            </p>
            <p className="mb-6">
              Massaging the right hormone is important in the precious time, as it will increase stamina in the boy and give him confidence that he is with the correct girl who knows how to go deep inside a boy's heart.
            </p>
            <p className="mb-6">
              Escort service doesn't mean just 5 mins of enjoyment, but a lot of techniques are needed to arouse a sexual hormone, and our high-profile escort service is specialized in it, making it different from other escort services.
            </p>
            <p className="mb-6">
              Our main motive is to make boys feel relaxed when entering into our escort service with VIP girls who know how to handle clients, as they are working class and seductive with their physique.
            </p>
            <p className="mb-6">
              Seduction plays a key role in the bedroom, and finding the correct partner who knows how to seduce in a correct way is difficult, but leave off that thought at our entrance, as we have the best seductress who can make you travel in a world of lust combined with happy moments.
            </p>
            <p className="mb-6">
              Genuine escort services are rare and difficult to find, but we are proud to say that our high-profile escort service is the correct destination that will deliver the service and take payment after delivery.
            </p>
            <p className="mb-6">
              Our high-profile escort girl's smile is enough to arouse the client, and he will crave her physique. We are proud to say that our clients are repeated clients, and attracting a client is not that easy in this competitive industry, but we thank our charming and glorious girls who made it possible in every possible way from meeting the client till the end of glorious moments.
            </p>
            <p className="mb-6">
              We all know that girls in Hyderabad are habituated to fast culture but don't know how to approach a girl. They feel reserved, and it will decrease self-confidence in boys.
            </p>
            <p className="mb-6">
              Our escort service will help you to overcome this issue, as we have the best girls who approach themselves and will remove fear within a few seconds and make you believe that she is the girl whom your heart desires every second.
            </p>
            <p className="mb-6">
              Hyderabad is famous for IT and ITES. Our escort service in Hyderabad is famous for making you land in heaven with the beautiful angels on earth.
            </p>
            <p className="mb-6">
              Speaking with a girl for some time will relieve pressure, but to go inside the heart to know our desire, we must get a girl who knows and respects a boy's heart deeply. Our high-profile independent girls can do magic not only with their physique but also with their skills of handling your hormones that will make you go crazy for them.
            </p>
            <p className="mb-6">
              Many fear to speak with escort services, but to approach a girl correctly either in a bar or cafeteria needs a lot of skills that will increase the lust in the girl.
            </p>
            <p className="mb-6">
              If lust increases, desires of a kinky nature will come out, and our High Profile Escort Services will bring out those kinky desires and make your desires fulfilled in the bedroom.
            </p>
            <p className="mb-6">
              Our high-profile girls are kinky in the bedroom and can tease you with stockings, domination, aggression, and whatnot. Everything that your heart desires will be available in our High Profile Escort Service in Hyderabad.
            </p>
            <p className="mb-6 font-semibold text-pink-600">
              "Hey, why don't you call our numbers once to see how our well-picked girls will speak with your desires in their hearts instead of you?"
            </p>
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
              Call Now: +91 9876543210
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
