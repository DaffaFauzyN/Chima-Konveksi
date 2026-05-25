import AboutContent from "./AboutContent";

export const metadata = {
  title: "Tentang Kami | Vendor Garment Kualitas Ekspor",
  description: "Pelajari sejarah Chima Konveksi, workshop garment spesialis di Bandung yang berdedikasi pada jaminan kualitas jahit premium sejak 2008.",
  keywords: [
    "sejarah chima konveksi",
    "vendor garment bandung",
    "workshop konveksi bandung",
    "konveksi bandung terpercaya",
  ],
  alternates: {
    canonical: "https://chima-konveksi.vercel.app/about",
  },
  openGraph: {
    title: "Tentang Kami | Chima Konveksi - Vendor Garment Kualitas Ekspor",
    description: "Pelajari sejarah Chima Konveksi, workshop garment spesialis di Bandung yang berdedikasi pada jaminan kualitas jahit premium sejak 2008.",
    url: "https://chima-konveksi.vercel.app/about",
    type: "website",
  },
};

export default function About() {
  return <AboutContent />;
}
