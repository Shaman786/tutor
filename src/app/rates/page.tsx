import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Phone, 
  MessageCircle, 
  Star,
  Crown,
  Heart,
  Users,
  Clock,
  CheckCircle,
  Shield,
  Sparkles,
  Award,
  Info
} from "lucide-react"

export const metadata: Metadata = {
  title: 'Rates & Pricing - Premium Hyderabad Escort Service | Transparent Pricing',
  description: 'View our transparent pricing for premium escort services in Hyderabad. VIP, Elite, and Premium packages available. No hidden charges, payment after service.',
  keywords: 'hyderabad escort rates, escort service pricing, vip escort cost, call girls rates hyderabad, premium escort pricing',
}

export default function RatesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 px-4 text-center bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Our Rates & Packages
          </h1>
          <p className="text-xl mb-8 text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
            Transparent pricing for premium companionship services. Choose the package that suits your 
            preferences and budget. No hidden charges, payment only after service delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
              <Phone className="mr-2 h-5 w-5" />
              Discuss Rates
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Inquiry
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Service Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Premium Package */}
            <Card className="relative hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl font-bold text-purple-600 flex items-center">
                      <Heart className="mr-2 h-6 w-6" />
                      Premium
                    </CardTitle>
                    <CardDescription>High-quality companionship</CardDescription>
                  </div>
                  <Badge variant="secondary">Popular</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-3xl font-bold">₹₹₹</span>
                  <span className="text-gray-600 dark:text-gray-400">/meeting</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Beautiful premium models
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Professional companionship
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Flexible timing options
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    All areas covered
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Complete discretion
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <Phone className="mr-2 h-4 w-4" />
                  Book Premium
                </Button>
              </CardContent>
            </Card>

            {/* VIP Package */}
            <Card className="relative hover:shadow-lg transition-shadow border-pink-200 dark:border-pink-800">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-pink-600 text-white">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-pink-600 flex items-center">
                  <Crown className="mr-2 h-6 w-6" />
                  VIP Service
                </CardTitle>
                <CardDescription>Elite companionship experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-3xl font-bold">₹₹₹₹</span>
                  <span className="text-gray-600 dark:text-gray-400">/meeting</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Elite high-profile models
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    VIP treatment & service
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Extended time options
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Premium locations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Priority booking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Maximum privacy
                  </li>
                </ul>
                <Button className="w-full bg-pink-600 hover:bg-pink-700">
                  <Crown className="mr-2 h-4 w-4" />
                  Book VIP
                </Button>
              </CardContent>
            </Card>

            {/* Elite Package */}
            <Card className="relative hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gold-600 flex items-center text-yellow-600">
                  <Sparkles className="mr-2 h-6 w-6" />
                  Elite
                </CardTitle>
                <CardDescription>Luxury companionship service</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-3xl font-bold">₹₹₹₹₹</span>
                  <span className="text-gray-600 dark:text-gray-400">/meeting</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Exclusive elite models
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Luxury service experience
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    International standards
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Personalized attention
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Concierge service
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Absolute confidentiality
                  </li>
                </ul>
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Book Elite
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Categories */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Special Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-pink-600 flex items-center text-lg">
                  <Users className="mr-2 h-5 w-5" />
                  College Girls
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-2">₹₹-₹₹₹</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Young, energetic companions perfect for casual meetings
                </p>
                <ul className="text-xs space-y-1">
                  <li>• Fresh and jovial</li>
                  <li>• Student companions</li>
                  <li>• Casual experiences</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-purple-600 flex items-center text-lg">
                  <Heart className="mr-2 h-5 w-5" />
                  Housewives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-2">₹₹₹-₹₹₹₹</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Experienced, mature companions with perfect figures
                </p>
                <ul className="text-xs space-y-1">
                  <li>• Experienced MILFs</li>
                  <li>• Curvy figures</li>
                  <li>• Mature companionship</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-600 flex items-center text-lg">
                  <Award className="mr-2 h-5 w-5" />
                  Air Hostesses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-2">₹₹₹₹+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Professional models with aviation background
                </p>
                <ul className="text-xs space-y-1">
                  <li>• Professional elegance</li>
                  <li>• International exposure</li>
                  <li>• Premium service</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-600 flex items-center text-lg">
                  <Star className="mr-2 h-5 w-5" />
                  Russian Models
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-2">₹₹₹₹₹</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  International models with exotic appeal
                </p>
                <ul className="text-xs space-y-1">
                  <li>• International beauty</li>
                  <li>• Exotic experience</li>
                  <li>• Premium pricing</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Pricing Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600 flex items-center">
                  <Info className="mr-2 h-6 w-6" />
                  What's Included
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Professional companionship service
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Complete privacy and discretion
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Safe and secure meeting arrangements
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Punctual and reliable service
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Transportation arrangements
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Customer support throughout
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600 flex items-center">
                  <Shield className="mr-2 h-6 w-6" />
                  Payment Terms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-green-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-green-600 mb-1">No Advance Payment</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      We don't charge anything in advance. Payment is only required after service delivery.
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-blue-600 mb-1">Flexible Payment Options</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Multiple payment methods accepted for your convenience.
                    </p>
                  </div>
                  <div className="p-3 bg-purple-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-purple-600 mb-1">Transparent Pricing</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      No hidden charges or surprise fees. What you discuss is what you pay.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Time Options */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <Clock className="inline mr-2 h-8 w-8 text-pink-600" />
            Time Options
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-pink-600">Short Meetings</CardTitle>
                <CardDescription>1-2 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <Clock className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Perfect for business events, social gatherings, or quick companionship needs.
                </p>
                <Badge variant="secondary">Most Popular</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-purple-600">Extended Sessions</CardTitle>
                <CardDescription>3-6 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Ideal for dinner dates, overnight companionship, or extended social events.
                </p>
                <Badge variant="outline">Premium</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-yellow-600">Overnight</CardTitle>
                <CardDescription>8+ hours</CardDescription>
              </CardHeader>
              <CardContent>
                <Clock className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Complete overnight companionship experience with full attention and care.
                </p>
                <Badge className="bg-yellow-600 text-white">Exclusive</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Information */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Book?</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Contact us to discuss rates and availability. Our team will provide you with 
            detailed pricing based on your specific requirements and preferences.
          </p>
          
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Factors Affecting Pricing</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div>• Duration of service</div>
              <div>• Type of companion</div>
              <div>• Location preferences</div>
              <div>• Special requirements</div>
              <div>• Time of booking</div>
              <div>• Package inclusions</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
              <Phone className="mr-2 h-5 w-5" />
              Call for Rates: +91 XXXXX XXXXX
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Inquiry
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Premium Service at Transparent Rates
          </h2>
          <p className="text-xl mb-8">
            No hidden charges, no advance payments, and no surprises. 
            Get exactly what you pay for with our premium companionship services.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-8 text-sm">
            <div className="flex items-center justify-center">
              <Shield className="h-5 w-5 mr-2" />
              100% Genuine Service
            </div>
            <div className="flex items-center justify-center">
              <Clock className="h-5 w-5 mr-2" />
              24/7 Availability
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Payment After Service
            </div>
          </div>
          <Button size="lg" variant="secondary" className="bg-white text-pink-600 hover:bg-gray-100">
            <MessageCircle className="mr-2 h-5 w-5" />
            Get Custom Quote
          </Button>
        </div>
      </section>
    </div>
  )
}