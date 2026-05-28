import ServicesContent from "./ServicesContent";

export const metadata = {
  title: "Layanan Konveksi & Vendor Garment Premium",
  description: "Jasa konveksi & vendor garment di Bandung. Spesialis jahit kaos distro, hoodie custom premium, kemeja seragam PDL, serta merchandise sablon berkualitas tinggi.",
  keywords: [
    "layanan konveksi bandung",
    "vendor garment bandung",
    "jasa konveksi kaos distro",
    "konveksi hoodie custom",
    "vendor seragam kantor",
    "sablon kaos bandung",
  ],
  alternates: {
    canonical: "https://www.chimakonveksi.my.id/services",
  },
  openGraph: {
    title: "Layanan Konveksi & Vendor Garment Premium | Chima Konveksi",
    description: "Jasa konveksi & vendor garment di Bandung. Spesialis jahit kaos distro, hoodie custom premium, kemeja seragam PDL, serta merchandise sablon berkualitas tinggi.",
    url: "https://www.chimakonveksi.my.id/services",
    type: "website",
  },
};

export default function Services() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Apa saja layanan konveksi yang tersedia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kami melayani produksi fashion brand (kaos distro, hoodie, jaket), seragam korporat (polo shirt, kemeja PDL, jaket), merchandise event, serta jasa sablon plastisol, rubber, dan DTF."
        }
      },
      {
        "@type": "Question",
        "name": "Berapa minimum order untuk produksi fashion brand?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MOQ standar untuk fashion brand adalah 24 pcs per desain. Untuk project korporat dan seragam, kami menerima jumlah berapapun dengan negosiasi terlebih dahulu."
        }
      },
      {
        "@type": "Question",
        "name": "Apakah Chima Konveksi menerima pesanan dari luar kota?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ya, kami melayani pesanan dari seluruh Indonesia. Kami memiliki jaringan logistik yang handal untuk pengiriman ke berbagai wilayah di Indonesia."
        }
      }
    ]
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <ServicesContent />
    </>
  );
}
