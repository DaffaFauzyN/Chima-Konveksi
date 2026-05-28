import LandingContent from "./LandingContent";

export const metadata = {
  title: "Konveksi Hoodie Premium Bandung | Jasa Pembuatan Jaket & Hoodie Custom",
  description: "Konveksi hoodie premium di Bandung. Spesialis produksi jaket hoodie custom, crewneck, zip hoodie untuk brand distro dan perusahaan. Bahan fleece heavy premium.",
  keywords: [
    "konveksi hoodie bandung",
    "jasa pembuatan hoodie custom",
    "vendor jaket hoodie premium",
    "produksi crewneck bandung",
    "hoodie distro custom bandung",
    "konveksi jaket hoodie bandung",
  ],
  alternates: {
    canonical: "https://www.chimakonveksi.my.id/konveksi-hoodie-premium",
  },
  openGraph: {
    title: "Konveksi Hoodie Premium Bandung | Chima Konveksi",
    description: "Jasa produksi hoodie custom dan jaket premium di Bandung untuk brand distro dan korporat.",
    url: "https://www.chimakonveksi.my.id/konveksi-hoodie-premium",
    type: "website",
  },
};

export default function KonveksiHoodie() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Konveksi Hoodie Premium Bandung",
    "description": "Jasa produksi hoodie custom dan jaket premium di Bandung untuk brand distro dan korporat.",
    "brand": { "@type": "Brand", "name": "Chima Konveksi" },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "IDR",
      "lowPrice": "85000",
      "highPrice": "250000",
      "offerCount": "500+",
      "availability": "https://schema.org/InStock",
      "url": "https://www.chimakonveksi.my.id/konveksi-hoodie-premium"
    },
    "areaServed": { "@type": "City", "name": "Bandung" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LandingContent />
    </>
  );
}
