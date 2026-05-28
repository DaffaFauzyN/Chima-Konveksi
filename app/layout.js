import "./globals.css";
import { plusJakartaSans } from "./fonts";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata = {
  metadataBase: new URL("https://www.chimakonveksi.my.id"),
  title: {
    default: "Chima Konveksi | Jasa Konveksi Kaos, Hoodie & Seragam Bandung",
    template: "%s | Chima Konveksi Bandung",
  },
  description: "Solusi produksi fashion brand dan seragam instansi dengan standar kualitas tinggi dan garansi tepat waktu di Bandung.",
  keywords: [
    "konveksi bandung",
    "jasa konveksi",
    "vendor garment bandung",
    "konveksi kaos bandung",
    "konveksi hoodie bandung",
    "konveksi seragam bandung",
    "produksi pakaian custom",
    "chima konveksi",
  ],
  alternates: {
    languages: {
      "id": "https://www.chimakonveksi.my.id",
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
  },
  openGraph: {
    type: "website",
    siteName: "Chima Konveksi",
    locale: "id_ID",
      images: [
        {
          url: "/case-study-featured.png",
          width: 1200,
          height: 630,
          alt: "Chima Konveksi Bandung - Jasa Konveksi Kaos, Hoodie & Seragam Custom",
        },
      ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@chimakonveksi",
    images: ["/case-study-featured.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} antialiased scroll-smooth`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-white font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Suspense fallback={null}>
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        </Suspense>
      </body>
    </html>
  );
}
