import LandingContent from "./LandingContent";

export const metadata = {
  title: "Produksi Kaos Custom Bandung | Jasa Konveksi Kaos Distro & Brand",
  description: "Jasa produksi kaos custom di Bandung. Melayani pembuatan kaos distro, kaos sablon, kaos branding untuk event, dan kaos seragam. Kualitas premium, harga pabrik.",
  keywords: [
    "produksi kaos custom bandung",
    "jasa pembuatan kaos distro",
    "konveksi kaos sablon bandung",
    "vendor kaos custom bandung",
    "tempat bikin kaos distro bandung",
    "kaos printing custom bandung",
  ],
  alternates: {
    canonical: "https://www.chimakonveksi.my.id/produksi-kaos-custom",
  },
  openGraph: {
    title: "Produksi Kaos Custom Bandung | Chima Konveksi",
    description: "Jasa produksi kaos custom di Bandung dengan kualitas premium. Kaos distro, sablon, branding, dan seragam.",
    url: "https://www.chimakonveksi.my.id/produksi-kaos-custom",
    type: "website",
  },
};

export default function ProduksiKaos() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Produksi Kaos Custom Bandung",
    "description": "Jasa produksi kaos custom di Bandung. Melayani pembuatan kaos distro, kaos sablon, kaos branding untuk event, dan kaos seragam.",
    "brand": { "@type": "Brand", "name": "Chima Konveksi" },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "IDR",
      "lowPrice": "30000",
      "highPrice": "120000",
      "offerCount": "1000+",
      "availability": "https://schema.org/InStock",
      "url": "https://www.chimakonveksi.my.id/produksi-kaos-custom"
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
