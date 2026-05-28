import LandingContent from "./LandingContent";

export const metadata = {
  title: "Sablon Kaos Bandung | Jasa Sablon Kaos Terpercaya Plastisol DTF Rubber",
  description: "Jasa sablon kaos di Bandung. Melayani sablon plastisol, rubber ink, DTF printing untuk kaos distro, merchandise event, dan seragam. Kualitas terjamin.",
  keywords: [
    "sablon kaos bandung",
    "jasa sablon kaos bandung",
    "sablon plastisol bandung",
    "sablon dtf bandung",
    "tempat sablon kaos bandung",
    "sablon kaos distro bandung",
    "vendor sablon bandung",
  ],
  alternates: {
    canonical: "https://www.chimakonveksi.my.id/sablon-kaos-bandung",
  },
  openGraph: {
    title: "Sablon Kaos Bandung | Chima Konveksi",
    description: "Jasa sablon kaos di Bandung. Plastisol, Rubber, DTF. Kualitas ekspor untuk brand distro dan merchandise.",
    url: "https://www.chimakonveksi.my.id/sablon-kaos-bandung",
    type: "website",
  },
};

export default function SablonKaos() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Sablon Kaos Bandung",
    "description": "Jasa sablon kaos di Bandung. Melayani sablon plastisol, rubber ink, DTF printing untuk kaos distro, merchandise event, dan seragam.",
    "brand": { "@type": "Brand", "name": "Chima Konveksi" },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "IDR",
      "lowPrice": "5000",
      "highPrice": "25000",
      "offerCount": "5000+",
      "availability": "https://schema.org/InStock",
      "url": "https://www.chimakonveksi.my.id/sablon-kaos-bandung"
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
