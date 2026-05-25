import PortfolioContent from "./PortfolioContent";

export const metadata = {
  title: "Portfolio Hasil Produksi | Vendor Garment Berkualitas",
  description: "Lihat portofolio produksi garment Chima Konveksi. Bukti kualitas jahitan premium untuk kemeja korporat, jaket hoodie distro, kaos sablon event, dan celana custom.",
  keywords: [
    "portfolio chima konveksi",
    "hasil produksi konveksi bandung",
    "contoh jahitan kaos distro",
    "custom hoodie premium",
    "vendor seragam korporat",
  ],
  alternates: {
    canonical: "https://chima-konveksi.vercel.app/portfolio",
  },
  openGraph: {
    title: "Portfolio Hasil Produksi | Chima Konveksi",
    description: "Lihat portofolio produksi garment Chima Konveksi. Bukti kualitas jahitan premium untuk kemeja korporat, jaket hoodie distro, kaos sablon event, dan celana custom.",
    url: "https://chima-konveksi.vercel.app/portfolio",
    type: "website",
  },
};

export default function Portfolio() {
  return <PortfolioContent />;
}
