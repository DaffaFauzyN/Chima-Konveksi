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
    canonical: "https://chima-konveksi.vercel.app/vendor-seragam-kantor",
  },
  openGraph: {
    title: "Vendor Seragam Kantor Bandung | Chima Konveksi",
    description: "Jasa pembuatan seragam kantor dan korporat di Bandung. Kualitas premium dengan bordir logo presisi.",
    url: "https://chima-konveksi.vercel.app/vendor-seragam-kantor",
    type: "website",
  },
};

export default function VendorSeragam() {
  return <LandingContent />;
}
