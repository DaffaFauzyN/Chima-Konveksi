import HomeContent from "./HomeContent";

export const metadata = {
  title: "Chima Konveksi Bandung | Jasa Konveksi Kaos, Hoodie & Seragam Custom",
  description: "Vendor garment & jasa konveksi premium di Bandung sejak 2008. Spesialis produksi kaos distro, hoodie custom, seragam kantor, sablon & pakaian custom kualitas ekspor dengan garansi tepat waktu.",
  keywords: [
    "konveksi kaos bandung",
    "jasa konveksi bandung",
    "vendor garment bandung",
    "hoodie custom bandung",
    "konveksi seragam bandung",
    "sablon kaos bandung",
    "chima konveksi",
    "produksi pakaian custom"
  ],
  alternates: {
    canonical: "https://www.chimakonveksi.my.id",
  },
  openGraph: {
    title: "Chima Konveksi Bandung | Jasa Konveksi Kaos, Hoodie & Seragam Custom",
    description: "Vendor garment & jasa konveksi premium di Bandung sejak 2008. Spesialis produksi kaos distro, hoodie custom, seragam kantor, sablon & pakaian custom.",
    url: "https://www.chimakonveksi.my.id",
    siteName: "Chima Konveksi",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://www.chimakonveksi.my.id/case-study-featured.png",
        width: 1200,
        height: 630,
        alt: "Chima Konveksi Bandung",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chima Konveksi Bandung | Jasa Konveksi Kaos, Hoodie & Seragam Custom",
    description: "Vendor garment & jasa konveksi premium di Bandung sejak 2008. Spesialis produksi kaos distro, hoodie custom, seragam kantor, sablon & pakaian custom.",
    images: ["https://www.chimakonveksi.my.id/case-study-featured.png"],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Chima Konveksi",
    "image": "https://www.chimakonveksi.my.id/case-study-featured.png",
    "@id": "https://www.chimakonveksi.my.id/#localbusiness",
    "url": "https://www.chimakonveksi.my.id",
    "telephone": "+6285520784930",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Dirgantara III, Gempolsari",
      "addressLocality": "Bandung",
      "addressRegion": "Jawa Barat",
      "postalCode": "40215",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.914744,
      "longitude": 107.556942
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://wa.me/6285520784930"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeContent />
    </>
  );
}
