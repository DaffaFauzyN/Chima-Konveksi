import LandingContent from "./LandingContent";

export const metadata = {
  title: "Vendor Seragam Kantor Bandung | Jasa Pembuatan Seragam Perusahaan",
  description: "Vendor seragam kantor dan korporat di Bandung. Spesialis produksi polo shirt, kemeja PDL, jaket seragam dengan bordir logo presisi tinggi.",
  keywords: [
    "vendor seragam kantor bandung",
    "jasa pembuatan seragam perusahaan",
    "konveksi seragam korporat bandung",
    "polo shirt custom bandung",
    "seragam PDL perusahaan",
    "vendor seragam kerja bandung",
  ],
  alternates: {
    canonical: "https://www.chimakonveksi.my.id/vendor-seragam-kantor",
  },
  openGraph: {
    title: "Vendor Seragam Kantor Bandung | Chima Konveksi",
    description: "Jasa pembuatan seragam kantor dan korporat di Bandung. Kualitas premium dengan bordir logo presisi.",
    url: "https://www.chimakonveksi.my.id/vendor-seragam-kantor",
    type: "website",
  },
};

export default function VendorSeragam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Vendor Seragam Kantor Bandung",
    "description": "Jasa pembuatan seragam kantor dan korporat di Bandung. Polo shirt, kemeja PDL, jaket seragam dengan bordir logo presisi.",
    "brand": { "@type": "Brand", "name": "Chima Konveksi" },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "IDR",
      "lowPrice": "65000",
      "highPrice": "250000",
      "offerCount": "500+",
      "availability": "https://schema.org/InStock",
      "url": "https://www.chimakonveksi.my.id/vendor-seragam-kantor"
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
