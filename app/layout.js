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
  alternates: {
    languages: {
      "id": "https://www.chimakonveksi.my.id",
    },
  },
  // Ganti dengan meta tag dari Google Search Console (metode HTML tag)
  // verification: { google: "xxxxxxxxxxx" },
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
