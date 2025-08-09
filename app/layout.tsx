import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stackpinnacle.com"),
  title: {
    default: "Stack Pinnacle — Modern IT Services & Custom Software",
    template: "%s | Stack Pinnacle",
  },
  description:
    "Stack Pinnacle delivers end‑to‑end IT services: cloud, cybersecurity, custom software, data analytics, and managed infrastructure for growth‑minded teams.",
  keywords: [
    "IT services",
    "software development",
    "cloud migration",
    "cybersecurity",
    "data analytics",
    "managed services",
    "DevOps",
    "infrastructure",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://stackpinnacle.com/",
    title: "Stack Pinnacle — Modern IT Services & Custom Software",
    description:
      "Cloud, cybersecurity, custom software, analytics, and managed IT to accelerate your business.",
    siteName: "Stack Pinnacle",
    images: [
      {
        url: "/stack-pinnacle-logo-no-background.png",
        width: 1200,
        height: 630,
        alt: "Stack Pinnacle Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@stackpinnacle",
    creator: "@stackpinnacle",
    title: "Stack Pinnacle — Modern IT Services & Custom Software",
    description:
      "Cloud, cybersecurity, custom software, analytics, and managed IT to accelerate your business.",
    images: [
      "/stack-pinnacle-logo-no-background.png",
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/stack-pinnacle-logo-no-background.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Stack Pinnacle",
              url: "https://stackpinnacle.com",
              logo: "https://stackpinnacle.com/stack-pinnacle-logo-no-background.png",
              sameAs: [
                "https://www.linkedin.com/company/stack-pinnacle",
                "https://github.com/stack-pinnacle",
                "https://x.com/stackpinnacle",
              ],
              description:
                "Modern IT services: cloud, cybersecurity, custom software, data analytics, and managed infrastructure.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Silicon Valley",
                addressRegion: "CA",
                postalCode: "94043",
                addressCountry: "US",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+1-123-456-7890",
                  contactType: "sales",
                  email: "info@stackpinnacle.com",
                  areaServed: "US",
                  availableLanguage: ["English"],
                },
              ],
              makesOffer: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud Solutions" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cybersecurity" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Software Development" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Data Analytics" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Managed Infrastructure" } },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
