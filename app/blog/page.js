import BlogContent from "./BlogContent";

export const metadata = {
  title: "Blog Konveksi & Vendor Garment | Tips & Pandangan Industri",
  description: "Baca artikel dan panduan seputar industri konveksi di Bandung. Tips memilih bahan, teknik sablon, estimasi biaya produksi, dan cara membangun brand fashion.",
  keywords: [
    "blog konveksi bandung",
    "tips memilih bahan kaos",
    "perbedaan sablon plastisol dtf",
    "biaya produksi seragam kantor",
    "panduan konveksi distro",
  ],
  alternates: {
    canonical: "https://chima-konveksi.vercel.app/blog",
  },
  openGraph: {
    title: "Blog Konveksi & Vendor Garment | Chima Konveksi Bandung",
    description: "Tips memilih bahan, teknik sablon, estimasi biaya produksi, dan cara membangun brand fashion.",
    url: "https://chima-konveksi.vercel.app/blog",
    type: "website",
  },
};

export default function Blog() {
  return <BlogContent />;
}
