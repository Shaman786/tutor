import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhatsAppWidget from "@/components/layout/whatsapp-widget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Premium Hyderabad Escort Service',
    default: 'Premium Hyderabad Escort Service | VIP Call Girls & High Profile Models',
  },
  description: 'Premium escort service in Hyderabad offering VIP call girls, independent models, and high-profile companions. 24/7 available, safe, discreet, and professional service across all areas.',
  keywords: [
    'hyderabad escort service',
    'vip call girls hyderabad',
    'high profile escorts',
    'independent models hyderabad',
    'premium escort service',
    'hyderabad call girls',
    'escort service banjara hills',
    'gachibowli escorts',
    'madhapur call girls',
    'hitech city escorts'
  ],
  authors: [{ name: 'Premium Hyderabad Escort Service' }],
  creator: 'Premium Hyderabad Escort Service',
  publisher: 'Premium Hyderabad Escort Service',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hyderabadescort.vip'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hyderabadescort.vip',
    title: 'Premium Hyderabad Escort Service | VIP Call Girls & High Profile Models',
    description: 'Premium escort service in Hyderabad offering VIP call girls, independent models, and high-profile companions. Available 24/7.',
    siteName: 'Premium Hyderabad Escort Service',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Hyderabad Escort Service',
    description: 'Premium escort service in Hyderabad offering VIP call girls and high-profile companions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Premium Hyderabad Escort Service",
              "description": "Premium escort service in Hyderabad offering VIP call girls, independent models, and high-profile companions.",
              "url": "https://hyderabadescort.vip",
              "telephone": "+91-XXXXX-XXXXX",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "17.3850",
                "longitude": "78.4867"
              },
              "openingHours": "Mo-Su 00:00-23:59",
              "priceRange": "$$$",
              "areaServed": [
                "Hyderabad",
                "Banjara Hills",
                "Gachibowli",
                "Madhapur",
                "Hitech City",
                "Kondapur"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <WhatsAppWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
