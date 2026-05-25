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
    canonical: "https://chima-konveksi.vercel.app/services",
  },
  openGraph: {
    title: "Layanan Konveksi & Vendor Garment Premium | Chima Konveksi",
    description: "Jasa konveksi & vendor garment di Bandung. Spesialis jahit kaos distro, hoodie custom premium, kemeja seragam PDL, serta merchandise sablon berkualitas tinggi.",
    url: "https://chima-konveksi.vercel.app/services",
    type: "website",
  },
};

export default function Services() {
  return <ServicesContent />;
}
