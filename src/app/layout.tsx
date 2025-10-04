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
    template: '%s | hyderabadescort - Premium Escort Services',
    default: 'hyderabadescort - Premium Escort Services | VIP Call Girls & High Profile Models Hyderabad',
  },
  description: 'hyderabadescort offers premium escort services in Hyderabad with VIP call girls, independent models, and high-profile companions. Bold, edgy, and irresistibly sexy women for unforgettable moments. 24/7 available.',
  keywords: [
    'hyderabadescort',
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
  authors: [{ name: 'hyderabadescort - Premium Escort Services' }],
  creator: 'hyderabadescort - Premium Escort Services',
  publisher: 'hyderabadescort - Premium Escort Services',
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
    title: 'hyderabadescort - Premium Escort Services | VIP Call Girls & High Profile Models Hyderabad',
    description: 'hyderabadescort offers premium escort services in Hyderabad. Bold, edgy, and irresistibly sexy women for unforgettable moments of passion and confidence.',
    siteName: 'hyderabadescort - Premium Escort Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'hyderabadescort - Premium Escort Services',
    description: 'Bold, edgy, and irresistibly sexy women for unforgettable moments. Premium escort services in Hyderabad.',
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'dark';
                  if (theme === 'system') {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.classList.add(theme);
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "hyderabadescort - Premium Escort Services",
              "description": "hyderabadescort offers premium escort services in Hyderabad. Bold, edgy, and irresistibly sexy women for unforgettable moments of passion and confidence.",
              "url": "https://hyderabadescort.vip",
              "telephone": "+91-9876543210",
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
        <ThemeProvider>
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
