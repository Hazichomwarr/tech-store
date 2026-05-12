import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BUSINESS_WHATSAPP } from "@/lib/businessInfo";
import Navbar from "./_components/layout/Navbar";

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
    default: "HSA Electronics | Phones, TVs & Tech Store",
    template: "%s | HSA Electronics",
  },

  description:
    "Shop phones, TVs, speakers, car audio, accessories, repairs, and more at HSA Electronics. Your local destination for affordable tech and reliable service.",

  keywords: [
    "HSA Electronics",
    "electronics store",
    "phone repair",
    "bluetooth speakers",
    "TV store",
    "car audio",
    "tech accessories",
    "headphones",
    "laptops",
    "electronics near me",
    "tech shop",
  ],

  authors: [{ name: "HSA Electronics" }],

  creator: "HSA Electronics",

  openGraph: {
    title: "HSA Electronics | Your Neighborhood Tech Plug",
    description:
      "Phones, gaming, TVs, speakers, repairs, accessories & more — all in one spot.",
    url: "https://your-domain.com",
    siteName: "HSA Electronics",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HSA Electronics Store",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "HSA Electronics",
    description: "Affordable tech, repairs, gaming, audio, TVs & more.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}

        <a
          href={BUSINESS_WHATSAPP}
          className="fixed bottom-3 right-3 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg light"
          target="_blank"
        >
          Chat on WhatsApp 💬
        </a>
      </body>
    </html>
  );
}
